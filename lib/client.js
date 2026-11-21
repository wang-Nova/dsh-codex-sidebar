window.__ModuleLoader__.load({
  id: "dsh-codex-sidebar",
  factory: function(require) {
    'use strict';
    const CSS_TEXT = "body[data-dsh-codex-sidebar] {\n  /* ---- 间距 ---- */\n  --cx-spacing: 4px;\n  --cx-space-1: 4px;\n  --cx-space-2: 8px;\n  --cx-space-3: 12px;\n  --cx-space-4: 16px;\n  --cx-space-5: 20px;\n  --cx-space-6: 24px;\n  --cx-space-8: 32px;\n\n  /* ---- 圆角阶梯 ---- */\n  --cx-radius-2xs: 2px;\n  --cx-radius-xs: 4px;\n  --cx-radius-sm: 6px;\n  --cx-radius-md: 8px;\n  --cx-radius-lg: 10px;\n  --cx-radius-xl: 12px;\n  --cx-radius-2xl: 16px;\n  --cx-radius-3xl: 20px;\n  --cx-radius-4xl: 24px;\n  --cx-radius-composer: 24px;\n  --cx-radius-full: 9999px;\n\n  /* ---- 暗色面（第 134 轮按新版 Codex 默认主题：导航/顶栏 #0f0f0f、侧栏 #101010、对话区 #111111） ---- */\n  --cx-window: #0f0f0f;\n  --cx-sidebar: #101010;\n  --cx-surface: #111111;\n  --cx-thread: #171717;\n  --cx-nested: #212121;\n  --cx-elevated: #282828;\n  --cx-summary: #2d2d2d;\n  --cx-hover: rgba(255, 255, 255, 0.045);\n  --cx-active: rgba(255, 255, 255, 0.08);\n\n  /* ---- 边框 ---- */\n  --cx-border-l1: rgba(255, 255, 255, 0.08);\n  --cx-border-l2: rgba(255, 255, 255, 0.04);\n  --cx-border-l3: rgba(255, 255, 255, 0.16);\n  --cx-border-strong: rgba(255, 255, 255, 0.16);\n  /* 侧栏分割线：静态按 2026-11-06 Codex 截图取 #212121；悬停/拖拽保留原加深加粗。 */\n  --cx-sidebar-divider: #212121;\n  --cx-sidebar-divider-hover: #535353;\n  /* 外框：Codex 截图在 150% 缩放下为 1 设备像素 #191919；0.667px × 1.5 = 1 设备像素。 */\n  --cx-frame-line: #191919;\n  --cx-frame-line-width: 0.667px;\n  --cx-frame-radius: 16px;\n\n  /* ---- 文本 ---- */\n  --cx-text: #fcfcfc;\n  --cx-text-2: rgba(255, 255, 255, 0.7);\n  --cx-text-3: rgba(255, 255, 255, 0.5);\n  --cx-text-4: rgba(255, 255, 255, 0.32);\n  --cx-text-inverse: #0d0d0d;\n\n  /* ---- 第 134 轮侧栏/导航语义色（只落在自有侧栏与 rail，不外扩菜单） ---- */\n  --cx-nav-icon: #7f7f7f;\n  --cx-sidebar-text: #d8d8d8;\n  --cx-sidebar-muted: #7f7f7f;\n  --cx-sidebar-selected: #212121;\n\n  /* ---- 强调 / 状态 ---- */\n  --cx-accent: #0285ff;\n  --cx-accent-soft: #339cff;\n  --cx-link: #9bc8f8;\n  --cx-focus: #339cff;\n  --cx-success: #40c977;\n  --cx-danger: #ff6764;\n  --cx-warning: #ff8549;\n  --cx-attention: #3a83f7;\n\n  /* ---- diff ---- */\n  --cx-diff-add-bg: rgba(64, 201, 119, 0.23);\n  --cx-diff-del-bg: rgba(255, 103, 100, 0.23);\n  --cx-diff-add-mark: #40c977;\n  --cx-diff-del-mark: #ff6764;\n\n  /* ---- 字体 ---- */\n  --cx-font-sans: -apple-system, system-ui, \"Segoe UI\", sans-serif;\n  --cx-font-mono: ui-monospace, \"SFMono-Regular\", \"SF Mono\", Menlo, Consolas, \"Liberation Mono\", monospace;\n\n  /* ---- 字号 / 行高 ---- */\n  --cx-text-xs: 12px;\n  --cx-text-sm: 14px;\n  --cx-text-md: 16px;\n  --cx-text-lg: 18px;\n  --cx-leading-xs: 16px;\n  --cx-leading-sm: 22px;\n  --cx-leading-md: 24px;\n  --cx-leading-lg: 28px;\n\n  /* ---- 字重 ---- */\n  --cx-weight-regular: 400;\n  --cx-weight-medium: 500;\n  --cx-weight-semibold: 600;\n  --cx-weight-bold: 700;\n  --cx-weight-shell: 445; /* 外壳专用非标准字重 */\n\n  /* ---- 动效 ---- */\n  --cx-dur-fast: 120ms;\n  --cx-dur: 150ms;\n  --cx-dur-relaxed: 300ms;\n  --cx-ease: ease;\n  --cx-ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);\n  --cx-ease-scroll: cubic-bezier(0.22, 1, 0.36, 1);\n\n  /* ---- 布局几何 ----\n     以真实 Codex 窗口截图（1988×1292 @1.5x）实测回填：\n     侧栏 288、标题栏 44、输入栈 710，详见 02-开发日志 第 10 轮。 */\n  --cx-titlebar-h: 44px;\n  --cx-rail-w: 52px;\n  --cx-sidebar-w: 288px;\n  --cx-thread-max: 768px;\n  --cx-right-w: 667px;\n  --cx-header-h: 48px;\n  --cx-row-h: 30px;\n  --cx-control-h: 28px;\n  --cx-send-h: 32px;\n  --cx-composer-stack-w: 768px; /* 2026-10-25 用户截图：左右各 16px，卡片 736 */\n  --cx-composer-h: 98px;\n  --cx-picker-h: 38px;\n\n  /* ---- 输入区实测色（真实截图取色） ---- */\n  \n  \n\n  /* ---- 应用视口 ----\n     真实 DSH 窗口截图 1988×1292（Windows 150% 缩放）换算为 1325×861 CSS。\n     原型按此尺寸渲染，各栏占比才与真实界面一致（旧 1600 视口下主区偏宽）。 */\n  --cx-app-w: 1325px;\n  --cx-app-h: 861px;\n\n  /* ---- 推理强度选择器 ----\n     尺寸/颜色按用户真实 Codex 录屏帧实测（1992×1296 @1.503x）。 */\n  \n   /* 第 20 轮节点切换过渡，待用户验收 */\n  \n  \n  /* 第 23 轮按用户新设计口径增强流速，两个亮带错速运行。 */\n  \n  \n  \n  \n  /* 第 22 轮：新录屏 100/660/900/1120 帧取色，深底与两种柔亮色分层。 */\n  \n  \n  \n  \n  \n  \n  \n  /* 浮层/菜单底色：真实录屏帧取色 rgb(45,45,45) */\n  --cx-popover-fill: #2d2d2d;\n\n  /* ---- 阴影 ---- */\n  --cx-shadow-sm: 0 1px 2px -1px rgb(0 0 0 / 0.08);\n  --cx-shadow-md: 0 2px 4px -1px rgb(0 0 0 / 0.08);\n  --cx-shadow-lg: 0 4px 8px -2px rgb(0 0 0 / 0.1);\n  --cx-shadow-xl: 0 8px 16px -4px rgb(0 0 0 / 0.12);\n  --cx-shadow-2xl: 0 16px 32px -8px rgb(0 0 0 / 0.19);\n  \n\n  /* ---- z 轴 ---- */\n  --cx-z-ground: 0;\n  --cx-z-panel: 10;\n  --cx-z-floating: 20;\n  --cx-z-drawer: 40;\n  --cx-z-popover: 50;\n  --cx-z-overlay: 70;\n}\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] {\n  --cx-window: #f3f3f3;\n  --cx-sidebar: #fbfbfb;\n  --cx-surface: #fff;\n  --cx-thread: #fff;\n  --cx-nested: #f5f5f5;\n  --cx-elevated: #fff;\n  --cx-summary: #f3f3f3;\n  --cx-hover: rgba(0, 0, 0, 0.045);\n  --cx-active: rgba(0, 0, 0, 0.065);\n  --cx-border-l1: rgba(0, 0, 0, 0.12);\n  --cx-border-l2: rgba(0, 0, 0, 0.055);\n  --cx-border-l3: rgba(0, 0, 0, 0.18);\n  --cx-border-strong: rgba(0, 0, 0, 0.10);\n  --cx-sidebar-divider: #e9e9e9;\n  --cx-sidebar-divider-hover: #c6c6c6;\n  --cx-frame-line: #dedede;\n  --cx-text: #0d0d0d;\n  --cx-text-2: #505050;\n  --cx-text-3: #898989;\n  --cx-text-4: #ababab;\n  --cx-text-inverse: #fff;\n  --cx-nav-icon: #898989;\n  --cx-sidebar-text: #303030;\n  --cx-sidebar-muted: #898989;\n  --cx-sidebar-selected: #eee;\n  --cx-accent: #2b68cb;\n  --cx-accent-soft: #2b68cb;\n  --cx-link: #2867bc;\n  --cx-focus: #2b68cb;\n  --cx-success: #17834a;\n  --cx-danger: #c93634;\n  --cx-warning: #dd5512;\n  --cx-attention: #2b68cb;\n  --cx-diff-add-bg: rgba(64, 201, 119, 0.14);\n  --cx-diff-del-bg: rgba(255, 103, 100, 0.12);\n  --cx-diff-add-mark: #17834a;\n  --cx-diff-del-mark: #c93634;\n  \n  \n  \n  \n  \n  \n  --cx-popover-fill: #fff;\n  --cx-shadow-2xl: 0 8px 24px rgb(0 0 0 / 0.10);\n  \n}\n\n/* ============ 导航栏 ============ */\n.dsc-rail {\n  grid-area: rail;\n  position: relative;\n  z-index: 30;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  background: var(--cx-window);\n  border-right: 1px solid var(--cx-border-l2);\n}\n\n.dsc-rail__spacer { flex: 1; }\n\n.dsc-rail__item {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: var(--cx-radius-md);\n  color: var(--cx-nav-icon);\n  transition: background-color var(--cx-dur-fast) var(--cx-ease), color var(--cx-dur-fast) var(--cx-ease);\n}\n\n.dsc-rail__item:hover { background: var(--cx-hover); color: var(--cx-text); }\n\n.dsc-rail__item--active { background: var(--cx-active); color: var(--cx-text); }\n\n/* 插头先以浅灰 #efefef 统一描边，再整体降低透明度，避免相交线段叠色发亮。 */\n.dsc-rail__plugin-icon { color: #efefef; opacity: .5; stroke-width: 1.5; transition: opacity var(--cx-dur-fast) var(--cx-ease); }\n\n.dsc-rail__item:hover .dsc-rail__plugin-icon,\n.dsc-rail__item--active .dsc-rail__plugin-icon { opacity: 1; color: #fcfcfc; }\n\n.dsc-rail__item::after {\n  content: attr(data-tip);\n  position: absolute;\n  left: 44px;\n  top: 50%;\n  z-index: var(--cx-z-popover);\n  padding: 4px 8px;\n  border-radius: var(--cx-radius-sm);\n  border: 1px solid var(--cx-border-l1);\n  background: #2b2b2b;\n  color: var(--cx-text);\n  font-size: 12px;\n  line-height: 16px;\n  white-space: nowrap;\n  box-shadow: var(--cx-shadow-lg);\n  opacity: 0;\n  transform: translateY(-50%) translateX(-2px);\n  pointer-events: none;\n  transition: opacity var(--cx-dur-fast) var(--cx-ease), transform var(--cx-dur-fast) var(--cx-ease);\n}\n\n.dsc-rail__item:hover::after { opacity: 1; transform: translateY(-50%) translateX(0); }\n\n/* ============ 侧栏 ============ */\n.dsc-sidebar {\n  grid-area: sidebar;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 8px;\n  background: var(--cx-sidebar);\n  border-right: 1px solid var(--cx-border-l2);\n  overflow: hidden;\n}\n\n.dsc-sidebar__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 44px;\n  margin: -8px -8px 6px;\n  padding: 0 6px 0 10px;\n}\n\n.dsc-brand { display: flex; align-items: center; gap: 7px; }\n\n.dsc-brand__mark { display: block; height: 19px; width: auto; }\n\n.dsc-brand__wordmark {\n  font-size: 17px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--cx-sidebar-text);\n  line-height: 1;\n}\n\n.dsc-brand__badge {\n  font-size: 9px;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  line-height: 1;\n  padding: 3px 5px 2px;\n  border-radius: 3px;\n  background: var(--cx-text);\n  color: var(--cx-window);\n}\n\n.dsc-sidebar__header-actions { display: flex; align-items: center; gap: 2px; }\n\n.dsc-new-chat {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  height: 32px;\n  padding: 0 8px;\n  border-radius: var(--cx-radius-md);\n  font-size: 13px;\n  font-weight: var(--cx-weight-medium);\n  color: var(--cx-sidebar-text);\n  background: var(--cx-active);\n  transition: background-color var(--cx-dur-fast) var(--cx-ease);\n}\n\n.dsc-new-chat:hover { background: rgba(255, 255, 255, 0.12); }\n\n.dsc-new-chat kbd { margin-left: auto; font-size: 11px; color: var(--cx-sidebar-muted); }\n\n/* 浅色导航的插件线条保留原图形，深色提示仍为黑底白字。 */\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-rail__plugin-icon { color: #303030; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-rail__item--active .dsc-rail__plugin-icon { color: #0d0d0d; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-rail__item[data-tip]::after { background: #0d0d0d; color: #fff; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-new-chat:hover { background: rgba(0, 0, 0, .06); }\n\n/* 自有组件与公开 slot/region 锚点；外壳几何适配通过自有 data-dsc-* 标记集中处理。 */\n\n\n/* 整个三列外壳实际缩窄 52px，让宿主 ResizeObserver、右栏与拖拽使用同一可用宽度。\n   不能用 padding-left 代替：宿主测量的是 getBoundingClientRect().width。 */\nbody[data-dsh-codex-chrome] [data-dsc-frame] { margin-left: var(--cx-rail-w); width: calc(100% - var(--cx-rail-w)); }\n\n/* 全屏右栏原本按 100vw 展开；扣掉独立导航后，继续尊重宿主二级侧栏的真实宽度。 */\nhtml[data-windows-titlebar] body[data-dsh-codex-chrome] [data-dsc-frame] [data-sidebar-right-panel=\"fullscreen\"] { max-width: max(0px, calc(100vw - var(--cx-rail-w) - var(--dsh-windows-sidebar-width, 0px))); }\n\n/* 原 sidebar/settings 父级继续挂载以保留原生页面与子槽位所有权；只隐藏其旧外观。 */\nbody[data-dsh-codex-chrome] [data-slot=\"sidebar\"] { display: block !important; position: relative; width: 100%; height: 100%; visibility: hidden; }\n\n/* 独立导航轨与 288px 侧栏合计占去约 60px 对话列宽度，避免在标准窗口下误触发原生轮次导航条 @container (width<=900px) 隐藏阈值；仅在真正过窄（<= 760px）时隐藏。 */\n@container (width > 760px) {\n  body[data-dsh-codex-chrome] [data-dsc-center-column] div:has(+ div > div > [data-chat-flow]) > nav {\n    display: block;\n  }\n}\n\n.dsc-ui { font: 14px/22px var(--cx-font-sans); color: var(--cx-text); box-sizing: border-box; }\n\n.dsc-ui *, .dsc-ui *::before, .dsc-ui *::after { box-sizing: border-box; }\n\n.dsc-ui button, .dsc-ui input { font: inherit; color: inherit; }\n\n.dsc-ui button { border: 0; cursor: pointer; background: none; }\n\n.dsc-ui button:disabled { cursor: default; opacity: .45; }\n\n.dsc-ui button:focus-visible, .dsc-ui [role=slider]:focus-visible { outline: 2px solid var(--cx-focus); outline-offset: 2px; }\n\n.dsc-ui svg { flex: none; }\n\n.dsc-update-control { display: inline-flex; align-items: center; gap: 12px; -webkit-app-region: no-drag; }\n\n.dsc-update-download { display: inline-flex; align-items: center; gap: 8px; }\n\n.dsc-update-progress { display: block; width: 112px; height: 5px; overflow: hidden; border-radius: 999px; background: #ffffff1f; }\n\n.dsc-update-progress-fill { display: block; width: 100%; height: 100%; border-radius: inherit; background: #72b4ff; transform-origin: left; transition: transform 180ms ease; }\n\n.dsc-update-progress[data-indeterminate=true] .dsc-update-progress-fill { width: 32%; animation: dsc-update-download 1.2s ease-in-out infinite; }\n\n.dsc-update-progress-label { min-width: 34px; color: var(--cx-text-2); font-size: 12px; font-variant-numeric: tabular-nums; }\n\n@keyframes dsc-update-download { from { transform: translateX(-110%); } to { transform: translateX(410%); } }\n\n/* 社区版运行提醒：固定右下角，位于更新通知之上；窄窗不超出视口，复用弹层与文本 token。 */\n.dsc-community-notice { position: fixed; right: 24px; bottom: 24px; z-index: 10001; box-sizing: border-box; width: max-content; max-width: min(420px, calc(100vw - 48px)); padding: 12px 16px; border: 1px solid var(--cx-border-l1); border-radius: 14px; background: var(--cx-popover-fill); color: var(--cx-text); font-size: 13px; line-height: 20px; box-shadow: var(--cx-shadow-2xl); animation: dsc-pop-in 130ms ease both; -webkit-app-region: no-drag; }\n\n.dsc-community-notice-text { display: block; }\n\n@media (prefers-reduced-motion: reduce) { .dsc-community-notice { animation: none; } }\n\n/* 归档成功提示：顶部居中；入场 160ms，退场 1000ms（与 client.js ARCHIVE_NOTICE_FADE_MS 对应）。 */\n.dsc-ui.dsc-archive-notice { position: fixed; top: 40px; left: 50%; z-index: 10001; display: flex; align-items: center; gap: 8px; width: max-content; max-width: calc(100vw - 32px); padding: 7px 8px 7px 12px; border: 1px solid var(--cx-border-l1); border-radius: var(--cx-radius-lg); background: var(--cx-popover-fill); color: var(--cx-text); font-size: 13px; line-height: 18px; box-shadow: var(--cx-shadow-2xl); transform: translate(-50%, 0); animation: dsc-archive-notice-in 160ms ease both; -webkit-app-region: no-drag; }\n\n.dsc-ui.dsc-archive-notice[data-phase=leaving] { animation: dsc-archive-notice-out 1000ms ease both; }\n\n.dsc-archive-notice-body { display: flex; flex-direction: column; gap: 1px; min-width: 0; }\n\n.dsc-archive-notice-text { color: var(--cx-text); white-space: nowrap; }\n\n.dsc-archive-notice-error { color: var(--cx-danger); font-size: 12px; line-height: 17px; overflow-wrap: anywhere; }\n\n.dsc-ui .dsc-archive-notice-undo { display: inline-flex; align-items: center; flex: none; height: 24px; padding: 0 9px; border-radius: var(--cx-radius-sm); color: var(--cx-accent-soft); font-size: 13px; }\n\n.dsc-ui .dsc-archive-notice-undo:hover:not(:disabled) { background: var(--cx-active); color: var(--cx-text); }\n\n.dsc-ui .dsc-archive-notice-close { display: inline-flex; align-items: center; justify-content: center; flex: none; width: 24px; height: 24px; padding: 0; border-radius: var(--cx-radius-sm); color: var(--cx-text-3); }\n\n.dsc-ui .dsc-archive-notice-close:hover, .dsc-ui .dsc-archive-notice-close:focus-visible { background: var(--cx-hover); color: var(--cx-text); }\n\n@keyframes dsc-archive-notice-in { from { opacity: 0; transform: translate(-50%, -6px); } to { opacity: 1; transform: translate(-50%, 0); } }\n\n@keyframes dsc-archive-notice-out { from { opacity: 1; transform: translate(-50%, 0); } to { opacity: 0; transform: translate(-50%, -6px); } }\n\n@media (prefers-reduced-motion: reduce) { .dsc-ui.dsc-archive-notice, .dsc-ui.dsc-archive-notice[data-phase=leaving] { animation: none; } }\n\n.dsc-update-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; }\n\n.dsc-ui .dsc-update-close { display: grid; place-items: center; width: 24px; height: 24px; padding: 0; border-radius: 6px; color: var(--cx-text-2); }\n\n.dsc-update-close:hover { background: var(--cx-hover); color: var(--cx-text); }\n\n.dsc-update-message { margin: 14px 0 10px; font-weight: 500; }\n\n.dsc-update-message[data-state=update] { color: #72b4ff; }\n\n.dsc-update-message[data-state=error] { color: #ff8585; }\n\n.dsc-update-versions { display: grid; grid-template-columns: auto 1fr; gap: 4px 16px; margin: 0; font-size: 13px; }\n\n.dsc-update-versions dt { color: var(--cx-text-2); }\n\n.dsc-update-versions dd { margin: 0; text-align: right; overflow-wrap: anywhere; }\n\n.dsc-update-note { margin: 10px 0 0; color: var(--cx-text-2); font-size: 12px; line-height: 18px; overflow-wrap: anywhere; }\n\n.dsc-update-note > span { display: block; color: var(--cx-text-3); }\n\n.dsc-ui .dsc-update-retry { margin-top: 14px; padding: 5px 10px; border: 1px solid var(--cx-border-l3); border-radius: 7px; }\n\n.dsc-update-retry:hover { background: var(--cx-hover); }\n\n.dsc-update-spin { animation: dsc-update-spin .9s linear infinite; }\n\n@keyframes dsc-update-spin { to { transform: rotate(360deg); } }\n\n@media (prefers-reduced-motion: reduce) { .dsc-update-spin, .dsc-update-progress-fill { animation: none !important; transition: none; } }\n\n.dsc-proto-icon { display: inline-flex; align-items: center; justify-content: center; flex: none; line-height: 1; }\n\n.dsc-proto-icon svg { display: block; fill: none; stroke: currentColor; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }\n\n/* 同一内容 portal 到 body：常驻时跟随宿主列，退场与浮卡不受 0px 列裁剪。只动画透明度和位移。 */\n.dsc-sidebar-shell { visibility: hidden; position: fixed; z-index: 20; min-width: 0; min-height: 0; display: flex; opacity: 0; transform: translateX(-24px); pointer-events: none; transition: opacity 180ms ease, transform 240ms var(--cx-ease-out), visibility 0s 240ms; -webkit-app-region: no-drag; }\n\n.dsc-sidebar-shell[data-open=true] { visibility: visible; opacity: 1; transform: translateX(0); pointer-events: auto; transition: opacity 180ms ease, transform 260ms var(--cx-ease-out), visibility 0s; }\n\n.dsc-sidebar-shell[data-mode=docked] > .dsc-sidebar { border-top-left-radius: var(--cx-frame-radius); border-bottom-left-radius: var(--cx-frame-radius); border-right-color: transparent; corner-shape: round; }\n\n/* rc.2/rc.3 原生 DragHandle 的公开 data-side 保留指针捕获与宽度动作。\n   热区仍为原生 8px；抬到常驻侧栏 portal 之上，避免左半边被遮住。\n   只绘制伪元素，不增加占位；悬停/拖动用 transform 加粗，移出恢复。 */\nbody[data-dsh-codex-chrome] [data-dsc-frame] > [data-side=\"sidebar\"] { z-index: 21; }\n\nbody[data-dsh-codex-chrome] [data-dsc-frame] > [data-side=\"sidebar\"]::after { content: ''; position: absolute; top: 0; bottom: 0; left: calc(50% - 1px); width: 1px; background: var(--cx-sidebar-divider); transform: scaleX(1); transform-origin: right center; pointer-events: none; transition: background-color var(--cx-dur-fast) var(--cx-ease), transform var(--cx-dur-fast) var(--cx-ease); }\n\nbody[data-dsh-codex-chrome] [data-dsc-frame] > [data-side=\"sidebar\"]:is(:hover,[data-dragging])::after { background: var(--cx-sidebar-divider-hover); transform: scaleX(1.5); }\n\n@media (prefers-reduced-motion: reduce) {\n  body[data-dsh-codex-chrome] [data-dsc-frame] > [data-side=\"sidebar\"]::after { transition: none; }\n}\n\n.dsc-sidebar-shell[data-mode=floating] { z-index: 40; transform: translateX(-12px); transition: opacity 150ms ease, transform 180ms var(--cx-ease-out), visibility 0s 180ms; }\n\n.dsc-sidebar-shell[data-mode=floating][data-open=true] { transform: translateX(0); transition-delay: 0s; }\n\n.dsc-sidebar-shell[data-mode=floating]::before { content: ''; position: absolute; top: 0; bottom: 0; left: -12px; width: 12px; }\n\n.dsc-sidebar-shell[data-mode=floating] > .dsc-sidebar { --cx-sidebar: #2c2c2c; border: 1px solid var(--cx-border-l1); border-radius: 12px; box-shadow: 0 0 0 3px #18181880, 0 8px 28px #0005; }\n\n.dsc-sidebar-shell[data-mode=floating][data-open=true] > .dsc-sidebar { animation: dsc-sidebar-content-in 150ms var(--cx-ease-out) both; }\n\n@keyframes dsc-sidebar-content-in { from { opacity: 0; transform: translateX(-6px); } to { opacity: 1; transform: translateX(0); } }\n\n.dsc-independent-rail { visibility: visible; position: fixed; top: var(--dsh-frame-chrome-top, 0px); bottom: 0; left: 0; width: var(--cx-rail-w); z-index: 25; min-height: 0; padding-bottom: 56px; -webkit-app-region: no-drag; }\n\n/* 外框左缘由常驻 frame 的单条描边统一绘制；原生 1px 边框保留宽度但不再着色，避免出现第二条线。 */\nbody[data-dsh-codex-sidebar] .dsc-independent-rail { border-right-color: transparent; background-clip: padding-box; }\n\n.dsc-extension-navigation-anchor { flex: 1; align-self: stretch; min-height: 0; }\n\n/* 原生 panellist 继续负责图标注入、选中态、点击和卸载；只重排其可见区域。\n   位置来自自有轨道的剩余空间，超高时独立滚动，不覆盖底部齿轮。\n   Windows 原样式在 collapsed 时 display:none，并在开合时淡出，故明确覆盖这两项。 */\nbody[data-dsh-codex-sidebar] [data-dsc-extension-nav] { visibility: visible; display: flex !important; position: fixed; left: var(--dsc-extension-left); top: var(--dsc-extension-top); width: var(--dsc-extension-width); max-height: var(--dsc-extension-height); min-height: 0; z-index: 26; flex-direction: column; align-items: center; gap: 4px !important; padding: 0; margin: 0 !important; box-sizing: border-box; overflow-x: hidden; overflow-y: auto; scrollbar-width: thin; scrollbar-color: #ffffff26 transparent; opacity: 1 !important; transform: none !important; animation: none !important; transition: none !important; -webkit-app-region: no-drag; }\n\nbody[data-dsh-codex-sidebar] [data-dsc-extension-nav] [data-dsc-extension-hidden] { display: none !important; }\n\nbody[data-dsh-codex-sidebar] [data-dsc-extension-nav] [data-dsc-extension-row] { flex: none; display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; min-height: 36px; padding: 0; margin: 0; border: 0; border-radius: var(--cx-radius-md); background: transparent; color: var(--cx-nav-icon); cursor: pointer; }\n\nbody[data-dsh-codex-sidebar] [data-dsc-extension-nav] [data-dsc-extension-row]:hover { color: var(--cx-text); background: var(--cx-hover); }\n\nbody[data-dsh-codex-sidebar] [data-dsc-extension-nav] [data-dsc-extension-row][aria-current=page] { color: var(--cx-text); background: var(--cx-active); }\n\nbody[data-dsh-codex-sidebar] [data-dsc-extension-nav] [data-dsc-extension-row]:focus-visible { outline: 2px solid var(--cx-focus); outline-offset: -2px; }\n\nbody[data-dsh-codex-sidebar] [data-dsc-extension-nav] [data-dsc-extension-label] { display: none; }\n\nbody[data-dsh-codex-sidebar] [data-dsc-extension-nav] [data-dsc-extension-glyph] { display: inline-flex; align-items: center; justify-content: center; line-height: 1; }\n\nbody[data-dsh-codex-sidebar] [data-dsc-extension-nav] [data-dsc-extension-glyph] svg { display: block; max-width: 20px; max-height: 20px; }\n\n.dsc-navigation-error { position: fixed; left: calc(var(--cx-rail-w) + 8px); top: var(--dsh-frame-overlay-top, 20px); z-index: 50; max-width: 320px; }\n\n.dsc-rail .dsc-rail__item { color: var(--cx-nav-icon); background: transparent; flex: none; padding: 0; }\n\n.dsc-rail .dsc-rail__item:hover { color: var(--cx-text); background: var(--cx-hover); }\n\n.dsc-rail .dsc-rail__item--active { color: var(--cx-text); background: var(--cx-active); }\n\n.dsc-rail__item[data-preview-enabled=true]::after { display: none; }\n\n.dsc-rail__item[data-dsc-preview-trigger=more]::after { display: block; }\n\n.dsc-rail__item[data-dsc-preview-trigger=more]:focus-visible::after { opacity: 1; transform: translateY(-50%) translateX(0); }\n\n.dsc-sidebar { flex: 1; min-width: 0; min-height: 0; overflow: hidden; }\n\n.dsc-sidebar .dsc-sidebar__header { flex: none; }\n\n.dsc-sidebar .dsc-brand { min-width: 0; gap: 6px; }\n\n.dsc-sidebar .dsc-brand__mark { height: 19px; max-width: 25px; }\n\n.dsc-sidebar .dsc-brand__badge { font-size: 8px; padding: 3px 4px 2px; }\n\n.dsc-sidebar .dsc-sidebar__header-actions { margin-left: auto; }\n\n/* 用户截图灰度：品牌字标与徽章浅底压低亮度，鲸鱼标识仅以透明度匹配；不改全局正文。 */\n.dsc-sidebar .dsc-brand__mark { opacity: .72; }\n\n.dsc-sidebar .dsc-brand__wordmark { color: var(--cx-sidebar-text); }\n\n.dsc-sidebar .dsc-brand__badge { background: #b8b8b8; }\n\n/* Codex：新聊天默认无底色、不显示快捷键，仅悬停时出现灰色背景。 */\n.dsc-sidebar .dsc-new-chat { flex: none; justify-content: flex-start; width: 100%; font-size: 13px; font-weight: var(--cx-weight-medium); background: transparent; color: var(--cx-sidebar-text); margin-bottom: 8px; }\n\n.dsc-sidebar .dsc-new-chat:hover { background: rgba(255,255,255,.08); }\n\n.dsc-sidebar .dsc-workspaces { flex: 1; min-height: 0; height: auto; }\n\n/* 同时限定两个自有类，避免后面的通用 .dsc-search 把它重新变成伸展项。 */\n.dsc-search.dsc-sidebar-search { flex: none; height: 32px; margin: 2px 0 8px; min-height: 32px; }\n\n.dsc-sidebar-search button { padding: 0 3px; }\n\n/* 搜索图标与清除键：恢复被 `.dsc-ui button {color: inherit}\n\n` 覆盖的自有灰阶。 */\n.dsc-sidebar .dsc-sidebar-search button { color: var(--cx-sidebar-muted); }\n\n.dsc-sidebar .dsc-sidebar-search button:hover, .dsc-sidebar .dsc-sidebar-search button:focus-visible { color: var(--cx-sidebar-text); }\n\n.dsc-sidebar .dsc-tree-tools { justify-content: space-between; padding: 12px 0 4px 8px; }\n\n.dsc-tree-tools-label { font-size: 12px; color: var(--cx-sidebar-muted); }\n\n.dsc-projects-toggle { display: flex; align-items: center; gap: 4px; height: 28px; padding: 0; }\n\n.dsc-projects-toggle svg { color: var(--cx-sidebar-muted); transform: rotate(-90deg); transition: transform 180ms ease; }\n\n.dsc-projects-toggle[aria-expanded=true] svg { transform: rotate(0); }\n\n.dsc-sidebar .dsc-tree-scroll { padding: 0; scrollbar-color: #ffffff26 transparent; scrollbar-width: thin; }\n\n.dsc-section-page-title { font-size: 17px; font-weight: 600; }\n\n.dsc-secondary-nav { display: flex; flex-direction: column; gap: 4px; min-height: 0; overflow: auto; padding-top: 6px; }\n\n.dsc-secondary-nav .dsc-secondary-item { display: flex; align-items: center; gap: 8px; min-height: 32px; width: 100%; padding: 0 8px; border-radius: var(--cx-radius-md); text-align: left; color: var(--cx-text-2); font-size: 13px; }\n\n.dsc-secondary-nav .dsc-secondary-item.is-active, .dsc-secondary-nav .dsc-secondary-item:hover { background: var(--cx-active); color: var(--cx-text); }\n\n.dsc-secondary-item .dsc-proto-icon svg { width: 16px; height: 16px; }\n\n/* 「更多」main 页面：与正文同色的空白页。 */\n.dsc-more-page { box-sizing: border-box; width: 100%; height: 100%; min-height: 100%; background: #181818; }\n\n.dsc-window-sidebar-toggle { visibility: visible; position: fixed; top: 6px; left: 12px; z-index: 35; -webkit-app-region: no-drag; }\n\n.dsc-collapsed-new-chat { display: none; align-items: center; margin-right: 8px; -webkit-app-region: no-drag; }\n\nbody[data-dsh-codex-chrome] [data-dsc-frame][data-sidebar-collapsed] .dsc-collapsed-new-chat { display: flex; }\n\n.dsc-collapsed-new-chat .dsc-icon-button { width: 28px; height: 28px; color: var(--cx-sidebar-muted); }\n\n.dsc-collapsed-new-chat .dsc-icon-button:hover, .dsc-collapsed-new-chat .dsc-icon-button:focus-visible { color: var(--cx-sidebar-text); }\n\n/* 会话标题左侧常驻 leading：工作区标识与“仅收起显示”的新建按钮分离；无工作区时不留空位。 */\n.dsc-header-leading { display: flex; align-items: center; gap: 4px; min-width: 0; -webkit-app-region: no-drag; }\n\n.dsc-header-leading > .dsc-collapsed-new-chat { order: -1; }\n\n.dsc-workspace-mark { display: inline-flex; align-items: center; justify-content: center; flex: none; width: 28px; height: 28px; border-radius: 7px; color: #dfdfdf; cursor: default; -webkit-app-region: no-drag; }\n\n.dsc-workspace-mark:focus-visible { outline: 1px solid #ffffff40; outline-offset: -1px; }\n\n/* 深灰圆角提示 portal 到 body，避免 header 裁剪；同一元素不设原生 title。 */\n.dsc-ui.dsc-workspace-tooltip { position: fixed; z-index: 10002; transform: translate(-50%, -100%); max-width: calc(100vw - 16px); overflow: hidden; padding: 5px 11px; border: 1px solid #ffffff08; border-radius: 12px; background: #2d2d2d; color: #dfdfdf; font-size: 13px; line-height: 18px; text-overflow: ellipsis; white-space: nowrap; box-shadow: 0 2px 5px #0002; pointer-events: none; -webkit-app-region: no-drag; }\n\n.dsc-gear-launcher { visibility: visible; position: fixed; left: 8px; bottom: 12px; z-index: 35; }\n\n.dsc-gear-launcher .dsc-gear-button { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; padding: 0; border-radius: var(--cx-radius-md); color: var(--cx-sidebar-muted); }\n\n.dsc-gear-launcher .dsc-gear-button:hover, .dsc-gear-launcher .dsc-gear-button[aria-expanded=true] { background: var(--cx-hover); color: var(--cx-sidebar-text); }\n\n/* 自绘悬停提示，避免系统 title 突然出现；菜单打开时不叠加提示。 */\n.dsc-gear-launcher .dsc-gear-button { position: relative; isolation: isolate; transition: color 150ms ease; }\n\n.dsc-gear-launcher .dsc-gear-button:hover, .dsc-gear-launcher .dsc-gear-button[aria-expanded=true] { background: none; }\n\n.dsc-gear-button::before { content: ''; position: absolute; inset: 0; z-index: -1; border-radius: inherit; background: var(--cx-hover); opacity: 0; transition: opacity 150ms ease; pointer-events: none; }\n\n.dsc-gear-button:hover::before, .dsc-gear-button[aria-expanded=true]::before, .dsc-gear-button:focus-visible::before { opacity: 1; }\n\n.dsc-gear-button::after { content: attr(aria-label); position: absolute; left: calc(100% + 8px); top: 50%; padding: 5px 9px; border: 1px solid var(--cx-border-l1); border-radius: 7px; background: var(--cx-popover-fill); color: var(--cx-text); font-size: 12px; line-height: 18px; white-space: nowrap; box-shadow: 0 4px 12px #0004; pointer-events: none; opacity: 0; transform: translate(-3px, -50%); transition: opacity 150ms ease, transform 150ms ease; }\n\n.dsc-gear-button[aria-expanded=false]:hover::after, .dsc-gear-button[aria-expanded=false]:focus-visible::after { opacity: 1; transform: translate(0, -50%); }\n\n/* DSH 本体更新：齿轮正上方 36px 透明按钮内嵌 24px 蓝圆；仅在插件外壳生效时出现，原生侧栏指示器随宿主侧栏一同隐藏。 */\n.dsc-desktop-update-launcher { display: none; position: fixed; left: 8px; bottom: 52px; z-index: 35; -webkit-app-region: no-drag; }\n\nbody[data-dsh-codex-sidebar] .dsc-desktop-update-launcher { display: block; }\n\nbody[data-dsh-codex-sidebar]:has(.dsc-desktop-update) .dsc-independent-rail { padding-bottom: 96px; }\n\n.dsc-desktop-update { position: relative; }\n\n.dsc-ui .dsc-desktop-update-button { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; padding: 0; border-radius: var(--cx-radius-md); transition: background-color 150ms ease; }\n\n.dsc-ui .dsc-desktop-update-button:hover, .dsc-ui .dsc-desktop-update-button:focus-visible { background: var(--cx-hover); }\n\n.dsc-ui .dsc-desktop-update-button[aria-disabled=true] { cursor: default; }\n\n.dsc-desktop-update-dot { display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 50%; background: var(--cx-accent-soft); color: #fff; }\n\n.dsc-desktop-update-ring { transition: stroke-dasharray 240ms ease; }\n\n.dsc-desktop-update-tip { position: absolute; left: calc(100% + 8px); top: 50%; display: flex; flex-direction: column; gap: 2px; min-width: max-content; padding: 6px 10px; border: 1px solid var(--cx-border-l1); border-radius: 10px; background: var(--cx-popover-fill); color: var(--cx-text-2); font-size: 12px; line-height: 18px; white-space: nowrap; box-shadow: 0 4px 12px #0004; pointer-events: none; opacity: 0; transform: translate(-3px, -50%); transition: opacity 150ms ease, transform 150ms ease; }\n\n.dsc-desktop-update-tip strong { color: var(--cx-text); font-size: 13px; font-weight: 500; font-variant-numeric: tabular-nums; }\n\n.dsc-desktop-update-tip .dsc-update-progress { margin-top: 5px; }\n\n.dsc-desktop-update:hover .dsc-desktop-update-tip, .dsc-desktop-update:focus-within .dsc-desktop-update-tip { opacity: 1; transform: translate(0, -50%); }\n\n@media (prefers-reduced-motion: reduce) { .dsc-desktop-update-ring, .dsc-desktop-update-tip { transition: none; } }\n\n.dsc-app-menu { padding: 5px; }\n\n.dsc-menu-separator { height: 1px; margin: 4px 6px; background: var(--cx-border-l1); }\n\n.dsc-app-menu .dsc-account-row { display: flex; align-items: center; gap: 9px; width: 100%; padding: 8px; text-align: left; border-radius: var(--cx-radius-md); }\n\n.dsc-account-row:hover { background: var(--cx-active); }\n\n.dsc-account-row > img, .dsc-account-avatar { display: inline-flex; align-items: center; justify-content: center; flex: none; width: 28px; height: 28px; border-radius: 50%; background: var(--cx-active); object-fit: cover; }\n\n.dsc-account-row > span:last-child { display: flex; flex-direction: column; min-width: 0; }\n\n.dsc-account-row strong { font-size: 13px; font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n\n.dsc-account-row small { font-size: 11px; color: var(--cx-text-3); }\n\n/* 齿轮菜单上方的第三方入口分组：宿主 footer.action 原生节点原样呈现；关闭后标记/变量全部移除。 */\nbody[data-dsh-codex-sidebar] [data-dsc-app-footer-base] { display: flex !important; flex-direction: column; }\n\nbody[data-dsh-codex-sidebar] [data-dsc-app-footer-host] {\n  visibility: visible !important;\n  position: fixed !important;\n  left: var(--dsc-app-footer-left);\n  bottom: var(--dsc-app-footer-bottom);\n  width: var(--dsc-app-footer-width);\n  max-height: max(48px, var(--dsc-app-footer-max-height, calc(100vh - var(--dsc-app-footer-bottom) - 8px)));\n  box-sizing: border-box;\n  display: flex !important;\n  flex-direction: column;\n  gap: 2px;\n  margin: 0 !important;\n  padding: 5px !important;\n  overflow-x: hidden;\n  overflow-y: auto;\n  background: var(--cx-popover-fill);\n  border: 1px solid var(--cx-border-l1);\n  border-radius: 14px;\n  box-shadow: 0 12px 36px #0007;\n  z-index: 9999;\n  scrollbar-width: thin;\n  scrollbar-color: #ffffff26 transparent;\n  -webkit-app-region: no-drag;\n}\n\nbody[data-dsh-codex-sidebar] [data-dsc-app-footer-host] [data-dsc-app-footer-entry] { flex: none; width: 100% !important; min-width: 0; }\n\nbody[data-dsh-codex-sidebar] [data-dsc-app-footer-host] [data-dsc-app-footer-entry] button { width: 100% !important; min-width: 0; justify-content: flex-start !important; }\n\n/* 宿主收起态对 footer 入口只渲染图标（第三方按 wide=false 省略文字节点）；\n   分组里用按钮的无障碍名称补一个可见标签，展开态有原生文字时不会命中。 */\nbody[data-dsh-codex-sidebar] [data-dsc-app-footer-host] [data-dsc-app-footer-entry] button[data-dsc-app-footer-label]::after {\n  content: attr(data-dsc-app-footer-label);\n  min-width: 0;\n  margin-left: 8px;\n  overflow: hidden;\n  color: inherit;\n  font-size: 14px;\n  line-height: 20px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n/* 分组位于宿主侧栏列层叠上下文（z-index:21）内，低于自有 rail（25）。\n   菜单打开期间只让 rail 中与分组重叠的竖向区段放行，其余区域仍由透明命中层挡住，\n   避免点击穿透到下面的侧栏内容；按钮本身保持可点，重叠的图标临时隐藏。 */\n.dsc-rail-hitblock { display: none; position: absolute; inset: 0; z-index: 0; pointer-events: auto; }\n\nbody[data-dsh-codex-sidebar] .dsc-independent-rail[data-dsc-app-footer-clear] { pointer-events: none; }\n\nbody[data-dsh-codex-sidebar] .dsc-independent-rail[data-dsc-app-footer-clear] .dsc-rail-hitblock { display: block; clip-path: inset(0 0 calc(100% - var(--dsc-app-footer-clear-top, 100%)) 0); }\n\nbody[data-dsh-codex-sidebar] .dsc-independent-rail[data-dsc-app-footer-clear] .dsc-rail__item { position: relative; z-index: 1; pointer-events: auto; }\n\nbody[data-dsh-codex-sidebar] .dsc-independent-rail [data-dsc-app-footer-clear-item] { opacity: 0 !important; pointer-events: none !important; }\n\n.dsc-brand-mark { width: 25px; height: 20px; object-fit: contain; }\n\n.dsc-brand { display: inline-flex; align-items: center; gap: 7px; }\n\n.dsc-brand strong { font-size: 17px; letter-spacing: -.02em; }\n\n.dsc-brand small { font: 700 8px/16px var(--cx-font-sans); letter-spacing: .12em; padding: 0 4px; color: #131313; background: #eee; border-radius: 3px; }\n\n.dsc-settings-trigger { display: inline-flex; gap: 8px; align-items: center; }\n\n.dsc-workspaces { height: 100%; min-height: 0; width: 100%; display: flex; flex-direction: column; background: var(--cx-sidebar); }\n\n.dsc-tree-tools { display: flex; gap: 4px; align-items: center; padding: 6px 8px 12px; }\n\n.dsc-search { flex: 1; display: flex; align-items: center; gap: 6px; min-width: 0; border-radius: 8px; background: #ffffff08; padding: 3px 8px; color: var(--cx-sidebar-muted); }\n\n.dsc-search input { min-width: 0; width: 100%; border: 0; outline: none; background: none; font-size: 12px; }\n\n.dsc-search:focus-within { box-shadow: 0 0 0 1px var(--cx-border-l3); }\n\n.dsc-search input::placeholder { color: var(--cx-sidebar-muted); }\n\n.dsc-icon-button { width: 28px; height: 28px; display: grid; place-items: center; border-radius: 7px; color: var(--cx-text-2); }\n\n.dsc-icon-button:hover { background: var(--cx-active); }\n\n/* 用户截图灰度：自有侧栏图标常态 #8f8f8f、悬停/键盘聚焦 #b4b4b4；禁用沿用父级透明度。 */\n.dsc-sidebar .dsc-icon-button { color: var(--cx-sidebar-muted); }\n\n.dsc-sidebar .dsc-icon-button:hover, .dsc-sidebar .dsc-icon-button:focus-visible { color: var(--cx-sidebar-text); }\n\n.dsc-ui.dsc-window-sidebar-toggle .dsc-icon-button { color: var(--cx-sidebar-muted); }\n\n.dsc-ui.dsc-window-sidebar-toggle .dsc-icon-button:hover, .dsc-ui.dsc-window-sidebar-toggle .dsc-icon-button:focus-visible { color: var(--cx-sidebar-text); }\n\n.dsc-tree-scroll { flex: 1; min-height: 0; overflow: auto; scrollbar-width: thin; padding: 0 8px; }\n\n.dsc-section-title { padding: 12px 8px 6px; font-size: 12px; font-weight: 500; color: var(--cx-sidebar-muted); }\n\n.dsc-thread, .dsc-project { display: flex; align-items: center; height: 30px; border-radius: 7px; position: relative; }\n\n.dsc-thread:hover, .dsc-project:hover, .dsc-thread.is-active { background: #ffffff0d; }\n\n.dsc-thread.is-active { background: var(--cx-sidebar-selected); }\n\n.dsc-ui .dsc-thread-main, .dsc-ui .dsc-project-main { display: flex; flex: 1; align-items: center; gap: 7px; min-width: 0; height: 100%; padding: 0 8px; text-align: left; color: var(--cx-sidebar-text); }\n\n.dsc-thread-title, .dsc-project-main > span { min-width: 0; flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n\n.dsc-ui .dsc-thread-main { padding-right: 62px; }\n\n.dsc-thread-title-text { display: inline-block; width: max-content; max-width: none; vertical-align: top; }\n\n.dsc-thread-title[data-overflow=true] { text-overflow: clip; mask-image: linear-gradient(to right, #000 calc(100% - 16px), transparent); }\n\n.dsc-thread:hover .dsc-thread-title[data-overflow=true] .dsc-thread-title-text,\n.dsc-thread-main:focus-visible .dsc-thread-title[data-overflow=true] .dsc-thread-title-text { animation: dsc-title-scroll var(--dsc-title-duration) linear 250ms infinite alternate; }\n\n@keyframes dsc-title-scroll { from { transform: translateX(0); } to { transform: translateX(var(--dsc-title-shift)); } }\n\n.dsc-thread-time { position: absolute; right: 9px; font-size: 10px; color: var(--cx-sidebar-muted); transition: opacity 120ms ease; }\n\n.dsc-thread-completion { position: absolute; right: 9px; top: 50%; width: 8px; height: 8px; border-radius: 50%; background: #4c9bfe; transform: translateY(-50%); pointer-events: none; }\n\n.dsc-thread-running { position: absolute; right: 9px; top: 50%; display: grid; place-items: center; width: 12px; height: 12px; color: var(--cx-sidebar-muted); transform: translateY(-50%); pointer-events: none; }\n\n.dsc-running-spinner { animation: dsc-session-spin 1.9s linear infinite; }\n\n.dsc-thread:hover .dsc-thread-time, .dsc-thread:has(:focus-visible) .dsc-thread-time { display: none; }\n\n.dsc-thread:hover .dsc-thread-completion, .dsc-thread:has(:focus-visible) .dsc-thread-completion { opacity: 0; }\n\n.dsc-thread:hover .dsc-thread-running, .dsc-thread:has(:focus-visible) .dsc-thread-running { opacity: 0; }\n\n.dsc-thread .dsc-state[data-state=idle] { display: none; }\n\n.dsc-thread-actions { position: absolute; top: 0; right: 4px; height: 100%; display: flex; align-items: center; gap: 1px; opacity: 0; pointer-events: none; transition: opacity 150ms ease; }\n\n.dsc-thread:hover .dsc-thread-actions, .dsc-thread:has(:focus-visible) .dsc-thread-actions { opacity: 1; pointer-events: auto; }\n\n.dsc-ui .dsc-thread-action { display: grid; place-items: center; flex: none; width: 25px; height: 26px; padding: 0; border-radius: 5px; color: var(--cx-sidebar-muted); transition: color 120ms ease; }\n\n.dsc-ui .dsc-thread-action:hover, .dsc-ui .dsc-thread-action:focus-visible { color: var(--cx-sidebar-text); }\n\n.dsc-thread-action svg { width: 14px; height: 14px; }\n\n.dsc-row-tooltip { position: fixed; z-index: 10001; pointer-events: none; padding: 5px 11px; border: 1px solid #ffffff08; border-radius: 13px; color: #dfdfdf; background: #2d2d2d; font-size: 13px; line-height: 18px; white-space: nowrap; box-shadow: 0 2px 5px #0002; opacity: 0; visibility: hidden; transform: translateY(3px); transition: opacity 80ms ease, transform 80ms ease, visibility 0s 80ms; }\n\n.dsc-row-tooltip[data-open=true] { opacity: 1; visibility: visible; transform: translateY(0); transition: opacity 120ms ease 350ms, transform 120ms ease 350ms, visibility 0s 350ms; }\n\n.dsc-state { color: var(--cx-sidebar-muted); flex: none; display: flex; align-items: center; }\n\n.dsc-state[data-state=pending] { color: var(--cx-warning); }\n\n.dsc-row-action { display: flex; opacity: 0; pointer-events: none; transition: opacity 150ms ease; width: 25px; height: 25px; align-items: center; justify-content: center; border-radius: 5px; padding: 0; margin-right: 3px; color: var(--cx-sidebar-muted); }\n\n.dsc-ui .dsc-row-action { color: var(--cx-sidebar-muted); }\n\n.dsc-thread:hover .dsc-row-action, .dsc-project:hover .dsc-row-action, .dsc-thread:has(:focus-visible) .dsc-row-action, .dsc-project:has(:focus-visible) .dsc-row-action { opacity: 1; pointer-events: auto; }\n\n.dsc-row-action:hover { color: var(--cx-sidebar-text); background: var(--cx-active); }\n\n/* 本轮按用户录像为项目内容局部开放布局动画；外壳与其他面板的尺寸规则保持原约定。 */\n.dsc-project-fold { display: grid; grid-template-rows: 0fr; opacity: 0; transition: grid-template-rows 180ms cubic-bezier(.2,.8,.2,1), opacity 150ms ease; }\n\n.dsc-project-fold[data-open=true] { grid-template-rows: 1fr; opacity: 1; }\n\n.dsc-project-clip { min-height: 0; overflow: hidden; }\n\n.dsc-project-children { padding-left: 14px; }\n\n.dsc-project-children, .dsc-project-list { transform: translateY(-4px); transition: transform 180ms cubic-bezier(.2,.8,.2,1); }\n\n.dsc-project-fold[data-open=true] > .dsc-project-clip > :is(.dsc-project-children, .dsc-project-list) { transform: translateY(0); }\n\n.dsc-project-children .dsc-state { display: none; }\n\n/* 项目内“显示更多/收起”：真实按钮，缩进随项目子列表，颜色与行文字一致；不引入额外布局动画。 */\n.dsc-ui .dsc-project-more { display: flex; align-items: center; width: 100%; height: 26px; padding: 0 8px; border-radius: 7px; text-align: left; font-size: 12px; color: var(--cx-sidebar-muted); }\n\n.dsc-ui .dsc-project-more:hover, .dsc-ui .dsc-project-more:focus-visible { color: var(--cx-sidebar-text); background: #ffffff0d; }\n\n.dsc-ui .dsc-project-more:focus-visible { outline: 2px solid var(--cx-focus); outline-offset: -2px; }\n\n.dsc-empty { display: block; color: var(--cx-sidebar-muted); padding: 10px 12px; font-size: 12px; }\n\n.dsc-archive-toggle { padding: 8px 12px; display: flex; gap: 6px; align-items: center; font-size: 11px; color: var(--cx-sidebar-muted); }\n\n.dsc-archive-toggle input { accent-color: var(--cx-accent); }\n\n.dsc-thread.is-archived { opacity: .55; }\n\n.dsc-error { padding: 4px 8px; color: var(--cx-danger); font: 12px/17px var(--cx-font-sans); white-space: normal; max-width: 310px; }\n\n.dsc-menu { z-index: 10000; padding: 6px; background: var(--cx-popover-fill); border: 1px solid var(--cx-border-l1); border-radius: 14px; box-shadow: 0 12px 36px #0007; overflow: auto; animation: dsc-pop-in 130ms ease both; }\n\n.dsc-menu-heading { font-size: 12px; color: var(--cx-text-3); padding: 5px 8px 8px; }\n\n.dsc-option { width: 100%; display: flex; gap: 9px; align-items: center; text-align: left; padding: 7px 8px; border-radius: 7px; min-height: 32px; }\n\n.dsc-option:hover, .dsc-option:focus-visible { background: #ffffff12; }\n\n.dsc-option-copy { display: flex; flex: 1; min-width: 0; flex-direction: column; line-height: 20px; }\n\n.dsc-option-copy small { font-size: 12px; color: var(--cx-text-3); line-height: 17px; }\n\n/* 行悬停详情卡：几何按原型实测（项目卡 321×130、右侧 5px；会话卡 470 宽、右侧 12px、上移 6px）。 */\n.dsc-row-pop { position: fixed; z-index: 10000; max-width: calc(100vw - 32px); padding: 6px; border-radius: var(--cx-radius-xl); border: 1px solid var(--cx-border-l1); background: var(--cx-popover-fill); box-shadow: var(--cx-shadow-2xl); animation: dsc-row-pop-in 120ms var(--cx-ease-out) both; }\n\n.dsc-row-pop--project { width: 321px; padding: 8px; }\n\n.dsc-row-pop--thread { width: 470px; }\n\n.dsc-row-pop__head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; padding: 8px 8px 10px; border-bottom: 1px solid var(--cx-border-l2); }\n\n.dsc-row-pop--project .dsc-row-pop__head { align-items: center; height: 28px; padding: 0 8px; border-bottom: 0; }\n\n.dsc-row-pop__name { display: flex; align-items: center; gap: 8px; min-width: 0; font-size: 14px; font-weight: var(--cx-weight-regular); color: var(--cx-text); }\n\n.dsc-row-pop__name > span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n\n.dsc-row-pop__pin { display: inline-flex; align-items: center; flex: none; color: var(--cx-text-3); }\n\n.dsc-row-pop__excerpt { margin: 0; font-size: 13px; line-height: 20px; color: var(--cx-text); display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }\n\n.dsc-row-pop__meta { display: flex; align-items: center; gap: 6px; flex: none; font-size: 12px; color: var(--cx-text-3); white-space: nowrap; }\n\n.dsc-row-pop__line { display: flex; align-items: center; gap: 8px; width: 100%; height: 32px; padding: 0 8px; border-radius: var(--cx-radius-md); font-size: 13px; color: var(--cx-text-2); text-align: left; }\n\n.dsc-row-pop__line svg { flex: none; color: var(--cx-text-3); }\n\n.dsc-row-pop--project .dsc-row-pop__line { height: 28px; font-size: 14px; color: var(--cx-text); }\n\n.dsc-row-pop--project .dsc-row-pop__line svg { color: var(--cx-text-2); }\n\n.dsc-row-pop__line--path, .dsc-row-pop__line--action { cursor: pointer; }\n\n.dsc-row-pop__line--path:hover, .dsc-row-pop__line--action:hover { background: var(--cx-hover); color: var(--cx-text); }\n\n.dsc-row-pop__line--path:focus-visible, .dsc-row-pop__line--action:focus-visible { outline: 2px solid var(--cx-focus); outline-offset: -2px; }\n\n.dsc-row-pop__path { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n\n.dsc-row-pop--project .dsc-row-pop__path { font-family: var(--cx-font-sans); font-size: 14px; color: var(--cx-text); }\n\n.dsc-row-pop--thread .dsc-row-pop__path { font-family: var(--cx-font-mono); font-size: 12px; }\n\n.dsc-row-pop__arrow { margin-left: auto; opacity: 0; transition: opacity 120ms var(--cx-ease); }\n\n.dsc-row-pop__line--path:hover .dsc-row-pop__arrow, .dsc-row-pop__line--path:focus-visible .dsc-row-pop__arrow { opacity: 1; }\n\n.dsc-row-pop__sep { height: 1px; background: var(--cx-border-l1); }\n\n@keyframes dsc-row-pop-in { from { opacity: 0; } to { opacity: 1; } }\n\n/* 「编辑项目」对话框：按参考图（面板 #2d2d2d、16 圆角、保存白底、移除暗红底）；源文件夹只读展示。 */\n.dsc-modal { position: fixed; inset: 0; z-index: 11000; display: flex; align-items: center; justify-content: center; padding: 24px; }\n\n.dsc-modal__mask { position: absolute; inset: 0; background: rgba(0,0,0,.12); }\n\n.dsc-modal__panel { position: relative; display: flex; flex-direction: column; width: min(520px, calc(100vw - 32px)); padding: 24px; border-radius: 16px; background: var(--cx-popover-fill); box-shadow: var(--cx-shadow-2xl); color: var(--cx-text); }\n\n.dsc-modal__head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }\n\n.dsc-modal__head h2 { margin: 0; font-size: 20px; line-height: 28px; font-weight: 600; }\n\n.dsc-modal__close { display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; padding: 0; border-radius: var(--cx-radius-sm); color: var(--cx-text-2); }\n\n.dsc-modal__close:hover { background: var(--cx-hover); color: var(--cx-text); }\n\n.dsc-modal__field { display: flex; align-items: center; gap: 10px; height: 44px; margin-top: 20px; padding: 0 12px; border: 1px solid var(--cx-border-strong); border-radius: var(--cx-radius-md); color: var(--cx-text-2); }\n\n.dsc-modal__field:focus-within { border-color: var(--cx-focus); }\n\n.dsc-modal__input { flex: 1; min-width: 0; height: 100%; border: 0; outline: none; background: none; font: 15px/22px var(--cx-font-sans); color: var(--cx-text); }\n\n.dsc-modal__input::placeholder { color: var(--cx-text-3); }\n\n.dsc-modal__label { margin: 20px 0 8px; font-size: 13px; line-height: 18px; color: var(--cx-text-3); }\n\n.dsc-modal__source { display: flex; align-items: center; gap: 10px; height: 48px; padding: 0 12px; border: 1px solid var(--cx-border-strong); border-radius: var(--cx-radius-md); color: var(--cx-text-2); font-size: 14px; }\n\n.dsc-modal__path { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n\n.dsc-modal .dsc-error { margin-top: 12px; }\n\n.dsc-modal__actions { display: flex; align-items: center; gap: 8px; margin-top: 24px; }\n\n.dsc-modal__spacer { flex: 1; }\n\n.dsc-modal__remove { height: 36px; padding: 0 16px; border-radius: 999px; background: rgba(250,102,101,.14); color: #fa6665; font-size: 14px; }\n\n.dsc-modal__remove:hover:not(:disabled) { background: rgba(250,102,101,.22); }\n\n.dsc-modal__cancel { height: 36px; padding: 0 14px; border-radius: 999px; color: var(--cx-text-2); font-size: 14px; }\n\n.dsc-modal__cancel:hover:not(:disabled) { background: var(--cx-hover); color: var(--cx-text); }\n\n.dsc-modal__save { height: 36px; padding: 0 20px; border-radius: 999px; background: #dfdfdf; color: #131313; font-size: 14px; font-weight: 500; }\n\n.dsc-modal__save:hover:not(:disabled) { background: #fff; }\n\n.dsc-modal__save:disabled, .dsc-modal__remove:disabled, .dsc-modal__cancel:disabled { opacity: .6; cursor: default; }\n\n/* 编辑项目底部按钮：优先于 .dsc-ui button 的重置；不改变源文件夹和其他弹窗。 */\n.dsc-modal__panel[aria-labelledby=\"dsc-edit-workspace-title\"] .dsc-modal__actions > button { height: 32px; border-radius: 10px; corner-shape: round; }\n\n.dsc-modal__panel[aria-labelledby=\"dsc-edit-workspace-title\"] .dsc-modal__save,\n.dsc-modal__panel[aria-labelledby=\"dsc-edit-workspace-title\"] .dsc-modal__save:hover:not(:disabled) { padding: 0 16px; background: #dfdfdf; color: #2b2a2a; }\n\n.dsc-modal__panel[aria-labelledby=\"dsc-edit-workspace-title\"] .dsc-modal__remove { background: #403030; color: #fa6665; }\n\n.dsc-modal__panel[aria-labelledby=\"dsc-edit-workspace-title\"] .dsc-modal__remove:hover:not(:disabled) { background: #4b3333; color: #fa6665; }\n\n.dsc-control-status { display: inline-flex; align-items: center; gap: 5px; padding: 0 7px; color: var(--cx-text-3); font-size: 11px; }\n\n.dsc-control-status button { padding: 2px 4px; text-decoration: underline; }\n\n.dsc-control-status button:hover { color: var(--cx-text); }\n\n.dsc-pill { height: 28px; display: inline-flex; align-items: center; gap: 6px; padding: 0 10px; border-radius: 999px; corner-shape: round; white-space: nowrap; color: var(--cx-text-2); font-size: 14px !important; }\n\n.dsc-pill:hover, .dsc-pill[aria-expanded=true] { background: #ffffff12; color: white; }\n\n.dsc-pill[data-warning=true] { color: var(--cx-warning); }\n\n.dsc-back { display: flex; align-items: center; gap: 4px; color: var(--cx-text-3); font-size: 12px !important; border-radius: 5px; }\n\n.dsc-back:hover { color: #fff; }\n\n.dsc-slider { height: 32px; position: relative; margin: 0 2px; border-radius: 999px; cursor: pointer; touch-action: none; outline: none; }\n\n/* rc.3 的全局 superellipse 会把 full/50% 圆角画成方圆形；仅恢复本控件的圆形轮廓。 */\n.dsc-slider, .dsc-slider-track, .dsc-slider-fill, .dsc-slider-max, .dsc-thumb, .dsc-tick::after, .dsc-stars i, .dsc-burst i { corner-shape: round; }\n\n/* 提交期间保持原有视觉：只禁用拖拽，不切换光标/透明度，避免切换档位时闪变。 */\n.dsc-slider[aria-disabled=true] { cursor: default; opacity: 1; }\n\n.dsc-slider[data-level=max] .dsc-slider-max { opacity: 1; }\n\n.dsc-slider-max::before, .dsc-slider-max::after { content: ''; position: absolute; animation-play-state: paused; }\n\n.dsc-slider[data-level=max] .dsc-slider-max::before, .dsc-slider[data-level=max] .dsc-slider-max::after { animation-play-state: running; }\n\n.dsc-stars { position: absolute; inset: 0; opacity: 0; pointer-events: none; transition: opacity 180ms ease; }\n\n.dsc-slider[data-level=max] .dsc-stars { opacity: 1; }\n\n.dsc-stars i { position: absolute; border-radius: 50%; background: #fff; box-shadow: 0 0 3px #e0d6ff8c; animation: dsc-star-drift var(--pdur) linear var(--pdelay) infinite; animation-play-state: paused; }\n\n.dsc-slider[data-level=max] .dsc-stars i { animation-play-state: running; }\n\n.dsc-tick { position: absolute; top: 50%; width: 24px; height: 24px; transform: translate(-50%,-50%); transition: opacity 150ms ease; }\n\n.dsc-tick::after { content: ''; position: absolute; top: 50%; left: 50%; width: 5px; height: 5px; border-radius: 50%; background: #ffffff38; transform: translate(-50%,-50%); transition: transform 120ms ease,background-color 120ms ease; pointer-events: none; }\n\n.dsc-tick.is-on::after { background: #ffffff4d; }\n\n.dsc-slider:not([aria-disabled=true]) .dsc-tick:hover::after { transform: translate(-50%,-50%) scale(1.6); background: #ffffff73; }\n\n.dsc-slider[data-level=max] .dsc-tick { opacity: 0; pointer-events: none; }\n\n.dsc-thumb-position { position: absolute; inset: 0; pointer-events: none; transition: transform 140ms var(--cx-ease-scroll); }\n\n.dsc-thumb { position: absolute; z-index: 1; top: 50%; left: 14px; width: 28px; height: 28px; border-radius: 50%; background: #fff; box-shadow: 0 1px 4px #0007,0 0 0 1px #0000000f; transform: translate(-50%,-50%); pointer-events: auto; transition: transform 140ms var(--cx-ease-out),box-shadow 140ms var(--cx-ease); }\n\n/* 固定白色滑块为正圆，避免宿主全局圆角规则覆盖插件外形。 */\n.dsc-ui .dsc-slider .dsc-thumb { border-radius: 50% !important; }\n\n.dsc-thumb:hover { transform: translate(-50%,-50%) scale(1.1); box-shadow: 0 1px 6px #0008,0 0 0 1px #0000000f; }\n\n.dsc-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; border: 0; }\n\n.dsc-permission-menu { padding: 4px; border-radius: var(--cx-radius-2xl); box-shadow: var(--cx-shadow-2xl); }\n\n.dsc-permission-heading { display: flex; justify-content: space-between; align-items: center; gap: 8px; padding: 4px 8px; color: var(--cx-text-3); font-size: 13px; line-height: 18px; }\n\n.dsc-permission-heading button { padding: 0; white-space: nowrap; text-decoration: underline; text-underline-offset: 2px; }\n\n.dsc-permission-help { margin: 4px 8px 8px; color: var(--cx-text-2); font-size: 12px; line-height: 18px; }\n\n.dsc-permission-menu .dsc-option { align-items: flex-start; gap: 8px; padding: 6px 8px; border-radius: var(--cx-radius-xl); color: var(--cx-text-2); font-size: 14px; line-height: 19px; }\n\n.dsc-permission-menu .dsc-option > svg { margin-top: 3px; }\n\n.dsc-permission-menu .dsc-option-copy { line-height: 19px; }\n\n.dsc-permission-menu .dsc-option[data-warning=true], .dsc-permission-menu .dsc-option[data-warning=true] small { color: var(--cx-warning); }\n\n/* 权限风险弹窗：按用户 Codex 截图换算 1.5 倍显示缩放，约 520px 宽；不影响宿主其他确认框。 */\n.dsc-ui.dsc-permission-dialog { width: 520px; max-width: calc(100vw - 32px); max-height: calc(100dvh - 32px); margin: auto; padding: 20px; border: 0; border-radius: 20px; background: #2b2b2b; color: #dedede; box-shadow: 0 18px 70px #0003; overflow-y: auto; overscroll-behavior: contain; -webkit-app-region: no-drag; animation: dsc-pop-in 150ms ease both; }\n\n.dsc-permission-dialog::backdrop { background: #0006; }\n\n.dsc-permission-dialog__heading { display: flex; align-items: center; gap: 8px; min-height: 28px; }\n\n.dsc-permission-dialog__heading > svg { flex: none; }\n\n.dsc-permission-dialog__heading h2 { margin: 0; font-size: 20px; font-weight: 650; line-height: 28px; letter-spacing: -.3px; }\n\n.dsc-permission-dialog__badge { margin-left: auto; padding: 1px 7px; border: 1px solid #ffffff14; border-radius: 6px; color: #aaa; font-size: 11px; line-height: 18px; white-space: nowrap; }\n\n.dsc-permission-dialog__description { margin: 14px 0 12px; color: #999; font-size: 14px; line-height: 20px; }\n\n.dsc-permission-dialog__capabilities { margin: 0; padding: 4px 16px; border-radius: 16px; list-style: none; background: #333; }\n\n.dsc-permission-dialog__capabilities li { display: flex; align-items: center; gap: 12px; min-height: 51px; padding: 8px 0; }\n\n.dsc-permission-dialog__capabilities li + li { border-top: 1px solid #ffffff08; }\n\n.dsc-permission-dialog__capabilities li > div { min-width: 0; }\n\n.dsc-permission-dialog__capabilities strong { display: block; font-size: 14px; font-weight: 600; line-height: 18px; }\n\n.dsc-permission-dialog__capabilities span { display: block; color: #999; font-size: 12px; line-height: 17px; overflow-wrap: anywhere; }\n\n.dsc-permission-dialog__warning { margin: 12px 0 0; color: #999; font-size: 14px; line-height: 20px; }\n\n.dsc-ui .dsc-permission-dialog__more { margin-left: 3px; padding: 0; color: #8ac4ff; white-space: nowrap; font-size: inherit; }\n\n.dsc-permission-dialog__more:hover { text-decoration: underline; text-underline-offset: 3px; }\n\n.dsc-permission-dialog__help { margin: 10px 0 0; padding: 10px 12px; border-radius: 10px; background: #ffffff06; color: #aaa; font-size: 12px; line-height: 18px; }\n\n.dsc-permission-dialog__actions { display: flex; justify-content: flex-end; gap: 12px; margin-top: 14px; }\n\n.dsc-ui .dsc-permission-dialog__actions button { display: inline-flex; align-items: center; justify-content: center; gap: 5px; min-height: 36px; padding: 6px 20px; border-radius: 999px; font-size: 14px; line-height: 20px; transition: background-color 120ms ease; }\n\n.dsc-ui .dsc-permission-dialog__cancel { background: #333; color: #d5d5d5; }\n\n.dsc-ui .dsc-permission-dialog__cancel:hover:not(:disabled) { background: #3d3d3d; }\n\n.dsc-ui .dsc-permission-dialog__confirm { background: #443232; color: #ff6764; }\n\n.dsc-ui .dsc-permission-dialog__confirm:hover:not(:disabled) { background: #533838; }\n\n@media (max-width: 480px) {\n  .dsc-ui.dsc-permission-dialog { padding: 18px; }\n  .dsc-permission-dialog__heading h2 { font-size: 18px; line-height: 26px; }\n  .dsc-permission-dialog__capabilities { padding-inline: 12px; }\n}\n\n.dsc-burst { position: absolute; left: 14px; top: 50%; pointer-events: none; }\n\n/* 等 140ms 节点移动落定后，从白球边缘扩散；反复进入 Max 会由原有 key 重播。 */\n.dsc-burst i { position: absolute; width: 3px; height: 3px; border-radius: 50%; background: #b98cff; box-shadow: 0 0 3px #b98cff40; animation: dsc-burst 280ms ease-out 140ms both; }\n\n.dsc-slider-labels { display: flex; justify-content: space-between; padding-top: 3px; }\n\n.dsc-slider-labels button { padding: 0 3px; font-size: 10px; color: var(--cx-text-3); }\n\n.dsc-slider-labels button:hover { color: white; }\n\n@keyframes dsc-pop-in { from { opacity: 0; transform: translateY(3px); } to { opacity: 1; transform: none; } }\n\n/* 退场淡出：关闭弹层时先播放 160ms，再卸载 DOM。 */\n@keyframes dsc-pop-out { from { opacity: 1; transform: none; } to { opacity: 0; transform: translateY(3px); } }\n\n.dsc-menu.dsc-menu-closing { animation: dsc-pop-out 160ms ease both; pointer-events: none; }\n\n@keyframes dsc-session-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n\n/* 两层亮带和星点均向左单程流动，出场淡去后从右侧开始下一轮。 */\n@keyframes dsc-max-flow { 0% { transform: translateX(65%) scale(.82,1); opacity: 0; } 12% { opacity: .95; } 88% { opacity: .8; } 100% { transform: translateX(-65%) scale(1.02,1); opacity: 0; } }\n\n@keyframes dsc-max-bloom { 0% { transform: translateX(65%) scale(.7,1); opacity: 0; } 12% { opacity: .9; } 88% { opacity: 1; } 100% { transform: translateX(-65%) scale(1,1); opacity: 0; } }\n\n@keyframes dsc-star-drift { 0% { transform: translate(-50%,-50%) translate(calc(var(--dx)*.5),calc(var(--dy)*-.5)); opacity: 0; } 20% { opacity: .7; } 80% { opacity: .8; } 100% { transform: translate(-50%,-50%) translate(calc(var(--dx)*-.5),calc(var(--dy)*.5)); opacity: 0; } }\n\n@keyframes dsc-burst { 0% { transform: translate(-50%,-50%) translate(calc(var(--bx)*.45),calc(var(--by)*.45)) scale(.5); opacity: 0; } 18% { transform: translate(-50%,-50%) translate(calc(var(--bx)*.72),calc(var(--by)*.72)) scale(1); opacity: .65; } 100% { transform: translate(-50%,-50%) translate(var(--bx),var(--by)) scale(.5); opacity: 0; } }\n\n@media (prefers-reduced-motion: reduce) {\n  .dsc-sidebar-shell, .dsc-row-tooltip, .dsc-ui *, .dsc-ui *::before, .dsc-ui *::after { animation: none !important; transition: none !important; }\n  .dsc-burst { display: none; }\n}\n\n/* 公开详情插槽在来源信息后声明；仅在本插件详情用 flex 顺序把来源信息排在支持提示之后。 */\nbody[data-dsh-codex-sidebar] [data-plugin-detail=\"@xinxing1708/dsh-codex-style\"] [data-plugin-source] { order: 1; }\n\n.dsc-plugin-support { display: flex; flex-direction: column; align-items: flex-start; gap: 6px; padding: 16px 0; color: #989898; font-size: 13px; line-height: 20px; }\n\n.dsc-plugin-support p { margin: 0; }\n\n.dsc-plugin-support a { display: inline-flex; align-items: center; gap: 4px; max-width: 100%; color: #9bc8f8; text-decoration: none; overflow-wrap: anywhere; border-radius: 4px; }\n\n.dsc-plugin-support a:hover { text-decoration: underline; text-underline-offset: 3px; }\n\n.dsc-plugin-support a:focus-visible { outline: 2px solid #9bc8f8; outline-offset: 4px; }\n\n/* BOUNDARY-20261106：导航右侧的单一外框。\n   1) 常驻 frame 上一个不占位、不可拦截指针的伪元素描边；顶部从 40px 标题栏下沿开始，\n      经侧栏左上真圆弧连续走到右侧与下沿，外侧底色仍是 frame 的 #0f0f0f。\n   2) 各列只做内容裁剪：侧栏列左上/左下、正文列右上/右下（右栏收起时）；\n      侧栏收起时正文列接管左上/左下。接缝处不重复圆角。\n   3) 宿主全局 corner-shape:superellipse(1.5) 会削弱圆弧，这里显式恢复 round。\n   4) 0.667px × 150% = 1 设备像素；不改变列宽、顶部高度或控件坐标。 */\nhtml[data-windows-titlebar] body[data-dsh-codex-chrome] [data-dsc-frame]::after {\n  content: '';\n  position: absolute;\n  inset: var(--dsh-windows-titlebar-height, 40px) 0 0;\n  z-index: 24;\n  border-radius: var(--cx-frame-radius);\n  box-shadow: inset 0 0 0 var(--cx-frame-line-width) var(--cx-frame-line);\n  corner-shape: round;\n  pointer-events: none;\n}\n\nhtml[data-windows-titlebar] body[data-dsh-codex-sidebar] [data-dsc-sidebar-column] {\n  border-top-left-radius: var(--cx-frame-radius);\n  border-bottom-left-radius: var(--cx-frame-radius);\n  corner-shape: round;\n}\n\nhtml[data-windows-titlebar] body[data-dsh-codex-sidebar] [data-dsc-center-column] {\n  border-radius: 0;\n  corner-shape: round;\n}\n\nhtml[data-windows-titlebar] body[data-dsh-codex-chrome] [data-dsc-frame][data-rightbar-collapsed] [data-dsc-center-column] {\n  border-top-right-radius: var(--cx-frame-radius);\n  border-bottom-right-radius: var(--cx-frame-radius);\n}\n\nhtml[data-windows-titlebar] body[data-dsh-codex-chrome] [data-dsc-frame][data-sidebar-collapsed] [data-dsc-center-column] {\n  border-top-left-radius: var(--cx-frame-radius);\n  border-bottom-left-radius: var(--cx-frame-radius);\n}\n\n/* 浅色呈现只覆盖颜色；深色规则、几何与动作保持不变。 */\n\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-sidebar-shell[data-mode=floating] > .dsc-sidebar { --cx-sidebar: #fff; box-shadow: 0 0 0 3px #f3f3f380, 0 8px 28px #0002; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] :is([data-dsc-extension-nav], .dsc-sidebar .dsc-tree-scroll, [data-dsc-app-footer-host]) { scrollbar-color: #00000026 transparent; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] :is(.dsc-sidebar .dsc-new-chat:hover, .dsc-thread:hover, .dsc-project:hover, .dsc-ui .dsc-project-more:hover, .dsc-ui .dsc-project-more:focus-visible) { background: #0000000d; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-thread.is-active { background: var(--cx-sidebar-selected); }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-sidebar .dsc-brand__badge { background: #303030; color: #fff; }\n\n/* 只调整单色品牌字形，不影响附件和正文图片。 */\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-brand__mark { filter: brightness(0); }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-more-page { background: #fff; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-workspace-mark { color: #303030; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-workspace-mark:focus-visible { outline-color: #2b68cb; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-search { background: #00000005; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-brand small { color: #fff; background: #303030; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-menu { box-shadow: 0 8px 24px #0000001a; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] :is(.dsc-option:hover, .dsc-option:focus-visible) { background: #00000009; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] :is(.dsc-pill:hover, .dsc-pill[aria-expanded=true]) { background: #0000000a; color: #0d0d0d; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-pill[data-warning=true] { color: var(--cx-warning); }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] :is(.dsc-back:hover, .dsc-slider-labels button:hover) { color: #0d0d0d; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-tick::after { background: #adadad; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-tick.is-on::after { background: #ffffff4d; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-slider:not([aria-disabled=true]) .dsc-tick:hover::after { background: #7f7f7f; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-slider:not([aria-disabled=true]) .dsc-tick.is-on:hover::after { background: #ffffff73; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] :is(.dsc-modal__save, .dsc-modal__panel[aria-labelledby=\"dsc-edit-workspace-title\"] .dsc-modal__save) { background: #0d0d0d; color: #fff; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] :is(.dsc-modal__save:hover:not(:disabled), .dsc-modal__panel[aria-labelledby=\"dsc-edit-workspace-title\"] .dsc-modal__save:hover:not(:disabled)) { background: #303030; color: #fff; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] :is(.dsc-modal__remove, .dsc-modal__panel[aria-labelledby=\"dsc-edit-workspace-title\"] .dsc-modal__remove) { background: #c9363412; color: #c93634; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] :is(.dsc-modal__remove:hover:not(:disabled), .dsc-modal__panel[aria-labelledby=\"dsc-edit-workspace-title\"] .dsc-modal__remove:hover:not(:disabled)) { background: #c9363422; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-ui.dsc-permission-dialog { background: #fff; color: #0d0d0d; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-permission-dialog__badge { color: #777; border-color: #00000014; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] :is(.dsc-permission-dialog__description, .dsc-permission-dialog__capabilities span, .dsc-permission-dialog__warning) { color: #777; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-permission-dialog__capabilities { background: #f5f5f5; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-permission-dialog__capabilities li + li { border-color: #00000008; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-ui .dsc-permission-dialog__more { color: var(--cx-link); }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-permission-dialog__help { background: #f5f5f5; color: #777; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-ui .dsc-permission-dialog__cancel { background: #eee; color: #303030; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-ui .dsc-permission-dialog__cancel:hover:not(:disabled) { background: #e5e5e5; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-ui .dsc-permission-dialog__confirm { background: #c9363412; color: #c93634; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-ui .dsc-permission-dialog__confirm:hover:not(:disabled) { background: #c9363422; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-plugin-support { color: #898989; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-plugin-support a { color: var(--cx-link); }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-plugin-support a:focus-visible { outline-color: var(--cx-focus); }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-update-progress { background: #0000001f; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] :is(.dsc-update-progress-fill, .dsc-thread-completion) { background: var(--cx-accent); }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-update-message[data-state=update] { color: var(--cx-accent); }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-update-message[data-state=error] { color: var(--cx-danger); }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] :is([role=\"tooltip\"], .dsc-row-tooltip, .dsc-ui.dsc-workspace-tooltip, .dsc-desktop-update-tip),\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-gear-button::after { background: #0d0d0d; color: #fff; border-color: #ffffff14; }\n\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-desktop-update-tip strong { color: #fff; }";

    const SKILLS_CSS_TEXT = "/* 技能页：只作用于自有 .dsc-skills-* 结构，不改宿主令牌与布局。 */\n.dsc-skills-page {\n  box-sizing: border-box;\n  min-height: 100%;\n  padding: 30px 30px 56px;\n  color: #dfdfdf;\n  background: #181818;\n  font: 14px/22px \"Segoe UI\", \"Microsoft YaHei\", sans-serif;\n  overflow: auto;\n}\n.dsc-skills-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; flex-wrap: wrap; }\n.dsc-skills-heading h1 { margin: 0; font-size: 22px; line-height: 30px; font-weight: 600; letter-spacing: -.01em; }\n.dsc-skills-heading p { margin: 4px 0 0; color: #989898; font-size: 14px; line-height: 22px; }\n.dsc-skills-toolbar { display: flex; align-items: center; gap: 10px; }\n.dsc-skills-scope {\n  max-width: 220px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\n  padding: 4px 10px; border: 1px solid #ffffff14; border-radius: 999px; color: #989898; font-size: 12px;\n}\n.dsc-skills-search {\n  display: inline-flex; align-items: center; gap: 6px; width: 240px; height: 32px; padding: 0 12px;\n  border: 1px solid #ffffff14; border-radius: 999px; color: #989898; background: transparent;\n}\n.dsc-skills-search:focus-within { border-color: #ffffff2e; color: #dfdfdf; }\n.dsc-skills-search input { flex: 1; min-width: 0; border: 0; outline: 0; background: transparent; color: #dfdfdf; font: inherit; }\n.dsc-skills-search input::placeholder { color: #777; }\n.dsc-skills-toolbar .dsc-icon-button { width: 32px; height: 32px; border-radius: 999px; color: #989898; }\n.dsc-skills-toolbar .dsc-icon-button:hover { background: #222; color: #dfdfdf; }\n\n.dsc-skills-section { margin-top: 26px; }\n.dsc-skills-section-title {\n  margin: 0 0 12px; padding-bottom: 8px; border-bottom: 1px solid #ffffff14;\n  font-size: 16px; line-height: 22px; font-weight: 600; color: #dfdfdf;\n}\n.dsc-skills-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px 28px; }\n.dsc-skill-card {\n  display: flex; align-items: center; gap: 12px; width: 100%; height: 60px; padding: 8px 10px;\n  border: 0; border-radius: 10px; background: transparent; color: inherit; text-align: left; cursor: pointer;\n  transition: background-color 150ms ease;\n}\n.dsc-skill-card:hover { background: #222; }\n.dsc-skill-card:focus-visible { outline: 2px solid #ffffff2e; outline-offset: -2px; }\n.dsc-skill-card-icon { display: inline-flex; flex: none; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 10px; background: #141414; }\n.dsc-skill-cube { display: block; }\n.dsc-skill-card-copy { display: flex; flex-direction: column; min-width: 0; flex: 1; gap: 2px; }\n.dsc-skill-card-title { font-size: 14px; line-height: 20px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.dsc-skill-card-desc { font-size: 14px; line-height: 20px; color: #989898; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.dsc-skill-card-flag { flex: none; display: inline-flex; color: #989898; }\n.dsc-ui .dsc-skills-more {\n  margin-top: 6px; padding: 4px 2px; border: 0; background: transparent; color: #989898;\n  font: inherit; font-size: 13px; cursor: pointer; text-align: left;\n}\n.dsc-skills-more:hover { color: #dfdfdf; }\n\n.dsc-skills-state { padding: 22px 2px; color: #989898; font-size: 14px; }\n.dsc-skills-state button { margin-left: 10px; padding: 2px 10px; border: 1px solid #ffffff14; border-radius: 6px; background: #202020; color: #dfdfdf; font: inherit; cursor: pointer; }\n.dsc-skills-state-error { color: #fa6665; }\n.dsc-skills-state-warn { color: #d6a75a; }\n\n.dsc-skills-overlay {\n  position: fixed; inset: 0; z-index: 900; display: flex; align-items: center; justify-content: center;\n  padding: 36px 24px; background: #00000026;\n}\n.dsc-skills-dialog {\n  display: flex; flex-direction: column; box-sizing: border-box; overflow: hidden;\n  width: min(600px, calc(100vw - 48px)); max-height: calc(100vh - 72px); padding: 20px;\n  border: 1px solid #ffffff14; border-radius: 20px;\n  background: linear-gradient(180deg, #2b2a2a, #2c2b2b);\n  color: #dfdfdf; box-shadow: 0 18px 48px #00000059;\n}\n.dsc-skills-dialog-headrow { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }\n.dsc-skills-dialog-icon { display: inline-flex; flex: none; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 10px; background: #141414; }\n.dsc-skills-dialog-headactions { display: flex; align-items: center; gap: 4px; }\n.dsc-skills-dialog-headactions .dsc-icon-button { width: 30px; height: 30px; border-radius: 8px; color: #989898; }\n.dsc-skills-dialog-headactions .dsc-icon-button:hover { background: #ffffff14; color: #dfdfdf; }\n.dsc-skills-dialog-title { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; margin-top: 14px; }\n.dsc-skills-dialog-title h2 { margin: 0; font-size: 20px; line-height: 26px; font-weight: 600; }\n.dsc-skills-dialog-kind { color: #989898; font-size: 14px; }\n.dsc-skills-dialog-desc {\n  margin: 8px 0 14px; color: #bdbdbd; font-size: 16px; line-height: 24px;\n  max-height: 28vh; overflow: auto; overflow-wrap: anywhere;\n}\n.dsc-skills-preview {\n  flex: 1 1 auto; min-height: 96px; max-height: 160px; overflow: auto; padding: 12px 14px;\n  border-radius: 12px; background: #232222; color: #c9c9c9; font-size: 13px; line-height: 20px;\n}\n.dsc-skills-preview-note { color: #989898; font-size: 13px; }\n.dsc-skills-plain { margin: 0; white-space: pre-wrap; overflow-wrap: anywhere; font: 12px/20px ui-monospace, \"Cascadia Mono\", Consolas, monospace; }\n.dsc-skills-dialog-foot { display: flex; align-items: center; justify-content: flex-end; gap: 12px; flex: none; margin-top: 14px; }\n.dsc-skills-dialog-notice { margin-right: auto; color: #fa6665; font-size: 12px; line-height: 18px; }\n.dsc-ui .dsc-skills-try {\n  display: inline-flex; align-items: center; gap: 5px; corner-shape: round;\n  padding: 6px 14px; border: 0; border-radius: 999px; background: #dfdfdf; color: #1b1b1b;\n  font: inherit; font-size: 13px; font-weight: 600; cursor: pointer;\n  transition: background-color 120ms ease;\n}\n.dsc-ui .dsc-skills-try:hover { background: #f0f0f0; }\n.dsc-skills-try:disabled { opacity: .6; cursor: default; }\n.dsc-skills-search, .dsc-skills-scope { corner-shape: round; }\n.dsc-skills-preview :is(h1, h2, h3, h4, h5, h6) { font: 600 14px/22px \"Segoe UI\", \"Microsoft YaHei\", sans-serif; margin: 12px 0 8px; }\n.dsc-skills-preview :is(h1, h2, h3):first-child { margin-top: 0; }\n.dsc-skills-preview p { margin: 8px 0; }\n\n@media (max-width: 900px) {\n  .dsc-skills-page { padding: 22px 18px 40px; }\n  .dsc-skills-grid { grid-template-columns: minmax(0, 1fr); }\n  .dsc-skills-search { width: 200px; }\n}\n@media (max-width: 620px) {\n  .dsc-skills-header { flex-direction: column; }\n  .dsc-skills-toolbar { width: 100%; }\n  .dsc-skills-search { flex: 1; width: auto; }\n  .dsc-skills-overlay { padding: 16px; }\n  .dsc-skills-dialog { padding: 16px; border-radius: 16px; max-height: calc(100vh - 32px); }\n  .dsc-skills-dialog-desc { font-size: 15px; line-height: 22px; max-height: 22vh; }\n  .dsc-skills-preview { max-height: 34vh; }\n}\n@media (max-height: 560px) {\n  .dsc-skills-dialog { overflow-y: auto; }\n  .dsc-skills-dialog > * { flex-shrink: 0; }\n  .dsc-skills-dialog-desc { max-height: 20vh; }\n  .dsc-skills-preview { flex: none; min-height: 64px; max-height: 20vh; }\n}\n@media (prefers-reduced-motion: reduce) {\n  .dsc-skill-card, .dsc-skills-try { transition: none; }\n}\n\n/* 技能目录与详情继承同一个浅色状态，不改变数据、预览与打开动作。 */\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-skills-page { color: #303030; background: #fff; }\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] :is(.dsc-skills-heading p, .dsc-skills-scope, .dsc-skills-search, .dsc-skills-toolbar .dsc-icon-button, .dsc-skill-card-desc, .dsc-skill-card-flag, .dsc-ui .dsc-skills-more, .dsc-skills-state, .dsc-skills-dialog-headactions .dsc-icon-button, .dsc-skills-dialog-kind, .dsc-skills-preview-note) { color: #898989; }\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] :is(.dsc-skills-scope, .dsc-skills-search, .dsc-skills-section-title, .dsc-skills-state button, .dsc-skills-dialog) { border-color: #00000014; }\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] :is(.dsc-skills-search:focus-within, .dsc-skills-search input, .dsc-skills-section-title, .dsc-skills-more:hover, .dsc-skills-state button, .dsc-skills-dialog) { color: #303030; }\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-skills-search:focus-within { border-color: #2b68cb; }\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-skills-search input::placeholder { color: #898989; }\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] :is(.dsc-skills-toolbar .dsc-icon-button:hover, .dsc-skill-card:hover, .dsc-skills-dialog-headactions .dsc-icon-button:hover) { background: #f3f3f3; color: #303030; }\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-skill-card:focus-visible { outline-color: #2b68cb; }\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] :is(.dsc-skill-card-icon, .dsc-skills-dialog-icon) { background: #f3f3f3; }\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-skills-state button { background: #f5f5f5; }\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] :is(.dsc-skills-state-error, .dsc-skills-dialog-notice) { color: #c93634; }\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-skills-state-warn { color: #a56a12; }\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-skills-dialog { background: #fff; box-shadow: 0 18px 48px #00000026; }\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-skills-dialog-desc { color: #505050; }\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-skills-preview { background: #f5f5f5; color: #505050; }\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-ui .dsc-skills-try { background: #0d0d0d; color: #fff; }\nbody[data-dsh-codex-sidebar][data-dsc-color-scheme=\"light\"] .dsc-ui .dsc-skills-try:hover { background: #303030; }\n";
    const PROTOTYPE_ICONS = {"home":"<svg viewBox=\"0 0 16 16\" width=\"20\" height=\"20\" aria-hidden=\"true\"><path d=\"M3 7.2 8 3.2l5 4v5.3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z\"/></svg>","tasks":"<svg viewBox=\"0 0 16 16\" width=\"20\" height=\"20\" aria-hidden=\"true\"><circle cx=\"8\" cy=\"8\" r=\"5.5\"/><path d=\"M8 5v3l2 1.5\"/></svg>","plugins":"<svg class=\"dsc-rail__plugin-icon\" viewBox=\"0 0 20 20\" width=\"20\" height=\"20\" stroke-width=\"1.5\" aria-hidden=\"true\"><path d=\"M7.5 3v4m5-4v4M5.5 7h9v2.8a4.5 4.5 0 0 1-9 0V7ZM10 14.3v3.2\"/></svg>","settings":"<svg viewBox=\"0 0 20 20\" width=\"18\" height=\"18\" stroke-width=\"1.4\" aria-hidden=\"true\">\n          <path d=\"M8.80 3.20 L9.07 1.85 A8.20 8.20 0 0 1 10.93 1.85 L11.20 3.20 A6.90 6.90 0 0 1 13.96 4.35 L15.10 3.58 A8.20 8.20 0 0 1 16.42 4.90 L15.65 6.04 A6.90 6.90 0 0 1 16.80 8.80 L18.15 9.07 A8.20 8.20 0 0 1 18.15 10.93 L16.80 11.20 A6.90 6.90 0 0 1 15.65 13.96 L16.42 15.10 A8.20 8.20 0 0 1 15.10 16.42 L13.96 15.65 A6.90 6.90 0 0 1 11.20 16.80 L10.93 18.15 A8.20 8.20 0 0 1 9.07 18.15 L8.80 16.80 A6.90 6.90 0 0 1 6.04 15.65 L4.90 16.42 A8.20 8.20 0 0 1 3.58 15.10 L4.35 13.96 A6.90 6.90 0 0 1 3.20 11.20 L1.85 10.93 A8.20 8.20 0 0 1 1.85 9.07 L3.20 8.80 A6.90 6.90 0 0 1 4.35 6.04 L3.58 4.90 A8.20 8.20 0 0 1 4.90 3.58 L6.04 4.35 A6.90 6.90 0 0 1 8.80 3.20\"/>\n          <circle cx=\"10\" cy=\"10\" r=\"2.3\"/>\n        </svg>","newChat":"<svg viewBox=\"0 0 16 16\" width=\"16\" height=\"16\" aria-hidden=\"true\"><path d=\"M8.1 2.8H4.6a2 2 0 0 0-2 2v6.6a2 2 0 0 0 2 2h6.6a2 2 0 0 0 2-2V7.9\"/><path d=\"m10.9 2.7-5.3 5.3L5 10.4l2.4-.6 5.3-5.3a1.3 1.3 0 0 0-1.8-1.8ZM9.8 3.8l1.8 1.8\"/></svg>"};
    const BRAND_MARK = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADBCAYAAAAgsW7DAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABgkSURBVHhe7d0HtD1VdcdxCxoJwd6CgooRGyqClYgNlNgrEUPsiBorYoyxKxK7sRGMYkVFl41oUOygYokaY4klQbFrIgj2/j1ZP9j/rPf//d//vVvOzJyZuz9rsVgL7ptz5szcuTNn9tn7POdJKaWUUkoppZRSSimllFJKKaWUUkoppZT6VkrZCzgQuJL/v5TShAEPLQH4OXCIfyalNEHA3lu+/GsuAj8upVzSP5tSmhjgA34BEODB/tmU0jpKKRcC/rSUckU9Q5dSdgMu7p9rDbCff/HXONk/n9JKA3YFbgb8HfCPwEeATwGnAT8BfgP8DvgV8EPgc8AHgWcAt/TtDQ14v3/rtwB+oYua/01KKyN+0Q8Gjokv80/9izKPuFjc2NsZAnAd75/TvvvfpTRpwHWBJwAf1S+5fymWFXcHl/Z2+wa8xPvmgDf536U0OcCewOOBz/qXoAMnl1Iu4n3oE7Aj8D3vmAPOGsNcRkpzAy4PPAI4Ffi9n/y1Af8O3MX7MYRSygHev+0BHuB/n9IoATsBdwXeWko520/2rgDPKaVc0PszlOjPTIAvl1Iu4NtIaSb60imopJSye4Sa6gt4t1LKYcCTgaOBY7fzz4uBJwL3j7/TP/vFKzdt8/ze3noU7AI8F/iGn+BdAw71/gwN+KT3cyOaE/FtpLSV+HW9BnAv4LH6lVWQCfCteEX2az+xFgX8LLb5ReAk4BXAI4HbAVfR7b1uc4GjSimf8b/viy5cPk5DAy6j8fO+biRebR7o20orTJND8SU7Engf8E0/cYYQJ+tSr+tqAP7Wx6wFpZSbeF9nAfwSuLVvL60Q4KrAw4ATgf/1kySdC/iQj10rgAd6f2cVrzDv59uconh03c3/+8qJ2fJDdVIDv/WTIm2Nc+3t49gK4B+8z/MCXg9cwbc9FcA9NV8UkZ3vAvbwz0yebhWB1+lZ20+AtH0K/fWxbAnwdu/zIoAzSylPLaVc1tsYM83brLOv312Ju4FSyvki9PUUH4Q0G62t93FtCXCC93kZsebhSIVNe1tjo2On2zffRwH+2T8/KfHF/7TveJoPcAsf25boUc77XENMvL5GodTe5hhogZfv01oxyT29eIh4N5+/+JUA+/sYt6TrcGdFVQIv1dyRt90q4G98P5weA4A/8r8drQjMOc53NC3tAB/rligk2TvcBeAHmkzz9luz2S//FsB3JnMB0BUv0j6lyoC/9/FuiZY1e5+7BLywlLKD92NoCs1WTgfv7/YooK2lcO6FRJTcib5zqR7dYvu4t2TeMOAagPeUUv7Y+zIU4AbAx72fGwE+5tsZFeAewBm+Y6m+liPmgHd7f/ugi4D3pW/AtSK5y++8f5sB3ujbG4V4tfc836HUHeDzrc4Y134NOA/g+d6fGoALa3EYcIlSyp/onNcdB7ALcL2IXlW4+txf/C20MM3bbZ6CNPKWfxhdnezLUpYf72ufgNt7n2YVX/JbxmIzRSN+OPIsaIb+DIWnx+IzLRI7XXkNvf1FjS4EOuL2T/MdSf0BDvfjMjRNUno/+xQhtjt5v7YH2FmFSnTnMuT6k9bjO7YC7At833ciDeJZjU2AHeod7BtwhPfLlVIuFtmXT/e/71ssgtrF+9ikUsqd513vnbqlOQGlE/djNYRFlwPXBHx7o4tiPLMr/r4JwJdafJW5DeDuwB98B1IblIpr6GASZSRu4QcCuNM6fbtmJE1tihbFeV+bA9wxv/zti/fwe/nx69OQWZK2UBSq9em+Kkzqn2vEYWv72hzg+jVnPFO3IrvOw/049gV4mfepb3GLf05OR+CZ/v9boR9V4Oo+hs0Arqy4a+94ah9wvGa5/Zh2TSs/vS8D2Qt4kf/HlgD/WUo5r49hE+J5bvBZ0rS4mCC8th/bLimrcgt3jC1N9G1Pq/EcembaAXivdziNTyzMOsiPcZfy3JkNcCMfuya0fuuU5tdn4JAq/nj7aWvAV5t8/afc+97ZNA19pZ6Kwiq9VUcaoyaXdkfxjcHz3qfuRLx+52vPVVDF207nijmSthKBaoVZ5u1bDVo+q9Vtfg7UpFl4bzedC3ilj9fggKd7R9N0xaq2y/l5UBPwTm931UV1qbbe/ZdS9llmPXMaJ72H7vIiEOfVuqmwVxXwWh+nQcWtf6+53FI7Yja6s+dR4FXe5qpq8tlfJbK9o2m1dHkRiMQxmST23HFuq6hrpO/+pXc0rR7gv7q6CAD38fZWDfCF5t7716rllqYB+FqHF4G3eXurAvg1cB0fk0Ep/5l3NCVdBLqYGAQutapp5JSExMdjcEPkcE/jAHyli/JbkTN/pcrAKyDKx2FwwO28oymtBXy5i1x1wF29ramKYqnn8zEYXAtZW1L7Ik6gi4vApgUzx07VfkopF/V9HxxwW+9sStujpJVa4+/n0bKAJ3lbUwGcWkq5iO9zE4BPeIdT2ogCxZQgxs+lZQEP8bbGDvhXVRPyfW2CEhB4h1OahQqTdnFiK1nJVCYGgRf4/jVl6NJNadyAD6o+np9XywJuqqo+3t5YaAm9gp18v5qid7st5GpL4wZ8oKOLgIptvsvba50uisCevj/NUdFD73xKi4g7ge1W31mG4uXH8EgQxUIHS78+t1zxlyo7WdF9fp7VANwY+JE32ALgN8DRXQRKdUYRWL4jKS1L5bO12s/PtxqAR3l7Q1JlIeBY4Fre1+YBz/MdSqmGyCzURbDQgd7WEGJtxJHAHt7HUVCJpFjvnVIn4ktyDT/3lgG82Nvpi5ZGK4OyLkJDF1xdmm5ZsrBn6hpwptaY+Pm3iChM89/eRheUrETJcIE3RIjyPsqS5X0aLeAI3+mUuhDFLh/t5+C8NAno264lQpsfExWvtTrx4t7+pAAn+SCk1CUlvlwmFh54tm+zBuCsLuYrmqXVSF3lY9NrGlUOBr4TS0c1GaR/vgp8P/7fT/zv0mqI82B/Pyc3E3NWX/Ht1aCEJN7epJVSbu6DMK94tvuIKpnqGQm4BXBd3ToBOwE76qBp3XP8s4OCROL/7VJKuUncbh2lXwbgP7q6KKX26LyZJ2gIuL5voxbgm6Of1JuH6o/5IMzhbD3PdfGeN0pI7ws8FHhjrDvPugQTFcf3Dn4erAd4mv99LcD35rkYjd6iST+1ZqDP0sVx13C1Usp9geOA071PafwU66+7Rz/+a2nVof9dLfFoupO3OUm61Yksr3MDXubb65MeK4A/L6U8NesVTkuUxtJFfpsLgYJtOn5lrbva6slNmhSrq37tIzAL4N6+vSHFnMOTuvx1SP0Cfg+cANwm5pH07v91/rmaogbG7n5+TRJwKx+AORzk22tFTCoe0+pikTQ/4OuaJ/D/XttKXQD0PO0DMCvgEN9eayLP/AMzvfm24tWs1qmfpOSUwBn+mVUUb7Q6WcHYHOClPgCzAu7n22uZ3jdrwlO3lb4vqyLiLjSDvpcn7IhXtnqMehjwnkUfDccuJgF3XDs2k6XYZh+AOdzXtzcGwN4xwbRSF4KIZZ95fXpMtmmF6Nm+rYlTOvz28vTXVko57zK3xsDhvs0xWXMhmHxtei2aWfS2NorDLvNDMSrA8T4Gk1RKuaCeA30AZgW83Lc5RnEheIvv35QA9/D9nhdwqDLd+LanBni67/sklVIutOQF4C2+zTGLdd2f8v2cgvXepy9CcRfAt3z7UzKGye0qVOJZKYx8AGYFvNu3OXZ69ovQ4x/4/o6Zkmj6vi4KuFJXC3EasY/v8yQtu6BC72X1GOHbnYJIj67lqpMQSSofXivEVZOJwBe8nbGLxB/TXvu/BbCfD8A89N4Y2Nm3OyXAXZT6yfd9rLTUFXilwrhj5eUhCprS46Dv+2aAS2gFqLcxZnpT4vs5WXHgF6a87MC1fbtTE/kSXuH7PyVxYVBSy7ku6IolAN7v2xsr3fX5Pk7WshcA0cSZb3eqgL+MpaKTFUlb5krcGRfIScwJKDWe799kVboALJ3bbUyAXaeePk0XOU30+b5vJCYGf+jbGptFshONVqULwDG+3VXQZUKKPkTJqu2W1gJO9H3eTCnlgDEnbAF+tmq5AGtcAD7m210VSm89wrRlCnPVcb8kcFXgVf6BNfbyfd6M3jT4RsZCaeh8fyat0gVAz8TVq8COBXD1KH3VvPjV3+YXTgt//LOy6OOdQml9W2Ogi6Hvy6TVuADIKOugVVRKudiiadX6pHUP3ncB/to/K8Bz/LOzUKpvJdb07bUOeJDvy6QtGwewRWuZgYYCvNDHpiV6/+99lg0uAI/yz84KuLVvr2VaEFYrXHo0Yu330ivhgH/yba+qlissxa/yNoU4lHLLPytK7e6fnYeCjXybrYo1MXMHQ42aUnlXWuu9GuunZ6Touo6TVi4MOBXYM5J/6NXdi/wzorRYwJV93+YR8QHf9W23CHib93/yIiPwwqsBtwB+pffjvv1VpnyJrSYciUSbinlX7rt1Ad+uURyjlHJn33aLgEd43ydv2XwAawF39e2vuqh0tN0vWct0Aai10At4k2+/NcoJ4f2evMgI9HEfjEUot6BvP51z8t9sjLUPY81/rQuAoiebHYMpr2rdFPB6H5BFqMijav/59tM5Y3xTPSb5mLUsMgYv/QiwRSnlcd5GQ17j/V0ZwLE+GouI1ygrHQ+wEeBOrU4MridWel7V92NRUQi2yUxCNdKljRbwEB+QRa3USqoFxGrCpV+79gW4j+/DMhRX4G0MLepbrkYZsPUo4YUPyqJUZMK3n7a2TCGWvmmdv/d/GREheKa3M6Ta+zg6Wvtd63VVFJLYzdtIW1PiDR+7Vi0bDOQUNOZtDEn5H72PKyUCQs7ygVkU8GBvI22r1txL15QObd4sQRuJmo1NzIVEivMreh9XSrwK/DcfnEUpR5y3kbYVVW4/5uPXIj3aaRLP92ERsQz5p97GEIAPe/9WEvBGH5xFRV33PbyNtC3gMhFw0zzgEzV+LSNpSBMToaqB6P1bScoZ74OzpKd6G2l9wL5jKcIZRTP3832YVfz6N5E7ISI0c75KdFX2AVpGJIjMoKAZad7Ex7BV8dysoJ6ZHwkiBuBeqk/o2xvKFIvaLExZYpapELQerQf3dtL2Aa/2MWxZTA4+UcFf660EjXThKsf+wgi1bcpKB/+sp/at2dTqBnZN9eiBz/s4joHu+PSLqqXFes0HnNLy3AbwPzXfbEwCcLQP1DLiGWvpSaNVAlxTkWk+lqkuXah87FcecLAPVAXP8nbSxoAH+CCmemLNynV83FcecIXatd+VhXaVMwYvCnizj2WqA3ivj3eKgKBI7VXVSmZaWVK8Lmty5dzYaVWmj3cKumX3AVtWVNa9gLeVNlb71Ww651z80npvLFIopdzcB62G2stKVwXwfB/LtDjNr/gYpzXiVVSVHIFrRbagvAuYk9JUq1yVj2eaH3B6zQxHk6XiET54NeRdwGKUrLLWcu1VlnH/MwJu64NXQ8wFrGbixSUBT/HxTLOLCdWZQ5dXWlePAaLKsd5e2pzWVdRcsr2CDvMxTRvYXrWYZQE/UCFNby9tTjH3Y1k12JK881wAcAMfyIoyOnBBwGN9MNPGlIjVxzFtIrIEfdYHs4YoI/Zn3mbaXM1CLqsgs1MtQc/rPqC1AO/09tJsorBnPgpsQnkHdSfr45dmFMlCf+wDWwtwd28zzSYfBTan0uQ+bmlOqvfnA1tLvGnYplZ92pzCWSNHX1pHpC67uI9bmpNKQynJpw9wLXmVXlzUc8hHgXWo2I2PV1oQ8A4f4JqAA73NNBvgkT6eq07Fbn2c0hI6fiW45XbtUt5umo1KW/mYrqo4ly7hY5SWBPyLD3ZNwAneZpqN0q6VUs72MV1Fuda/I8D1uy7moNoE3m6azZgKjnZFyUh9XFJFenfvg15TVBS6pbebZlOzutPYAJ/Lpb4di1j03/rg16S1Aitdq30JpZSLrmIasagzeDUfj9QB4OV+ADrwmbyaLwa4qQ/m1AH39HFIHSmlXLbL6MAtWn+VA9xGt9zApxTLoNJewJX9c0NQtR4fzwnLhWV9U2YVPwpdUBSit90Cffm9r6JCKFEdZ/AgFOAk79/UxJupTPDZN9W17yJ9+HqAx3j7Q5vllWjcGRzsf9uXKDv+Xe/XVETx2Yv6fqeeADfyg9KVljK5RmaeL3sftwc4FfgL304flOG561e3Q4i6frmcfGjAS/zgdEWlpb39IcQinLmz9AJvVey+b69rwOHelzGLV8X7+36mAQA79VnvHbi392EIwLu8b7NQ0c8op72jb7NLwHHel7HKGf/G9H2bqdl270Pflq2eFHcQB/h2u6JXql1ld+oT8ATft9QA4Cg/WF1SMgzvQ5/0TO99WgTwAt1F+fa7AOwahVpHKct5Nyyeiz/pB61LwNHej76o2jHwQ+/TIqJWXS93AwqzHmP+AOB435fUmCFWpOnEAC7sfekD8GLvzzKA56gMmLdTm15Netst0w9LRoWORCnlzn4Au6ZnW+AK3peuAdesPfcR+3I9b6s24GnedouAL+Ta/pEBjvQD2bXILdjLbfRaerXnfVlWpEw/wtuqrfWqw8CPgCt5v9MIdL1seD0qntn35GDkS+xkdaSiDYHLeZs1Aa/1dlsQK0Jv5P1NIwHsPNRrJ+AtfaYX6/INiO5sVKjV26xF5dqB93m7Q1P0ZJaSHzndvgFn+MHtA/BN4Nbepy5o4i5qz3UGeKa3W4sq5pZSTvY2h6Zwa+AOWdNvxCKN2E/84PYFeF4fJaFrxQVsBPhgV5Odeq3Z4kVAgK8Bx8QYd/6WJFWmlN9d1hXYDPBF4Bber9r6iINQ7AFwe2+7hpYvAlvoTismmffy/qeGKYbfD2bfFHXXZRUi4JXeZleAZ3j7NehuadF1Dn3S61flO1DV34wRGIkuC43OKp7VD/K+1QC8ydvrEvAeYBfvRw09pX2rAvhqKeVxXb8xSRUAj/ADOIR4xVbtsaCUsjtwprfTtXhLsJ/3p4ZlFzz1DTgr5gr29n1JDWnlIiCRtefRyySXAK4ev0KDiPXxD/d+1TDGsmNRElwZm3oPDEsz6iun4KxigYwmwHQrebNZUk1FKLBW8/3ctzeQ13SxslCv4oZ8k7MM4CPKH5AxBQ0C7qawVz9oLVD8AnCKIhr1Dh54aPyjZB4KNFLM/u/974YWxTH29bFeFnDtyME3SvEm6K98v9LAgFvp2c0PWFpchEQ/u3Y0pLYHvN3bGxPgHr5faWARLLRy1Wy6Bnwv7liqVlkCnu5tjUWEp5/f9ykNLLLVfNwPWFpePM7otd4BtcJqgTvqAuNttS5WWnby6jQtKbLsvMEPWqonIun0qkzzL7v6MZhHKeViwKtancdZjyYzaz8apcqAJ/uBS/Xp7UVMZr5Ny6hLKYcppgC4il6L6pdSkZO6a9A/ymQcX3rdrekz+vcNWg8fXgv4qJ9vqUHKLKSEEH4AU/cizPYPSu+mykJx16AFOV8Hvh8XjnP437YOOMTPtdQoFdrUe1w/iKlpzwKeUithak3AsX6OpcZFGS4ly0wNA36ztl5DvDI8NBbs/MI/36e4Yzlq6zMrjYrWggPf8IObhgecttF6hFLKbloNqtWSwKd7iirU44uyCSuIaw/vUxqh+FV5nR/pNJyIub+kH6uNAJeO+gT3VGJS4BWanFOJOeDbs+ZYjJh/LYbSHMUJqhMB3D+2nTP9UxVrwE/zEyL1R1/S2mXbo7iMak0q0aqCw24Yd3463gfHv5VcRv9d//8a+rz+zreVJk6LdVSYo8V4/KmLV4c39GOSUu+AGwMf8pM01RdrDJ6ZeflSc2KS6Wt+0qY6Yllt/uqndkUo8eEKVvETOC0mAoEe4mOdUrOAyyhpZkYSLg74GfDceWf4U2qGlsECT8j4gdnFF/8ly6RIS6kpKh8eUWmf9hM+/T8Fzqjc+e4+filNBrC/CmJmFqJzRRCNkoZc3scqpclSDnllvI0INK18WxkRG/+OWHGZRTXSagP2BB6virRjSm4xj8iZ/27gQV3VF0xp9GIJsuYL3jzmPIURtPOViLNXGG3VvIApTV7Uyds3YgveEEkxBityupFIAKrVby9V0gvd1ZRSdvB9SiktKBar7BELVI4AjgM+HCvSOi0OojX1kc9Oef8/ALw6+qBf92t1WfQ0pbQBYOdSymVLKfsAd48v5WOVfFPVeqJiz/FRZETP4acojx5wYtQoVCLULZ/TklbNR6ia8kHAnVTrLmIaLu1tp5RSSimllFJKKaWUUkoppZRSSimllFKauP8D0a9eXOntdgwAAAAASUVORK5CYII=";
    const PLUGIN_VERSION = "0.1.0";
    const PLUGIN_PACKAGE = "dsh-codex-sidebar";
    const PLUGIN_ID = "dsh-codex-sidebar";

    const React = require('react');
    const { createPortal } = require('react-dom');
    const { Button, IconRefreshOutlineRegular } = require('@deepseek-ai/dsh-client-ui-primitives');
    const { createSnapshotStore } = require('@deepseek-ai/dsh-client-store');
    const h = React.createElement;
    const { useState, useEffect, useLayoutEffect, useRef, useMemo, useCallback, useSyncExternalStore, useId } = React;

    const DEFAULT_SIDEBAR_WIDTH = 288;

// 自绘图标沿用本项目原型；功能与目录全部来自宿主。
// ---- DIAGNOSTIC: surface render errors instead of silent abdication ----
class CodexSidebarRenderBoundary extends React.Component {
  constructor(props) { super(props); this.state = { err: null }; }
  static getDerivedStateFromError(err) { return { err }; }
  componentDidCatch(err) { try { console.error("[codex-sidebar] sidebar render failed", err); } catch (e) {} }
  render() {
    if (this.state.err) {
      const e = this.state.err;
      const text = String((e && (e.stack || e.message)) || e);
      return createPortal(h("pre", { style: "position:fixed;top:60px;left:60px;z-index:99999;max-width:500px;max-height:80vh;white-space:pre-wrap;font:11px/1.45 ui-monospace,monospace;color:#ff6b6b;background:#1b1b1b;padding:12px;border:1px solid #ff4444;box-shadow:0 8px 24px rgba(0,0,0,0.5);overflow:auto;margin:0" }, "CODEX SIDEBAR RENDER ERROR:", String.fromCharCode(10, 10), text), document.body);
    }
    return this.props.children;
  }
}

const paths = {
  folder: 'M2.3 6.1c0-.75.6-1.35 1.35-1.35H6.2l1.5 1.6h4.85c.75 0 1.35.6 1.35 1.35v4.9c0 .75-.6 1.35-1.35 1.35h-8.9c-.75 0-1.35-.6-1.35-1.35Z',
  folderOpen: 'M2.1 12.2V4.4c0-.8.6-1.4 1.4-1.4h2.9l1.4 1.6h4c.8 0 1.4.6 1.4 1.4v1M2.1 12.2l2.2-4.8h9.3a.8.8 0 0 1 .7 1.1l-1.8 4a1.5 1.5 0 0 1-1.4.9H3.5a1.4 1.4 0 0 1-1.4-1.2Z',
  chat: 'M13 7.5a5 5 0 0 1-5 5H3l-1 1V7.5a5.5 5.5 0 1 1 11 0Z',
  pencil: 'M8.1 2.8H4.6a2 2 0 0 0-2 2v6.6a2 2 0 0 0 2 2h6.6a2 2 0 0 0 2-2V7.9m-2.3-5.2-5.3 5.3L5 10.4l2.4-.6 5.3-5.3a1.3 1.3 0 0 0-1.8-1.8ZM9.8 3.8l1.8 1.8',
  search: 'M10.5 10.5 14 14M11.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z',
  plus: 'M8 3v10M3 8h10',
  more: 'M2 2h4v4H2zM2 10h4v4H2zM10 10h4v4h-4zM10 4h4M12 2v4',
  chevron: 'm5 6 3 3 3-3',
  back: 'm10 3-5 5 5 5',
  check: 'm3.5 8 3 3 6-6',
  shield: 'M8 1.8 13 4v4.2c0 2.8-2.3 4.8-5 6-2.7-1.2-5-3.2-5-6V4ZM8 5v3.6m0 2.1v.1',
  pin: 'm5 2 6 0-1 4 2 2H9v5l-1 1V8H4l2-2Z',
  archive: 'M3 5.5v6.3c0 .9.7 1.7 1.7 1.7h6.6c1 0 1.7-.8 1.7-1.7V5.5M2.5 2.5h11v3h-11ZM6.2 8h3.6',
  monitor: 'M2 3h12v8H2zM5.5 13h5M8 11v2',
  arrowUpRight: 'M4.8 11.2 11.2 4.8M5.9 4.8h5.3v5.3',
  close: 'M4 4l8 8M12 4l-8 8',
  settings: 'M6.5 2.5 7 1h2l.5 1.5 1.6.9 1.5-.3 1 1.8-1 1.2v1.8l1 1.2-1 1.8-1.5-.3-1.6.9L9 13H7l-.5-1.5-1.6-.9-1.5.3-1-1.8 1-1.2V6.1l-1-1.2 1-1.8 1.5.3ZM10.2 7a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0Z',
  skill: 'M8 2 14 5.2v5.6L8 14 2 10.8V5.2ZM8 2v6m6-2.8L8 11.4 2 5.2'
};
function Icon({ name, size = 16, ...props }) {
  return h('svg', { viewBox: '0 0 16 16', width: size, height: size, fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, ...props }, h('path', { d: paths[name] || paths.chat }));
}

// 「更多」是插件自有 main 面板；与技能页同模式，点击即切换布局页面，
// 历史、右侧内容与轨道高亮全部由 activePanelId 推导，不再使用侧栏局部状态。
const MORE_PANEL_ID = 'dsh-codex-sidebar-more';

// 0.2.1-rc.2/rc.3 的 root store handle.create() 返回 AppFrame 已持有的同一布局实例。
// 仅将启动/重新展开时的默认值 280 改为 288；真实 grid、分隔条和宽度变量仍由宿主计算。
function initializeSidebarWidth(ctx) {
  const entry = ctx.slots.entriesOfSlot('root')[0];
  const store = entry?.store?.create();
  if (!store?.actions?.setSidebar || !store.getSnapshot().layoutInfo) {
    console.warn('codex-style: 当前 root 未提供已核实的侧栏宽度动作');
    return;
  }
  let previous = store.getSnapshot().layoutInfo.sidebar;
  let owned = false;
  const sync = initial => {
    const width = store.getSnapshot().layoutInfo.sidebar;
    const reopening = previous === 0 && width === 280;
    if (width !== previous) owned = false;
    previous = width;
    if (width !== 280 || (!initial && !reopening)) return;
    // 先更新本地记录，避免 setSidebar 的同步通知被误认为用户拖动。
    previous = DEFAULT_SIDEBAR_WIDTH;
    owned = true;
    store.actions.setSidebar(DEFAULT_SIDEBAR_WIDTH);
  };
  const unsubscribe = store.subscribe(() => sync(false));
  sync(true);
  return () => {
    // 卸载时只恢复本次仍在生效的默认值；保留用户后续拖动值和 0px 收起态。
    unsubscribe();
    if (owned && store.getSnapshot().layoutInfo.sidebar === DEFAULT_SIDEBAR_WIDTH) store.actions.setSidebar(280);
  };
}

function PrototypeIcon({ name, className = '' }) {
  return h('span', { className: 'dsc-proto-icon ' + className, 'aria-hidden': true, dangerouslySetInnerHTML: { __html: PROTOTYPE_ICONS[name] } });
}
function useSlotVersion(ctx, names) {
  const axis = names.join('|');
  const subscribe = useCallback(listener => {
    const disposers = names.map(name => ctx.slots.subscribe(name, listener));
    return () => disposers.forEach(dispose => dispose());
  }, [ctx, axis]);
  const snapshot = useCallback(() => names.map(name => ctx.slots.getVersion(name)).join(':'), [ctx, axis]);
  return useSyncExternalStore(subscribe, snapshot, snapshot);
}
function usePanelDirectory(ctx) {
  const version = useSlotVersion(ctx, ['main', 'sidebar.panellist']);
  const locale = useSource(ctx.locale);
  return useMemo(() => {
    const mains = new Set(ctx.slots.entriesOfSlot('main').map(entry => entry.options.key));
    return ctx.slots.entriesOfSlot('sidebar.panellist').map(({ options }) => ({
      id: options.id, order: options.order ?? 0,
      label: (typeof options.label === 'function' ? options.label() : options.label) ?? options.id,
      available: mains.has(options.id)
    })).sort((a, b) => a.order - b.order);
  }, [ctx, version, locale]);
}
// 导航分类只由当前 main 面板决定；「更多」注册为真实面板后与其他页面同源。
function navigationCategoryOf(panel) {
  const activePanelId = panel === null || panel === undefined || panel.activePanelId === undefined ? null : panel.activePanelId;
  if (activePanelId === MORE_PANEL_ID) return 'more';
  if (activePanelId === null) return 'home';
  if (activePanelId === 'plugins') return 'plugins';
  if (activePanelId === SKILLS_PANEL_ID) return 'skills';
  if (activePanelId === 'schedules') return 'tasks';
  return 'extension';
}
// 侧栏二级区域：第三方页沿用最近的常规区域；「更多」只在它自己的页面显示，
// 从「更多」后退到第三方页时不残留「更多」菜单。
function sidebarSectionOf(category, last, hasMore) {
  if (category !== 'extension' && category !== 'more') last.current = category;
  return category === 'more' && hasMore ? 'more' : last.current;
}
function useNavigationDirectory(ctx, sidebar) {
  const panel = useSource(ctx.layout.panelInfo);
  const panels = usePanelDirectory(ctx);
  const moreVersion = useSlotVersion(ctx, ['sidebar.panellist.actions']);
  const hasMore = useMemo(() => ctx.slots.entriesOfSlot('sidebar.panellist.actions').some(entry => entry.options.id === 'entry-customization'), [ctx, moreVersion]);
  // 官方分组只按已核实的 main id 识别；社区入口的名称不能决定它属于自定义。
  const pluginRows = panels.filter(row => row.available && row.id === 'plugins').concat([{ id: SKILLS_PANEL_ID, order: 90, label: '技能', available: true }]);
  const taskRows = panels.filter(row => row.available && row.id === 'schedules');
  const category = navigationCategoryOf(panel);
  return { panel, panels, pluginRows, taskRows, category, hasMore };
}

// 原 sidebar entry 拥有 panellist 的 renderSlot 授权。保留原按钮、图标及注入，
// 仅以公开 slot 锚点定位原 nav，给第三方行添加可释放标记并用 CSS 呈现在轨道中。
// 不复制 component、不借用私有 renderer、不搬移 React 所拥有的 DOM。
function useNativeExtensionNavigation(sidebar, target, panels) {
  useLayoutEffect(() => {
    const host = document.querySelector('[data-slot="sidebar"]');
    if (!host || !target.current) return;
    const attributes = new Map();
    const properties = new Map();
    let nav;
    let frame;
    const mark = (node, name, value) => {
      let saved = attributes.get(node);
      if (!saved) attributes.set(node, saved = new Map());
      if (!saved.has(name)) saved.set(name, node.getAttribute(name));
      if (value === null) node.removeAttribute(name);
      else if (node.getAttribute(name) !== value) node.setAttribute(name, value);
    };
    const property = (node, name, value) => {
      let saved = properties.get(node);
      if (!saved) properties.set(node, saved = new Map());
      if (!saved.has(name)) saved.set(name, [node.style.getPropertyValue(name), node.style.getPropertyPriority(name)]);
      node.style.setProperty(name, value);
    };
    const hidePreview = () => sidebar.hide();
    const followNative = () => sidebar.hide();
    const detach = () => {
      nav?.removeEventListener('pointerenter', hidePreview);
      nav?.removeEventListener('focusin', hidePreview);
      nav?.removeEventListener('click', followNative, true);
    };
    const sync = () => {
      frame = undefined;
      const glyphs = [...host.querySelectorAll('[data-slot="sidebar.panellist"]')];
      const buttons = glyphs.map(glyph => glyph.closest('button'));
      // rc.3 可在「更多」中取消固定，真实行因而只是目录的子集；保留原生固定状态。
      const rows = buttons.map((button, i) => {
        if (!button) return null;
        const label = button.getAttribute('aria-label');
        if (buttons.length === panels.length && panels[i]?.label === label) return panels[i];
        const retained = panels.find(row => row.id === button.getAttribute('data-dsc-extension-row') && row.label === label);
        if (retained) return retained;
        const matches = panels.filter(row => row.label === label);
        return matches.length === 1 ? matches[0] : null;
      });
      // 同名或提交时序不同的行保留原生入口，不让单行识别失败隐藏整个导航。
      if (!buttons.length || buttons.some(button => !button)) return;
      const nextNav = buttons[0].closest('nav');
      if (!nextNav || buttons.some(button => button.closest('nav') !== nextNav)) return;
      if (nextNav !== nav) {
        detach();
        nav = nextNav;
        nav.addEventListener('pointerenter', hidePreview);
        nav.addEventListener('focusin', hidePreview);
        nav.addEventListener('click', followNative, true);
      }
      mark(nav, 'data-dsc-extension-nav', '');
      buttons.forEach((button, i) => {
        const row = rows[i];
        const extension = !row || (row.available && row.id !== 'plugins' && row.id !== 'schedules');
        mark(button, 'data-dsc-extension-row', row?.id ?? '');
        mark(button, 'data-dsc-extension-hidden', extension ? null : '');
        if (!extension) return;
        mark(button, 'title', row?.label ?? button.getAttribute('aria-label'));
        const glyph = glyphs[i].parentElement;
        mark(glyph, 'data-dsc-extension-glyph', '');
        [...button.children].filter(child => child !== glyph).forEach(child => mark(child, 'data-dsc-extension-label', ''));
      });
      // rc.3「更多」由自有导航与二级侧栏呈现；隐藏旧入口，原宿主注册与生命周期继续保留。
      for (const button of nav.querySelectorAll('button[aria-haspopup="menu"]')) {
        if (button.querySelector('[data-slot="sidebar.panellist"]')) continue;
        mark(button, 'data-dsc-extension-hidden', '');
      }
      const box = target.current.getBoundingClientRect();
      property(nav, '--dsc-extension-left', box.left + 'px');
      property(nav, '--dsc-extension-top', box.top + 'px');
      property(nav, '--dsc-extension-width', box.width + 'px');
      property(nav, '--dsc-extension-height', Math.max(0, box.height) + 'px');
    };
    const schedule = () => { if (frame === undefined) frame = requestAnimationFrame(sync); };
    const content = new MutationObserver(schedule);
    content.observe(host, { childList: true, characterData: true, attributes: true, attributeFilter: ['aria-label'], subtree: true });
    const size = new ResizeObserver(schedule);
    size.observe(target.current);
    window.addEventListener('resize', schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      content.disconnect(); size.disconnect();
      window.removeEventListener('resize', schedule);
      detach();
      for (const [node, saved] of attributes) for (const [name, value] of saved) {
        if (value === null) node.removeAttribute(name); else node.setAttribute(name, value);
      }
      for (const [node, saved] of properties) for (const [name, [value, priority]] of saved) {
        if (value) node.style.setProperty(name, value, priority); else node.style.removeProperty(name);
      }
    };
  }, [sidebar, target, panels]);
}

// 导航与二级侧栏共享呈现状态；悬停计时不调用 layout，也不发起模型请求。
function createSidebarPresentation() {
  const store = createSnapshotStore({ collapsed: true, preview: null });
  let opening;
  let closing;
  const cancel = () => { clearTimeout(opening); clearTimeout(closing); };
  const hide = () => { cancel(); if (store.getSnapshot().preview !== null) store.set({ ...store.getSnapshot(), preview: null }); };
  const show = category => {
    cancel();
    if (store.getSnapshot().collapsed) store.set({ ...store.getSnapshot(), preview: category });
  };
  return {
    store, hide, show, hold: cancel, dispose: cancel,
    setCollapsed(collapsed) {
      if (store.getSnapshot().collapsed === collapsed) return;
      cancel();
      store.set({ ...store.getSnapshot(), collapsed, preview: null });
    },
    enter(category) {
      cancel();
      if (!store.getSnapshot().collapsed || store.getSnapshot().preview === category) return;
      opening = setTimeout(() => show(category), category === 'home' ? 300 : 100);
    },
    leave() {
      cancel();
      closing = setTimeout(hide, 140);
    }
  };
}

// 点击「更多」= 选中插件自有 main 面板；失败只回显错误，不改变当前页面。
function openMorePanel(ctx, sidebar, setError) {
  setError('');
  sidebar.hide();
  try { ctx.layout.selectPanel(MORE_PANEL_ID); } catch (e) { setError(errorText(e)); return false; }
  if (sidebar.store.getSnapshot().collapsed) ctx.layout.toggleSidebar();
  return true;
}

function makeNavigationRail(ctx, sidebar) {
  return function NavigationRail() {
    const { panels, pluginRows, taskRows, category, hasMore } = useNavigationDirectory(ctx, sidebar);
    const { collapsed, preview } = useSource(sidebar.store);
    const [error, setError] = useState('');
    const extensions = useRef(null);
    useNativeExtensionNavigation(sidebar, extensions, panels);
    const pick = id => {
      sidebar.hide();
      setError('');
      try { ctx.layout.selectPanel(id); } catch (e) { setError(errorText(e)); }
    };
    const openMore = () => { openMorePanel(ctx, sidebar, setError); };
    const item = (id, name, icon, action, active) => h('button', {
      key: id, type: 'button', className: 'dsc-rail__item' + ((active === true || category === id) ? ' dsc-rail__item--active' : ''),
      title: collapsed ? undefined : name, 'data-tip': name, 'data-dsc-preview-trigger': id, 'data-preview-enabled': collapsed,
      'aria-label': name, 'aria-current': (active === true || category === id) ? 'page' : undefined,
      'aria-haspopup': collapsed ? 'dialog' : undefined, 'aria-expanded': collapsed ? preview === id : undefined,
      'aria-controls': collapsed ? 'dsc-sidebar-card' : undefined,
      onPointerEnter: e => { if (e.pointerType !== 'touch') sidebar.enter(id); }, onPointerLeave: sidebar.leave,
      onFocus: () => sidebar.enter(id), onBlur: sidebar.leave,
      onKeyDown: e => { if (e.key === 'Escape') { sidebar.hide(); e.preventDefault(); } }, onClick: action
    }, icon === 'more' ? h(Icon, { name: 'more', size: 20 }) : h(PrototypeIcon, { name: icon }));
    return createPortal(h(React.Fragment, null,
      h('nav', { className: 'dsc-ui dsc-rail dsc-independent-rail', 'aria-label': '主导航' },
        item('home', '首页', 'home', () => pick(null)),
        taskRows.length > 0 && item('tasks', '定时任务', 'tasks', () => pick(taskRows[0].id)),
        pluginRows.length > 0 && item('plugins', '自定义', 'plugins', () => pick(pluginRows.some(row => row.id === 'plugins') ? 'plugins' : SKILLS_PANEL_ID), category === 'skills' || category === 'plugins'),
        hasMore && item('more', '更多', 'more', openMore),
        h('div', { ref: extensions, className: 'dsc-extension-navigation-anchor', 'aria-hidden': true }),
        h('span', { className: 'dsc-rail-hitblock', 'aria-hidden': true })),
      error && h('div', { className: 'dsc-ui dsc-navigation-error' }, h(ErrorLine, { text: error }))), document.body);
  };
}

// 「更多」main 页面：只是深色空白正文；入口动作全部在左侧二级菜单。
function MoreMain() {
  return h('div', { className: 'dsc-ui dsc-more-page', 'aria-label': '更多' });
}

// 面板无条件注册；侧栏「更多」入口的显示仍由原宿主 entry-customization 判定。
function registerMorePage(ctx) {
  return ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: MORE_PANEL_ID }, function MoreMainPage() {
    return h(MoreMain);
  }));
}

