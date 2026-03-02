import Image from 'next/image';
import CTAButton from '@/components/CTAButton';
import FadeIn from '@/components/FadeIn';
import Section from '@/components/Section';

export default function HomePage() {
  return (
    <>
      <section className="px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="texture-panel mx-auto grid w-full max-w-content gap-10 rounded-2xl p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div className="space-y-6">
            <p className="font-serif text-sm uppercase tracking-[0.15em] text-header/80">Soul Medicine Meditation</p>
            <h1 className="max-w-xl text-5xl leading-tight md:text-6xl">TODO: A grounded invitation to reconnect.</h1>
            <p className="max-w-2xl text-lg">TODO: Add a concise 1–2 sentence introduction that explains the transformation and tone.</p>
            <CTAButton />
          </div>
          <Image
            src="/images/editorial-1.svg"
            alt="Editorial placeholder representing calm, reflective practice"
            width={1200}
            height={800}
            className="h-full w-full rounded-xl border border-accent object-cover shadow-calm"
            priority
          />
        </div>
      </section>

      <FadeIn>
        <Section title="What It Is" description="TODO: Add a short explanation of Soul Medicine Meditation and what makes this approach unique.">
          <p className="max-w-3xl">TODO: Clarify the intention, pacing, and experience in a few grounded sentences.</p>
        </Section>
      </FadeIn>

      <FadeIn>
        <Section title="Who It&apos;s For" className="texture-panel rounded-xl">
          <p className="max-w-3xl">TODO: Describe who this offering is for and who may not be the best fit.</p>
        </Section>
      </FadeIn>

      <FadeIn>
        <Section title="How It Works" description="Discovery call → next steps.">
          <ol className="grid gap-5 md:grid-cols-3">
            <li className="rounded-lg border border-accent bg-white/50 p-5">1. TODO: Book a Discovery Call.</li>
            <li className="rounded-lg border border-accent bg-white/50 p-5">2. TODO: Align on intentions and fit.</li>
            <li className="rounded-lg border border-accent bg-white/50 p-5">3. TODO: Receive next steps for Soul Medicine.</li>
          </ol>
        </Section>
      </FadeIn>

      <FadeIn>
        <Section title="Testimonials" description="TODO: Add testimonial snippets or social proof when available.">
          <div className="rounded-lg border border-dashed border-accent p-8 text-center">TODO: Testimonial placeholders</div>
        </Section>
      </FadeIn>

      <FadeIn>
        <section className="px-6 py-16 md:py-20">
          <div className="texture-panel mx-auto flex w-full max-w-content flex-col items-start gap-6 rounded-xl p-8 md:p-12">
            <h2 className="font-serif text-3xl">TODO: Ready to begin?</h2>
            <p className="max-w-2xl">TODO: Add a final conversion-focused line that directs visitors to the discovery call.</p>
            <CTAButton />
          </div>
        </section>
      </FadeIn>
    </>
  );
}
