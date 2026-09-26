import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../policy.module.css'

export const metadata: Metadata = {
  title: '使用帮助 · OffBuddy',
  description: 'OffBuddy 下班搭子的使用说明与支持信息。',
  alternates: { canonical: 'https://offbuddy.ahaknow.com/support/' },
}

const questions = [
  ['打开 App 后会怎样开始计时？', '首次设置后可选择“打开 App 自动开始”；每天首次打开时开始计时。关闭该开关后，请在首页手动开始。返回 App 不会重置计时。'],
  ['打开飞书就表示打卡成功了吗？', '不是。OffBuddy 只会按你的设置尝试打开飞书工作台或快捷指令，不读取飞书考勤状态，也不会代替你完成打卡。'],
  ['钱袋里的金额是实际工资吗？', '不是。金额按你填写的月薪、平均工作日、工作时长和记录时长估算，只供个人参考，不是薪资结算或奖金承诺。'],
  ['不同手机上的记录会同步吗？', '不会。工作记录保存在本机。你可以分别导出不含工资的日历 CSV，或含金额与时薪的 JSON。'],
  ['为什么天气需要定位？', '定位仅用于你主动启用时获取当地天气。拒绝或关闭定位后，计时功能仍可正常使用。'],
]

export default function SupportPage() {
  return (
    <main className={styles.page}>
      <header className={styles.nav}><Link href="../">← OffBuddy · 下班搭子</Link><Link href="../privacy/">隐私说明</Link></header>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>HERE WHEN YOU NEED A HAND</span>
        <h1>使用帮助</h1>
        <p>关于计时、飞书、钱袋和个人记录，先从这些常见问题开始。</p>
      </section>
      <div className={styles.sections}>
        {questions.map(([question, answer]) => <section className={styles.section} key={question}><h2>{question}</h2><p>{answer}</p></section>)}
        <section className={`${styles.section} ${styles.notice}`}><h2>联系 OffBuddy 支持</h2><p>正式支持邮箱或联系电话待发布者补充。请在公布有效联系方式后，再将本页作为 App Store 支持网址提交。</p></section>
      </div>
      <footer className={styles.footer}><Link href="../">OffBuddy 官网</Link><span>© 2026 AhaKnow LLC</span><a href="https://ahaknow.com/">AhaKnow · 其他小作品</a></footer>
    </main>
  )
}
