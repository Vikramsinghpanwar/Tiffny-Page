// Coded interface previews of real Tiffny screens. Each one mirrors the structure
// and wording of an existing page in tiffin-next (paths noted per component) and
// is filled with clearly illustrative sample data — they are not screenshots.
import {
  Bell,
  CalendarOff,
  Check,
  ChefHat,
  Clock,
  Coffee,
  FileDown,
  House,
  MessageCircle,
  Moon,
  Sun,
  Truck,
  UserRound,
  Users,
  UtensilsCrossed,
  Wallet,
} from 'lucide-react'
import { TiffnyGlyph } from '@/components/Logo'

/* ----------------------------------------------------------------- frames */

const phoneSizes = {
  sm: { frame: 'w-[230px] sm:w-[250px]', screen: 'h-[480px] sm:h-[520px]' },
  md: { frame: 'w-[260px] sm:w-[280px]', screen: 'h-[540px] sm:h-[580px]' },
} as const

export function PhoneFrame({
  children,
  className = '',
  label,
  size = 'md',
}: {
  children: React.ReactNode
  className?: string
  label: string
  size?: keyof typeof phoneSizes
}) {
  return (
    <figure
      role="img"
      aria-label={label}
      className={`relative mx-auto rounded-[2.6rem] bg-forest-900 p-2.5 shadow-float ring-1 ring-black/10 ${phoneSizes[size].frame} ${className}`}
    >
      <div className="absolute left-1/2 top-4 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-forest-900" aria-hidden />
      <div className={`relative overflow-hidden rounded-[2.1rem] bg-[#f7f8f6] ${phoneSizes[size].screen}`} aria-hidden>
        {children}
      </div>
    </figure>
  )
}

export function BrowserFrame({ children, className = '', label }: { children: React.ReactNode; className?: string; label: string }) {
  return (
    <figure
      role="img"
      aria-label={label}
      className={`overflow-hidden rounded-2xl bg-warm-white shadow-float ring-1 ring-forest/10 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-line bg-beige/60 px-4 py-3" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-chili/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-saffron/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-forest-300" />
        <span className="ml-3 hidden flex-1 truncate rounded-full bg-warm-white px-3 py-1 text-[11px] text-ink-muted sm:block">
          tiffny.online/dashboard
        </span>
      </div>
      <div aria-hidden>{children}</div>
    </figure>
  )
}

/* ----------------------------------------------------------- small pieces */

const mealIcon = { Breakfast: Coffee, Lunch: Sun, Dinner: Moon } as const
type Meal = keyof typeof mealIcon

function Pill({ tone, children }: { tone: 'green' | 'amber' | 'slate' | 'blue'; children: React.ReactNode }) {
  const tones = {
    green: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    amber: 'bg-amber-50 text-amber-700 ring-amber-200',
    slate: 'bg-slate-100 text-slate-600 ring-slate-200',
    blue: 'bg-sky-50 text-sky-700 ring-sky-200',
  }
  return <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ${tones[tone]}`}>{children}</span>
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pb-1 pt-3 text-[10px] font-semibold text-slate-700">
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <span className="h-1.5 w-3 rounded-sm bg-slate-700" />
        <span className="h-2 w-4 rounded-[3px] ring-1 ring-slate-700" />
      </span>
    </div>
  )
}

function BottomNav({ items, active }: { items: { label: string; Icon: typeof House }[]; active: string }) {
  return (
    <div className="absolute inset-x-0 bottom-0 flex justify-around border-t border-slate-200 bg-white/95 px-2 pb-4 pt-2">
      {items.map(({ label, Icon }) => (
        <span key={label} className={`flex flex-col items-center gap-0.5 text-[9px] font-semibold ${label === active ? 'text-emerald-700' : 'text-slate-400'}`}>
          <Icon className="h-4 w-4" />
          {label}
        </span>
      ))}
    </div>
  )
}

/* ------------------------------------------------- customer: app/customer/dashboard */

