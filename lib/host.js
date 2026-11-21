import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { apply as applySkillsHost } from './skills-host.js';

export const name = 'dsh-codex-sidebar';
export const inject = ['profileContext'];
export async function apply(ctx) {
  try {
    let Remote, TypertRemoteService;
    try {
      const require = createRequire(ctx.profileContext.installAnchor);
      const mod = await import(pathToFileURL(require.resolve('@deepseek-ai/dsh-typert-protocol')).href);
      Remote = mod.Remote;
      TypertRemoteService = mod.TypertRemoteService;
    } catch (e1) {
      try {
        const mod = await import('@deepseek-ai/dsh-typert-protocol');
        Remote = mod.Remote;
        TypertRemoteService = mod.TypertRemoteService;
      } catch (e2) {
        console.error('[dsh-codex-sidebar] cannot resolve @deepseek-ai/dsh-typert-protocol:', e1?.message, e2?.message);
      }
    }
    if (Remote && TypertRemoteService) {
      applySkillsHost(ctx, { Remote, TypertRemoteService });
    }
  } catch (e) {
    console.error('[dsh-codex-sidebar] failed to mount skills host service:', e);
  }
}
