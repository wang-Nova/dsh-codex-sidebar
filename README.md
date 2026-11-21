# DSH Codex Sidebar

从 [`@xinxing1708/dsh-codex-style`](https://github.com/xinxing1708/DSH-Codex-Style) 纯净提取的 **Codex 桌面风格独立导航栏与侧栏插件**，在保留 Codex 导航与侧栏交互的同时，完整保持 DeepSeek Harness（DSH）原生对话区与组件体验。

当前兼容声明为 `engines.dsh: ">=0.2.1-rc.2 <0.3.0-0"`，版本变更见 [更新记录](CHANGELOG.md)。

## 特性

- **保留 Codex 经典导航栏（52px Rail）**：
  - 独立纯图标导航轨（首页、任务、插件、更多）；
  - 自动对齐探测宿主公开 slot 的第三方扩展图标（如 Remote、用量统计）；
  - 底部齿轮设置菜单（带第三方 footer 入口自适应与账号信息）。
- **保留 Codex 侧栏（Sidebar Shell）**：
  - 展开态（Docked）与收起态（Floating 浮动卡片）双模态；
  - 侧栏收起状态下，鼠标悬停导航轨图标时弹出悬浮预览卡片；
  - 搜索对话与项目弹层、新聊天按钮、工作区与会话树形管理、未读完成提示点、右键归档与删除；
  - 窗口左上角常驻侧栏展开/收起切换按键。
- **尽量保持 DSH 对话区与其它组件的原生样貌**（具体效果需在所用 DSH 版本中验证）：
  - **不改动**输入框（Composer）：保持官方输入卡、原生发送按键、附件及多行展示；
  - **不改动**模型选择器：保留 DSH 原生模型下拉菜单（不注入推理强度滑条与 MAX 光效）；
  - **不改动**权限预设：保留 DSH 原生权限卡片与弹窗；
  - **不改动**顶栏（Header）：保留 DSH 原生模式标签与会话视图标签页（对话 / 轨迹 / 画廊 / 上下文等）；
  - **不改动**正文输出（Body）：不修改流式打字与折叠逻辑，保持原生 Markdown 与思考展示；
  - **不改动**全局调色盘：不污染全局背景与消息气泡底色。
- **深浅色主题自适应**：
  - 随 DSH 外观偏好（浅色 / 深色 / 跟随系统）自动同步导航轨与侧栏专属配色。
- **只读技能目录视图**：
  - 技能目录优先使用插件服务；不可用时，仅在有当前会话时尝试原生技能目录。来源信息缺失时归为其他，无法读取正文时会明确提示，不以摘要冒充正文。

## 安装

### 方式一：在 DSH 内一键在线安装（推荐）

1. 打开 DSH，进入 **自定义 → 插件 → 添加插件**；
2. 输入包名 `dsh-codex-sidebar` 并安装、启用；
3. 按插件管理器提示刷新或重启 DSH，检查左侧导航轨与侧栏是否正常显示。

> 由 DSH 插件管理器统一管理配置，不要手动修改 profile 的 `package.json` 或 `cordis.patch.yml`。如同时安装了 `@xinxing1708/dsh-codex-style`，建议先关闭或卸载其中一个，避免侧栏样式冲突。

### 方式二：从 GitHub Releases 离线下载

前往 [Releases 页面](https://github.com/wang-Nova/dsh-codex-sidebar/releases) 下载对应版本的 `dsh-codex-sidebar-*.tgz`（标准 npm 插件包）或 `.zip` 压缩包，并使用 `SHA256SUMS.txt` 校验文件完整性后，通过 DSH 插件管理器安装。

## 更新

通过线上包名 `dsh-codex-sidebar` 安装后，可在 DSH **「自定义 → 插件 → dsh-codex-sidebar」** 详情页直接使用宿主自带的检查更新与一键升级入口。

## 开发验证

```bash
npm test
```

## 许可与致谢

- 本插件基于上游项目 [`@xinxing1708/dsh-codex-style`](https://github.com/xinxing1708/DSH-Codex-Style)（MIT License）提取与裁剪，遵循 [MIT License](LICENSE)。
- 第三方版权与品牌素材说明见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) 与 [licenses/DeepSeek-Harness-LICENSE](licenses/DeepSeek-Harness-LICENSE)。
- 本项目为社区独立插件，与 OpenAI 或 DeepSeek 无关联，未获其赞助或背书。
