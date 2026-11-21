const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync(`${__dirname}/lib/client.js`, 'utf8');
const start = source.indexOf('function skillScopeOf(ctx)');
const end = source.indexOf('\nfunction groupSkills(', start);
assert(start >= 0 && end > start);
const sandbox = {
  console: { warn() {} },
  createSnapshotStore(initial) { let value = initial; return { getSnapshot: () => value, set: next => { value = next; } }; },
  unwrapRemote(value) { if (value && value.ok === false) throw new Error(value.error || 'remote failure'); return value?.ok === true ? value.value : value; },
  draftFailureText(error) { return error?.message || String(error); }
};
vm.runInNewContext(`${source.slice(start, end)}\nthis.create = createSkillsController;`, sandbox);
function fixture(session = false, nativeList) {
  let snapshot = { ids: ['unrelated'], byId: { unrelated: { retainedBy: { mainView: session ? 1 : 0 }, cwd: '/workspace' } } };
  const ctx = { sessions: { list: { getSnapshot: () => snapshot } }, workspaces: { list: { getSnapshot: () => ({ items: [] }) } }, remote: { skills: nativeList ? { list: nativeList } : undefined } };
  return { controller: sandbox.create(ctx), setSession(next) { snapshot = next; } };
}
(async () => {
  let calls = 0;
  const global = fixture(false, async () => { calls++; throw Error('wrong session'); }).controller;
  await global.load();
  assert.equal(calls, 0, 'do not select an unrelated session');
  assert.equal(global.store.getSnapshot().phase, 'error');
  assert.match(global.store.getSnapshot().error, /没有可用会话/);
  const empty = fixture(true, async () => { calls++; throw Error('must not fall back'); }).controller;
  empty.connect({ catalog: async () => ({ skills: [], complete: true }) });
  await empty.load();
  assert.equal(empty.store.getSnapshot().phase, 'ready');
  assert.equal(empty.store.getSnapshot().skills.length, 0);
  assert.equal(calls, 0, 'empty valid catalog is success');
  let fail = false;
  const prior = fixture(true).controller;
  prior.connect({ catalog: async () => { if (fail) throw Error('offline'); return { skills: [{ name: 'a', source: 'bundled' }], complete: true }; } });
  await prior.load(); fail = true; await prior.load();
  assert.equal(prior.store.getSnapshot().phase, 'ready');
  assert.equal(prior.store.getSnapshot().skills[0].name, 'a');
  assert.match(prior.store.getSnapshot().error, /offline/);
  const native = fixture(true, async ({ sessionId }) => { assert.equal(sessionId, 'unrelated'); return { ok: true, value: { skills: [{ name: 'built', path: 'C:/Users/name/builtin/foo' }, { name: 'known', source: 'bundled' }] } }; }).controller;
  await native.load();
  assert.equal(native.store.getSnapshot().skills[0].source, 'unknown');
  assert.equal(native.store.getSnapshot().skills[1].source, 'bundled');
  assert.equal(native.store.getSnapshot().skills[1].path, undefined);
  await assert.rejects(native.content({ name: 'built', description: 'not a body' }, {}), /正文服务不可用/);
  native.connect({ content: async () => ({ name: 'built', content: '# Real body' }) });
  assert.equal((await native.content({ name: 'built' }, {})).content, '# Real body');
  native.connect({ content: async () => null });
  assert.equal(await native.content({ name: 'gone' }, {}), null);
  const scoped = fixture(true);
  let resolveOld;
  scoped.controller.connect({ catalog: request => request.sessionId === 'unrelated'
    ? new Promise(resolve => { resolveOld = resolve; })
    : Promise.resolve({ skills: [{ name: 'new' }], complete: true }) });
  const oldLoad = scoped.controller.load();
  scoped.setSession({ ids: ['new-session'], byId: { 'new-session': { retainedBy: { mainView: 1 }, cwd: '/other' } } });
  await scoped.controller.load();
  resolveOld({ skills: [{ name: 'stale' }], complete: true });
  await oldLoad;
  assert.equal(scoped.controller.store.getSnapshot().skills[0].name, 'new', 'late response cannot overwrite another session');
  scoped.controller.connect({ catalog: async () => { throw Error('new scope offline'); } });
  scoped.setSession({ ids: ['third'], byId: { third: { retainedBy: { mainView: 1 }, cwd: '/third' } } });
  await scoped.controller.load();
  assert.equal(scoped.controller.store.getSnapshot().phase, 'error');
  assert.equal(scoped.controller.store.getSnapshot().skills.length, 0, 'do not retain a different session catalog');
  console.log('skills controller regression tests passed');
})().catch(error => { console.error(error); process.exitCode = 1; });