function makeSidebarChrome(ctx, sidebar, archiveNotice) {
  const completions = createSessionCompletionTracker(ctx);
  ctx.effect(() => completions.start(), 'codex-style: unread session completions');
  ctx.effect(() => registerMorePage(ctx), 'codex-style: more page');
  const Tree = makeWorkspaceTree(ctx, completions.store, archiveNotice);
  return function SidebarChrome() {
    const { panel, pluginRows, taskRows, category: selectedCategory, hasMore } = useNavigationDirectory(ctx, sidebar);
    const { collapsed, preview } = useSource(sidebar.store);
    const [searchOpen, setSearchOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [error, setError] = useState('');
    const [geometry, setGeometry] = useState(null);
    const marker = useRef(null);
    const insidePointer = useRef(null);
    const lastWidth = useRef(DEFAULT_SIDEBAR_WIDTH);
    const lastSection = useRef('home');
    const section = sidebarSectionOf(selectedCategory, lastSection, hasMore);
    const presentation = useRef({ category: section, mode: 'docked' });
    const search = useRef(null);
    const searchAnchor = useRef(null);
    useLayoutEffect(() => {
      const column = marker.current?.closest('[data-slot="sidebar"]')?.parentElement;
      const frame = column?.parentElement;
      if (!column || !frame) return;
      const measure = () => {
        const isCollapsed = frame.hasAttribute('data-sidebar-collapsed');
        const box = column.getBoundingClientRect();
        const targetWidth = parseFloat(getComputedStyle(frame).getPropertyValue('--dsh-windows-sidebar-width')) || box.width;
        if (!isCollapsed && targetWidth >= 264) lastWidth.current = targetWidth;
        // 退场仍保留完整内容宽度；不让宿主收起的 0px 列裁掉淡出过程。
        setGeometry({ left: box.left, top: box.top, height: box.height, width: lastWidth.current });
        sidebar.setCollapsed(isCollapsed);
      };
      measure();
      const size = new ResizeObserver(measure);
      size.observe(column);
      const state = new MutationObserver(measure);
      state.observe(frame, { attributes: true, attributeFilter: ['data-sidebar-collapsed'] });
      window.addEventListener('resize', measure);
      return () => { size.disconnect(); state.disconnect(); window.removeEventListener('resize', measure); };
    }, []);
    // 第三方直接打开原 main，保留最近的二级区域，不给它再造一层目录。
    const visibleCategory = collapsed ? preview : section;
    const shown = geometry !== null && visibleCategory !== null;
    if (shown) presentation.current = { category: visibleCategory, mode: collapsed ? 'floating' : 'docked' };
    const { category, mode } = presentation.current;
    useEffect(() => { setError(''); }, [category, panel?.activePanelId]);
    useEffect(() => { if (shown && searchOpen && category === 'home') search.current?.focus(); }, [shown, searchOpen, category]);
    useEffect(() => {
      if (!collapsed || !preview) return;
      const outside = e => {
        // React 的 capture 会沿 portal 祖先传播，项目菜单/详情卡也属于侧栏。
        if (insidePointer.current !== e && !e.target.closest?.('[data-dsc-preview-trigger]')) sidebar.hide();
      };
      const blur = () => sidebar.hide();
      const escape = e => { if (e.key === 'Escape' && !e.defaultPrevented) { sidebar.hide(); e.preventDefault(); } };
      document.addEventListener('pointerdown', outside);
      document.addEventListener('keydown', escape);
      window.addEventListener('blur', blur);
      return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape); window.removeEventListener('blur', blur); };
    }, [collapsed, preview]);
    const run = async action => { setError(''); try { await action(); } catch (e) { setError(errorText(e)); } };
    const pick = id => run(() => { ctx.layout.selectPanel(id); sidebar.hide(); });
    const moreAction = action => run(() => {
      action();
      sidebar.hide();
    });
    const openSearch = () => { if (collapsed) sidebar.show('home'); else pick(null); setSearchOpen(true); };
    const closeSearch = () => { setSearchOpen(false); setQuery(''); searchAnchor.current?.focus(); };
    const pageRows = category === 'tasks' ? taskRows : pluginRows;
    const inset = mode === 'floating' ? 4 : 0;
    const style = geometry ? { left: geometry.left + inset, top: geometry.top + inset, width: Math.min(geometry.width, Math.max(0, window.innerWidth - geometry.left - inset - 8)), height: Math.max(0, geometry.height - inset * 2) } : { visibility: 'hidden' };
    const shell = h('div', {
      ref: node => { if (node) node.inert = !shown; }, id: 'dsc-sidebar-card', className: 'dsc-ui dsc-sidebar-shell', style,
      'data-mode': mode, 'data-section': category, 'data-open': shown, 'aria-hidden': !shown,
      role: mode === 'floating' ? 'dialog' : undefined, 'aria-label': mode === 'floating' ? (category === 'home' ? '首页侧栏' : category === 'tasks' ? '定时任务侧栏' : category === 'more' ? '更多侧栏' : '插件侧栏') : undefined,
      onPointerEnter: sidebar.hold, onPointerLeave: sidebar.leave,
      onPointerDownCapture: e => { insidePointer.current = e.nativeEvent; },
      onFocusCapture: sidebar.hold, onBlurCapture: sidebar.leave,
      onKeyDown: e => { if (collapsed && e.key === 'Escape' && !e.defaultPrevented) { sidebar.hide(); e.preventDefault(); } }
    },
      h('aside', { key: category, className: 'dsc-sidebar', 'aria-label': category === 'home' ? '项目与对话' : category === 'tasks' ? '定时任务' : category === 'more' ? '更多' : category === 'skills' ? '技能' : '自定义' },
        h('div', { className: 'dsc-sidebar__header' }, category === 'home' ? h('div', { className: 'dsc-brand' }, h('img', { className: 'dsc-brand__mark', src: BRAND_MARK, alt: '' }), h('span', { className: 'dsc-brand__wordmark' }, 'deepseek'), h('span', { className: 'dsc-brand__badge' }, 'HARNESS')) : h('strong', { className: 'dsc-section-page-title' }, category === 'tasks' ? '定时任务' : category === 'more' ? '更多' : '自定义'),
          h('div', { className: 'dsc-sidebar__header-actions' }, h('button', { type: 'button', ref: searchAnchor, className: 'dsc-icon-button', title: '搜索对话与项目', 'aria-label': '搜索对话与项目', 'aria-expanded': searchOpen, onClick: openSearch }, h(Icon, { name: 'search' })))),
        category === 'home' && h('button', { type: 'button', className: 'dsc-new-chat', title: '新聊天', onClick: () => { setSearchOpen(false); setQuery(''); run(() => { ctx.uiWorkspace.startSession(); sidebar.hide(); }); } }, h(PrototypeIcon, { name: 'newChat' }), h('span', null, '新聊天')),
        category === 'home' && searchOpen && h('label', { className: 'dsc-search dsc-sidebar-search' }, h(Icon, { name: 'search' }), h('input', { ref: search, value: query, onChange: e => setQuery(e.target.value), onKeyDown: e => { if (e.key === 'Escape') { e.preventDefault(); closeSearch(); } }, placeholder: '搜索标题或项目', 'aria-label': '搜索标题或项目' }), h('button', { type: 'button', onClick: closeSearch, 'aria-label': '关闭搜索' }, '×')),
        h(ErrorLine, { text: error }),
        category === 'home' ? h(Tree, { query, tools: false, active: shown, onNavigate: sidebar.hide }) : category === 'more' ? h('div', { className: 'dsc-secondary-nav' },
          h('button', { type: 'button', className: 'dsc-secondary-item', onClick: () => moreAction(() => ctx.pluginNavigation.openList()) }, h(PrototypeIcon, { name: 'plugins' }), '浏览更多插件'),
          h('button', { type: 'button', className: 'dsc-secondary-item', onClick: () => moreAction(() => ctx.uiWorkspace.startSession(undefined, { agentPreset: 'cordis', prompt: ctx.locale.bind('entryCustomization')('createPrompt.sidebar'), whenDraftExists: 'append' })) }, h(Icon, { name: 'plus' }), '创建你的插件'))
          : h('div', { className: 'dsc-secondary-nav' }, pageRows.map(row => h('button', { key: row.id, type: 'button', className: 'dsc-secondary-item' + (row.id === panel.activePanelId ? ' is-active' : ''), 'aria-current': row.id === panel.activePanelId ? 'page' : undefined, onClick: () => pick(row.id) }, h(Icon, { name: category === 'tasks' ? 'tasks' : row.id === SKILLS_PANEL_ID ? 'skill' : 'plugins' }), row.label)))));
    return h(React.Fragment, null, h('span', { ref: marker, 'aria-hidden': true }), createPortal(shell, document.body));
  };
}

