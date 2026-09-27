import type { Metadata } from 'next'
import PolicyFrame from '../../policy-frame'
import styles from '../../policy.module.css'

const canonical = 'https://offbuddy.ahaknow.com/en/privacy'
const chinesePrivacy = 'https://offbuddy.ahaknow.com/privacy'

export const metadata: Metadata = {
  title: 'Privacy Policy · OffBuddy',
  description: 'Learn what OffBuddy stores on your device and how you control local weather, reminders, and data exports.',
  alternates: {
    canonical,
    languages: { 'zh-Hans': chinesePrivacy, 'en-US': canonical },
  },
  openGraph: { title: 'Privacy Policy · OffBuddy', description: 'Your time records stay in your hands.', url: canonical, type: 'website' },
}

const facts = [
  ['01', 'Stored on your device', 'No OffBuddy account or cloud sync is required.'],
  ['02', 'Weather is optional', 'The timer and calendar work without local weather.'],
  ['03', 'You choose what to share', 'Files are created only when you export them.'],
]

export default function EnglishPrivacyPage() {
  return (
    <PolicyFrame
      language="en"
      page="privacy"
      eyebrow="YOUR TIME, YOUR CHOICE"
      title="Privacy Policy"
      intro="OffBuddy helps you keep track of work and clock-out time. Personal records stay on your device, and you decide which optional permissions to use."
      art="/offbuddy/office-scene.png"
      artAlt="The OffBuddy cat in a warm office"
      artTitle="Your records, your choice"
      artCaption="Work with care. Live with care, too."
      updated="Last updated: September 27, 2026"
    >
      <section className={styles.quickFacts} aria-label="Privacy overview">
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
          <h2 className={styles.sectionTitle}>Information stored by OffBuddy</h2>
          <p>To provide the timer, coin pouch, calendar, and achievement features, OffBuddy stores on your device the work hours, workdays, monthly salary, reminder and launch preferences you enter, plus each timer session’s start, planned end, actual end, status, and achievement progress. Salary and time-value amounts are personal estimates based on your entries.</p>
          <p>OffBuddy does not require an account and has no OffBuddy cloud sync, in-app advertising, or cross-app tracking profile.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Local weather and location</h2>
          <p>Local weather is optional. iOS provides the location needed for local conditions only after you enable weather and grant permission. OffBuddy does not save location coordinates or location history and does not track you in the background. Current weather is provided through Apple WeatherKit; Apple’s handling of its service data is governed by Apple’s own terms and privacy policy.</p>
          <p>You can turn weather off in OffBuddy or revoke location permission in iOS Settings.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Reminders and opening other apps</h2>
          <p>Clock-out reminders use iOS notification or alarm capabilities, with permissions controlled by you. If you choose Feishu, a custom app link, or a Shortcut, OffBuddy will try to open it as configured. It does not read the other app’s attendance status, clock in for you, or submit your OffBuddy timer records to that app.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What exported files contain</h2>
          <ul className={styles.list}>
            <li>The calendar CSV includes dates, start time, planned and actual clock-out times, work duration, status, and time zone. It does not include salary or earnings.</li>
            <li>The coin pouch JSON includes the salary-derived hourly rate, earnings estimates, and record times.</li>
            <li>Files are created only when you export them. iOS and the app you choose handle the file afterward. Review the file and recipient before sharing.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Retention, backups, and deletion</h2>
          <p>OffBuddy has no separate server copy; work records stay in the app on your device. Device backup, migration, and recovery depend on your Apple device settings and Apple services. Resetting the coin pouch changes its accumulation start point but does not delete calendar records. Export anything you want to keep before uninstalling OffBuddy.</p>
        </section>

        <section className={`${styles.section} ${styles.notice}`}>
          <h2 className={styles.sectionTitle}>Your privacy choices</h2>
          <ul className={styles.list}>
            <li>Leave local weather off or decline location access; the timer and calendar remain available.</li>
            <li>Manage OffBuddy’s location and notification permissions in iOS Settings, and change preferences such as auto-start in the app.</li>
            <li>Export is initiated by you. If you do not share a file, the export is not handed to another app.</li>
          </ul>
          <p>Both the App Store Connect Privacy Policy URL and User Privacy Choices URL point to this page. For questions, see <a href="/en/support/">Help &amp; Support</a>. A public support email has not yet been published.</p>
        </section>

        <section className={`${styles.section} ${styles.sectionWide}`}>
          <h2 className={styles.sectionTitle}>Policy updates</h2>
          <p>If OffBuddy’s data practices change, we will update this page and its date. This policy currently applies to OffBuddy 1.0.</p>
        </section>
      </div>
    </PolicyFrame>
  )
}
