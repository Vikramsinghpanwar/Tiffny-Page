import type { Metadata } from 'next'
import { LegalPage } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'The terms that apply when you use the Tiffny website and app.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" updated="9 November 2026">
      <p>
        These terms apply to your use of the Tiffny website and the Tiffny app (together, the &ldquo;Service&rdquo;). By
        creating an account or using the Service you agree to them.
      </p>

      <h2>What Tiffny is</h2>
      <p>
        Tiffny is software that helps food businesses (&ldquo;vendors&rdquo;) and their customers manage tiffin and meal
        services: meal schedules, skips and requests, wallets and payment records, staff, deliveries and reports. Meals are
        prepared, priced, delivered and sold by vendors, not by Tiffny. Each vendor is responsible for its food, pricing,
        hygiene, delivery and compliance with applicable laws, including food-safety requirements.
      </p>

      <h2>Accounts</h2>
      <ul>
        <li>You must provide accurate details, including a phone number you control.</li>
        <li>You are responsible for keeping your password safe and for activity on your account.</li>
        <li>Vendors are responsible for the staff accounts they create and the access those accounts have.</li>
      </ul>

      <h2>Meals, skips and wallets</h2>
      <ul>
        <li>
          Meal times, prices and skip cut-offs are set by your vendor. A skip only applies if it is made before the
          vendor&rsquo;s cut-off shown in the app.
        </li>
        <li>
          Wallet balances and payments are recorded by your vendor. Meals are charged from your wallet according to the
          vendor&rsquo;s configuration; a meal may be marked as missed if the balance is insufficient.
        </li>
        <li>
          Questions or disputes about meals, charges or refunds should be raised with your vendor first. Payments
          between customers and vendors happen outside Tiffny.
        </li>
      </ul>

      <h2>Vendor plans</h2>
      <p>
        Vendors may need an active Tiffny plan or trial to use vendor features. Plan details, pricing and availability
        are shown in the app and may change.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Do not misuse the Service: no unlawful activity, no attempts to access other accounts or data, no interference
        with the Service&rsquo;s security or operation, and no misleading information.
      </p>

      <h2>Availability and changes</h2>
      <p>
        We work to keep Tiffny available and accurate, but the Service is provided &ldquo;as is&rdquo; and may sometimes
        be unavailable or change. We may update features and these terms; continued use after changes means you accept the
        updated terms.
      </p>

      <h2>Liability</h2>
      <p>
        To the extent permitted by law, Tiffny is not liable for the food, services or conduct of vendors, or for
        indirect or consequential losses arising from use of the Service.
      </p>

      <h2>Suspension</h2>
      <p>We may suspend or close accounts that breach these terms or put other users or the Service at risk.</p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India.</p>
    </LegalPage>
  )
}