function makeShellChrome(ctx, sidebar) {
  const Navigation = makeNavigationRail(ctx, sidebar);
  const Toggle = makeSidebarToggle(ctx);
  return function ShellChrome() {
    const marker = useRef(null);
    useLayoutEffect(() => {
      // 由公开 overlay/slot 锚点找到它们所属的列，
      // 外壳仅增加插件标记；宽度通过已有布局动作初始化，不改写 grid 或搬移 DOM。
      const overlay = marker.current?.closest('[data-shell-overlay]');
      const frame = overlay?.parentElement;
      if (!frame) return;
      const saved = [];
      const mark = (element, name, value = '') => {
        if (!element) return;
        saved.push([element, name, element.getAttribute(name)]);
        element.setAttribute(name, value);
      };
      // main 插槽外还有 MainPanel；圆角裁剪属于 frame 的直接子列，不能标到内层。
      const columnFor = slot => {
        let element = frame.querySelector(`[data-slot="${slot}"]`);
        while (element && element.parentElement !== frame) element = element.parentElement;
        return element;
      };
      mark(document.body, 'data-dsh-codex-chrome', PLUGIN_VERSION);
      mark(frame, 'data-dsc-frame');
      mark(columnFor('sidebar'), 'data-dsc-sidebar-column');
      mark(columnFor('main'), 'data-dsc-center-column');
      const restoreWidth = initializeSidebarWidth(ctx);
      return () => {
        restoreWidth?.();
        saved.reverse().forEach(([element, name, previous]) => {
          if (previous === null) element.removeAttribute(name); else element.setAttribute(name, previous);
        });
      };
    }, []);
    return h(React.Fragment, null, h('span', { ref: marker, hidden: true }), h(Navigation), h(Toggle));
  };
}

