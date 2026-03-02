import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Basic privacy information for Soul Medicine Meditation.',
};

export default function PrivacyPage() {
  return (
    <FadeIn>
      <Section title="Privacy" description="TODO: Replace with complete privacy policy before launch.">
        <div className="max-w-3xl space-y-4">
          <p>TODO: State what information is collected and why.</p>
          <p>TODO: Explain data retention, storage, and third-party processors.</p>
          <p>TODO: Include contact method for privacy questions.</p>
        </div>
      </Section>
    </FadeIn>
  );
}
