import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './policy.module.css'

type Language = 'zh-CN' | 'en'
type PageKind = 'privacy' | 'support'

type PolicyFrameProps = {
  language: Language
  page: PageKind
  eyebrow: string
  title: string
  intro: string
  art: string
  artAlt: string
  artTitle: string
  artCaption: string
  updated?: string
  children: ReactNode
}

export default function PolicyFrame({
  language,
  page,
  eyebrow,
  title,
  intro,
  art,
  artAlt,
  artTitle,
  artCaption,
  updated,
  children,
}: PolicyFrameProps) {
  const english = language === 'en'
  const homeHref = english ? '/en/' : '/'
  const privacyHref = english ? '/en/privacy' : '/privacy'
  const supportHref = english ? '/en/support/' : '/support/'
  const languageHref = english
    ? page === 'privacy' ? '/privacy' : '/support/'
    : page === 'privacy' ? '/en/privacy' : '/en/support/'

  return (
    <div className={styles.page} lang={english ? 'en' : 'zh-CN'}>
      <div className={styles.shell}>
        <header className={styles.nav}>
          <Link className={styles.brand} href={homeHref} aria-label={english ? 'OffBuddy home' : 'OffBuddy 官网首页'}>
            <Image src="/offbuddy/cat-icon.png" alt="" width={46} height={46} priority />
            <span className={styles.brandText}>
              <strong>OffBuddy</strong>
              <small>{english ? 'A little more life after work' : '下班搭子 · 到点收工，一起回家'}</small>
            </span>
          </Link>
          <nav className={styles.navLinks} aria-label={english ? 'Site navigation' : '网站导航'}>
            <Link className={styles.navLink} href={privacyHref} aria-current={page === 'privacy' ? 'page' : undefined}>
              {english ? 'Privacy' : '隐私政策'}
            </Link>
            <Link className={styles.navLink} href={supportHref} aria-current={page === 'support' ? 'page' : undefined}>
              {english ? 'Help & Support' : '使用支持'}
            </Link>
            <Link className={styles.languageSwitch} href={languageHref} lang={english ? 'zh-CN' : 'en'}>
              {english ? '中文' : 'EN'}
            </Link>
          </nav>
        </header>

        <section className={styles.hero} aria-labelledby="page-title">
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h1 id="page-title">{title}</h1>
            <p className={styles.heroIntro}>{intro}</p>
            {updated && <span className={styles.updated}>{updated}</span>}
          </div>
          <div className={styles.heroArt}>
            <Image className={styles.heroImage} src={art} alt={artAlt} fill priority sizes="(max-width: 760px) 100vw, 560px" />
            <div className={styles.artCaption}>
              <span className={styles.artPaw} aria-hidden="true">✦</span>
              <span><strong>{artTitle}</strong><small>{artCaption}</small></span>
            </div>
          </div>
        </section>

        <main className={styles.content}>{children}</main>

        <footer className={styles.footer}>
          <Link className={styles.footerBrand} href={homeHref}>OffBuddy · {english ? 'Clock out on time. Head home together.' : '到点收工，一起回家。'}</Link>
          <nav aria-label={english ? 'Policy pages' : '政策页面'}>
            <Link href={privacyHref}>{english ? 'Privacy Policy' : '隐私政策'}</Link>
            <Link href={supportHref}>{english ? 'Help & Support' : '使用支持'}</Link>
          </nav>
          <small>© 2026 AhaKnow LLC</small>
        </footer>
      </div>
    </div>
  )
}
