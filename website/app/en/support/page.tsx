import type { Metadata } from 'next'
import PolicyFrame from '../../policy-frame'
import styles from '../../policy.module.css'

const canonical = 'https://offbuddy.ahaknow.com/en/support/'
const chineseSupport = 'https://offbuddy.ahaknow.com/support/'

export const metadata: Metadata = {
  title: 'Help & Support · OffBuddy',
  description: 'Answers about OffBuddy timers, Feishu, earnings estimates, weather permissions, and personal records.',
  alternates: {
    canonical,
    languages: { 'zh-Hans': chineseSupport, 'en-US': canonical },
  },
  openGraph: { title: 'Help & Support · OffBuddy', description: 'Help with your timer, Feishu, and personal records.', url: canonical, type: 'website' },
}

const questions = [
  ['Does the timer start automatically when I open OffBuddy?', 'During first-time setup, you can turn on “Start when opened.” When enabled, the timer starts the first time you open OffBuddy each day. When it is off, start manually from Today. Returning to the app does not reset an active timer.'],
  ['Does opening Feishu mean I have clocked in?', 'No. OffBuddy can try to open Feishu as configured, but it does not read Feishu attendance status or clock in for you. Please confirm your attendance in Feishu.'],
  ['Is the coin pouch amount my actual pay or a bonus?', 'No. It is an estimate based on the monthly salary, average workdays, daily work hours, and timer records you enter. It is for personal display only, not payroll or a bonus promise.'],
  ['Do my work records sync to my other devices?', 'No. Records stay on this device. OffBuddy has no account or cloud sync. You can choose to export a calendar CSV or coin pouch earnings JSON.'],
  ['What is the difference between the calendar CSV and earnings JSON?', 'The calendar CSV contains dates, planned and actual clock-out times, duration, status, and time zone, without salary or earnings. The earnings JSON includes the salary-derived hourly rate and estimated amounts. Review the file before sharing.'],
  ['Why does local weather need location access?', 'OffBuddy requests the location needed for local conditions only when local weather is enabled and you grant permission. Declining or turning off location does not affect the timer or calendar.'],
  ['Why did my clock-out reminder not appear?', 'Check OffBuddy’s reminder settings and the notification or alarm permissions in iOS Settings. Delivery can also depend on system Focus modes and device settings.'],
  ['Will resetting the coin pouch delete my calendar?', 'No. Resetting the pouch only changes its accumulation start point. Recorded work dates and calendar statuses remain. Export important records regularly if you want a separate copy.'],
]

export default function EnglishSupportPage() {
  return (
    <PolicyFrame
      language="en"
      page="support"
      eyebrow="HERE WHEN YOU NEED A HAND"
      title="Help & Support"
      intro="Questions about your timer, Feishu, coin pouch, or clock-out reminders? Start with these OffBuddy 1.0 answers."
      art="/offbuddy/homecoming-scene.png"
      artAlt="The OffBuddy cat heading home at dusk"
      artTitle="Make room for life after work"
      artCaption="A few answers for the way home."
    >
      <p className={styles.faqIntro}>Choose a question to read the answer. You can also visit the <a href="/en/privacy">Privacy Policy</a>.</p>
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
          <h2>Still need help?</h2>
          <p>A dedicated support email has not been published yet. We’ll keep common answers up to date here. Please avoid posting salary details or other sensitive records on public pages.</p>
        </div>
        <div className={styles.contactLinks}>
          <a href="/en/privacy">Privacy Policy</a>
        </div>
      </section>
    </PolicyFrame>
  )
}
