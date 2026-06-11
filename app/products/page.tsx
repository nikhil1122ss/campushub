import Link from 'next/link';
import BrandNav from '@/components/brand-nav';

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

const productHighlights = [
  { title: 'Casio FX-991ES Plus', subtitle: 'Scientific Calculator', price: '₹1499' },
  { title: 'Girls Hostel Kit', subtitle: 'Hygiene & essentials', price: '₹449' },
  { title: 'Arduino Starter Board', subtitle: 'Project electronics', price: '₹699' }
];

const ProductsPage = () => (
  <main className="min-h-screen bg-slate-950 text-white">
    <BrandNav />
    <section className="mx-auto max-w-7xl px-6 py-14 md:px-12">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-orange-300">Products</p>
          <h1 className="mt-3 text-4xl font-semibold">Shop essential campus categories</h1>
          <p className="mt-2 text-sm text-slate-400">Browse curated engineering tools, hostel packs, and project parts.</p>
        </div>
        <Link href="/checkout" className="rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">
          Checkout Now
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div key={category} className="rounded-[2rem] border border-white/10 bg-campushub-navy/70 p-6 shadow-premium transition hover:-translate-y-1 hover:border-orange-400/50">
            <h2 className="text-xl font-semibold text-white">{category}</h2>
            <p className="mt-3 text-sm text-slate-300">Students-first selection across all semesters and departments.</p>
          </div>
        ))}
      </div>
      <div className="mt-14 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-premium">
        <div className="grid gap-6 md:grid-cols-3">
          {productHighlights.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-campushub-navy/70 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-orange-300">{item.subtitle}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-lg font-semibold text-orange-300">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <section className="mt-14 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-premium">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-orange-300">Project materials</p>
            <h2 className="mt-3 text-3xl font-semibold">Can't find your component? Submit a custom request.</h2>
          </div>
          <Link href="/dashboard/requests" className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">
            Submit Request
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {['Arduino', 'Sensors', 'Breadboards', 'Motors', 'Jumper Wires', 'Electronic Components', 'Mini Project Kits', 'Final Year Project Materials'].map((item) => (
            <div key={item} className="rounded-3xl bg-slate-950/80 p-5 text-sm text-slate-300">{item}</div>
          ))}
        </div>
      </section>
    </section>
  </main>
);

export default ProductsPage;
