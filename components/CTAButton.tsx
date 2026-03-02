import Link from 'next/link';

const CTA_URL = 'https://example.com/discovery';

type CTAButtonProps = {
  className?: string;
};

export default function CTAButton({ className = '' }: CTAButtonProps) {
  return (
    <Link
      href={CTA_URL}
      className={`inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-button-text transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${className}`}
    >
      Book a Discovery Call
    </Link>
  );
}
