import { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, title, description, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`px-6 py-14 md:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-content">
        <div className="mb-8 max-w-3xl space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
          {description ? <p className="text-base md:text-lg">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
