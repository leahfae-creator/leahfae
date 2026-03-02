import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="divider mt-16">
      <div className="mx-auto flex w-full max-w-content flex-col gap-4 px-6 py-10 text-sm text-body md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Soul Medicine Meditation</p>
        <div className="flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/soul-medicine">Soul Medicine</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