function CustomerMealRow({ meal, time, status, price }: { meal: Meal; time: string; status: 'scheduled' | 'skipped' | 'delivered'; price: string }) {
  const Icon = mealIcon[meal]
  return (
    <div className="flex min-w-0 items-center gap-2.5 rounded-2xl bg-white p-2.5 shadow-[0_1px_2px_rgb(15_23_42/0.06)] ring-1 ring-slate-100">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
        <Icon className="h-4.5 w-4.5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="whitespace-nowrap text-[12px] font-semibold text-slate-900">{meal}</p>
        <p className="truncate text-[10px] text-slate-500">
          {time} · {price}
        </p>
      </div>
      {status === 'delivered' && <Pill tone="green">Delivered</Pill>}
      {status === 'scheduled' && <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-700">Skip</span>}
      {status === 'skipped' && <Pill tone="slate">Skipped</Pill>}
    </div>
  )
}

export function CustomerHomeScreen() {
  return (
    <div className="relative h-full">
      <StatusBar />
      <div className="px-4 pt-3">
        <p className="text-[10px] font-medium text-slate-500">Your tiffin from</p>
        <p className="text-[17px] font-semibold tracking-tight text-slate-900">Home Kitchen</p>
      </div>
      <div className="mx-4 mt-3 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-3.5 text-white">
        <p className="text-[10px] font-medium text-emerald-100">Wallet balance</p>
        <p className="text-[20px] font-bold tracking-tight">₹1,240</p>
        <p className="mt-1 text-[9px] text-emerald-100">Meals are charged from your wallet</p>
      </div>
      <div className="mt-4 px-4">
        <p className="text-[12px] font-semibold text-slate-900">Today</p>
        <div className="mt-2 grid grid-cols-1 gap-2">
          <CustomerMealRow meal="Breakfast" time="8:00 AM" status="delivered" price="₹40" />
          <CustomerMealRow meal="Lunch" time="1:00 PM" status="scheduled" price="₹90" />
          <CustomerMealRow meal="Dinner" time="8:00 PM" status="skipped" price="₹90" />
        </div>
        <p className="mt-4 text-[12px] font-semibold text-slate-900">Coming up</p>
        <p className="text-[9.5px] leading-snug text-slate-500">Skip a meal before its deadline and you will not be charged.</p>
        <div className="mt-2 flex items-center gap-2 rounded-2xl bg-white p-2.5 ring-1 ring-slate-100">
          <MessageCircle className="h-4 w-4 text-emerald-600" />
          <span className="text-[10px] font-semibold text-slate-700">Message Home Kitchen on WhatsApp</span>
        </div>
      </div>
      <BottomNav
        active="Home"
        items={[
          { label: 'Home', Icon: House },
          { label: 'Meals', Icon: UtensilsCrossed },
          { label: 'Wallet', Icon: Wallet },
          { label: 'Profile', Icon: UserRound },
        ]}
      />
    </div>
  )
}

/* ----------------------------------------------------- vendor: app/vendor/dashboard */

function StatCard({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-xl bg-white p-3 ring-1 ring-[#e5eee7]">
      <p className="text-[10px] font-medium text-[#718076]">{label}</p>
      <p className="mt-1 text-[17px] font-bold tracking-tight text-[#172b20]">{value}</p>
      {hint && <p className="text-[9px] text-[#718076]">{hint}</p>}
    </div>
  )
}

export function VendorDashboardScreen() {
  const nav = [
    { label: 'Dashboard', Icon: House, on: true },
    { label: 'Meals', Icon: UtensilsCrossed },
    { label: 'Customers', Icon: Users },
    { label: 'Payments', Icon: Wallet },
    { label: 'Holidays', Icon: CalendarOff },
    { label: 'Staff', Icon: ChefHat },
    { label: 'Reports', Icon: FileDown },
  ]
  const meals: { meal: Meal; count: number; skipped: number }[] = [
    { meal: 'Breakfast', count: 18, skipped: 2 },
    { meal: 'Lunch', count: 34, skipped: 3 },
    { meal: 'Dinner', count: 27, skipped: 5 },
  ]
  return (
    <div className="flex min-h-[340px] bg-[#f3f9f3] text-left sm:min-h-[400px]">
      <aside className="hidden w-40 shrink-0 border-r border-[#e5eee7] bg-white p-3 sm:block">
        <div className="mb-4 flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-forest text-cream">
            <TiffnyGlyph className="h-4 w-auto" />
          </span>
          <span className="text-[12px] font-semibold text-[#172b20]">Tiffny</span>
        </div>
        <ul className="grid gap-0.5">
          {nav.map(({ label, Icon, on }) => (
            <li key={label} className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] font-medium ${on ? 'bg-[#e6f6e9] text-[#247a4b]' : 'text-[#718076]'}`}>
              <Icon className="h-3.5 w-3.5" />
              {label}
            </li>
          ))}
        </ul>
      </aside>
      <div className="min-w-0 flex-1 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[16px] font-semibold tracking-tight text-[#172b20]">Dashboard</p>
            <p className="text-[10px] text-[#718076]">Monday, 9 November</p>
          </div>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white ring-1 ring-[#e5eee7]">
            <Bell className="h-3.5 w-3.5 text-[#718076]" />
          </span>
        </div>
        <div className="mt-3 rounded-xl bg-[#eaf8f7] px-3 py-2 text-[10px] font-medium text-[#2a807a] ring-1 ring-[#a9e2de]">
          2 join requests waiting for your approval
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-4">
          <StatCard label="Meals today" value="79" />
          <StatCard label="Active customers" value="41" />
          <StatCard label="Wallet balance" value="₹38,450" />
          <StatCard label="Charged, last 7 days" value="₹21,900" />
        </div>
        <p className="mt-4 text-[12px] font-semibold text-[#172b20]">Today&rsquo;s meals</p>
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          {meals.map(({ meal, count, skipped }) => {
            const Icon = mealIcon[meal]
            return (
              <div key={meal} className="rounded-xl bg-white p-3 ring-1 ring-[#e5eee7]">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#e6f6e9] text-[#247a4b]">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[11px] font-semibold text-[#172b20]">{meal}</span>
                </div>
                <p className="mt-2 text-[18px] font-bold text-[#172b20]">{count}</p>
                <p className="text-[9.5px] text-[#718076]">to cook · {skipped} skipped</p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#e6f6e9]">
                  <div className="h-full rounded-full bg-[#4fa36b]" style={{ width: `${Math.round((count / (count + skipped)) * 100)}%` }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/* --------------------------------------------------------- staff: app/staff/chef */

export function KitchenScreen() {
  const rows: { meal: Meal; count: number; time: string }[] = [
    { meal: 'Breakfast', count: 18, time: '8:00 AM' },
    { meal: 'Lunch', count: 34, time: '1:00 PM' },
    { meal: 'Dinner', count: 27, time: '8:00 PM' },
  ]
  return (
    <div className="relative h-full">
      <StatusBar />
      <div className="flex items-center gap-2 px-4 pt-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-orange-700">
          <ChefHat className="h-4 w-4" />
        </span>
        <span className="text-[11px] font-semibold text-slate-500">Kitchen</span>
      </div>
      <div className="px-4 pt-2">
        <p className="text-[20px] font-semibold tracking-tight text-slate-900">Today</p>
        <p className="text-[10px] text-slate-500">What to prepare, by meal</p>
        <div className="mt-3 grid gap-2">
          {rows.map(({ meal, count, time }) => {
            const Icon = mealIcon[meal]
            return (
              <div key={meal} className="flex items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-slate-100">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-orange-700">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <div className="flex-1">
                  <p className="whitespace-nowrap text-[12px] font-semibold text-slate-900">{meal}</p>
                  <p className="flex items-center gap-1 whitespace-nowrap text-[10px] text-slate-500">
                    <Clock className="h-2.5 w-2.5" /> Serve by {time}
                  </p>
                </div>
                <p className="text-right">
                  <span className="block text-[18px] font-bold leading-none text-slate-900">{count}</span>
                  <span className="text-[9px] text-slate-500">meals</span>
                </p>
              </div>
            )
          })}
        </div>
        <p className="mt-4 text-[12px] font-semibold text-slate-900">On-demand requests</p>
        <p className="text-[9.5px] text-slate-500">Extra meals customers asked for today.</p>
        <div className="mt-2 rounded-2xl bg-white p-3 ring-1 ring-slate-100">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-semibold text-slate-800">Lunch</span>
            <Pill tone="amber">+4 requested</Pill>
          </div>
        </div>
        <p className="mt-4 text-[12px] font-semibold text-slate-900">Tomorrow</p>
        <div className="mt-2 flex gap-2">
          {(['Breakfast', 'Lunch', 'Dinner'] as Meal[]).map((m, i) => (
            <span key={m} className="flex-1 rounded-xl bg-white px-2 py-2 text-center ring-1 ring-slate-100">
              <span className="block text-[14px] font-bold text-slate-900">{[20, 36, 25][i]}</span>
              <span className="text-[9px] text-slate-500">{m}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------- staff: app/staff/deliveries */

function DeliveryRow({ name, area, status }: { name: string; area: string; status: 'pending' | 'out' | 'delivered' }) {
  return (
    <div className="rounded-2xl bg-white p-3 ring-1 ring-slate-100">
      <div className="flex items-center justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-[12px] font-semibold text-slate-900">{name}</p>
          <p className="truncate text-[10px] text-slate-500">{area}</p>
        </div>
        {status === 'pending' && <Pill tone="amber"><Clock className="h-2.5 w-2.5" />Pending</Pill>}
        {status === 'out' && <Pill tone="blue"><Truck className="h-2.5 w-2.5" />Out for delivery</Pill>}
        {status === 'delivered' && <Pill tone="green">Delivered</Pill>}
      </div>
      {status === 'pending' && (
        <span className="mt-2.5 flex items-center justify-center gap-1.5 rounded-xl bg-sky-600 py-2 text-[11px] font-semibold text-white">
          <Truck className="h-3.5 w-3.5" /> Start delivery
        </span>
      )}
      {status === 'out' && (
        <span className="mt-2.5 flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 py-2 text-[11px] font-semibold text-white">
          <Check className="h-3.5 w-3.5" /> Delivered
        </span>
      )}
    </div>
  )
}

export function DeliveriesScreen() {
  return (
    <div className="relative h-full">
      <StatusBar />
      <div className="flex items-center gap-2 px-4 pt-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
          <Truck className="h-4 w-4" />
        </span>
        <span className="text-[11px] font-semibold text-slate-500">Deliveries</span>
      </div>
      <div className="px-4 pt-2">
        <div className="flex gap-1 rounded-xl bg-slate-100 p-1 text-[10px] font-semibold">
          <span className="flex-1 rounded-lg bg-white py-1.5 text-center text-slate-900 shadow-sm">Today</span>
          <span className="flex-1 py-1.5 text-center text-slate-500">Tomorrow</span>
          <span className="flex-1 py-1.5 text-center text-slate-500">History</span>
        </div>
        <div className="mt-3 rounded-2xl bg-white p-3 ring-1 ring-slate-100">
          <div className="flex justify-between text-[10px] font-semibold">
            <span className="text-slate-700">Lunch · Delivery progress</span>
            <span className="text-emerald-700">12 / 34</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[35%] rounded-full bg-emerald-500" />
          </div>
        </div>
        <div className="mt-3 grid gap-2">
          <DeliveryRow name="Customer A" area="Sector 21 · Flat 4B" status="out" />
          <DeliveryRow name="Customer B" area="Green Park · House 12" status="pending" />
          <DeliveryRow name="Customer C" area="MG Road · Office 3F" status="delivered" />
        </div>
      </div>
    </div>
  )
}
