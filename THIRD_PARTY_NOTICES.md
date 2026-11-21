# 第三方说明

本插件由社区独立维护，与 OpenAI 或 DeepSeek 无关联，未获其赞助或背书。OpenAI、Codex、DeepSeek 等名称及品牌归各自权利人所有；此处仅用于描述界面风格和宿主兼容性，不表示商标授权。

## 上游项目致谢

本插件的导航轨、侧栏外壳、技能只读宿主服务与配套样式提取并裁剪自社区开源项目：

- 项目：[`@xinxing1708/dsh-codex-style`](https://github.com/xinxing1708/DSH-Codex-Style)
- 版权：Copyright (c) 2026 xinxing1708 and DSH-Codex-Style contributors
- 许可：MIT（完整许可文本见根目录 [LICENSE](LICENSE)）

## DeepSeek Harness 品牌图

编入 `lib/client.js` 中的白色剪影品牌图标延续自上游项目，由 DeepSeek Harness 公开源码中的应用图标生成，仅用于已安装 DSH 内的宿主品牌识别，不作为本插件的独立官方身份标识。

- 来源：[deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)
- 源文件：`apps/desktop/resources/icon.png`（commit `687f282e8625c6b8d11ff58211a90524be2e4317`）
- 版权：Copyright (c) 2026 DeepSeek
- 许可：MIT，完整文本随附于 [licenses/DeepSeek-Harness-LICENSE](licenses/DeepSeek-Harness-LICENSE)。

## 运行依赖与界面参考

React、客户端模块与宿主服务由 DSH 的模块加载器提供，本包不捆绑这些第三方运行库。界面尺寸、色值与交互节奏承袭上游对 Codex 桌面界面的参考测量（包括上游对 [codex-ui-kit](https://github.com/JaminZhou/codex-ui-kit) 数值资料的参考），不随包分发 OpenAI 官方图标、字体、截图或声音素材。