// 此常驻入口不替换 AppFrame，也不修改系统标题栏；collapsed 时仍可重新打开侧栏。
function makeSidebarToggle(ctx) {
  return function SidebarToggle() {
    return createPortal(h('div', { className: 'dsc-ui dsc-window-sidebar-toggle' }, h('button', { type: 'button', className: 'dsc-icon-button', title: '显示或隐藏侧边栏', 'aria-label': '显示或隐藏侧边栏', onClick: () => ctx.layout.toggleSidebar() }, h('svg', { viewBox: '0 0 16 16', width: 16, height: 16, fill: 'none', stroke: 'currentColor', strokeWidth: 1.2, 'aria-hidden': true }, h('rect', { x: 2, y: 3, width: 12, height: 10, rx: 1.5 }), h('path', { d: 'M6 3v10' })))), document.body);
  };
}

function normalizedWorkspacePath(value) {
  if (typeof value !== 'string') return '';
  return value.trim().replace(/\\/g, '/').replace(/\/+$/, '').toLowerCase();
}
function workspacePathRank(workspace, cwd) {
  const path = normalizedWorkspacePath(workspace?.path);
  if (!path || !cwd || (cwd !== path && !cwd.startsWith(path + '/'))) return -1;
  return path.length;
}
function currentMainSessionId(sessions) {
  const ids = Array.isArray(sessions?.ids) ? sessions.ids : [];
  const active = ids.filter(id => ((sessions.byId?.[id]?.retainedBy?.mainView ?? 0) > 0));
  return active.length === 1 ? active[0] : null;
}
function pickSessionWorkspace(sessions, workspaces) {
  const sessionId = currentMainSessionId(sessions);
  if (sessionId === null) return null;
  const items = Array.isArray(workspaces?.items) ? workspaces.items : [];
  const owners = items.filter(item => Array.isArray(item.sessionIds) && item.sessionIds.includes(sessionId));
  if (owners.length === 1) return owners[0];
  // 无权威成员或存在多个共享引用时，cwd 只用于唯一匹配；0/多匹配一律隐藏。
  const pool = owners.length > 1 ? owners : items;
  const cwd = normalizedWorkspacePath(sessions.byId?.[sessionId]?.cwd);
  if (!cwd) return null;
  const ranked = pool.map(workspace => [workspacePathRank(workspace, cwd), workspace]).filter(([rank]) => rank >= 0);
  if (ranked.length === 0) return null;
  const mostSpecific = Math.max(...ranked.map(([rank]) => rank));
  const best = ranked.filter(([rank]) => rank === mostSpecific);
  return best.length === 1 ? best[0][1] : null;
}
function makeCollapsedNewChat(ctx) {
  return function ConversationHeaderLeading() {
    const marker = useRef(null);
    const sessions = useSource(ctx.sessions.list);
    const workspaces = useSource(ctx.workspaces.list);
    
    const workspace = useMemo(() => pickSessionWorkspace(sessions, workspaces), [sessions, workspaces]);
    const name = workspace ? workspace.title || workspace.path || '' : '';
    const anchor = useRef(null);
    const [tip, setTip] = useState(null);
    const showTip = useCallback(() => {
      const box = anchor.current?.getBoundingClientRect?.();
      if (box) setTip({ left: box.left + box.width / 2, top: box.top });
    }, []);
    const hideTip = useCallback(() => setTip(null), []);
    useEffect(() => { setTip(null); }, [name, workspace?.workspaceId, currentMainSessionId(sessions)]);
    // startSession 返回 void；异步创建、导航和失败通知都由宿主处理。
    return h('div', { ref: marker, className: 'dsc-ui dsc-header-leading' },
      name && h('span', {
        ref: anchor, className: 'dsc-workspace-mark', tabIndex: 0, 'aria-label': name,
        onPointerEnter: showTip, onPointerLeave: hideTip, onFocus: showTip, onBlur: hideTip
      }, h(Icon, { name: 'folder' })),
      h('div', { className: 'dsc-collapsed-new-chat' },
        h('button', { type: 'button', className: 'dsc-icon-button', title: '新建对话', 'aria-label': '新建对话', onClick: () => ctx.uiWorkspace.startSession() }, h(PrototypeIcon, { name: 'newChat' }))),
      tip && createPortal(h('div', { className: 'dsc-ui dsc-workspace-tooltip', role: 'tooltip', style: { left: tip.left, top: tip.top - 6 } }, name), document.body));
  };
}

