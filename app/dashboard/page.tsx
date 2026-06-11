import Link from 'next/link';

const dashboard = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="rounded-[2rem] border border-white/10 bg-campushub-navy/90 p-6 shadow-premium">
            <div className="mb-8 space-y-3">
              <p className="text-sm uppercase tracking-[0.32em] text-orange-300">Admin Dashboard</p>
              <h1 className="text-3xl font-semibold">CampusHub Control</h1>
              <p className="text-sm text-slate-300">Manage products, orders, discounts, and inventory in one place.</p>
            </div>
            <nav className="space-y-3 text-sm text-slate-200">
              <Link href="/dashboard/products" className="block rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 transition hover:border-orange-300">Products</Link>
              <Link href="/dashboard/orders" className="block rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 transition hover:border-orange-300">Orders</Link>
              <Link href="/dashboard/analytics" className="block rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 transition hover:border-orange-300">Analytics</Link>
              <Link href="/dashboard/requests" className="block rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 transition hover:border-orange-300">Custom Requests</Link>
            </nav>
          </aside>
          <section className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-premium">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-orange-300">Performance</p>
                  <h2 className="mt-3 text-3xl font-semibold">Revenue snapshot</h2>
                </div>
                <div className="rounded-full bg-white/5 px-5 py-3 text-sm text-slate-300">Campus & courier delivery supported</div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-campushub-navy/80 p-6">
                  <p className="text-sm text-slate-400">Today&apos;s Revenue</p>
                  <p className="mt-4 text-3xl font-semibold">₹72,490</p>
                </div>
                <div className="rounded-3xl bg-campushub-navy/80 p-6">
                  <p className="text-sm text-slate-400">Profit Margin</p>
                  <p className="mt-4 text-3xl font-semibold">24%</p>
                </div>
                <div className="rounded-3xl bg-campushub-navy/80 p-6">
                  <p className="text-sm text-slate-400">Open Orders</p>
                  <p className="mt-4 text-3xl font-semibold">34</p>
                </div>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-premium">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Manage Inventory</h3>
                  <span className="rounded-full bg-orange-500/15 px-3 py-1 text-xs uppercase tracking-[0.24em] text-orange-200">Live</span>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="rounded-3xl bg-campushub-navy/80 p-4">
                    <p className="text-sm text-slate-300">Total Products</p>
                    <p className="mt-2 text-3xl font-semibold">112</p>
                  </div>
                  <div className="rounded-3xl bg-campushub-navy/80 p-4">
                    <p className="text-sm text-slate-300">Discounts Active</p>
                    <p className="mt-2 text-3xl font-semibold">12</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-premium">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Requests</h3>
                  <span className="text-sm text-slate-400">Custom component orders</span>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="rounded-3xl bg-campushub-navy/80 p-4">
                    <p className="text-sm text-slate-300">Pending Requests</p>
                    <p className="mt-2 text-3xl font-semibold">18</p>
                  </div>
                  <div className="rounded-3xl bg-campushub-navy/80 p-4">
                    <p className="text-sm text-slate-300">New Projects</p>
                    <p className="mt-2 text-3xl font-semibold">9</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default dashboard;
