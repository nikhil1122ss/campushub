import Link from 'next/link';
import Image from 'next/image';

const login = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-campushub-navy/90 p-10 shadow-premium">
          <div className="mb-10 flex flex-col items-center gap-4 text-center">
            <div className="relative h-24 w-24 rounded-full bg-white/10 p-4">
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 to-campushub-navy/80" />
              <div className="relative z-10 flex h-full w-full items-center justify-center text-2xl font-bold text-white">CH</div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-orange-300">Welcome back</p>
              <h1 className="mt-3 text-3xl font-semibold">CampusHub Login</h1>
              <p className="mt-2 text-sm text-slate-300">Shop essentials, request project materials, and track orders instantly.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <button className="rounded-3xl bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-orange-100">
              Continue with Google
            </button>
            <button className="rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:border-orange-300">
              Login with Mobile OTP
            </button>
          </div>
          <div className="mt-10 rounded-[2rem] bg-slate-900/80 p-6">
            <h2 className="text-lg font-semibold text-white">Guest Browse Mode</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">Explore CampusHub without signing in and checkout as a guest. Perfect for quick orders and hostel essentials.</p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link href="/" className="inline-flex grow items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">
                Continue as Guest
              </Link>
              <Link href="/dashboard" className="inline-flex grow items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-300">
                Admin Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default login;
