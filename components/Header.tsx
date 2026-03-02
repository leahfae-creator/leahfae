import Link from 'next/link';
import CTAButton from './CTAButton';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/soul-medicine', label: 'Soul Medicine' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="divider sticky top-0 z-20 bg-background/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-content items-center justify-between gap-5 px-6 py-5">
        <Link href="/" className="font-serif text-lg text-header">
          Soul Medicine Meditation
        </Link>
        <nav aria-label="Main navigation" className="hidden gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-body hover:text-header">
              {item.label}
            </Link>
          ))}
        </nav>
        <CTAButton className="hidden md:inline-flex" />
      </div>
      <nav aria-label="Mobile navigation" className="divider px-6 py-3 md:hidden">
        <div className="mx-auto flex max-w-content flex-wrap gap-4 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-body hover:text-header">
              {item.label}
            </Link>
          ))}
          <CTAButton />
        </div>
      </nav>
    </header>
  );
}
