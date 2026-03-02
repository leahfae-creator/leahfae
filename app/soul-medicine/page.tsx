import type { Metadata } from 'next';
import Image from 'next/image';
import CTAButton from '@/components/CTAButton';
import FadeIn from '@/components/FadeIn';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Soul Medicine',
  description: 'Explore the Soul Medicine offer and begin with a discovery call.',
};

export default function SoulMedicinePage() {
  return (
    <>
      <section className="px-6 pb-12 pt-20 md:pb-16">
        <div className="mx-auto grid w-full max-w-content items-center gap-8 md:grid-cols-2">
          <div className="space-y-5">
            <h1 className="max-w-xl text-5xl md:text-6xl">TODO: Soul Medicine overview headline.</h1>
            <p>TODO: Add a clear overview of what this offer is and its intended outcome.</p>
            <CTAButton />
          </div>
          <Image
            src="/images/editorial-2.svg"
            alt="Editorial placeholder for Soul Medicine offering"
            width={1200}
            height={800}
            className="rounded-xl border border-accent object-cover"
          />
        </div>
      </section>

      <FadeIn>
        <Section title="What Happens" description="TODO: Provide a high-level flow without over-explaining process details.">
          <p className="max-w-3xl">TODO: Clarify format, structure, and pacing at a high level.</p>
        </Section>
      </FadeIn>

      <FadeIn>
        <Section title="What You Receive" className="texture-panel rounded-xl">
          <ul className="grid list-disc gap-3 pl-6 marker:text-header">
            <li>TODO: Placeholder deliverable 1</li>
            <li>TODO: Placeholder deliverable 2</li>
            <li>TODO: Placeholder deliverable 3</li>
          </ul>
        </Section>
      </FadeIn>

      <FadeIn>
        <Section title="FAQ">
          <div className="space-y-4">
            <details className="rounded-md border border-accent bg-white/50 p-4">
              <summary className="cursor-pointer font-serif text-xl">TODO: Frequently asked question 1</summary>
              <p className="mt-3">TODO: Answer placeholder.</p>
            </details>
            <details className="rounded-md border border-accent bg-white/50 p-4">
              <summary className="cursor-pointer font-serif text-xl">TODO: Frequently asked question 2</summary>
              <p className="mt-3">TODO: Answer placeholder.</p>
            </details>
          </div>
        </Section>
      </FadeIn>

      <FadeIn>
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto flex w-full max-w-content flex-col gap-5 rounded-xl border border-accent p-8 text-left md:p-12">
            <h2 className="font-serif text-3xl">Begin with a Discovery Call</h2>
            <p>All next steps for Soul Medicine are initiated through a discovery call.</p>
            <CTAButton />
          </div>
        </section>
      </FadeIn>
    </>
  );
}
