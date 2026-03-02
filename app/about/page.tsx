import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import FadeIn from '@/components/FadeIn';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Soul Medicine Meditation and the philosophy behind the work.',
};

export default function AboutPage() {
  return (
    <FadeIn>
      <Section title="About" description="TODO: Add a concise founder/practice story and core values.">
        <div className="space-y-6 max-w-3xl">
          <p>TODO: Explain background and perspective in a few calm, clear paragraphs.</p>
          <p>TODO: Add credentials or relevant experience if desired.</p>
          <CTAButton />
        </div>
      </Section>
    </FadeIn>
  );
}