// 公开 sidebar.footer.action 的第三方入口：只在齿轮菜单打开时把宿主原生节点呈现为菜单上方独立分组。
// 只读公开 data-slot 锚点与 entries 计数；不重渲染、不复制、不搬移、不代发点击。
function footerActionRoot(documentRef) {
  const slot = documentRef && typeof documentRef.querySelector === 'function' ? documentRef.querySelector('[data-slot="sidebar.footer.action"]') : null;
  if (!slot || typeof slot.closest !== 'function') return null;
  if (!slot.closest('[data-slot="sidebar"]')) return null;
  // 抽屉布局里宿主列自带 transform 与裁剪，固定定位不可靠；按约定跳过。
  if (slot.closest('[data-sidebar-drawer]')) return null;
  const host = slot.parentElement;
  if (!host) return null;
  return { slot, host, base: host.parentElement };
}
// 分组紧贴菜单上方：0 个入口、抽屉布局或菜单尚未定位时不占空间。
function footerActionPlan({ entries, drawer, menuRect, viewportHeight }) {
  if (!(Number(entries) > 0) || drawer) return null;
  if (!menuRect || !(menuRect.width > 0)) return null;
  const height = Number(viewportHeight) > 0 ? Number(viewportHeight) : 0;
  const bottom = Math.max(8, Math.round(Math.max(0, height - menuRect.top) + 4));
  return {
    left: Math.max(8, Math.round(menuRect.left)),
    width: Math.max(0, Math.round(menuRect.width)),
    bottom,
    // 面板底边距视口底部 bottom，上方可用高度 = 视口高 - bottom - 顶部 8px 安全距。
    maxHeight: Math.max(48, height - bottom - 8)
  };
}
// 注册数大于 0 不代表已有可渲染入口：Cordis 无 inventory、插件返回 null、
// 渲染失败留下的 data-slot-error 空占位、display:none 的入口都可能是空的。
// 检查入口内的控件/文字及隐藏状态；不依赖侧栏祖先的布局矩形或 visibility，
// 因为收起态宿主会隐藏整个 footArea，而呈现器需要重新显示真实入口。
function footerActionHasContent(slot) {
  if (!slot || typeof slot.querySelectorAll !== 'function') return false;
  const available = node => {
    let current = node;
    while (current && current !== slot) {
      if (typeof current.hasAttribute === 'function' && (current.hasAttribute('hidden') || current.getAttribute('aria-hidden') === 'true')) return false;
      const view = current.ownerDocument && current.ownerDocument.defaultView;
      if (view && typeof view.getComputedStyle === 'function' && view.getComputedStyle(current).display === 'none') return false;
      current = current.parentElement;
    }
    return current === slot;
  };
  const isControl = node => {
    const tag = String((node && node.tagName) || '').toUpperCase();
    if (tag === 'BUTTON' || tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return true;
    if (tag === 'A') return !!(typeof node.hasAttribute === 'function' && node.hasAttribute('href'));
    if (tag === 'SVG' || tag === 'IMG' || tag === 'CANVAS' || tag === 'VIDEO') return true;
    return !!(node && typeof node.getAttribute === 'function' && node.getAttribute('role') === 'button');
  };
  const ownText = node => {
    if (!node || typeof node.textContent !== 'string') return false;
    if (node.childNodes && node.childNodes.length > 0) {
      for (const child of node.childNodes) if (child && child.nodeType === 3 && String(child.textContent || '').trim() !== '') return true;
      return false;
    }
    return node.textContent.trim() !== '';
  };
  for (const entry of slot.children ? [...slot.children] : []) {
    if (!entry) continue;
    if (typeof entry.hasAttribute === 'function' && entry.hasAttribute('hidden')) continue;
    const nodes = [entry];
    if (typeof entry.querySelectorAll === 'function') nodes.push(...entry.querySelectorAll('*'));
    for (const node of nodes) {
      if (!available(node)) continue;
      if (isControl(node) || ownText(node)) return true;
    }
  }
  return false;
}
// 可脱离 React 测试的 DOM 呈现器：加可释放标记/变量并把原生按钮移出 Tab 序列（方向键仍可达）。
function createFooterActionPresenter({ document: doc, window: win, readEntries, readPanelRect, onRoot = () => {} }) {
  const attributes = new Map();
  const properties = new Map();
  const tabIndexes = new Map();
  const clearMarked = new Map();
  let rootElement = null;
  let disposed = false;
  const rememberAttribute = (node, name) => {
    let saved = attributes.get(node);
    if (!saved) attributes.set(node, saved = new Map());
    if (!saved.has(name)) saved.set(name, node.getAttribute(name));
  };
  const mark = (node, name, value = '') => {
    if (!node) return;
    rememberAttribute(node, name);
    if (node.getAttribute(name) !== value) node.setAttribute(name, value);
  };
  const rememberProperty = (node, name) => {
    let saved = properties.get(node);
    if (!saved) properties.set(node, saved = new Map());
    if (saved.has(name) || !node.style) return;
    saved.set(name, [node.style.getPropertyValue(name), typeof node.style.getPropertyPriority === 'function' ? node.style.getPropertyPriority(name) : '']);
  };
  const applyProperty = (node, name, value) => {
    if (!node || !node.style) return;
    rememberProperty(node, name);
    if (node.style.getPropertyValue(name) !== value) node.style.setProperty(name, value);
  };
  const restoreProperty = (node, name) => {
    const saved = properties.get(node);
    if (!saved || !saved.has(name)) return;
    const [value, priority] = saved.get(name);
    if (node.isConnected && node.style) {
      if (value) node.style.setProperty(name, value, priority); else node.style.removeProperty(name);
    }
    saved.delete(name);
    if (saved.size === 0) properties.delete(node);
  };
  const unmark = (node, name) => {
    const saved = attributes.get(node);
    if (saved && saved.has(name)) {
      const value = saved.get(name);
      if (node.isConnected) {
        if (value === null) node.removeAttribute(name); else node.setAttribute(name, value);
      }
      saved.delete(name);
      if (saved.size === 0) attributes.delete(node);
    }
    clearMarked.delete(node);
  };
  // 分组落在宿主侧栏列层叠上下文内、低于自有 rail；菜单打开期间只让 rail 与分组
  // 竖向重叠的区段放行点击，其余 rail 面积由透明命中层继续阻挡，重叠的 rail 图标临时隐藏。
  const syncClear = (plan, host) => {
    const rail = doc && typeof doc.querySelector === 'function' ? doc.querySelector('.dsc-independent-rail') : null;
    const next = new Map();
    let clearTop = null;
    if (rail && typeof rail.getBoundingClientRect === 'function' && typeof host.getBoundingClientRect === 'function') {
      const railRect = rail.getBoundingClientRect();
      const hostRect = host.getBoundingClientRect();
      const horizontal = plan.left < railRect.right && plan.left + plan.width > railRect.left;
      const vertical = hostRect.bottom > railRect.top && hostRect.top < railRect.bottom;
      if (horizontal && vertical) {
        clearTop = Math.max(0, Math.min(railRect.height, Math.round(hostRect.top - railRect.top)));
        next.set(rail, 'data-dsc-app-footer-clear');
        if (typeof rail.querySelectorAll === 'function') {
          for (const item of rail.querySelectorAll('.dsc-rail__item')) {
            const box = typeof item.getBoundingClientRect === 'function' ? item.getBoundingClientRect() : null;
            if (box && box.bottom > hostRect.top && box.top < hostRect.bottom) next.set(item, 'data-dsc-app-footer-clear-item');
          }
        }
      }
    }
    for (const [node, marker] of [...clearMarked]) {
      if (next.get(node) === marker) continue;
      unmark(node, marker);
      if (marker === 'data-dsc-app-footer-clear') restoreProperty(node, '--dsc-app-footer-clear-top');
    }
    for (const [node, marker] of next) {
      if (clearMarked.get(node) !== marker) { mark(node, marker); clearMarked.set(node, marker); }
    }
    if (clearTop !== null) {
      for (const [node, marker] of next) {
        if (marker === 'data-dsc-app-footer-clear') applyProperty(node, '--dsc-app-footer-clear-top', clearTop + 'px');
      }
    }
  };
  const publishRoot = node => {
    if (rootElement === node) return;
    rootElement = node;
    onRoot(node);
  };
  const restore = () => {
    if (disposed && attributes.size === 0 && properties.size === 0 && tabIndexes.size === 0) return;
    for (const [node, saved] of attributes) {
      if (!node.isConnected) continue;
      for (const [name, value] of saved) {
        if (value === null) node.removeAttribute(name); else node.setAttribute(name, value);
      }
    }
    attributes.clear();
    for (const [node, saved] of properties) {
      if (!node.isConnected) continue;
      for (const [name, [value, priority]] of saved) {
        if (value) node.style.setProperty(name, value, priority); else node.style.removeProperty(name);
      }
    }
    properties.clear();
    for (const [node, value] of tabIndexes) if (node.isConnected) node.tabIndex = value;
    tabIndexes.clear();
    clearMarked.clear();
    publishRoot(null);
  };
  const sync = () => {
    if (disposed) return;
    let entries = 0;
    try { entries = Number(readEntries && readEntries()) || 0; } catch (_error) { entries = 0; }
    const target = footerActionRoot(doc);
    const menuRect = target ? readPanelRect && readPanelRect() : null;
    const plan = target ? footerActionPlan({ entries, drawer: false, menuRect, viewportHeight: win && win.innerHeight }) : null;
    // 注册数只说明“有人登记”，不足以证明已渲染；空 slot 不占样式、不改宿主布局。
    if (!target || !plan || !footerActionHasContent(target.slot)) { restore(); return; }
    const { slot, host, base } = target;
    mark(host, 'data-dsc-app-footer-host');
    mark(base, 'data-dsc-app-footer-base');
    applyProperty(host, '--dsc-app-footer-left', plan.left + 'px');
    applyProperty(host, '--dsc-app-footer-width', plan.width + 'px');
    applyProperty(host, '--dsc-app-footer-bottom', plan.bottom + 'px');
    applyProperty(host, '--dsc-app-footer-max-height', plan.maxHeight + 'px');
    for (const child of slot.children ? [...slot.children] : []) {
      if (!child || typeof child.tagName !== 'string') continue;
      mark(child, 'data-dsc-app-footer-entry');
      // 宿主收起态只给这些入口渲染图标（第三方按 wide=false 省略文字节点）；
      // 分组里用按钮的无障碍名称补一个可见标签，展开态已有原生文字时自动不生效。
      const button = typeof child.querySelectorAll === 'function' ? child.querySelectorAll('button')[0] : null;
      const text = typeof child.textContent === 'string' ? child.textContent.replace(/\s+/g, '') : '';
      const label = button ? String(button.getAttribute('aria-label') || button.getAttribute('title') || '').trim() : '';
      if (button && text === '' && label) mark(button, 'data-dsc-app-footer-label', label);
      else if (button) unmark(button, 'data-dsc-app-footer-label');
    }
    if (typeof host.querySelectorAll === 'function') {
      for (const node of host.querySelectorAll('button, a[href], input, select, textarea, [tabindex]')) {
        if (!tabIndexes.has(node)) tabIndexes.set(node, node.tabIndex);
        if (node.tabIndex !== -1) node.tabIndex = -1;
      }
    }
    syncClear(plan, host);
    publishRoot(host);
  };
  return {
    sync,
    root: () => rootElement,
    dispose() {
      disposed = true;
      restore();
    }
  };
}
// 入口可能在菜单打开期间返回 null、被隐藏或整组替换：只监听 slot 自身的子节点与
// 显示相关属性；本组件写入的 data-*/tabindex/CSS 变量不在观察范围内，不会自激。
function watchFooterActionSlot(schedule, documentRef, Observer = typeof MutationObserver === 'function' ? MutationObserver : null) {
  if (!documentRef || typeof Observer !== 'function') return () => {};
  let observer = null;
  let target = null;
  const bind = () => {
    const slot = documentRef.querySelector('[data-slot="sidebar.footer.action"]');
    if (slot === target) return;
    if (observer) observer.disconnect();
    target = slot;
    observer = slot ? new Observer(() => { bind(); schedule(); }) : null;
    if (observer) observer.observe(slot, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'hidden', 'class', 'aria-hidden'] });
  };
  bind();
  const disconnect = () => {
    if (observer) observer.disconnect();
    observer = null;
    target = null;
  };
  disconnect.refresh = bind;
  return disconnect;
}
// 菜单打开期间跟踪公开 footer 入口；关闭时恢复属性并把焦点送回齿轮。
function useHostFooterActions(ctx, open, menuRef, anchorRef) {
  const [groupRoot, setGroupRoot] = useState(null);
  useLayoutEffect(() => {
    if (!open || typeof document === 'undefined') { setGroupRoot(null); return undefined; }
    let frame = 0;
    const presenter = createFooterActionPresenter({
      document,
      window,
      readEntries: () => {
        try { return ctx.slots.entriesOfSlot('sidebar.footer.action').length; } catch (_error) { return 0; }
      },
      // 菜单初帧先用 visibility:hidden 排在文档流末尾，place() 之后才改为 fixed；
      // 这期间量到的矩形会把第三方分组钉到页面底部闪一帧，因此只在已定位后交回测量值。
      readPanelRect: () => {
        const panel = menuRef.current;
        if (!panel || typeof panel.getBoundingClientRect !== 'function') return null;
        const view = panel.ownerDocument && panel.ownerDocument.defaultView;
        const style = view && typeof view.getComputedStyle === 'function' ? view.getComputedStyle(panel) : null;
        if (style && (style.visibility === 'hidden' || style.position !== 'fixed')) return null;
        const rect = panel.getBoundingClientRect();
        return rect && rect.width > 0 ? rect : null;
      },
      onRoot: element => { setGroupRoot(previous => (previous === element ? previous : element)); }
    });
    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => { frame = 0; disconnectContent.refresh?.(); presenter.sync(); });
    };
    const disconnectContent = watchFooterActionSlot(schedule, document);
    presenter.sync();
    // 菜单初帧还在文档流里：place() 写入的 fixed 定位要等 commit 后才进 DOM，
    // 微任务里再测一次，让分组与菜单同一帧绘制；仍量不到时由下面的 rAF 兜底。
    queueMicrotask(() => presenter.sync());
    schedule();
    const sidebar = document.querySelector('[data-slot="sidebar"]');
    const observer = sidebar && typeof MutationObserver === 'function' ? new MutationObserver(schedule) : null;
    if (observer && sidebar) observer.observe(sidebar, { childList: true, subtree: true });
    let unsubscribe = () => {};
    try {
      if (ctx.slots && typeof ctx.slots.subscribe === 'function') unsubscribe = ctx.slots.subscribe('sidebar.footer.action', schedule);
    } catch (_error) { unsubscribe = () => {}; }
    const size = menuRef.current && typeof ResizeObserver === 'function' ? new ResizeObserver(schedule) : null;
    if (size && menuRef.current) size.observe(menuRef.current);
    const panel = menuRef.current;
    if (panel && typeof panel.addEventListener === 'function') panel.addEventListener('animationend', schedule);
    window.addEventListener('resize', schedule);
    return () => {
      if (frame) { cancelAnimationFrame(frame); frame = 0; }
      if (observer) observer.disconnect();
      disconnectContent();
      if (size) size.disconnect();
      if (panel && typeof panel.removeEventListener === 'function') panel.removeEventListener('animationend', schedule);
      unsubscribe();
      window.removeEventListener('resize', schedule);
      const host = presenter.root();
      if (host && typeof host.contains === 'function' && host.contains(document.activeElement)) anchorRef.current?.focus();
      presenter.dispose();
      setGroupRoot(null);
    };
  }, [ctx, open, menuRef, anchorRef]);
  return groupRoot;
}

