import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../site.module.css'

export const metadata: Metadata = {
  title: 'OffBuddy · Clock out together',
  description: 'Set your work hours and let OffBuddy count down to clock-out. A little cat, a little coin pouch, and a reminder to make room for life after work.',
  alternates: {
    canonical: 'https://offbuddy.ahaknow.com/en/',
    languages: { 'zh-CN': 'https://offbuddy.ahaknow.com/', en: 'https://offbuddy.ahaknow.com/en/' },
  },
  openGraph: {
    title: 'OffBuddy · Clock out together',
    description: 'Clock out on time. Head home together.',
    url: 'https://offbuddy.ahaknow.com/en/',
    siteName: 'OffBuddy',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/offbuddy/office-scene.png', width: 1536, height: 1024, alt: 'An orange cat keeping you company while you work' }],
  },
}

const features = [
  ['timer', 'Start your workday', 'Set your schedule. Open OffBuddy to start the countdown, or start it manually whenever you need.'],
  ['coin', 'See the value of your time', 'Estimate your time value from your monthly salary. After planned clock-out, the displayed amount decreases at your hourly rate.'],
  ['cat', 'A little cat by your side', 'Your cat wanders through open spaces. Keep up with small daily goals to unlock new cat animations.'],
  ['calendar', 'Keep a personal record', 'Look back on your timer sessions and clock-out milestones. Export a calendar CSV or an earnings JSON when you choose.'],
]

export default function EnglishHome() {
  return (
    <main className={styles.page} lang="en">
      <header className={styles.nav}>
        <a className={styles.brand} href="/en/" aria-label="OffBuddy home">
          <Image src="/offbuddy/cat-icon.png" alt="" width={44} height={44} priority />
          <span>OffBuddy<small>YOUR AFTER-WORK BUDDY</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#how">How it helps</a><a href="/en/privacy">Privacy</a>
          <a className={styles.languageSwitch} href="/" lang="zh-CN" aria-label="切换到中文">中文</a>
          <a className={styles.navCTA} href="/en/support/">Help</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <Image className={styles.heroArt} src="/offbuddy/office-scene.png" alt="" fill priority sizes="100vw" />
        <div className={styles.heroWash} />
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>A LITTLE MORE LIFE AFTER WORK</span>
          <h1>Clock out on time.<br />Head home together.</h1>
          <p>Set your work hours and start today’s countdown.<br />Every focused minute brings you a little closer to the life you love.</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#how">Meet your after-work buddy</a>
            <a className={styles.softButton} href="/en/support/">How to use OffBuddy</a>
          </div>
          <p className={styles.availability}>OffBuddy · App Store ID 6814854255 · Version 1.0</p>
        </div>
        <div className={styles.petBadge}>
          <Image src="/offbuddy/cat-walk.png" alt="OffBuddy’s cat companion" width={116} height={116} />
          <span>Work with care.<br />Live with care, too.</span>
        </div>
      </section>

      <section className={styles.promise} id="how">
        <div className={styles.sectionIntro}>
          <span className={styles.eyebrow}>CLOCK IN. CLOCK OUT. COME HOME.</span>
          <h2>Just a few little things that matter.</h2>
          <p>Clear, gentle, and with a little more room for yourself.</p>
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
        <Image src="/offbuddy/homecoming-scene.png" alt="A cat heading home in the warm light of dusk" width={1536} height={1024} sizes="(max-width: 760px) 100vw, 720px" />
        <div><span className={styles.eyebrow}>YOUR TIME IS YOURS</span><h2>Clocking out isn’t the end.<br />It’s life beginning again.</h2><p>Every coin in your pouch is a small reminder of the care you put into your work.</p></div>
      </section>

      <section className={styles.privacy} id="privacy">
        <div><span className={styles.eyebrow}>PERSONAL BY DESIGN</span><h2>Your time stays on your device.</h2></div>
        <p>No account is needed. Your work records and salary settings stay on your device. Local weather is optional. You decide whether to share exported files. Timer and earnings are personal estimates, not attendance records or actual payroll.</p>
        <div className={styles.policyLinks}><a href="/en/privacy/">Privacy details</a><a href="/en/support/">Help &amp; support</a></div>
      </section>

      <footer className={styles.footer}>
        <span>© 2026 AhaKnow LLC · OffBuddy</span>
        <span>Clock out on time. Head home together.</span>
        <Link href="https://ahaknow.com">AhaKnow · More little projects ↗</Link>
      </footer>
    </main>
  )
}
