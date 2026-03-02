import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import FadeIn from '@/components/FadeIn';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach out and book a discovery call for Soul Medicine Meditation.',
};

export default function ContactPage() {
  return (
    <FadeIn>
      <Section title="Contact" description="For inquiries, use the form below. To begin, book a discovery call.">
        <div className="grid gap-10 md:grid-cols-[1fr_auto]">
          <form className="space-y-4" action="#" method="post">
            <label className="block space-y-2">
              <span>Name</span>
              <input required name="name" className="w-full rounded-md border border-accent bg-white/70 px-4 py-3" />
            </label>
            <label className="block space-y-2">
              <span>Email</span>
              <input required type="email" name="email" className="w-full rounded-md border border-accent bg-white/70 px-4 py-3" />
            </label>
            <label className="block space-y-2">
              <span>Message</span>
              <textarea required name="message" rows={5} className="w-full rounded-md border border-accent bg-white/70 px-4 py-3" />
            </label>
            <button
              type="submit"
              className="rounded-md border border-primary px-6 py-3 text-sm text-primary transition-colors hover:bg-primary hover:text-button-text"
            >
              Send Message
            </button>
          </form>
          <div className="texture-panel h-fit rounded-xl border border-accent p-6">
            <h2 className="font-serif text-2xl">Discovery Call</h2>
            <p className="mt-3 mb-5">The discovery call is the primary first step for all Soul Medicine pathways.</p>
            <CTAButton />
          </div>
        </div>
      </Section>
    </FadeIn>
  );
}
