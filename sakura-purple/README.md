# 樱花·紫

Independent DeepSeek Harness 0.2.0-rc.2 theme plugin: `dsh-sakura-purple`. The pink edition preserves the accepted rose-pink canvas and surface treatment. The purple edition starts from the saved lavender version and enhances canopy color, violet haze, tinted header, surfaces and borders.

Install the local tarball through the Plugins page or `dsh plugin --profile desktop add <tarball>`. Disable the current edition, enable the desired edition, then restart the official desktop client so its browser plugin graph reloads. If both are enabled, only one edition owns the palette and scene, according to client plugin load order. Removing the owner from the client graph restores the remaining edition. This guards against double artwork and conflicting token layers.

Both editions apply only in light mode. Dark mode removes their palette and decoration. Unloading removes the observer, style, scene and owned frame markers. Images are embedded; no network image requests occur. The source and build config are included for later adjustment.

## Model Experience

The plugin changes no model instructions, credentials, tools, history or requests. It has no token or KV-cache effect.

## Known Limitations

- Petals remain stationary. Narrow windows crop the full-frame scene.
- The distant and middle canopy use one plate with separate opacity controls.
- The embedded artwork makes the client bundle approximately 6.64 MB.


## Blossom contrast

Lavender ground contrasts with rose-pink upper and foreground blossoms. The canopy and foreground use an independently adjustable `--dsw-specific-sakura-blossom-filter`; transparency, blur, lighting and the reading veil remain layered. Petal colors follow the foreground blossoms.

## 1.1.0 页面扩展
设置页增加渐变纸面、花瓣角饰、选中导航和清晰输入状态；插件页增加半透明卡片、图标底座和分组色标。页面选择器匹配官方 0.2.0-rc.2；升级官方应用后需复查类名。主窗口配色保持不变。

## 1.1.1 花色调整
樱花·紫：薰衣草紫底色与矢车菊蓝樱花，柔和动漫花云。近景花云与散落花瓣使用同色系深浅对比，保留阅读区和设置／插件页布局。

## 1.1.2 蓝紫平衡
上方花云向紫色偏移，降低蓝色饱和度；散落花瓣同步改为柔和蓝紫色。

## 1.1.3 清晰度试调
轻微减少花簇、远景与枝条的模糊，保留原有蓝紫配色及阅读区遮罩。

## 1.2.0 设置页花团
右上和左下增加柔和花团，使用现有动漫花簇素材与各主题花色；装饰不接收输入，位于表单内容下方，随设置关闭或主题卸载清理。

## 1.2.1 装饰分布
设置页仅左侧导航栏保留花团，右上区域改为稀疏散落花瓣。

## 1.2.2 仅花瓣装饰
移除设置页全部花团，改为左侧留白、右上和右下分布的二十片大小不同的零散花瓣。

## 1.3.0 半透明玻璃
设置弹窗和插件卡片采用主题色半透明渐变、背景模糊和柔和内侧高光。文字保持完全不透明，输入区域使用更浓的底色；不支持背景模糊时回退至实色。

## 1.3.1 对话输入框
主对话输入框同步使用主题色半透明玻璃，输入文字保持完全不透明。

## 1.3.2 更明显的透光
玻璃底色不透明度降至14%–30%，插件卡片和输入框模糊降至5px，设置面板降至9px。文字保持不透明，表单输入底色继续保持较高浓度。

## 1.3.3 小控件玻璃
新会话按钮、更多菜单、设置下拉触发按钮、外观选中卡片和字号框补齐半透明表面；选中描边与键盘焦点保留。

## 1.4.0 菜单、提示与弹窗统一
使用共用菜单材质变量及dialog/alertdialog/tooltip语义角色扩展玻璃表面。悬浮提示使用较浓底色和深色文字，弹窗表单保持清晰；不改变审批逻辑、警告颜色或控件尺寸。原生系统目录选择框不属于网页主题覆盖范围。

## 1.4.1 提示框透明度与位置
提示框与菜单共用28%底色及玻璃模糊材质，保留深色文字。插件页页头说明移到图标旁边并与页头对齐，窗口缩放和滚动时重新定位；主题卸载时恢复原位置。

## 1.5.0 消息与工具卡片
用户消息使用与输入框一致的30%/14%玻璃渐变，代码、终端与工具结果使用48%阅读底。统一柔和描边、阴影和引用栏；内联代码与引用采用主题色。保留语法高亮、差异标记、状态语义、复制和折叠行为。匹配官方0.2.0-rc.2组件。

1.5.1：同步更新主题配色注册值，确保内联代码及工具表面在应用局部主题中生效。

## 1.6.0 轨迹、附件与等待状态
轨迹表与详情面板采用连续的半透明阅读底，固定表头保留较浓底色。附件、交付物和计划卡片统一玻璃材质，缩略图和进度条采用主题色；加载提示、空状态和思考高光统一配色，历史加载使用轻微花瓣呼吸效果并遵循减少动画偏好。保留原文件类型图标、错误警告、重试和状态行为。匹配官方0.2.0-rc.2。

## 1.6.2 轨迹页统一紫色玻璃
整个轨迹工作区共用单层68%紫色底（#CFB8E7）与12px模糊。移除表头、时间线、详情和代码预览的重复染色与阴影，仅保留轻描边和语义状态色。

## 1.7.0 可读性与主题一致性
加深状态、辅助文字、链接与差异标记，保留浅色状态底纹。紫色交互色表补齐多选、悬停、滚动条、边框和关闭开关。两款轨迹及Toast共用shared/surfaces.css规则，安装包携带相同副本；仅材质颜色由主题提供。Toast使用96%主题底色、深色文字与带下划线的操作链接。
