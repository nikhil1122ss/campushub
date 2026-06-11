import BrandNav from '@/components/brand-nav';
import { CheckCircle2, Package, Truck, MapPin, Clock3 } from 'lucide-react';

const steps = [
  { label: 'Order Placed', icon: Clock3 },
  { label: 'Packed', icon: Package },
  { label: 'Shipped', icon: Truck },
  { label: 'Out For Delivery', icon: MapPin },
  { label: 'Delivered', icon: CheckCircle2 }
];

const OrderTrackingPage = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <BrandNav />
      <section className="mx-auto max-w-5xl px-6 py-14 md:px-12">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-orange-300">Order Tracking</p>
          <h1 className="mt-3 text-4xl font-semibold">Track your CampusHub order</h1>
          <p className="mt-2 text-sm text-slate-400">Know exactly where your essentials are, from placement to delivery.</p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-premium">
          <div className="grid gap-4 sm:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="flex flex-col items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/15 text-orange-300">
                    <Icon size={24} />
                  </div>
                  <p className="text-sm font-semibold text-white">{step.label}</p>
                  {index === steps.length - 1 ? <span className="text-xs text-slate-400">Completed</span> : <span className="text-xs text-slate-500">In progress</span>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default OrderTrackingPage;