function makeGearLauncher(ctx) {
  return function GearLauncher({ openSettings, settingsOpen }) {
    const [open, setOpen] = useState(false);
    const [profile, setProfile] = useState(null);
    const [failed, setFailed] = useState(false);
    const [avatarFailed, setAvatarFailed] = useState(false);
    const anchor = useRef(null);
    const menuRef = useRef(null);
    const footerRoot = useHostFooterActions(ctx, open, menuRef, anchor);
    useEffect(() => { if (settingsOpen) setOpen(false); }, [settingsOpen]);
    useEffect(() => {
      if (!open) return;
      let active = true;
      setProfile(null); setFailed(false); setAvatarFailed(false);
      const version = ctx.modules.manifest.release?.version;
      if (!version) { setFailed(true); return; }
      const client = { version, locale: ctx.locale.getSnapshot().active, timezoneOffsetSeconds: -new Date().getTimezoneOffset() * 60 };
      ctx.remote.account.getProfile(client).then(result => {
        if (!result.ok) throw result.error;
        if (active) { setProfile(result.value?.status === 'ready' ? result.value.value : null); setFailed(result.value?.status !== 'ready'); }
      }).catch(() => { if (active) setFailed(true); });
      return () => { active = false; };
    }, [open]);
    const showSettings = () => { setOpen(false); openSettings(); };
    return createPortal(h('div', { className: 'dsc-ui dsc-gear-launcher' },
      h('button', { ref: anchor, type: 'button', className: 'dsc-gear-button', 'aria-label': '设置', 'aria-haspopup': 'menu', 'aria-expanded': open, onClick: () => setOpen(!open) }, h(PrototypeIcon, { name: 'settings' })),
      open && h(Popover, { anchor, onClose: () => setOpen(false), label: '设置与账号', width: 228, className: 'dsc-app-menu', panelRef: menuRef, extraRoots: footerRoot ? [footerRoot] : [] },
        h('button', { type: 'button', className: 'dsc-account-row', role: 'menuitem', onClick: showSettings, title: '在账号子页面中管理' }, profile?.avatarUrl && !avatarFailed ? h('img', { src: profile.avatarUrl, alt: '', onError: () => setAvatarFailed(true) }) : h('span', { className: 'dsc-account-avatar' }, h(Icon, { name: 'chat' })), h('span', null, h('strong', null, profile?.name || profile?.contact || '账号'), h('small', null, profile ? '账号与设置' : failed ? '打开账号设置' : '正在读取账号…'))),
        h('div', { className: 'dsc-menu-separator', role: 'separator' }),
        h(Option, { title: '设置', icon: 'settings', onClick: showSettings }))), document.body);
  };
}

function useSource(source) {
  const subscribe = useCallback(fn => source.subscribe(fn), [source]);
  const snapshot = useCallback(() => source.getSnapshot(), [source]);
  return useSyncExternalStore(subscribe, snapshot, snapshot);
}
// 社区版提醒：宿主公开 Toast 固定顶部居中；用户要求右下角，这里沿用 shell.overlay 自绘轻量提醒。
const COMMUNITY_NOTICE_TEXT = '检测到当前为社区版 DSH Desktop，不是 DeepSeek 官方版。本插件针对官方 DeepSeek Harness，效果可能一般。';
const COMMUNITY_NOTICE_HOLD_MS = 6000;
function createCommunityNotice() {
  let snapshot = null;
  const listeners = new Set();
  const publish = next => { snapshot = next; for (const listener of listeners) listener(); };
  return {
    getSnapshot: () => snapshot,
    subscribe(listener) { listeners.add(listener); return () => listeners.delete(listener); },
    show(text) { publish({ text }); },
    clear() { if (snapshot !== null) publish(null); }
  };
}
function CommunityNotice({ notice }) {
  const current = useSource(notice);
  const dismiss = useCallback(() => notice.clear(), [notice]);
  useEffect(() => {
    if (!current) return undefined;
    const timer = setTimeout(dismiss, COMMUNITY_NOTICE_HOLD_MS);
    return () => clearTimeout(timer);
  }, [current, dismiss]);
  if (!current) return null;
  return createPortal(h('div', { className: 'dsc-ui dsc-community-notice', role: 'status', 'aria-live': 'polite' }, h('span', { className: 'dsc-community-notice-text' }, current.text)), document.body);
}
// 归档成功提示：顶部居中「已归档」+ 真实撤销/关闭；停留 6 秒后用 1 秒原路淡出。
const ARCHIVE_NOTICE_HOLD_MS = 6000;
const ARCHIVE_NOTICE_FADE_MS = 1000;
function createArchiveNotice(unarchive) {
  const store = createSnapshotStore(null);
  let seq = 0;
  const show = sessionId => {
    seq += 1;
    store.set({ id: seq, sessionId, phase: 'visible', pending: false, error: '' });
  };
  const leave = id => {
    const current = store.getSnapshot();
    if (!current || current.id !== id || current.phase !== 'visible') return;
    store.set({ ...current, phase: 'leaving' });
  };
  const clear = id => {
    const current = store.getSnapshot();
    if (current && current.id === id) store.set(null);
  };
  const close = id => {
    const current = store.getSnapshot();
    if (!current || current.id !== id) return;
    store.set({ ...current, phase: 'leaving', pending: false });
  };
  const undo = async id => {
    const current = store.getSnapshot();
    if (!current || current.id !== id || current.pending || current.phase !== 'visible') return;
    store.set({ ...current, pending: true, error: '' });
    try {
      const result = await unarchive(current.sessionId);
      if (result?.ok === false) throw result.error || new Error('取消归档失败');
      const latest = store.getSnapshot();
      if (latest && latest.id === id) store.set({ ...latest, pending: false, phase: 'leaving' });
    } catch (error) {
      const latest = store.getSnapshot();
      if (latest && latest.id === id) store.set({ ...latest, pending: false, error: errorText(error) });
    }
  };
  // 停用插件时清空并推进序号，让在途的撤销/关闭完成回调失效。
  const dispose = () => { seq += 1; store.set(null); };
  return { store, show, leave, clear, close, undo, dispose };
}
function ArchiveNotice({ notice }) {
  const current = useSource(notice.store);
  const id = current?.id;
  const phase = current?.phase;
  const pending = current?.pending === true;
  const error = current?.error || '';
  useEffect(() => {
    if (id === undefined) return undefined;
    if (phase === 'leaving') {
      const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true;
      const timer = setTimeout(() => notice.clear(id), reduced ? 0 : ARCHIVE_NOTICE_FADE_MS);
      return () => clearTimeout(timer);
    }
    if (pending || error) return undefined;
    const timer = setTimeout(() => notice.leave(id), ARCHIVE_NOTICE_HOLD_MS);
    return () => clearTimeout(timer);
  }, [id, phase, pending, error, notice]);
  if (!current) return null;
  return createPortal(h('div', { key: current.id, className: 'dsc-ui dsc-archive-notice', 'data-phase': current.phase, role: 'status', 'aria-live': 'polite' },
    h('div', { className: 'dsc-archive-notice-body' },
      h('span', { className: 'dsc-archive-notice-text' }, '已归档'),
      error && h('span', { className: 'dsc-archive-notice-error' }, '撤销失败：' + error)),
    h('button', { type: 'button', className: 'dsc-archive-notice-undo', disabled: pending, onClick: () => notice.undo(id) }, '撤销'),
    h('button', { type: 'button', className: 'dsc-archive-notice-close', 'aria-label': '关闭归档提示', onClick: () => notice.close(id) }, h(Icon, { name: 'close', size: 14 }))), document.body);
}
function errorText(error) { return error?.message || String(error); }
function ErrorLine({ text }) { return text ? h('div', { className: 'dsc-error', role: 'alert' }, text) : null; }
// 用 aria-disabled 代替原生 disabled：避免全局 `.dsc-ui button:disabled { opacity: .45 }` 在提交瞬间造成变暗闪烁。
function Option({ title, detail, icon, selected, onClick, disabled, warning }) {
  return h('button', { type: 'button', className: 'dsc-option', role: 'menuitemradio', 'aria-checked': !!selected, 'aria-disabled': disabled ? 'true' : undefined, 'data-warning': !!warning, onClick: e => { if (disabled) return; onClick?.(e); } },
    icon && h(Icon, { name: icon }),
    h('span', { className: 'dsc-option-copy' }, h('span', null, title), detail && h('small', null, detail)),
    selected && h(Icon, { name: 'check' }));
}

// 齿轮菜单会把公开 sidebar.footer.action 的原生节点作为“菜单上方分组”一并显示；
// 这些节点不在 Popover 的 DOM 子树内，因此把“点内/键盘范围”判定独立出来，供菜单与测试复用。
function isInsideMenuTarget(target, primary, extras) {
  if (!target) return false;
  const inside = node => Boolean(node && typeof node.contains === 'function' && node.contains(target));
  return inside(primary) || (extras || []).some(inside);
}
// 视觉顺序：外部分组在菜单上方，先参与方向键循环；菜单自身按钮随后。
function menuFocusItems(primary, extras) {
  const items = [];
  for (const root of [...(extras || []), primary]) {
    if (!root || typeof root.querySelectorAll !== 'function') continue;
    for (const node of root.querySelectorAll('button:not(:disabled)')) items.push(node);
  }
  return items;
}

