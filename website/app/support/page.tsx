import type { Metadata } from 'next'
import PolicyFrame from '../policy-frame'
import styles from '../policy.module.css'

const canonical = 'https://offbuddy.ahaknow.com/support/'
const englishSupport = 'https://offbuddy.ahaknow.com/en/support/'

export const metadata: Metadata = {
  title: '使用支持 · OffBuddy 下班搭子',
  description: '查看 OffBuddy 自动计时、飞书跳转、钱袋估算、天气权限与个人记录的常见问题。',
  alternates: {
    canonical,
    languages: { 'zh-Hans': canonical, 'en-US': englishSupport },
  },
  openGraph: { title: '使用支持 · OffBuddy', description: '关于计时、飞书和个人记录的使用帮助。', url: canonical, type: 'website' },
}

const questions = [
  ['打开 App 后会自动开始计时吗？', '首次设置时可以开启“打开 App 自动开始”。开启后，每天第一次打开 OffBuddy 时开始计时；关闭后，可在今天页面手动开始。回到 App 不会重置正在进行的计时。'],
  ['打开飞书就代表打卡成功了吗？', '不是。OffBuddy 可以按你的设置尝试打开飞书，但不会读取飞书考勤状态，也不会替你完成打卡。请在飞书中确认打卡结果。'],
  ['钱袋金额是实际工资或奖金吗？', '不是。它根据你填写的月薪、平均工作日、每日工作时长和计时记录进行估算，只用于个人展示，不是工资结算或奖金承诺。'],
  ['工作记录会同步到其他设备吗？', '不会。记录保存在当前设备，没有 OffBuddy 账号或云端同步。你可以主动导出日历 CSV 或钱袋金额 JSON。'],
  ['日历 CSV 和金额 JSON 有什么区别？', '日历 CSV 记录日期、计划与实际下班时间、时长、状态和时区，不含工资金额；金额 JSON 会包含工资换算时薪与估算金额。分享前请检查文件内容。'],
  ['为什么天气需要定位权限？', '只有开启当地天气时，OffBuddy 才会在你允许后获取天气所需的位置。拒绝或关闭定位不会影响计时和日历功能。'],
  ['下班提醒没有出现怎么办？', '请检查 OffBuddy 的提醒设置，以及 iOS「设置」中的通知或闹钟权限。提醒能否按预期送达也可能受系统专注模式和设备设置影响。'],
  ['清零钱袋会删除我的日历记录吗？', '不会。清零只重置钱袋的累计起点，已经记录的工作日期和日历状态会保留。重要数据建议定期导出备份。'],
]

export default function SupportPage() {
  return (
    <PolicyFrame
      language="zh-CN"
      page="support"
      eyebrow="HERE WHEN YOU NEED A HAND"
      title="使用支持"
      intro="计时、飞书、钱袋和下班提醒遇到疑问？这里整理了 OffBuddy 1.0 的常见操作说明。"
      art="/offbuddy/homecoming-scene.png"
      artAlt="黄昏时分准备回家的 OffBuddy 猫咪"
      artTitle="收工以后，也要好好生活"
      artCaption="先把常见问题解决好。"
    >
      <p className={styles.faqIntro}>选择一个问题展开查看说明。找不到答案时，可以先查看 <a href="/privacy/">隐私政策</a>。</p>
      <div className={styles.faqList}>
        {questions.map(([question, answer], index) => (
          <details className={styles.faq} key={question} open={index === 0}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
      <section className={styles.contact}>
        <div>
          <h2>还需要帮助？</h2>
          <p>目前尚未公布独立的客服邮箱。本页会持续更新常见问题；如果你的问题涉及个人记录，请不要在公开页面粘贴工资或其他敏感信息。</p>
        </div>
        <div className={styles.contactLinks}>
          <a href="/privacy/">查看隐私政策</a>
        </div>
      </section>
    </PolicyFrame>
  )
}
