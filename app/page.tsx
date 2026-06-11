import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Cpu, Heart, ShieldCheck } from 'lucide-react';

const categories = [
  'Engineering Kits',
  'Scientific Calculators',
  'Drawing Materials',
  'Project Components',
  'Hostel Essentials',
  'Girls Hostel Essentials',
  'Stationery',
  'Files & Document Pouches'
];

const starterKit = [
  { name: 'Scientific Calculator (Casio FX-991ES Plus)', qty: 1, price: 1499, savings: 300 },
  { name: 'Notebooks', qty: 6, price: 420, savings: 80 },
  { name: 'Geometry Box', qty: 1, price: 149, savings: 30 },
  { name: 'Pens', qty: 5, price: 150, savings: 20 },
  { name: 'Pencils', qty: 5, price: 100, savings: 15 },
  { name: 'Eraser', qty: 2, price: 40, savings: 10 },
  { name: 'Sharpener', qty: 1, price: 35, savings: 8 },
  { name: 'Engineering Drawing Sheets', qty: 10, price: 250, savings: 40 },
  { name: 'Mini Drafter', qty: 1, price: 210, savings: 35 },
  { name: 'Document File/Pouch', qty: 1, price: 299, savings: 50 }
];

const page = () => {
  return (
    <main className="min-h-screen bg-campushub-navy text-white">
      <section className="relative overflow-hidden bg-gradient-to-b from-campushub-navy to-slate-950 px-6 py-14 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center rounded-full bg-orange-500/15 px-4 py-2 text-sm text-orange-100 ring-1 ring-orange-300/50">
              New student essentials with premium deals
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Your Campus. Your Hub.
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
              CampusHub brings engineering tools, hostel essentials, and project materials in one trusted marketplace built for students.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/login" className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">
                Start Shopping
              </Link>
              <Link href="/login" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-300">
                Login or Guest
              </Link>
            </div>
          </div>
          <div className="relative mx-auto aspect-[9/10] w-full max-w-xl rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-premium backdrop-blur-xl">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-orange-500/10 via-transparent to-campushub-navy/40" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-orange-300">CampusHub Premium</p>
                  <p className="mt-2 text-2xl font-semibold">Engineering Starter Kit</p>
                </div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-orange-500/15 text-orange-200">
                  <Cpu size={28} />
                </div>
              </div>
              <div className="space-y-4 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                {starterKit.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-4 rounded-3xl bg-slate-900/70 px-4 py-3 transition hover:bg-white/5">
                    <div>
                      <p className="font-semibold text-white">{item.name}</p>
                      <p className="mt-1 text-sm text-slate-400">Qty: {item.qty}</p>
                    </div>
                    <div className="space-y-1 text-right">
                      <p className="font-semibold text-orange-300">₹{item.price}</p>
                      <p className="text-xs text-slate-500">Save ₹{item.savings}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 rounded-3xl border border-white/10 bg-campushub-navy/60 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Calculator included</span>
                  <span className="text-sm font-semibold text-orange-300">Casio FX-991ES Plus</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Premium shipping</span>
                  <span className="text-sm font-medium text-white">Campus & hostel delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-950 px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-orange-300">Featured categories</p>
              <h2 className="mt-3 text-3xl font-semibold">Shop by need</h2>
            </div>
            <Link href="/" className="text-sm font-semibold text-orange-300 hover:text-orange-200">
              View all categories
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <div key={category} className="rounded-[2rem] border border-white/10 bg-campushub-navy/70 p-6 shadow-premium transition hover:-translate-y-1 hover:border-orange-400/30">
                <h3 className="text-xl font-semibold text-white">{category}</h3>
                <p className="mt-3 text-sm text-slate-300">Shop the best selection for students and hostel essentials.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-900 px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-r from-campushub-navy/80 via-slate-950 to-campushub-navy/80 p-8 shadow-premium">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-orange-300">Community spotlight</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">CampusHub Community</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Join the CampusHub Community and stay tuned for updates, offers, notices and new arrivals. Connect with other students, share requests, and get exclusive student-first deals.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/" className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">
                  Join Community
                </Link>
                <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-300">
                  Admin Announcements
                </Link>
              </div>
            </div>
            <div className="rounded-[2rem] bg-slate-950/80 p-6 shadow-xl ring-1 ring-white/10">
              <div className="space-y-4">
                <div className="rounded-3xl bg-slate-900/80 p-5">
                  <p className="text-sm text-orange-300">Announcement</p>
                  <p className="mt-3 text-lg font-semibold text-white">Get first access to hostel essentials and project kits.</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">New arrivals and student offers released every Friday with campus delivery support.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-800/90 p-5">
                    <p className="text-sm text-slate-400">Orders tracked</p>
                    <p className="mt-2 text-2xl font-semibold text-white">5k+</p>
                  </div>
                  <div className="rounded-3xl bg-slate-800/90 p-5">
                    <p className="text-sm text-slate-400">Happy students</p>
                    <p className="mt-2 text-2xl font-semibold text-white">4.9/5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-950 px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[2rem] bg-campushub-navy/70 p-8 shadow-premium">
              <div className="flex items-center gap-4">
                <Heart className="h-8 w-8 text-orange-300" />
                <div>
                  <h3 className="text-xl font-semibold">Premium shopping experience</h3>
                  <p className="mt-2 text-sm text-slate-300">Fast, polished, and built for the campus lifestyle.</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] bg-slate-900/80 p-8 shadow-premium">
              <div className="flex items-center gap-4">
                <ShieldCheck className="h-8 w-8 text-orange-300" />
                <div>
                  <h3 className="text-xl font-semibold">Secure checkout</h3>
                  <p className="mt-2 text-sm text-slate-300">UPI, Razorpay, cash on delivery, and campus payment support.</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] bg-slate-900/80 p-8 shadow-premium">
              <div className="flex items-center gap-4">
                <ShoppingCart className="h-8 w-8 text-orange-300" />
                <div>
                  <h3 className="text-xl font-semibold">Order tracking in-app</h3>
                  <p className="mt-2 text-sm text-slate-300">Track status from placed to delivered with live updates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