// 所有浮层位于自己的 portal 根；只读取 anchor 与自己的 DOM，不查宿主私有选择器。
// placement: 'top' 为默认（锚点上方优先），'right' 用于行尾菜单（锚点右下方展开）。
function Popover({ anchor, point, onClose, label, width = 300, children, className = '', autoFocus = true, role = 'menu', placement = 'top', extraRoots = [], panelRef }) {
  const localRef = useRef(null);
  const ref = panelRef || localRef;
  const extras = useRef(extraRoots);
  extras.current = extraRoots;
  const [position, setPosition] = useState({ visibility: 'hidden' });
  useLayoutEffect(() => {
    const place = () => {
      if (!anchor.current || !ref.current) return;
      const box = anchor.current.getBoundingClientRect();
      const w = Math.min(width, window.innerWidth - 24);
      const size = ref.current.getBoundingClientRect();
      if (point) {
        setPosition({ position: 'fixed', left: Math.max(12, Math.min(point.x, window.innerWidth - w - 12)), top: Math.max(12, Math.min(point.y, window.innerHeight - size.height - 12)), width: w, maxHeight: Math.max(100, window.innerHeight - 24) });
        return;
      }
      if (placement === 'bottom') {
        const left = Math.max(12, Math.min(window.innerWidth - w - 12, box.right - w));
        const top = Math.max(12, Math.min(box.bottom + 9, window.innerHeight - size.height - 12));
        setPosition({ position: 'fixed', left, top, width: w, maxHeight: Math.max(100, window.innerHeight - 24) });
        return;
      }
      if (placement === 'right') {
        const spaceRight = window.innerWidth - box.right - 12;
        const left = spaceRight >= w ? box.right + 6 : Math.max(12, box.left - w - 6);
        const top = Math.max(12, Math.min(window.innerHeight - size.height - 12, box.top - 4));
        setPosition({ position: 'fixed', left, top, width: w, maxHeight: Math.max(100, window.innerHeight - 24) });
        return;
      }
      const left = Math.max(12, Math.min(window.innerWidth - w - 12, box.right - w));
      const top = box.top - size.height - 9 >= 12 ? box.top - size.height - 9 : Math.max(12, Math.min(box.bottom + 9, window.innerHeight - size.height - 12));
      setPosition({ position: 'fixed', left, top, width: w, maxHeight: Math.max(100, window.innerHeight - 24) });
    };
    place();
    const observer = new ResizeObserver(place);
    if (ref.current) observer.observe(ref.current);
    window.addEventListener('resize', place);
    window.addEventListener('scroll', place, true);
    return () => { observer.disconnect(); window.removeEventListener('resize', place); window.removeEventListener('scroll', place, true); };
  }, [anchor, point, width, placement]);
  useEffect(() => {
    if (autoFocus) (ref.current?.querySelector('input, [aria-checked="true"], button, [role="slider"]'))?.focus({ preventScroll: true });
    const pointer = e => { if (!isInsideMenuTarget(e.target, ref.current, extras.current) && !anchor.current?.contains(e.target)) onClose(); };
    const key = e => {
      if (e.key === 'Escape') {
        const active = typeof document !== 'undefined' ? document.activeElement : null;
        // 焦点已进入第三方自己的弹窗时，不抢它的 Escape；菜单/分组内或焦点丢失时才关闭。
        const within = isInsideMenuTarget(active, ref.current, extras.current) || isInsideMenuTarget(e.target, ref.current, extras.current) || anchor.current?.contains(active) || active === null || (typeof document !== 'undefined' && active === document.body);
        if (!within) return;
        e.preventDefault(); e.stopPropagation(); onClose(); anchor.current?.focus(); return;
      }
      if (e.key === 'Tab') {
        const active = typeof document !== 'undefined' ? document.activeElement : null;
        const inExtras = (extras.current || []).some(root => root && typeof root.contains === 'function' && root.contains(active));
        if (!inExtras) return;
        const items = menuFocusItems(ref.current, []);
        if (!items.length) return;
        e.preventDefault();
        items[e.shiftKey ? items.length - 1 : 0].focus();
        return;
      }
      if (!isInsideMenuTarget(e.target, ref.current, extras.current) || e.target.matches('input, [role="slider"]') || !['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) return;
      const items = menuFocusItems(ref.current, extras.current);
      if (!items.length) return;
      e.preventDefault();
      const index = items.indexOf(document.activeElement);
      const next = e.key === 'Home' ? 0 : e.key === 'End' ? items.length - 1 : (index + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
      items[next]?.focus();
    };
    document.addEventListener('pointerdown', pointer, true);
    document.addEventListener('keydown', key, true);
    return () => { document.removeEventListener('pointerdown', pointer, true); document.removeEventListener('keydown', key, true); };
  }, [anchor, onClose, autoFocus]);
  return createPortal(h('div', { ref, className: 'dsc-ui dsc-menu ' + className, style: position, role, 'aria-label': label }, children), document.body);
}

// 行悬停详情卡：按原型实测放置（右侧、与行顶对齐），不复用菜单的向上翻转定位。
// 项目卡 321×130：名称+图钉 / 聊天数 / 分隔线 / 路径 / 分隔线 / 编辑项目；会话卡 470 宽与行顶差 6px。
function HoverCard({ anchor, kind, onClose, onEnter, onLeave, children }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ visibility: 'hidden' });
  useLayoutEffect(() => {
    const place = () => {
      if (!anchor.current || !ref.current) return;
      const box = anchor.current.getBoundingClientRect();
      const width = ref.current.offsetWidth;
      const height = ref.current.offsetHeight;
      const gap = kind === 'project' ? 5 : 12;
      let left = box.right + gap;
      if (left + width > window.innerWidth - 8) left = Math.max(8, Math.min(box.left - gap - width, window.innerWidth - width - 8));
      let top = kind === 'project' ? box.top : box.top - 6;
      if (top + height > window.innerHeight - 8) top = Math.max(8, window.innerHeight - height - 8);
      if (top < 8) top = 8;
      setPosition({ position: 'fixed', left: Math.round(left), top: Math.round(top), visibility: 'visible' });
    };
    place();
    const observer = new ResizeObserver(place);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [anchor, kind]);
  useEffect(() => {
    const onKey = event => { if (event.key === 'Escape') { event.preventDefault(); onClose(); } };
    window.addEventListener('resize', onClose);
    window.addEventListener('scroll', onClose, true);
    document.addEventListener('keydown', onKey, true);
    return () => { window.removeEventListener('resize', onClose); window.removeEventListener('scroll', onClose, true); document.removeEventListener('keydown', onKey, true); };
  }, [onClose]);
  return createPortal(h('div', { ref, className: 'dsc-ui dsc-row-pop dsc-row-pop--' + kind, style: position, role: 'dialog', 'aria-label': kind === 'project' ? '项目详情' : '对话详情', onPointerEnter: onEnter, onPointerLeave: onLeave }, children), document.body);
}
// 图钉为真实状态指示：DSH 只有会话置顶、没有工作区置顶，因此工作区始终显示空心「未置顶」。
function PinMark({ filled }) {
  return h('svg', { viewBox: '0 0 16 16', width: 14, height: 14, fill: filled ? 'currentColor' : 'none', stroke: 'currentColor', strokeWidth: 1.3, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
    h('g', { transform: 'rotate(45 8 8)' }, h('path', { d: 'M6 2.5h4v3L12 8.5H4L6 5.5ZM8 8.5V14' })));
}
function ProjectHoverCard({ data, anchor, onReveal, onEdit, ...root }) {
  return h(HoverCard, { anchor, kind: 'project', ...root },
    h('div', { className: 'dsc-row-pop__head' },
      h('span', { className: 'dsc-row-pop__name' }, h(Icon, { name: 'folder', size: 15 }), h('span', null, data.title)),
      h('span', { className: 'dsc-row-pop__pin', role: 'img', title: data.pinned ? '已置顶' : '未置顶（DSH 暂不支持工作区置顶）', 'aria-label': data.pinned ? '已置顶' : '未置顶' }, h(PinMark, { filled: data.pinned }))),
    h('div', { className: 'dsc-row-pop__line' }, h(Icon, { name: 'chat', size: 15 }), h('span', null, `${data.count} 次聊天`)),
    data.path && h('div', { className: 'dsc-row-pop__sep' }),
    data.path && h('button', { type: 'button', className: 'dsc-row-pop__line dsc-row-pop__line--path', title: '在文件资源管理器中显示', onClick: onReveal },
      h(Icon, { name: 'folder', size: 15 }), h('span', { className: 'dsc-row-pop__path' }, data.path), h(Icon, { name: 'arrowUpRight', size: 14, className: 'dsc-row-pop__arrow' })),
    h('div', { className: 'dsc-row-pop__sep' }),
    h('button', { type: 'button', className: 'dsc-row-pop__line dsc-row-pop__line--action', onClick: onEdit }, h(Icon, { name: 'settings', size: 15 }), h('span', null, '编辑项目')));
}
function ThreadHoverCard({ data, anchor, ...root }) {
  return h(HoverCard, { anchor, kind: 'thread', ...root },
    h('div', { className: 'dsc-row-pop__head' },
      h('p', { className: 'dsc-row-pop__excerpt' }, data.title),
      h('span', { className: 'dsc-row-pop__meta' }, h(Icon, { name: 'monitor', size: 14 }), data.status)),
    data.workspaceTitle && h('div', { className: 'dsc-row-pop__line' }, h(Icon, { name: 'folder', size: 15 }), h('span', null, data.workspaceTitle)),
    data.path && h('div', { className: 'dsc-row-pop__line' }, h(Icon, { name: 'folder', size: 15 }), h('span', { className: 'dsc-row-pop__path' }, data.path)));
}

// 「编辑项目」对话框：名称输入接真实工作区重命名，底部「移除本地项目」接真实工作区删除；
// 源文件夹只读展示当前路径，不提供添加/更换文件夹（DSH 无该能力）。
function EditWorkspaceDialog({ workspace, onClose, onRename, onDelete }) {
  const [name, setName] = useState(workspace.title || '');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState('');
  const input = useRef(null);
  useEffect(() => { input.current?.focus(); input.current?.select(); }, []);
  useEffect(() => {
    const onKey = event => { if (event.key === 'Escape') { event.preventDefault(); onClose(); } };
    document.addEventListener('keydown', onKey, true);
    return () => document.removeEventListener('keydown', onKey, true);
  }, [onClose]);
  const save = async () => {
    const title = name.trim();
    if (!title) { setError('项目名称不能为空'); return; }
    if (busy) return;
    if (title === (workspace.title || '')) { onClose(); return; }
    setBusy('save'); setError('');
    try { await onRename(title); onClose(); } catch (e) { setError(errorText(e)); setBusy(''); }
  };
  const remove = async () => {
    if (busy) return;
    if (!window.confirm(`移除本地项目「${workspace.title || ''}」？项目中的对话会保留在“最近”中。`)) return;
    setBusy('remove'); setError('');
    try { await onDelete(); onClose(); } catch (e) { setError(errorText(e)); setBusy(''); }
  };
  return createPortal(h('div', { className: 'dsc-ui dsc-modal', role: 'presentation' },
    h('div', { className: 'dsc-modal__mask', 'aria-hidden': true, onClick: onClose }),
    h('div', { className: 'dsc-modal__panel', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'dsc-edit-workspace-title' },
      h('div', { className: 'dsc-modal__head' },
        h('h2', { id: 'dsc-edit-workspace-title' }, '编辑项目'),
        h('button', { type: 'button', className: 'dsc-modal__close', title: '关闭', 'aria-label': '关闭', onClick: onClose }, h(Icon, { name: 'close', size: 16 }))),
      h('div', { className: 'dsc-modal__field' },
        h(Icon, { name: 'folder', size: 16 }),
        h('input', { ref: input, className: 'dsc-modal__input', value: name, onChange: e => setName(e.target.value), onKeyDown: e => { if (e.key === 'Enter') { e.preventDefault(); save(); } }, 'aria-label': '项目名称', placeholder: '项目名称' })),
      h('div', { className: 'dsc-modal__label' }, '源文件夹'),
      h('div', { className: 'dsc-modal__source' }, h(Icon, { name: 'folder', size: 16 }), h('span', { className: 'dsc-modal__path', title: workspace.path || '' }, workspace.path || '未记录路径')),
      h(ErrorLine, { text: error }),
      h('div', { className: 'dsc-modal__actions' },
        h('button', { type: 'button', className: 'dsc-modal__remove', onClick: remove, disabled: !!busy }, busy === 'remove' ? '正在移除…' : '移除本地项目'),
        h('div', { className: 'dsc-modal__spacer' }),
        h('button', { type: 'button', className: 'dsc-modal__cancel', onClick: onClose, disabled: !!busy }, '取消'),
        h('button', { type: 'button', className: 'dsc-modal__save', onClick: save, disabled: !!busy }, busy === 'save' ? '保存中…' : '保存')))), document.body);
}

function RenameThreadDialog({ thread, onClose, onRename }) {
  const [name, setName] = useState(thread.title || '未命名对话');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const panel = useRef(null);
  const input = useRef(null);
  const submitting = useRef(false);
  useEffect(() => {
    const previous = document.activeElement;
    input.current?.focus(); input.current?.select();
    return () => { if (previous?.isConnected) previous.focus({ preventScroll: true }); };
  }, []);
  const close = () => { if (!submitting.current) onClose(); };
  const save = async event => {
    event.preventDefault();
    if (submitting.current) return;
    const title = name.trim();
    if (!title) { setError('对话名称不能为空'); input.current?.focus(); return; }
    if (title === thread.title) { onClose(); return; }
    submitting.current = true; setBusy(true); setError('');
    try { await onRename(title); onClose(); }
    catch (e) { submitting.current = false; setBusy(false); setError(errorText(e)); }
  };
  const keyDown = event => {
    if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); close(); }
    if (event.key !== 'Tab') return;
    const items = [...panel.current.querySelectorAll('input:not(:disabled), button:not(:disabled)')];
    const first = items[0], last = items[items.length - 1];
    if (!first) { event.preventDefault(); return; }
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };
  return createPortal(h('div', { className: 'dsc-ui dsc-modal', onKeyDown: keyDown },
    h('div', { className: 'dsc-modal__mask', 'aria-hidden': true, onClick: close }),
    h('form', { ref: panel, className: 'dsc-modal__panel', role: 'dialog', 'aria-modal': true, 'aria-label': '重命名对话', 'aria-busy': busy, onSubmit: save },
      h('div', { className: 'dsc-modal__head' }, h('h2', null, '重命名对话'),
        h('button', { type: 'button', className: 'dsc-modal__close', 'aria-label': '关闭重命名', disabled: busy, onClick: close }, h(Icon, { name: 'close' }))),
      h('div', { className: 'dsc-modal__field' }, h(Icon, { name: 'pencil' }),
        h('input', { ref: input, className: 'dsc-modal__input', 'aria-label': '对话名称', value: name, disabled: busy, onChange: e => setName(e.target.value), onKeyDown: e => { if (e.key === 'Enter' && (e.nativeEvent.isComposing || e.keyCode === 229)) e.preventDefault(); } })),
      h(ErrorLine, { text: error }),
      h('div', { className: 'dsc-modal__actions' }, h('div', { className: 'dsc-modal__spacer' }),
        h('button', { type: 'button', className: 'dsc-modal__cancel', disabled: busy, onClick: close }, '取消'),
        h('button', { type: 'submit', className: 'dsc-modal__save', disabled: busy }, busy ? '保存中…' : '保存')))), document.body);
}

function relativeTime(value) {
  const timestamp = typeof value === 'number' ? value : Date.parse(value);
  if (!Number.isFinite(timestamp)) return '';
  const minutes = Math.max(0, Math.floor((Date.now() - timestamp) / 60000));
  return minutes < 1 ? '刚刚' : minutes < 60 ? minutes + '分钟前' : minutes < 1440 ? Math.floor(minutes / 60) + '小时前' : Math.floor(minutes / 1440) + '天前';
}

// 测量标题当前可用宽度；侧栏拖宽、重命名都会重新计算。
function ThreadTitle({ title }) {
  const viewport = useRef(null);
  const text = useRef(null);
  useLayoutEffect(() => {
    const measure = () => {
      const overflow = Math.max(0, text.current.scrollWidth - viewport.current.clientWidth);
      viewport.current.dataset.overflow = String(overflow > 1);
      viewport.current.style.setProperty('--dsc-title-shift', -overflow + 'px');
      // 按距离计算时长，使轻微溢出与长标题都以录像约 30 CSS px/s 的速度移动。
      viewport.current.style.setProperty('--dsc-title-duration', overflow / 30 + 's');
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport.current);
    observer.observe(text.current);
    return () => observer.disconnect();
  }, [title]);
  return h('span', { ref: viewport, className: 'dsc-thread-title' }, h('span', { ref: text, className: 'dsc-thread-title-text' }, title));
}

// 提示 portal 到 body，避免被滚动区或正在开合的项目裁掉；延迟和进退由 CSS 控制。
function RowTooltip({ anchor, open, label, onClose }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({});
  useLayoutEffect(() => {
    if (!open) return;
    const box = anchor.current.getBoundingClientRect();
    const tip = ref.current.getBoundingClientRect();
    setPosition({ left: Math.max(8, Math.min(box.left + (box.width - tip.width) / 2, window.innerWidth - tip.width - 8)), top: box.top - tip.height - 7 >= 8 ? box.top - tip.height - 7 : box.bottom + 7 });
    window.addEventListener('resize', onClose);
    window.addEventListener('scroll', onClose, true);
    return () => { window.removeEventListener('resize', onClose); window.removeEventListener('scroll', onClose, true); };
  }, [anchor, open, label, onClose]);
  return createPortal(h('div', { ref, className: 'dsc-ui dsc-row-tooltip', role: 'tooltip', 'aria-hidden': !open, 'data-open': open, style: position }, label), document.body);
}

function ThreadAction({ label, active, onIntent, onClick, className = '', pressed, children }) {
  const anchor = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const close = useCallback(() => { setHovered(false); setFocused(false); }, []);
  useEffect(() => { if (!active) close(); }, [active, close]);
  return h(React.Fragment, null,
    h('button', { ref: anchor, type: 'button', className: 'dsc-thread-action ' + className, 'aria-label': label, 'aria-pressed': pressed,
      onPointerEnter: () => { onIntent(); setHovered(true); }, onPointerLeave: () => setHovered(false),
      onFocus: e => { if (e.currentTarget.matches(':focus-visible')) { onIntent(); setFocused(true); } }, onBlur: () => setFocused(false),
      onClick: () => { close(); onIntent(); onClick(); } }, children),
    h(RowTooltip, { anchor, open: active && (hovered || focused), label, onClose: close }));
}

function ProjectFold({ open, children, className = '' }) {
  return h('div', { className: 'dsc-project-fold ' + className, 'data-open': open, 'aria-hidden': !open, ref: node => { if (node) node.inert = !open; } },
    h('div', { className: 'dsc-project-clip' }, children));
}

// 宿主完成提醒仅检查 mainView；此处补上窗口焦点和真实主区，状态只属于当前插件页面。
function createSessionCompletionTracker(ctx) {
  const store = createSnapshotStore(new Set());
  let previousRunning = new Map();
  let previousHostUnread = new Set();
  let windowFocused = false;
  const reconcile = () => {
    const catalog = ctx.sessions.list.getSnapshot();
    const status = ctx.uiSession.sessionStatus.getSnapshot();
    const panel = ctx.layout.panelInfo.getSnapshot();
    const viewingConversation = windowFocused && document.visibilityState === 'visible' && panel.activePanelId === null;
    const viewedId = viewingConversation ? catalog.ids.find(id => (catalog.byId[id]?.retainedBy?.mainView ?? 0) > 0) : undefined;
    const next = new Set(store.getSnapshot());
    const running = new Map();
    const hostUnread = new Set();
    for (const id of new Set([...catalog.ids, ...status.keys()])) {
      const state = status.get(id);
      const isRunning = state?.running ?? catalog.byId[id]?.running;
      running.set(id, isRunning);
      if (state?.completionUnread) hostUnread.add(id);
      const justCompleted = previousRunning.get(id) === true && isRunning === false;
      const hostCompleted = state?.completionUnread && !previousHostUnread.has(id);
      if (isRunning || id === viewedId) next.delete(id);
      else if (justCompleted || hostCompleted) next.add(id);
    }
    if (catalog.phase === 'ready') for (const id of next) if (!catalog.byId[id]) next.delete(id);
    previousRunning = running;
    previousHostUnread = hostUnread;
    const before = store.getSnapshot();
    if (next.size !== before.size || [...next].some(id => !before.has(id))) store.set(next);
  };
  const start = () => {
    windowFocused = document.hasFocus();
    const focus = () => { windowFocused = true; reconcile(); };
    const blur = () => { windowFocused = false; reconcile(); };
    const visibility = () => { windowFocused = document.hasFocus(); reconcile(); };
    const disposers = [ctx.sessions.list, ctx.uiSession.sessionStatus, ctx.layout.panelInfo].map(source => source.subscribe(reconcile));
    window.addEventListener('focus', focus);
    window.addEventListener('blur', blur);
    document.addEventListener('visibilitychange', visibility);
    reconcile();
    return () => {
      disposers.forEach(dispose => dispose());
      window.removeEventListener('focus', focus);
      window.removeEventListener('blur', blur);
      document.removeEventListener('visibilitychange', visibility);
    };
  };
  return { store, start };
}

// 项目内默认只显示最近 6 条；活动行位于后方时按需放宽，置顶、最近与搜索结果不受影响。
const PROJECT_SESSION_LIMIT = 6;

// 以页面时间轴零点对齐，错开开始、等待恢复和重新挂载的运行圈保持同一转角。
function syncSessionSpinner(svg) {
  if (!svg || typeof svg.getAnimations !== 'function') return;
  for (const animation of svg.getAnimations()) {
    if (animation.animationName === 'dsc-session-spin') animation.startTime = 0;
  }
}

function makeWorkspaceTree(ctx, completionStore, archiveNotice) {
  return function WorkspaceTree({ query = '', tools = true, active = true, onNavigate }) {
    const catalog = useSource(ctx.sessions.list);
    const workspaces = useSource(ctx.workspaces.list);
    const status = useSource(ctx.uiSession.sessionStatus);
    const completions = useSource(completionStore);
    const panel = useSource(ctx.layout.panelInfo);
    const [expanded, setExpanded] = useState({});
    const [moreExpanded, setMoreExpanded] = useState({});
    const [projectsOpen, setProjectsOpen] = useState(true);
    const [showArchived, setShowArchived] = useState(false);
    const [message, setMessage] = useState('');
    const [adding, setAdding] = useState(false);
    const [menu, setMenu] = useState(null);
    const [projectMenu, setProjectMenu] = useState(null);
    const [hover, setHover] = useState(null);
    const [editing, setEditing] = useState(null);
    const [renaming, setRenaming] = useState(null);
    const menuAnchor = useRef(null);
    const projectAnchor = useRef(null);
    const hoverAnchor = useRef(null);
    const hoverTimer = useRef(null);
    const alive = useRef(true);
    useEffect(() => { alive.current = true; return () => { alive.current = false; clearTimeout(hoverTimer.current); }; }, []);
    useEffect(() => {
      if (active) return;
      clearTimeout(hoverTimer.current);
      setHover(null); setMenu(null); setProjectMenu(null); setEditing(null); setRenaming(null);
    }, [active]);
    const run = async action => { setMessage(''); try { await action(); } catch (e) { if (alive.current) setMessage(errorText(e)); } };
    const archived = useMemo(() => new Set(workspaces.archivedSessionIds), [workspaces.archivedSessionIds]);
    const pinned = useMemo(() => new Set(workspaces.pinnedSessionIds), [workspaces.pinnedSessionIds]);
    // 一次建立归属索引；保留多项目引用时的旧呈现，以及搜索/详情使用首个项目的语义。
    const memberships = useMemo(() => {
      const index = new Map();
      for (const workspace of workspaces.items) for (const id of new Set(workspace.sessionIds)) {
        if (!index.has(id)) index.set(id, []);
        index.get(id).push(workspace);
      }
      return index;
    }, [workspaces.items]);
    const workspaceOf = id => memberships.get(id)?.[0];
    const ordered = useMemo(() => catalog.ids.map(id => catalog.byId[id])
      .filter(s => s && s.origin !== 'subagent' && !s.blank)
      .map(s => ({ ...s, sessionId: s.id, title: s.title || s.displayTitle }))
      .sort((a, b) => (Number(b.updatedAt) || Date.parse(b.updatedAt) || 0) - (Number(a.updatedAt) || Date.parse(a.updatedAt) || 0)), [catalog.ids, catalog.byId]);
    const currentId = useMemo(() => catalog.ids.find(id => (catalog.byId[id]?.retainedBy?.mainView ?? 0) > 0), [catalog.ids, catalog.byId]);
    const searchText = query.trim().toLowerCase();
    const visible = useMemo(() => ordered.filter(s => (showArchived || !archived.has(s.sessionId)) &&
      (!searchText || `${s.title || ''} ${memberships.get(s.sessionId)?.[0]?.title || ''}`.toLowerCase().includes(searchText))), [ordered, archived, showArchived, searchText, memberships]);
    const groups = useMemo(() => {
      const projects = new Map(), pins = [], recent = [];
      for (const session of visible) {
        if (pinned.has(session.sessionId)) { pins.push(session); continue; }
        const owners = memberships.get(session.sessionId);
        if (!owners) { recent.push(session); continue; }
        for (const workspace of owners) {
          if (!projects.has(workspace.workspaceId)) projects.set(workspace.workspaceId, []);
          projects.get(workspace.workspaceId).push(session);
        }
      }
      return { projects, pins, recent };
    }, [visible, pinned, memberships]);
    // 归属只读宿主公开目录：首次发现当前会话所属项目时固化为展开，避免切换会话后按 currentId 实时派生把它误折叠。
    // 已有记录（含用户显式收起）一律保留；空白会话或目录异步到达时，等 currentId / memberships 更新再补记。
    useLayoutEffect(() => {
      if (currentId === undefined) return;
      const owners = memberships.get(currentId);
      if (!owners?.length) return;
      setExpanded(previous => {
        if (owners.every(workspace => previous[workspace.workspaceId] !== undefined)) return previous;
        const next = { ...previous };
        for (const workspace of owners) if (next[workspace.workspaceId] === undefined) next[workspace.workspaceId] = true;
        return next;
      });
    }, [currentId, memberships]);
    // 活动判据沿用现有状态源：当前会话、等待处理、父会话运行（live 优先，目录行只兜底）、子代理仍在运行、未读完成。
    const sessionActive = session => {
      if (session.sessionId === currentId) return true;
      const state = status.get(session.sessionId);
      if (state?.pendingInteraction) return true;
      // 父会话自身运行：live 状态优先，避免目录行旧的 running=true 压过 live false。
      if ((state?.running ?? session.running) === true) return true;
      // 子代理运行不并入父 running；沿宿主公开快照的 subagentCatalog 逐个子会话核对，任一仍在运行即视为活动。
      const subagents = catalog.projectionsBySession?.[session.sessionId]?.values?.subagentCatalog;
      if (Array.isArray(subagents) && subagents.some(child => (status.get(child.id)?.running ?? catalog.byId[child.id]?.running) === true)) return true;
      return completions.has(session.sessionId);
    };
    // 每个项目独立截断：默认前 6 条，后方有活动行时放宽到包含该行；手动展开后显示全部。
    const projectSessions = (workspaceId, children) => {
      if (moreExpanded[workspaceId] === true) return children;
      let count = Math.min(PROJECT_SESSION_LIMIT, children.length);
      for (let index = PROJECT_SESSION_LIMIT; index < children.length; index += 1) if (sessionActive(children[index])) count = index + 1;
      return children.slice(0, count);
    };
    const cancelHover = () => clearTimeout(hoverTimer.current);
    const hideHover = () => { clearTimeout(hoverTimer.current); setHover(null); };
    const closeHover = () => { cancelHover(); hoverTimer.current = setTimeout(() => setHover(null), 140); };
    const enterHover = (target, data) => {
      cancelHover();
      hoverAnchor.current = target;
      if (hover) setHover(data);
      else hoverTimer.current = setTimeout(() => setHover(data), 300);
    };
    const revealWorkspace = hoverData => {
      hideHover();
      run(async () => {
        const sessionRemote = ctx.remote?.session;
        if (typeof sessionRemote?.openWorkspacePath !== 'function') throw new Error('当前宿主不支持在文件管理器中显示文件夹');
        const result = await sessionRemote.openWorkspacePath({ path: hoverData.path, action: 'reveal' });
        if (result?.ok === false) throw result.error;
      });
    };
    const editWorkspace = workspace => {
      hideHover();
      setEditing(workspace);
    };
    const rename = async (row, title) => {
      const result = await ctx.sessions.using(row.sessionId, { source: 'workspaceOperation' }, reference => reference.binding.session.rename(title));
      if (result?.ok === false) throw result.error;
    };
    const togglePin = s => run(() => pinned.has(s.sessionId) ? ctx.uiWorkspace.unpinSession(s.sessionId) : ctx.uiWorkspace.pinSession(s.sessionId));
    // 归档成功才提示；取消归档仍走原动作且不提示。失败沿用 run/ErrorLine，不把失败当成功。
    const toggleArchive = s => {
      hideHover();
      if (archived.has(s.sessionId)) return run(() => ctx.uiWorkspace.unarchiveSession(s.sessionId));
      return run(async () => {
        const result = await ctx.uiWorkspace.archiveSession(s.sessionId);
        if (result?.ok === false) throw result.error || new Error('归档失败');
        archiveNotice.show(s.sessionId);
      });
    };
    // 继续使用原来的菜单与动作，只把入口改为整行右键（含 Shift+F10 / 菜单键）。
    const openThreadMenu = (event, s) => {
      event.preventDefault(); event.stopPropagation();
      menuAnchor.current = event.currentTarget.querySelector('.dsc-thread-main');
      const box = menuAnchor.current.getBoundingClientRect();
      const point = event.type === 'contextmenu' && (event.clientX || event.clientY) ? { x: event.clientX, y: event.clientY } : { x: box.left + 16, y: box.bottom };
      hideHover(); setProjectMenu(null); setMenu({ ...s, point });
    };
    const row = (s, rowActive = active) => {
      const state = status.get(s.sessionId);
      const actionsActive = rowActive && !menu && !projectMenu && !editing && !renaming;
      const pending = state?.pendingInteraction;
      const running = state?.running && !pending;
      const completed = completions.has(s.sessionId) && !pending && !state?.running;
      const activity = pending ? '等待处理' : state?.running ? '运行中' : completed ? '已完成' : relativeTime(s.updatedAt);
      return h('div', { key: s.sessionId, className: 'dsc-thread' + (s.sessionId === currentId && panel.activePanelId === null ? ' is-active' : '') + (archived.has(s.sessionId) ? ' is-archived' : '') + (pinned.has(s.sessionId) ? ' is-pinned' : ''),
        onContextMenu: e => openThreadMenu(e, s), onKeyDown: e => { if (e.key === 'ContextMenu' || (e.shiftKey && e.key === 'F10')) openThreadMenu(e, s); },
        onPointerEnter: e => enterHover(e.currentTarget, { kind: 'thread', id: s.sessionId, title: s.title || '未命名对话', status: activity, workspaceTitle: workspaceOf(s.sessionId)?.title, path: workspaceOf(s.sessionId)?.path }), onPointerLeave: closeHover },
        h('button', { type: 'button', className: 'dsc-thread-main', 'aria-haspopup': 'menu', onClick: () => { if (archived.has(s.sessionId)) run(() => ctx.uiWorkspace.unarchiveSession(s.sessionId)); else { ctx.uiWorkspace.openSession(s.sessionId); onNavigate?.(); } } },
          h('span', { className: 'dsc-state', 'data-state': pending ? 'pending' : 'idle' }, pending && h(Icon, { name: 'chat', size: 14 })),
          h(ThreadTitle, { title: s.title || '未命名对话' }),
          running ? h('span', { className: 'dsc-thread-running', role: 'img', 'aria-label': '对话进行中', title: '对话进行中' },
            h('svg', { className: 'dsc-running-spinner', ref: syncSessionSpinner, onAnimationStart: event => syncSessionSpinner(event.currentTarget), viewBox: '0 0 16 16', width: 12, height: 12, fill: 'none', 'aria-hidden': true },
              h('circle', { cx: 8, cy: 8, r: 6.5, stroke: 'currentColor', strokeWidth: 1.6, opacity: .22 }),
              h('circle', { cx: 8, cy: 8, r: 6.5, stroke: 'currentColor', strokeWidth: 1.6, strokeDasharray: '30.6 10.2', strokeLinecap: 'round' })))
            : completed ? h('span', { className: 'dsc-thread-completion', role: 'img', 'aria-label': '对话已完成，未读', title: '对话已完成，未读' }) : h('small', { className: 'dsc-thread-time' }, activity)),
        h('div', { className: 'dsc-thread-actions' },
          h(ThreadAction, { label: pinned.has(s.sessionId) ? '取消置顶聊天' : '置顶聊天', className: 'dsc-pin-action', pressed: pinned.has(s.sessionId), active: actionsActive, onIntent: hideHover, onClick: () => togglePin(s) }, h(PinMark, { filled: pinned.has(s.sessionId) })),
          h(ThreadAction, { label: archived.has(s.sessionId) ? '取消归档聊天' : '归档聊天', active: actionsActive, onIntent: hideHover, onClick: () => toggleArchive(s) }, h(Icon, { name: 'archive', size: 14 }))));
    };
    const addWorkspace = async () => {
      setAdding(true);
      await run(async () => {
        const picked = await ctx.uiWorkspace.pickDirectory();
        if (!picked) return;
        const path = typeof picked === 'string' ? picked : picked.path;
        if (!path) return;
        const created = await ctx.workspaces.create({ path });
        await ctx.uiWorkspace.openWorkspace(created.workspaceId);
        onNavigate?.();
      });
      if (alive.current) setAdding(false);
    };
    const projectHeading = h('div', { className: 'dsc-tree-tools', 'data-compact': !tools },
      h('button', { type: 'button', className: 'dsc-projects-toggle', 'aria-label': '项目', 'aria-expanded': projectsOpen, onClick: () => { hideHover(); setMenu(null); setProjectMenu(null); setProjectsOpen(!projectsOpen); } }, h('span', { className: 'dsc-tree-tools-label' }, '项目'), h(Icon, { name: 'chevron', size: 12 })),
      h('button', { type: 'button', className: 'dsc-icon-button', title: '添加工作区', onClick: addWorkspace, disabled: adding }, h(Icon, { name: 'plus' })));
    return h('div', { className: 'dsc-ui dsc-workspaces' },
      query && projectHeading,
      h(ErrorLine, { text: message || (catalog.error && errorText(catalog.error)) || (workspaces.error && errorText(workspaces.error)) }),
      h('div', { className: 'dsc-tree-scroll' },
        query ? h(React.Fragment, null, h('div', { className: 'dsc-section-title' }, '搜索结果'), visible.map(s => row(s))) : h(React.Fragment, null,
          pinned.size > 0 && h('section', null, h('div', { className: 'dsc-section-title' }, '置顶'), groups.pins.map(s => row(s))),
          projectHeading,
          h(ProjectFold, { open: projectsOpen, className: 'dsc-project-list-fold' }, h('div', { className: 'dsc-project-list' }, workspaces.items.map(w => {
            const children = groups.projects.get(w.workspaceId) || [];
            // 初帧保留当前会话派生作为过渡；useLayoutEffect 会在绘制前把尚无记录的所属项目固化为 true。
            const open = expanded[w.workspaceId] ?? w.sessionIds.includes(currentId);
            const shown = projectSessions(w.workspaceId, children);
            const hidden = children.length - shown.length;
            const more = moreExpanded[w.workspaceId] === true;
            const toggleMore = () => { hideHover(); setMenu(null); setProjectMenu(null); setMoreExpanded(previous => ({ ...previous, [w.workspaceId]: !(previous[w.workspaceId] === true) })); };
            return h('section', { key: w.workspaceId }, h('div', { className: 'dsc-project', onPointerEnter: e => enterHover(e.currentTarget, { kind: 'project', id: w.workspaceId, workspace: w, title: w.title || '未命名项目', count: children.length, path: w.path, pinned: w.pinned === true }), onPointerLeave: closeHover },
              h('button', { type: 'button', className: 'dsc-project-main', onClick: () => { hideHover(); setMenu(null); setProjectMenu(null); setExpanded(previous => ({ ...previous, [w.workspaceId]: !(previous[w.workspaceId] ?? w.sessionIds.includes(currentId)) })); }, 'aria-expanded': open }, h(Icon, { name: open ? 'folderOpen' : 'folder' }), h('span', null, w.title || '未命名项目')),
              h('button', { type: 'button', className: 'dsc-row-action', title: '项目菜单', 'aria-label': '项目菜单', 'aria-haspopup': 'menu', 'aria-expanded': projectMenu?.workspaceId === w.workspaceId, onClick: e => { projectAnchor.current = e.currentTarget; setHover(null); setProjectMenu(projectMenu?.workspaceId === w.workspaceId ? null : w); } }, '⋯'),
              h('button', { type: 'button', className: 'dsc-row-action', title: '在此项目新建对话', 'aria-label': '在此项目新建对话', onClick: () => { ctx.uiWorkspace.startSession(w.workspaceId); onNavigate?.(); } }, h(Icon, { name: 'pencil', size: 14 }))),
              h(ProjectFold, { open }, h('div', { className: 'dsc-project-children' }, children.length
                ? h(React.Fragment, null, shown.map(s => row(s, active && projectsOpen && open)),
                  children.length > PROJECT_SESSION_LIMIT && (more || hidden > 0) && h('button', { type: 'button', className: 'dsc-project-more', 'aria-expanded': more, onClick: toggleMore }, more ? '收起' : `显示更多（剩余 ${hidden}）`))
                : h('small', { className: 'dsc-empty' }, '暂无对话'))));
          }))),
          h('div', { className: 'dsc-section-title' }, '最近'), groups.recent.map(s => row(s))),
        !visible.length && catalog.phase === 'ready' && h('div', { className: 'dsc-empty' }, query ? '没有匹配的对话' : '选择项目，开始新对话'),
        catalog.phase !== 'ready' && h('div', { className: 'dsc-empty', role: 'status' }, '正在加载会话…')),
      h('label', { className: 'dsc-archive-toggle' }, h('input', { type: 'checkbox', checked: showArchived, onChange: e => setShowArchived(e.target.checked) }), '显示已归档对话'),
      menu && h(Popover, { anchor: menuAnchor, point: menu.point, onClose: () => setMenu(null), label: '对话菜单', width: 228 },
        h(Option, { title: '重命名', icon: 'pencil', onClick: () => { const target = menu; setMenu(null); hideHover(); setRenaming(target); } }),
        h(Option, { title: pinned.has(menu.sessionId) ? '取消置顶' : '置顶', icon: 'pin', onClick: () => { const target = menu; setMenu(null); togglePin(target); } }),
        h(Option, { title: '分叉对话', icon: 'chat', onClick: () => { const target = menu; setMenu(null); run(() => ctx.uiWorkspace.forkSession(target.sessionId)); } }),
        h(Option, { title: archived.has(menu.sessionId) ? '取消归档' : '归档', icon: 'archive', onClick: () => { const target = menu; setMenu(null); toggleArchive(target); } })),
      // Codex 风格项目菜单：仅提供编辑与移除项目两项，编辑复用现有编辑项目对话框；从行右侧下方展开。
      projectMenu && h(Popover, { anchor: projectAnchor, onClose: () => setProjectMenu(null), label: '项目菜单', width: 228, placement: 'right' },
        h(Option, { title: '编辑', icon: 'pencil', onClick: () => { const target = projectMenu; setProjectMenu(null); editWorkspace(target); } }),
        h(Option, { title: '移除项目', icon: 'close', onClick: () => { const target = projectMenu; setProjectMenu(null); if (!window.confirm(`移除项目“${target.title || '未命名项目'}”？`)) return; run(() => ctx.workspaces.delete(target.workspaceId)); } })),
      hover && !menu && !projectMenu && (hover.kind === 'project'
        ? h(ProjectHoverCard, { key: hover.id, data: hover, anchor: hoverAnchor, onClose: hideHover, onEnter: cancelHover, onLeave: closeHover, onReveal: () => revealWorkspace(hover), onEdit: () => editWorkspace(hover.workspace) })
        : h(ThreadHoverCard, { key: hover.id, data: hover, anchor: hoverAnchor, onClose: hideHover, onEnter: cancelHover, onLeave: closeHover })),
      editing && h(EditWorkspaceDialog, { key: editing.workspaceId, workspace: editing, onClose: () => setEditing(null), onRename: title => ctx.workspaces.rename(editing.workspaceId, title), onDelete: () => ctx.workspaces.delete(editing.workspaceId) }),
      renaming && h(RenameThreadDialog, { key: renaming.sessionId, thread: renaming, onClose: () => setRenaming(null), onRename: title => rename(renaming, title) }));
  };
}

const SKILLS_PANEL_ID = 'codex-style-skills';
const SKILLS_PACKAGE = '@xinxing1708/dsh-codex-style';
const SKILLS_PAGE_SIZE = 6;

const SKILL_SOURCE_GROUPS = [
  { id: 'project', label: '项目', sources: ['project-dsh', 'project-agents'] },
  { id: 'personal', label: '个人', sources: ['user-dsh', 'user-agents', 'custom'] },
  { id: 'bundled', label: '内置', sources: ['bundled'] }
];
const SKILL_SOURCE_GROUP_OTHER = { id: 'other', label: '其他来源' };

function mountSkillsRemote(ctx) {
  const { z } = require('zod');
  const scope = z.object({ sessionId: z.string().optional(), cwd: z.string().optional() }).passthrough();
  const skill = z.object({
    name: z.string(), description: z.string(), whenToUse: z.string().optional(), path: z.string().optional(),
    invocation: z.object({ modelInvocable: z.boolean(), userInvocable: z.boolean() }).passthrough(),
    source: z.string(), provider: z.string()
  }).passthrough();
  const catalog = z.object({
    skills: z.array(skill), complete: z.boolean(), unavailable: z.string().optional(),
    scope: z.object({ cwd: z.string().optional(), session: z.boolean().optional(), preset: z.string().optional() }).passthrough().optional()
  }).passthrough();
  const definition = z.union([z.null(), skill.extend({ content: z.string() }).passthrough()]);
  return ctx.remote.$mount({
    package: SKILLS_PACKAGE + '/skills',
    descriptors: [
      { id: SKILLS_PACKAGE + '#codexStyleSkills/catalog', service: 'codexStyleSkills', namespace: 'codexStyleSkills', method: 'catalog', invocation: { kind: 'direct' },
        parameters: [{ name: 'request', wire: 'request', source: 'json', codec: { mode: 'strict', typeSymbol: SKILLS_PACKAGE + '#skills-scope', create: () => scope, jsonSchema: { type: 'object' } } }],
        result: { mode: 'strict', typeSymbol: SKILLS_PACKAGE + '#skills-catalog', create: () => catalog } },
      { id: SKILLS_PACKAGE + '#codexStyleSkills/content', service: 'codexStyleSkills', namespace: 'codexStyleSkills', method: 'content', invocation: { kind: 'direct' },
        parameters: [{ name: 'request', wire: 'request', source: 'json', codec: { mode: 'strict', typeSymbol: SKILLS_PACKAGE + '#skills-content-request', create: () => z.object({ name: z.string(), sessionId: z.string().optional(), cwd: z.string().optional() }).passthrough(), jsonSchema: { type: 'object' } } }],
        result: { mode: 'strict', typeSymbol: SKILLS_PACKAGE + '#skills-content', create: () => definition } }
    ]
  });
}

function unwrapRemote(answer) {
  if (answer !== null && typeof answer === 'object' && 'ok' in answer) {
    if (!answer.ok) throw new Error(answer.error?.message || '技能服务返回错误');
    return answer.value;
  }
  return answer;
}

/**
 * Resolve the visible scope. No retained main Session means the global catalog, never a guessed project;
 * `agentPreset` rides along so a new draft keeps a preset that carries this skill.
 */
function skillScopeOf(ctx) {
  const sessions = ctx.sessions.list.getSnapshot();
  const workspaces = ctx.workspaces.list.getSnapshot();
  const byId = sessions.byId || {};
  const sessionId = (sessions.ids || []).find(id => (byId[id]?.retainedBy?.mainView ?? 0) > 0);
  if (sessionId === undefined) return { cwd: undefined, workspaceTitle: '' };
  const workspace = (workspaces.items || []).find(row => row.sessionIds?.includes(sessionId));
  const summary = byId[sessionId] || {};
  return {
    sessionId,
    cwd: summary.cwd,
    workspaceId: workspace?.workspaceId,
    workspaceTitle: workspace?.title || workspace?.path || '',
    agentPreset: summary.projectionValues?.agentPreset
  };
}

function scopeKeyOf(scope) { return JSON.stringify([scope.sessionId ?? null, scope.cwd ?? null]); }
function scopeRequest(scope) {
  return { ...(scope.sessionId === undefined ? {} : { sessionId: scope.sessionId }), ...(scope.cwd === undefined ? {} : { cwd: scope.cwd }) };
}

function createSkillsController(ctx) {
  const initialScope = skillScopeOf(ctx);
  const store = createSnapshotStore({ phase: 'idle', skills: [], complete: true, unavailable: '', error: '', refreshing: false, scope: initialScope, scopeKey: scopeKeyOf(initialScope) });
  let generation = 0;
  let disposed = false;
  // Cordis 只在声明了 'remote.codexStyleSkills' 的作用域里暴露该命名空间；由独立 inject 连接注入。
  let service;
  let connectedListener = null;
  // 作用范围一变就丢弃旧范围的数据；详情由页面按 scopeKey 关闭，避免同名技能串正文。
  const syncScope = scope => {
    const key = scopeKeyOf(scope);
    const current = store.getSnapshot();
    if (key === current.scopeKey) return current;
    const next = { ...current, scope, scopeKey: key, skills: [], complete: true, unavailable: '', error: '', phase: current.phase === 'idle' ? 'idle' : 'loading' };
    store.set(next);
    return next;
  };
  const load = async () => {
    if (disposed) return;
    const scope = skillScopeOf(ctx);
    syncScope(scope);
    const key = scopeKeyOf(scope);
    const current = generation += 1;
    const beforeLoad = store.getSnapshot();
    store.set({ ...beforeLoad, phase: beforeLoad.phase === 'ready' ? 'ready' : 'loading', refreshing: true, error: '', unavailable: '' });

    let fetchedSkills = null;
    let isComplete = true;
    let failure = '技能服务尚未就绪';

    // 1. 优先尝试自建 codexStyleSkills 后台服务
    if (service) {
      try {
        const val = unwrapRemote(await service.catalog(scopeRequest(scope)));
        if (val && Array.isArray(val.skills)) {
          fetchedSkills = val.skills;
          isComplete = val.complete !== false;
        }
      } catch (err) {
        failure = draftFailureText(err);
        console.warn('[skills] codexStyleSkills catalog unavailable, falling back to native skills:', err?.message || err);
      }
    }

    // 2. 降级：使用 DSH 原生全局内置的 remote.skills 服务
    if (fetchedSkills === null) {
      try {
        const nativeSkills = ctx.remote?.skills || (typeof ctx.get === 'function' ? ctx.get('remote.skills') : undefined);
        const sessionId = scope.sessionId;
        if (sessionId && nativeSkills && typeof nativeSkills.list === 'function') {
          const res = await nativeSkills.list({ sessionId });
          if (res && res.ok && Array.isArray(res.value?.skills)) {
            fetchedSkills = res.value.skills.map(s => {
              return {
                name: s.name,
                description: s.description || '',
                source: s.source || 'unknown',
                ...(typeof s.path === 'string' && s.path !== '' ? { path: s.path } : {}),
                whenToUse: s.whenToUse || '',
                invocation: {
                  userInvocable: s.invocation?.userInvocable ?? false,
                  modelInvocable: s.invocation?.modelInvocable ?? s.modelInvocable ?? false
                }
              };
            });
          } else {
            failure = '原生技能目录读取失败';
          }
        } else if (!sessionId) {
          failure = '当前没有可用会话，且全局技能服务不可用';
        }
      } catch (err) {
        failure = draftFailureText(err);
        console.warn('[skills] native skills fallback error:', err);
      }
    }

    if (disposed || current !== generation) return;
    const latest = store.getSnapshot();
    if (latest.scopeKey !== key) return;

    if (fetchedSkills !== null) {
      const keepPrevious = isComplete === false && latest.skills.length > 0;
      store.set({
        ...latest,
        phase: 'ready',
        skills: keepPrevious ? latest.skills : fetchedSkills,
        complete: isComplete,
        unavailable: '',
        error: '',
        refreshing: false
      });
    } else {
      store.set({
        ...latest,
        phase: latest.phase === 'ready' ? 'ready' : 'error',
        skills: latest.skills || [],
        complete: latest.complete,
        unavailable: '',
        error: failure,
        refreshing: false
      });
    }
  };
  const content = async (skill, scope) => {
    // 1. 优先尝试自建服务
    if (service) {
      try {
        const val = unwrapRemote(await service.content({ name: skill.name, ...scopeRequest(scope) }));
        if (val === null) return null;
        if (val && typeof val.content === 'string') return val;
      } catch (e) {
        throw new Error(`技能正文读取失败：${draftFailureText(e)}`);
      }
    }
    throw new Error("技能正文服务不可用，无法读取原始正文");
  };
  // 命名空间就绪/断开时由外部调用；已显示“尚未就绪”的页面在连上后自动重读。
  const connect = remote => {
    service = remote;
    if (typeof connectedListener === 'function') connectedListener();
    return () => { if (service === remote) service = undefined; };
  };
  const onConnected = listener => { connectedListener = listener; return () => { if (connectedListener === listener) connectedListener = null; }; };
  return { store, load, content, connect, onConnected, dispose() { disposed = true; generation += 1; service = undefined; connectedListener = null; } };
}

function groupSkills(skills) {
  const groups = [];
  const rest = [];
  for (const skill of skills) {
    const group = SKILL_SOURCE_GROUPS.find(row => row.sources.includes(skill.source));
    if (group === undefined) { rest.push(skill); continue; }
    let bucket = groups.find(row => row.id === group.id);
    if (bucket === undefined) { bucket = { id: group.id, label: group.label, skills: [] }; groups.push(bucket); }
    bucket.skills.push(skill);
  }
  if (rest.length > 0) groups.push({ ...SKILL_SOURCE_GROUP_OTHER, skills: rest });
  return groups.filter(group => group.skills.length > 0);
}

// 自绘实心立方体：无真实图标元数据时的唯一 fallback，按名称在黄 / 紫两款原创配色中选择。
function SkillCube({ size = 40, tone = 'amber' }) {
  const palette = tone === 'violet'
    ? { top: '#9b7cf2', left: '#7350d8', right: '#5a3cb8', edge: '#c3b0ff' }
    : { top: '#f4c95d', left: '#d59b2d', right: '#a9741c', edge: '#ffe29a' };
  return h('svg', { viewBox: '0 0 40 40', width: size, height: size, 'aria-hidden': true, className: 'dsc-skill-cube' },
    h('path', { d: 'M20 4 35 12.5 20 21 5 12.5Z', fill: palette.top }),
    h('path', { d: 'M5 12.5 20 21v15L5 27.5Z', fill: palette.left }),
    h('path', { d: 'M35 12.5 20 21v15l15-8.5Z', fill: palette.right }),
    h('path', { d: 'M20 4 35 12.5 20 21 5 12.5Z', fill: 'none', stroke: palette.edge, strokeWidth: 1.1, opacity: .55 }));
}
function cubeTone(skill) {
  let hash = 0;
  for (const char of String(skill.name)) hash = (hash * 31 + char.charCodeAt(0)) % 997;
  return hash % 2 === 0 ? 'amber' : 'violet';
}

function SkillCard({ skill, onOpen }) {
  return h('button', { type: 'button', className: 'dsc-skill-card', onClick: e => onOpen(skill, e.currentTarget) },
    h('span', { className: 'dsc-skill-card-icon' }, h(SkillCube, { tone: cubeTone(skill) })),
    h('span', { className: 'dsc-skill-card-copy' },
      h('span', { className: 'dsc-skill-card-title' }, skill.name),
      h('span', { className: 'dsc-skill-card-desc' }, skill.description)),
    skill.invocation?.modelInvocable && h('span', { className: 'dsc-skill-card-flag', title: '模型可自动调用', 'aria-label': '模型可自动调用' }, h(Icon, { name: 'check', size: 14 })));
}

function SkillSection({ group, expanded, onToggle, onOpen, query }) {
  const visible = query === '' && !expanded ? group.skills.slice(0, SKILLS_PAGE_SIZE) : group.skills;
  const hidden = group.skills.length - visible.length;
  const names = group.skills.slice(SKILLS_PAGE_SIZE).map(skill => skill.name).slice(0, 2).join('、');
  return h('section', { className: 'dsc-skills-section' },
    h('h2', { className: 'dsc-skills-section-title' }, group.label),
    h('div', { className: 'dsc-skills-grid' }, visible.map(skill => h(SkillCard, { key: skill.name, skill, onOpen }))),
    query === '' && group.skills.length > SKILLS_PAGE_SIZE && h('button', { type: 'button', className: 'dsc-skills-more', onClick: onToggle },
      expanded ? '收起' : `查看 ${names}，另有 ${hidden} 项`));
}

/** Mirror the native client helper exactly: no empty-segment filtering, colons kept literal. */
function skillFileAddress(sessionId, cwd, path) {
  const encodeSegment = segment => encodeURIComponent(segment).replace(/%3A/gi, ':');
  const encodePath = value => value.split('/').map(encodeSegment).join('/');
  const normalized = path.replace(/\\/g, '/');
  const root = (cwd || '').replace(/\\/g, '/').replace(/\/+$/, '');
  const address = root !== '' && normalized.startsWith(root + '/') ? normalized.slice(root.length + 1) : normalized;
  return 'dsh-resource://file/session/' + encodeSegment(sessionId) + '/' + encodePath(address);
}

function draftFailureText(error) { return error?.message || String(error); }

async function startFreshDraft(ctx, scope, prompt) {
  // 新建 Session 后打开；用宿主 retained reference 等待就绪，再用 reference.binding 初始化草稿。
  // 绝不调用发送、提交或模型接口；只对新建 ID 写命令。
  const request = {};
  if (scope?.workspaceId !== undefined) request.workspaceId = scope.workspaceId;
  else if (scope?.cwd !== undefined) request.cwd = scope.cwd;
  if (scope?.agentPreset !== undefined) request.agentPreset = scope.agentPreset;
  const sessionId = await ctx.sessions.create(request);
  if (typeof sessionId !== 'string' || sessionId === '') throw new Error('宿主未返回新会话');
  ctx.uiWorkspace.openSession(sessionId);
  const conversation = ctx.get('conversation');
  if (conversation?.input?.requestDraftInitialization === undefined) throw new Error('当前宿主未提供草稿初始化接口');
  await ctx.sessions.using(sessionId, { source: 'codexStyleSkills' }, async reference => {
    const binding = reference?.binding;
    if (binding === undefined) throw new Error('新会话尚未就绪');
    const outcome = conversation.input.requestDraftInitialization(binding, { prompt, whenDraftExists: 'replace' });
    if (outcome === 'blocked') throw new Error('草稿初始化被宿主拒绝');
  });
  ctx.layout.selectPanel(null);
  return sessionId;
}

class MarkdownBoundary extends React.Component {
  constructor(props) { super(props); this.state = { failed: false }; }
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (this.state.failed) {
      return h('div', { className: 'dsc-skills-preview-note', role: 'alert' }, 'Markdown 渲染失败，已显示原始正文。', h('pre', { className: 'dsc-skills-plain' }, this.props.text));
    }
    return this.props.children;
  }
}

