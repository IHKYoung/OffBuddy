# OffBuddy · 下班搭子

**到点收工，一起回家。**

本轮继续只打磨“今天”：圆润字体级联（系统英文数字与符号、中文圆体）、等大透明按钮、紧凑天气浮层、底部来源与原生陪伴动画。保留10组天气插画、100句每日陪伴及统一猫猫角色。

## 每天怎么用

1. 首次设置每天工作时长、时薪或月薪，保存后开始计时。
2. 以后当天首次打开 App 自动开始；已有计时不重置，当天已收工不重复开始。
3. 到点由系统提醒，仍等待用户点 **我下班了**；明确提前收工时会确认。
4. 下班页展示实际时间、超出计划时长及参考时间价值，可查看详情和分享。

月薪 ÷ 可编辑平均每月工作日 ÷ 每天小时数 = 参考时薪。平均工作日默认 22，仅为估算值；换算时薪保留两位小数，再换算每分钟。时间价值按超出计划秒数计算，不代表薪资结算。

顶部插画固定，下面内容可独立滚动，操作按钮固定在页面底部。其他现存页面本轮未扩展。旧记录保留，旧版自动生成的 timerElapsed 记录不追溯改写；尚未确认的记录不自动结束、不自动生成第二条计时。

## 打开工程

`/Users/changkunyang/XCode/OffBuddy/OffBuddy.xcodeproj`

- Scheme **OffBuddy**：正常模式。模拟器选择 iPhone 17 Pro / iOS 26.5。
- Scheme **OffBuddy Demo**：独立内存演示，带演示标识，不安排提醒或跳转。
- Xcode 27 使用 **Device Hub** 显示模拟器。
- Team 固定为 **AHAKNOW LLC / HC559NT2NP**，同时保存到 `project.yml`。
- Bundle ID `OffBuddy`；Apple ID `6814854255`。未执行远端证书注册或发布。

一键构建安装：`./scripts/run-simulator.sh [模拟器UDID]`。
工程生成：`xcodegen generate`，无需新增第三方依赖。

## 验收

- [最新截图](docs/preview.html)
- [本轮设计与状态规则](docs/specs/today-weather/plan.md)
- [20张场景与100句文案](docs/design/weather-gallery.html)
- [WeatherKit 后台配置与真机验收](docs/specs/today-weather/weather-setup.md)
- [验证记录](docs/verification.md)

打卡 App 的具体名称/官方链接尚待用户提供；通用跳转、失败处理及先提醒后打开的次序已实现。
模拟器不能替代真机对锁屏、声音、专注模式和长时提醒的验收。备份恢复、正式发布未纳入本轮。
