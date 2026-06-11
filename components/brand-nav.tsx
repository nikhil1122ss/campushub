import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Cart', href: '/cart' },
  { label: 'Checkout', href: '/checkout' },
  { label: 'Track Order', href: '/order-tracking' }
];

export default function BrandNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" width={110} height={40} alt="CampusHub" priority />
          <span className="text-lg font-semibold tracking-tight text-white">CampusHub</span>
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-200 transition hover:text-orange-300">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
