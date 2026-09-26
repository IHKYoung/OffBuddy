import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const wenKai = localFont({ src: '../assets/LXGWWenKaiScreen.ttf', variable: '--font-wenkai-screen', display: 'swap' })
export const metadata: Metadata = {
  metadataBase: new URL('https://offbuddy.ahaknow.com'),
  title: 'OffBuddy · 下班搭子',
  description: '到点收工，一起回家。猫咪陪你认真工作，也记得好好生活。',
  icons: { icon: '/offbuddy/cat-icon.png', apple: '/offbuddy/cat-icon.png' },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="zh-CN"><body className={wenKai.variable}>{children}</body></html>
}
