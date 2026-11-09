import type { Metadata } from 'next'
import { LegalPage } from '@/components/LegalPage'
import { APP_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Tiffny collects, uses and protects information when you use the Tiffny website and app.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="9 November 2026">
      <p>
        This policy explains what information Tiffny (&ldquo;Tiffny&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles
        when you visit this website or use the Tiffny app at <a href={APP_URL}>{APP_URL.replace(/^https?:\/\//, '')}</a>,
        and how it is used. Tiffny is a platform that connects tiffin customers with food businesses
        (&ldquo;vendors&rdquo;) and helps vendors manage their meals, customers, payments and staff.
      </p>

      <h2>This website</h2>
      <p>
        This marketing website is a static site. It does not use cookies, analytics or advertising trackers, and it
        does not ask you for any personal information. Our hosting provider may process standard technical data such as
        IP addresses in server logs to deliver and secure the site.
      </p>

      <h2>Information we handle in the Tiffny app</h2>
      <ul>
        <li>
          <strong>Account details</strong> — your phone number (used to sign in), password (stored only in hashed form),
          and optionally your name and email address.
        </li>
        <li>
          <strong>Delivery details</strong> — your delivery address and any special instructions you choose to share with
          your vendor.
        </li>
        <li>
          <strong>Meal and wallet records</strong> — the meals you are subscribed to or request, meals you skip,
          delivery status, and your wallet balance, payments recorded by your vendor and meal charges.
        </li>
        <li>
          <strong>Business details (vendors)</strong> — business name, contact details, meal configuration, prices, staff
          accounts and holidays.
        </li>
        <li>
          <strong>Technical data</strong> — a sign-in session cookie needed to keep you logged in, and, if you use the
          Android app and allow notifications, a device token used to send you push notifications.
        </li>
      </ul>

      <h2>How information is used</h2>
      <ul>
        <li>To create and secure your account and sign you in.</li>
        <li>To show you and your vendor your meals, skips, deliveries, wallet and payment history.</li>
        <li>To let vendors and their staff prepare, deliver and bill meals.</li>
        <li>To send service notifications you have allowed.</li>
        <li>To maintain, protect and improve the service.</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>Who can see your information</h2>
      <p>
        If you are a customer, the vendor you are connected to — and staff accounts that vendor creates — can see the
        details needed to serve you, such as your name, phone number, address, meals and wallet. Tiffny administrators
        can access account data to operate and support the platform. We use service providers (for example hosting and
        push-notification services) who process data on our behalf.
      </p>
      <p>
        Payments to vendors are made outside Tiffny and recorded in the app by the vendor; Tiffny does not collect card
        or bank details. When you choose to message someone on WhatsApp from the app, WhatsApp opens with a pre-filled
        message and its own privacy terms apply.
      </p>

      <h2>Keeping information safe</h2>
      <p>
        Data is sent over encrypted connections (HTTPS), passwords are stored hashed, and access to data is limited by
        role. No system is perfectly secure, but we work to protect the information entrusted to us.
      </p>

      <h2>Your choices</h2>
      <p>
        You can view and update your profile details in the app at any time. You can ask for a copy of your information,
        or for it to be corrected or deleted, subject to records a vendor or we must keep for legitimate business or legal
        reasons. You can turn off push notifications in your device settings.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy as Tiffny evolves. The &ldquo;last updated&rdquo; date above shows when it last changed.
      </p>
    </LegalPage>
  )
}
