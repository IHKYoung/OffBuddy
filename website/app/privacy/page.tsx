import type { Metadata } from 'next'
import PolicyFrame from '../policy-frame'
import styles from '../policy.module.css'

const canonical = 'https://offbuddy.ahaknow.com/privacy'
const englishPrivacy = 'https://offbuddy.ahaknow.com/en/privacy'

export const metadata: Metadata = {
  title: '隐私政策 · OffBuddy 下班搭子',
  description: '了解 OffBuddy 如何在本机保存工作计时和钱袋记录，以及你如何管理天气、提醒与导出。',
  alternates: {
    canonical,
    languages: { 'zh-Hans': canonical, 'en-US': englishPrivacy },
  },
  openGraph: { title: '隐私政策 · OffBuddy', description: '你的时间记录，由你掌握。', url: canonical, type: 'website' },
}

const facts = [
  ['01', '记录保存在本机', '无需注册账号，也没有 OffBuddy 云端同步。'],
  ['02', '天气由你选择', '不开启当地天气，计时与日历仍可使用。'],
  ['03', '分享由你决定', '只有你主动导出后，文件才会交给其他 App。'],
]

export default function PrivacyPage() {
  return (
    <PolicyFrame
      language="zh-CN"
      page="privacy"
      eyebrow="YOUR TIME, YOUR CHOICE"
      title="隐私政策"
      intro="OffBuddy 陪你记录工作与下班时间。我们尽量让个人记录留在你的设备上，并把每项可选权限交由你决定。"
      art="/offbuddy/office-scene.png"
      artAlt="暖色办公室里的 OffBuddy 猫咪"
      artTitle="你的记录，自己做主"
      artCaption="认真工作，也好好生活。"
      updated="最后更新：2026 年 9 月 27 日"
    >
      <section className={styles.quickFacts} aria-label="隐私摘要">
        {facts.map(([number, title, text]) => (
          <article className={styles.factCard} key={number}>
            <span className={styles.factNumber}>{number}</span>
            <h2 className={styles.factTitle}>{title}</h2>
            <p className={styles.factText}>{text}</p>
          </article>
        ))}
      </section>

      <div className={styles.sections}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>OffBuddy 会保存哪些信息</h2>
          <p>为提供计时、钱袋、日历和成就功能，App 会在你的设备上保存你填写的工作时长、工作日、月薪、提醒和启动偏好，以及每次计时的开始时间、计划结束时间、实际结束时间、状态和成就进度。工资与时间价值是基于你输入内容计算的个人估算。</p>
          <p>OffBuddy 不要求创建账号，也没有自己的云端同步、应用内广告或跨应用追踪档案。</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>当地天气与定位权限</h2>
          <p>当地天气是可选功能。只有你开启天气并允许定位后，iOS 才会向 OffBuddy 提供获取当地天气所需的位置。OffBuddy 不保存定位坐标或位置轨迹，也不会在后台持续定位。天气信息由 Apple WeatherKit 提供；Apple 对其服务数据的处理遵循 Apple 自己的条款与隐私政策。</p>
          <p>你可以在 OffBuddy 设置中关闭天气，或在 iOS「设置」中撤销定位权限。</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>提醒与打开其他 App</h2>
          <p>下班提醒通过 iOS 的通知或闹钟能力提供，相关权限由你控制。你选择飞书、自定义 App 链接或快捷指令后，OffBuddy 会按设置尝试打开目标；这不会读取对方的考勤状态，也不会替你打卡或向对方提交 OffBuddy 的计时记录。</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>导出文件包含什么</h2>
          <ul className={styles.list}>
            <li>日历 CSV 包含日期、开始时间、计划和实际结束时间、工作时长、状态与时区，不包含工资或金额。</li>
            <li>钱袋金额 JSON 包含根据工资设置换算的时薪、金额估算和记录时间。</li>
            <li>文件只在你主动导出后生成。之后由 iOS 分享面板和你选择的 App 处理；分享前请检查文件和接收对象。</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>保存期限、备份与删除</h2>
          <p>OffBuddy 没有独立的服务器副本，工作记录保存在本机应用数据中。设备备份、迁移和恢复取决于你的 Apple 设备设置与 Apple 服务。手动清零钱袋只会重置累计起点，不会删除日历记录；卸载 App 前，请先导出你想保留的内容。</p>
        </section>

        <section className={`${styles.section} ${styles.notice}`}>
          <h2 className={styles.sectionTitle}>你的隐私选择</h2>
          <ul className={styles.list}>
            <li>不使用天气时，可以关闭天气或拒绝定位；计时与日历仍可使用。</li>
            <li>可以在 iOS「设置」中管理 OffBuddy 的定位与通知权限，也可以在 App 内调整自动开始计时等偏好。</li>
            <li>导出完全由你发起；不分享文件，就不会把导出的记录交给其他 App。</li>
          </ul>
          <p>App Store Connect 中的「隐私政策」与「用户隐私选择」均指向本页。若你有隐私问题，请查看 <a href="/support/">使用支持</a> 页面；公开支持邮箱尚未发布。</p>
        </section>

        <section className={`${styles.section} ${styles.sectionWide}`}>
          <h2 className={styles.sectionTitle}>政策更新</h2>
          <p>如果 OffBuddy 的数据处理方式发生变化，我们会更新本页的说明和日期。当前说明适用于 OffBuddy 1.0。</p>
        </section>
      </div>
    </PolicyFrame>
  )
}
