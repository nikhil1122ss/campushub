'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import BrandNav from '@/components/brand-nav';

const initialCart = [
  { id: 'starter', name: 'Engineering Starter Kit', price: 1299, qty: 1 },
  { id: 'girls', name: 'Girls Hostel Essentials Kit', price: 449, qty: 1 }
];

const CartPage = () => {
  const [items, setItems] = useState(initialCart);

  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price * item.qty, 0), [items]);
  const delivery = 50;
  const total = subtotal + delivery;

  const updateQty = (id: string, qty: number) => {
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, qty: Math.max(1, qty) } : item))
    );
  };

  const removeItem = (id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <BrandNav />
      <section className="mx-auto max-w-6xl px-6 py-14 md:px-12">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-orange-300">Cart</p>
            <h1 className="mt-3 text-4xl font-semibold">Review your campus essentials</h1>
            <p className="mt-2 text-sm text-slate-400">Update quantities, remove items, and proceed to a fast checkout.</p>
          </div>
          <Link href="/products" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-orange-300">
            Continue Shopping
          </Link>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.6fr_0.9fr]">
          <div className="space-y-6">
            {items.length === 0 ? (
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 text-center text-slate-300">
                Your cart is empty. Add products from the home page or project section.
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-premium">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-xl font-semibold text-white">{item.name}</p>
                      <p className="mt-2 text-sm text-slate-400">Fast campus delivery and hostel support.</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                        <button onClick={() => updateQty(item.id, item.qty - 1)} className="text-orange-300">-</button>
                        <span className="w-8 text-center text-white">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, item.qty + 1)} className="text-orange-300">+</button>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-sm font-semibold text-orange-200 transition hover:text-orange-100">
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-sm text-slate-300">
                    <p>Price per item</p>
                    <p>₹{item.price}</p>
                  </div>
                </div>
              ))
            )}
          </div>
          <aside className="rounded-[2rem] border border-white/10 bg-campushub-navy/70 p-8 shadow-premium">
            <h2 className="text-xl font-semibold text-white">Order summary</h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Delivery charges</span>
                <span>₹{delivery}</span>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-5 text-lg font-semibold text-white">
                <div className="flex items-center justify-between">
                  <span>Grand total</span>
                  <span>₹{total}</span>
                </div>
              </div>
            </div>
            <Link href="/checkout" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">
              Proceed to Checkout
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default CartPage;