let SKILL_PRIMITIVES;
function skillPrimitives() {
  if (SKILL_PRIMITIVES === undefined) {
    try { SKILL_PRIMITIVES = require('@deepseek-ai/dsh-client-ui-primitives'); } catch { SKILL_PRIMITIVES = null; }
  }
  return SKILL_PRIMITIVES;
}
// 契约取自宿主客户端 markdownLabels：code.copyLabel / copiedLabel / toolbarLabels{codeLabel,wrapLabel,unwrapLabel}
// 与 footnotes；中文值取自 @deepseek-ai/dsh-client-locale 的 zh 字典，缺失任一键会被代码块组件直接读取而崩溃。
const SKILL_MARKDOWN_LABELS = {
  code: {
    copyLabel: '复制',
    copiedLabel: '复制成功',
    toolbarLabels: { codeLabel: '代码块', wrapLabel: '自动换行', unwrapLabel: '取消自动换行' }
  },
  footnotes: '脚注'
};
function SkillMarkdown({ text }) {
  const primitives = skillPrimitives();
  if (primitives?.MarkdownText === undefined) return h('pre', { className: 'dsc-skills-plain' }, text);
  return h(MarkdownBoundary, { text }, h(primitives.MarkdownText, { text, labels: SKILL_MARKDOWN_LABELS }));
}

function dialogFocusables(dialog) {
  if (!dialog) return [];
  return [...dialog.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])')].filter(node => !node.disabled && node.getClientRects().length > 0);
}

function SkillsDetail({ ctx, controller, scope, skill, onClose, restoreFocus }) {
  const [state, setState] = useState({ phase: 'loading', content: '', error: '' });
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const [trying, setTrying] = useState(false);
  const busy = useRef(false);
  const menuAnchor = useRef(null);
  const dialogRef = useRef(null);
  const closeButton = useRef(null);
  useEffect(() => {
    let active = true;
    setState({ phase: 'loading', content: '', error: '' });
    controller.content(skill, scope).then(value => { if (active) setState({ phase: 'ready', content: value?.content || '', error: value === null ? '该技能已不在当前范围' : '' }); },
      error => { if (active) setState({ phase: 'error', content: '', error: draftFailureText(error) }); });
    return () => { active = false; };
  }, [skill.name, scope.sessionId, scope.cwd]);
  useEffect(() => {
    closeButton.current?.focus();
    return () => { restoreFocus?.(); };
  }, []);
  const run = async action => {
    setNotice('');
    try { await action(); } catch (error) { setNotice(draftFailureText(error)); }
  };
  const withMenu = action => { setMenuOpen(false); run(action); };
  const openResource = () => {
    if (skill.path === undefined) return Promise.reject(new Error('该技能没有可打开的文件'));
    if (scope.sessionId !== undefined && ctx.sidebarRight?.openResource !== undefined) {
      ctx.sidebarRight.openResource(skillFileAddress(scope.sessionId, scope.cwd, skill.path));
      return Promise.resolve();
    }
    return ctx.remote.session.openWorkspacePath({ path: skill.path }).then(answer => {
      if (!answer?.ok) throw new Error('宿主未能打开该文件');
    });
  };
  const reveal = () => skill.path === undefined ? Promise.reject(new Error('该技能没有文件路径'))
    : ctx.remote.session.openWorkspacePath({ path: skill.path, action: 'reveal' }).then(answer => { if (!answer?.ok) throw new Error('宿主未能定位该文件'); });
  const copyMarkdown = async () => {
    let content = state.content;
    if (content === '') { const value = await controller.content(skill, scope); content = value?.content || ''; }
    if (content === '') throw new Error('该技能没有可复制的正文');
    if (navigator.clipboard?.writeText === undefined) throw new Error('当前窗口不支持剪贴板');
    await navigator.clipboard.writeText(content);
  };
  const tryNow = async () => {
    if (busy.current) return;
    busy.current = true;
    setTrying(true);
    setNotice('');
    try {
      await startFreshDraft(ctx, scope, `/${skill.name} `);
      onClose();
    } catch (error) { setNotice(draftFailureText(error)); } finally { busy.current = false; setTrying(false); }
  };
  const onKeyDown = event => {
    if (event.key === 'Escape') {
      event.preventDefault();
      if (menuOpen) setMenuOpen(false); else onClose();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = dialogFocusables(dialogRef.current);
    if (focusable.length === 0) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };
  const hasPath = skill.path !== undefined;
  // 原生 MarkdownText 的 labels 代码块契约不可为空；userInvocable=false 时不得出现“立即试用”命令按钮。
  const canTry = skill.invocation?.userInvocable !== false;
  const iconNode = h('span', { className: 'dsc-skills-dialog-icon' }, h(SkillCube, { tone: cubeTone(skill) }));
  const actionsNode = h('div', { className: 'dsc-skills-dialog-headactions' },
    h('button', { type: 'button', ref: menuAnchor, className: 'dsc-icon-button', title: '更多', 'aria-label': '更多', 'aria-haspopup': 'menu', 'aria-expanded': menuOpen, onClick: () => setMenuOpen(!menuOpen) },
      h('svg', { viewBox: '0 0 16 16', width: 16, height: 16, 'aria-hidden': true }, [4, 8, 12].map(x => h('circle', { key: x, cx: x, cy: 8, r: 1.4, fill: 'currentColor' })))),
    h('button', { type: 'button', ref: closeButton, className: 'dsc-icon-button', title: '关闭', 'aria-label': '关闭', onClick: onClose }, h(Icon, { name: 'close', size: 16 })));
  const headRow = h('div', { className: 'dsc-skills-dialog-headrow' }, iconNode, actionsNode);
  const menuNode = menuOpen && h(Popover, { anchor: menuAnchor, onClose: () => setMenuOpen(false), label: '技能操作', width: 220, placement: 'bottom' },
    hasPath && h(Option, { title: '打开', icon: 'arrowUpRight', onClick: () => withMenu(openResource) }),
    hasPath && h(Option, { title: '在文件资源管理器中显示', icon: 'folder', onClick: () => withMenu(reveal) }),
    h(Option, { title: '复制 Markdown', onClick: () => withMenu(copyMarkdown) }));
  const previewNode = h('div', { className: 'dsc-skills-preview' },
    state.phase === 'loading' && h('div', { className: 'dsc-skills-preview-note' }, '正在读取正文…'),
    state.phase === 'error' && h('div', { className: 'dsc-skills-preview-note', role: 'alert' }, state.error),
    state.phase === 'ready' && state.content === '' && h('div', { className: 'dsc-skills-preview-note' }, state.error || '该技能没有正文'),
    state.phase === 'ready' && state.content !== '' && h(SkillMarkdown, { text: state.content }));
  const footNode = h('div', { className: 'dsc-skills-dialog-foot' },
    notice !== '' && h('span', { className: 'dsc-skills-dialog-notice', role: 'alert' }, notice),
    canTry && h('button', { type: 'button', className: 'dsc-skills-try', disabled: trying, 'aria-disabled': trying ? 'true' : undefined, onClick: tryNow }, h(Icon, { name: 'chat', size: 15 }), trying ? '正在新建草稿…' : '立即试用'));
  // dialog 必须是 overlay 的唯一子节点，且完整包住 headrow / 标题 / 描述 / 预览 / 底栏。
  const dialogNode = h('div', { ref: dialogRef, className: 'dsc-skills-dialog', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'dsc-skill-title', tabIndex: -1, onKeyDown },
    headRow,
    menuNode,
    h('div', { className: 'dsc-skills-dialog-title' }, h('h2', { id: 'dsc-skill-title' }, skill.name), h('span', { className: 'dsc-skills-dialog-kind' }, 'Skill')),
    h('p', { className: 'dsc-skills-dialog-desc' }, skill.description),
    previewNode,
    footNode);
  return createPortal(h('div', { className: 'dsc-ui dsc-skills-overlay', onPointerDown: e => { if (e.target === e.currentTarget) onClose(); } }, dialogNode), document.body);
}

function SkillsPage({ ctx, controller, active }) {
  const [expanded, setExpanded] = useState({});
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const state = useSource(controller.store);
  const sessions = useSource(ctx.sessions.list);
  const workspaces = useSource(ctx.workspaces.list);
  const scope = useMemo(() => skillScopeOf(ctx), [sessions, workspaces]);
  useEffect(() => { if (active) controller.load(); }, [active, scope.sessionId, scope.cwd]);
  useEffect(() => (active ? controller.onConnected(() => controller.load()) : undefined), [active]);
  useEffect(() => { setSelected(null); }, [state.scopeKey]);
  const filtered = query === '' ? state.skills : state.skills.filter(skill => (skill.name + ' ' + skill.description + ' ' + (skill.whenToUse || '')).toLowerCase().includes(query.toLowerCase()));
  const groups = groupSkills(filtered);
  const rangeLabel = scope.workspaceTitle || (scope.cwd ? scope.cwd.replace(/^.*[\\/]/, '') : '全局技能');
  const onOpen = (skill, anchor) => setSelected({ skill, scope: { ...scope }, anchor });
  const closeDetail = () => {
    const anchor = selected?.anchor;
    setSelected(null);
    if (anchor?.isConnected) anchor.focus();
  };
  return h('div', { className: 'dsc-ui dsc-skills-page' },
    h('header', { className: 'dsc-skills-header' },
      h('div', { className: 'dsc-skills-heading' }, h('h1', null, '技能'), h('p', null, '通过任务专用技能扩展 DSH')),
      h('div', { className: 'dsc-skills-toolbar' },
        h('span', { className: 'dsc-skills-scope', title: scope.cwd || '全局' }, rangeLabel),
        h('label', { className: 'dsc-skills-search' }, h(Icon, { name: 'search', size: 14 }), h('input', { type: 'search', value: query, placeholder: '搜索技能', 'aria-label': '搜索技能', onChange: e => setQuery(e.target.value) })),
        h('button', { type: 'button', className: 'dsc-icon-button', title: '刷新', 'aria-label': '刷新', onClick: () => controller.load() }, h(IconRefreshOutlineRegular, { size: 16 })))),
    state.phase === 'loading' && h('div', { className: 'dsc-skills-state' }, '正在读取技能…'),
    state.phase === 'unavailable' && h('div', { className: 'dsc-skills-state' }, `技能服务尚未就绪：${state.unavailable}`),
    state.phase === 'error' && h('div', { className: 'dsc-skills-state dsc-skills-state-error', role: 'alert' }, state.error, h('button', { type: 'button', onClick: () => controller.load() }, '重试')),
    state.phase === 'ready' && state.error !== '' && h('div', { className: 'dsc-skills-state dsc-skills-state-warn', role: 'alert' }, `刷新失败，显示上次结果：${state.error}`),
    state.phase === 'ready' && !state.complete && h('div', { className: 'dsc-skills-state dsc-skills-state-warn' }, '部分来源暂不可见，目录可能不完整。'),
    state.phase === 'ready' && groups.length === 0 && h('div', { className: 'dsc-skills-state' }, query === '' ? '当前范围没有技能' : `没有匹配“${query}”的技能`),
    groups.map(group => h(SkillSection, { key: group.id, group, query, expanded: expanded[group.id] === true, onToggle: () => setExpanded({ ...expanded, [group.id]: !(expanded[group.id] === true) }), onOpen })),
    selected !== null && h(SkillsDetail, { ctx, controller, scope: selected.scope, skill: selected.skill, onClose: closeDetail, restoreFocus: () => { if (selected.anchor?.isConnected) selected.anchor.focus(); } }));
}

function registerSkillsPage(ctx) {
  // 单次注入：先 $mount 发布 namespace，再注册页面；页面本身不等待 remote.codexStyleSkills。
  // 只声明 remote 与页面所需服务，避免"等 namespace、namespace 等 $mount"的循环。
  return ctx.inject(['slots', 'remote', 'sessions', 'workspaces', 'uiSession', 'uiWorkspace', 'layout', 'sidebarRight'], scope => {
    scope.effect(() => mountSkillsRemote(scope), 'codex-style: skills remote methods');
    const controller = createSkillsController(scope);
    scope.effect(() => () => controller.dispose(), 'codex-style: skills catalog');
    // 页面不等命名空间；命名空间由 $mount 发布后，这个子 inject 才激活并把服务交给 controller。
    scope.inject(['remote.codexStyleSkills'], inner => inner.effect(() => controller.connect(inner.remote.codexStyleSkills), 'codex-style: skills service connection'));
    scope.slots.inject('main', function* () {
      yield scope.slots.register({ name: 'main', key: SKILLS_PANEL_ID }, function SkillsMain() {
        const panel = useSource(scope.layout.panelInfo);
        return h(SkillsPage, { ctx: scope, controller, active: panel.activePanelId === SKILLS_PANEL_ID });
      });
    });
  });
}


function apply(ctx) {
  // 1. 同步深浅色模式（仅用于侧栏和导航轨自身 CSS 变量切换，不覆写 DSH 全局主题）
  ctx.effect(() => {
    const previous = document.body.getAttribute('data-dsc-color-scheme');
    const sync = snapshot => {
      const mode = snapshot?.active?.colorScheme || 'dark';
      document.body.setAttribute('data-dsc-color-scheme', mode);
    };
    if (ctx.theme?.getTheme) sync(ctx.theme.getTheme());
    const off = ctx.on ? ctx.on('theme/change', sync) : () => {};
    return () => {
      off();
      if (previous === null) document.body.removeAttribute('data-dsc-color-scheme');
      else document.body.setAttribute('data-dsc-color-scheme', previous);
    };
  }, 'codex-sidebar: theme mode');

  // 2. 注入侧栏与导航轨样式，并标记 body 激活状态
  ctx.effect(() => {
    const previous = document.body.getAttribute('data-dsh-codex-sidebar');
    document.body.setAttribute('data-dsh-codex-sidebar', PLUGIN_VERSION);
    const style = document.createElement('style');
    const skillsStyle = document.createElement('style');
    skillsStyle.dataset.dshCodexSkills = PLUGIN_VERSION;
    skillsStyle.textContent = SKILLS_CSS_TEXT;
    document.head.appendChild(skillsStyle);
    style.dataset.dshCodexSidebar = PLUGIN_VERSION;
    // 独立图标轨复用原生入口，但不容纳展开行的第二个按钮（取消固定）。
    style.textContent = CSS_TEXT + `
body[data-dsh-codex-sidebar] [data-dsc-extension-nav] :has(> [data-dsc-extension-row]:first-child, > :first-child [data-dsc-extension-row]) > :nth-child(2) {
  display: none !important;
}`;
    document.head.appendChild(style);
    return () => {
      style.remove(); skillsStyle.remove();
      if (previous === null) document.body.removeAttribute('data-dsh-codex-sidebar');
      else document.body.setAttribute('data-dsh-codex-sidebar', previous);
    };
  }, 'codex-sidebar: stylesheet');

  const register = (scope, name, component, inject) => scope.slots.inject(name, () => {
    const priorities = scope.slots.entries(name).map(entry => entry.options.priority ?? 0);
    const priority = Math.min(0, ...priorities) - 1;
    return scope.slots.register({ name, priority, ...(inject ? { inject } : {}) }, component);
  });

  // 3. 注册技能主面板
  registerSkillsPage(ctx);

  // 4. 侧栏顶部品牌标与设置入口（包裹在 ctx.inject(['slots']) 内确保 slots 服务就绪）
  ctx.inject(['slots'], scope => {
    const components = {
      'sidebar.brand.mark': () => h('img', { className: 'dsc-brand-mark', src: BRAND_MARK, alt: '' }),
      'sidebar.brand.name': () => h('span', { className: 'dsc-ui dsc-brand' }, h('strong', null, 'deepseek'), h('small', null, 'HARNESS')),
      'settings.trigger': () => h('span', { className: 'dsc-ui dsc-settings-trigger' }, h(Icon, { name: 'settings', size: 18 }), '设置'),
      'sidebar.toggle.badge': () => null
    };
    for (const [name, component] of Object.entries(components)) register(scope, name, component);
  });

  // 4. 挂载 Codex 导航栏与侧栏呈现系统
  ctx.inject(['slots', 'sessions', 'uiSession', 'workspaces', 'uiWorkspace', 'layout', 'shortcuts', 'remote', 'locale', 'pluginNavigation'], scope => {
    const sidebar = createSidebarPresentation();
    scope.effect(() => () => sidebar.dispose(), 'codex-sidebar: sidebar presentation');

    const archiveNotice = createArchiveNotice(sessionId => scope.uiWorkspace.unarchiveSession(sessionId));
    scope.effect(() => () => archiveNotice.dispose(), 'codex-sidebar: archive notice');
    scope.slots.inject('shell.overlay', () => scope.slots.register({ name: 'shell.overlay', id: 'codex-sidebar:archive-notice' }, () => h(ArchiveNotice, { notice: archiveNotice })));

    {
      const inner = makeSidebarChrome(scope, sidebar, archiveNotice);
      register(scope, 'sidebar.workspaces', props => h(CodexSidebarRenderBoundary, null, h(inner, props)));
    }
    {
      const innerShell = makeShellChrome(scope, sidebar);
      scope.slots.inject('shell.overlay', () => scope.slots.register({ name: 'shell.overlay', id: 'codex-sidebar:shell' }, props => h(CodexSidebarRenderBoundary, null, h(innerShell, props))));
    }
    register(scope, 'conversation.header.leading', makeCollapsedNewChat(scope));
  });

  // 5. 挂载底部齿轮设置菜单（带第三方 footer 入口自适应）
  ctx.inject(['slots', 'modules', 'locale', 'remote', 'remote.account'], scope => register(scope, 'settings.launcher', makeGearLauncher(scope)));
}

    return {
      name: 'codex-sidebar',
      inject: ['slots', 'theme'],
      apply: apply
    };
  }
});
