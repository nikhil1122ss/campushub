'use client';

import { useState } from 'react';
import BrandNav from '@/components/brand-nav';

const CheckoutPage = () => {
  const [values, setValues] = useState({
    studentName: '',
    college: '',
    branch: '',
    year: '',
    hostelRoom: '',
    mobile: '',
    address: '',
    payment: 'UPI',
    delivery: 'Campus Delivery'
  });

  const handleChange = (field: string, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <BrandNav />
      <section className="mx-auto max-w-6xl px-6 py-14 md:px-12">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.32em] text-orange-300">Checkout</p>
          <h1 className="mt-3 text-4xl font-semibold">Complete your order details</h1>
          <p className="mt-2 text-sm text-slate-400">Secure payment, campus delivery, and fast order processing for students.</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.7fr_0.9fr]">
          <form className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-premium">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { label: 'Student Name', field: 'studentName' },
                { label: 'College', field: 'college' },
                { label: 'Branch', field: 'branch' },
                { label: 'Year', field: 'year' }
              ].map((field) => (
                <label key={field.field} className="space-y-2 text-sm text-slate-200">
                  <span>{field.label}</span>
                  <input
                    value={(values as any)[field.field]}
                    onChange={(event) => handleChange(field.field, event.target.value)}
                    placeholder={field.label}
                    className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
                  />
                </label>
              ))}
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-200">
                <span>Hostel / Room Number</span>
                <input
                  value={values.hostelRoom}
                  onChange={(event) => handleChange('hostelRoom', event.target.value)}
                  placeholder="A-203 / Block 5"
                  className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-200">
                <span>Mobile Number</span>
                <input
                  value={values.mobile}
                  onChange={(event) => handleChange('mobile', event.target.value)}
                  placeholder="98765 43210"
                  className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
                />
              </label>
            </div>
            <label className="space-y-2 text-sm text-slate-200">
              <span>Delivery Address</span>
              <textarea
                value={values.address}
                onChange={(event) => handleChange('address', event.target.value)}
                placeholder="Hostel building, campus area, city, pin code"
                className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
                rows={4}
              />
            </label>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-200">
                <span>Payment Method</span>
                <select
                  value={values.payment}
                  onChange={(event) => handleChange('payment', event.target.value)}
                  className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
                >
                  <option>UPI</option>
                  <option>Razorpay</option>
                  <option>Cash On Delivery</option>
                </select>
              </label>
              <label className="space-y-2 text-sm text-slate-200">
                <span>Delivery Option</span>
                <select
                  value={values.delivery}
                  onChange={(event) => handleChange('delivery', event.target.value)}
                  className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
                >
                  <option>Campus Delivery</option>
                  <option>Hostel Delivery</option>
                  <option>Courier Delivery</option>
                </select>
              </label>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-300">Selected items can be sourced and couriered from Ratnagiri when required.</p>
              <button type="button" className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">
                Confirm Order
              </button>
            </div>
          </form>
          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-campushub-navy/70 p-8 shadow-premium">
              <h2 className="text-xl font-semibold text-white">Payment support</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">Choose the best payment method for your order. CampusHub supports instant UPI collection, Razorpay and cash on delivery.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-premium">
              <h2 className="text-xl font-semibold text-white">Delivery options</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>Campus Delivery</li>
                <li>Hostel Delivery</li>
                <li>Courier Delivery</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default CheckoutPage;
