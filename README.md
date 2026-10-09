# DeepSeek Harness 樱花主题

两款独立的樱花主题插件，当前版本 **1.7.0**：

| 插件 | 配色 |
| --- | --- |
| `dsh-sakura-pink` | 玫瑰粉底色、樱桃红花云 |
| `dsh-sakura-purple` | 薰衣草紫底色、蓝紫花云 |

使用动漫风樱花背景、半透明玻璃卡片和统一的菜单、设置、消息、轨迹与附件表面。图片嵌入插件，不需要在线加载图片。插件只修改客户端外观，不修改模型指令、凭据或请求。

## 安装

已验证的目标应用为 **DeepSeek Harness 官方桌面版 0.2.0-rc.2**。在插件页添加 `releases/` 中对应的 `.tgz` 文件，或使用应用 CLI：

```powershell
dsh plugin --profile desktop add ./releases/dsh-sakura-pink-1.7.0.tgz --offline
dsh plugin --profile desktop add ./releases/dsh-sakura-purple-1.7.0.tgz --offline
```

一次启用一款：先关闭当前主题，再启用另一款。若插件图未刷新，重启官方客户端。两款同时启用时，客户端加载顺序决定当前主题；不会叠加两套背景。主题仅作用于浅色模式，深色模式撤销装饰和配色。

## 开发与验证

Node.js 22.19+（22 系列）或 24+，安装根目录开发依赖：

```powershell
npm install
npm run build
npm test
```

构建两款客户端；共享材质以 `shared/surfaces.css` 为准，构建前同步到各插件。宿主入口为预置的空注册函数。

```powershell
cd sakura-pink
npm pack --pack-destination ../releases
```

紫色版在 `sakura-purple` 目录以相同方式打包。仓库附带的 1.7.0 安装包经过发布整理：更新说明文档，并移除构建注释中的本机绝对路径；功能代码及美术资源保持一致。

## 目录

- `sakura-pink/`、`sakura-purple/`：源码、图片资源、构建配置和已构建入口。
- `shared/`：两套共用的轨迹及 Toast 材质。
- `releases/`：两款 1.7.0 安装包。
- `verify-*.mjs`：主题生命周期与颜色对比度检查。
- `VALIDATION.md`：验证范围与限制。

## 限制与素材

页面样式匹配官方 0.2.0-rc.2 的组件类名，升级应用后需要重新检查。花瓣为静态装饰，窄窗口会裁切场景；不覆盖系统原生目录选择框。半透明表面在不支持背景模糊时回退为实色。

图片来自本主题设计迭代中保留的资源。本仓库没有为代码或美术素材指定新的开源许可证；不得据此推断第三方素材的授权或与任何动画作品、DeepSeek 官方的合作关系。
