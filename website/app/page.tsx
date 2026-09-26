import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './site.module.css'

export const metadata: Metadata = {
  title: 'OffBuddy · 下班搭子',
  description: '到点收工，一起回家。设好工作时长，打开开始倒计时；用一只装金币的小钱袋，记得认真工作，也记得好好生活。',
  alternates: { canonical: 'https://offbuddy.ahaknow.com/' },
  openGraph: {
    title: 'OffBuddy · 下班搭子',
    description: '到点收工，一起回家。',
    url: 'https://offbuddy.ahaknow.com/',
    siteName: 'OffBuddy',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: '/offbuddy/office-scene.png', width: 1536, height: 1024, alt: '橘猫陪你认真工作，到点收工回家' }],
  },
}

const features = [
  ['timer', '开始工作', '设置好时长。打开 App 自动计时，也可以手动开始。'],
  ['coin', '看见时间的价值', '根据你填写的月薪估算时间价值；超时后按时薪扣减显示金额。'],
  ['cat', '一只小猫陪你', '小猫在空白处跑动。完成日常目标，解锁不同的猫猫动作。'],
  ['calendar', '留下自己的记录', '按天回顾计时记录与下班成就，需要时导出 CSV 或金额 JSON。'],
]

export default function OffBuddyHome() {
  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <a className={styles.brand} href="./" aria-label="OffBuddy 首页">
          <Image src="/offbuddy/cat-icon.png" alt="" width={44} height={44} priority />
          <span>OffBuddy<small>下 班 搭 子</small></span>
        </a>
        <nav aria-label="主要导航">
          <a href="#how">怎么陪你</a><a href="#privacy">隐私与记录</a>
          <a className={styles.navCTA} href="./support/">使用帮助</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <Image className={styles.heroArt} src="/offbuddy/office-scene.png" alt="" fill priority sizes="100vw" />
        <div className={styles.heroWash} />
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>A LITTLE MORE LIFE AFTER WORK</span>
          <h1>到点收工，<br />一起回家。</h1>
          <p>设好你的工作时长，开始今天的倒计时。<br />让每一段认真工作的时间，都离喜欢的生活近一点。</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#how">看看 OffBuddy 怎么陪你</a>
            <a className={styles.softButton} href="./support/">了解使用方式</a>
          </div>
          <p className={styles.availability}>OffBuddy · App Store ID 6814854255 · 1.0 上架准备中</p>
        </div>
        <div className={styles.petBadge}>
          <Image src="/offbuddy/cat-walk.png" alt="OffBuddy 的猫猫搭子" width={116} height={116} />
          <span>认真工作<br />也好好生活</span>
        </div>
      </section>

      <section className={styles.promise} id="how">
        <div className={styles.sectionIntro}>
          <span className={styles.eyebrow}>CLOCK IN. CLOCK OUT. COME HOME.</span>
          <h2>就做几件重要的小事。</h2>
          <p>清楚、轻松，留一点空间给自己。</p>
        </div>
        <div className={styles.featureGrid}>
          {features.map(([icon, title, body], index) => (
            <article className={styles.feature} key={title}>
              <span className={styles.featureNumber}>0{index + 1}</span>
              <span className={styles.featureIcon} aria-hidden="true">{icon === 'timer' ? '◷' : icon === 'coin' ? '✦' : icon === 'cat' ? '⌁' : '▦'}</span>
              <h3>{title}</h3><p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.closing}>
        <Image src="/offbuddy/homecoming-scene.png" alt="暖色黄昏里，小猫准备回家" width={1536} height={1024} sizes="(max-width: 760px) 100vw, 720px" />
        <div><span className={styles.eyebrow}>YOUR TIME IS YOURS</span><h2>下班不是结束，<br />是生活的开始。</h2><p>钱袋里的每一枚金币，都是给认真工作的你的一个小小拥抱。</p></div>
      </section>

      <section className={styles.privacy} id="privacy">
        <div><span className={styles.eyebrow}>PERSONAL BY DESIGN</span><h2>个人的时间，留在自己的设备。</h2></div>
        <p>无需注册账号。工作记录与工资设置保存在本机。天气按需授权获取；导出文件由你选择是否分享。计时和金额都是个人参考，不代表第三方 App 考勤或实际工资。</p>
        <div className={styles.policyLinks}><a href="./privacy/">隐私说明</a><a href="./support/">使用帮助</a></div>
      </section>

      <footer className={styles.footer}>
        <span>© 2026 AhaKnow LLC · OffBuddy</span>
        <span>到点收工，一起回家。</span>
        <Link href="https://ahaknow.com">AhaKnow · 看看其他小作品 ↗</Link>
      </footer>
    </main>
  )
}
