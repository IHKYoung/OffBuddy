import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../policy.module.css'

export const metadata: Metadata = {
  title: '隐私说明 · OffBuddy',
  description: 'OffBuddy 如何在本机保存工作时长、工资估算、日历记录与可选天气信息。',
  alternates: { canonical: 'https://offbuddy.ahaknow.com/privacy/' },
}

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <header className={styles.nav}><Link href="../">← OffBuddy · 下班搭子</Link><Link href="../support/">使用帮助</Link></header>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>YOUR DATA, YOUR TIME</span>
        <h1>隐私说明</h1>
        <p>OffBuddy 把个人计时与时间价值记录保存在你的设备上。当地天气是可选功能；没有账号，也没有 OffBuddy 云端同步。</p>
        <span className={styles.updated}>生效日期：2026 年 9 月 26 日</span>
      </section>
      <div className={styles.sections}>
        <section className={styles.section}><h2>我们保存什么</h2><p>为了提供计时、钱袋、日历和成就功能，OffBuddy 在本机保存你填写的工作时长、工作日、月薪、提醒和打开 App 的偏好，以及每次计时的开始、计划结束、实际结束、状态和成就进度。工资与估算金额仅用于个人展示。</p><p>OffBuddy 不要求注册账号，不提供自己的服务器同步，不在应用中投放广告或建立跨应用追踪档案。</p></section>
        <section className={styles.section}><h2>可选的当地天气</h2><p>你可以不开启天气功能，计时和日历仍可使用。启用后，iOS 会在你允许时提供当前位置，OffBuddy 使用 Apple WeatherKit 获取当前天气。OffBuddy 不保存定位坐标或位置轨迹，也不会在后台持续定位。Apple 对其天气服务数据的处理受 Apple 自己的条款和隐私说明约束；你可以在 iOS「设置」中撤销定位权限。</p></section>
        <section className={styles.section}><h2>提醒与打开其他 App</h2><p>下班提醒由 iOS 的闹钟或通知功能承载，是否授权由你控制。你选择飞书、自定义 App 链接或快捷指令后，OffBuddy 会按你的操作尝试打开目标；打开目标不会替你完成考勤，也不会把 OffBuddy 的计时记录提交给目标 App。</p></section>
        <section className={styles.section}><h2>导出与分享</h2><ul><li>日历 CSV 包含日期、开始、计划和实际结束时间、工作时长、状态与时区，不含工资和金额。</li><li>金额明细 JSON 含工资折算时薪、金额估算和记录时间。分享前请检查文件内容与接收对象。</li><li>导出只在你主动操作后生成；之后由 iOS 分享面板和你选择的 App 处理文件，适用相应服务自己的隐私规则。</li></ul></section>
        <section className={styles.section}><h2>保存期限与设备备份</h2><p>应用没有独立云端账户或服务器副本。记录留在本机应用数据中；设备备份、迁移和恢复受你的 Apple 设备设置与 Apple 服务规则控制。清零小钱袋只重置累计起点，不删除日历记录。卸载应用前请先导出需要保留的内容。</p></section>
        <section className={`${styles.section} ${styles.notice}`}><h2>联系与政策更新</h2><p>本政策适用于 OffBuddy 1.0。公开支持邮箱尚待发布者确认；确认后会在<a href="../support/">使用帮助页</a>公布。政策有实质更新时，我们会在本页更新日期与内容。</p></section>
      </div>
      <footer className={styles.footer}><Link href="../">OffBuddy 官网</Link><span>© 2026 AhaKnow LLC</span><Link href="../support/">使用帮助</Link></footer>
    </main>
  )
}
