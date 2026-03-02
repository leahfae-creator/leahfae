'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

type FadeInProps = {
  children: ReactNode;
  className?: string;
};

export default function FadeIn({ children, className = '' }: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-init ${visible ? 'fade-in' : ''} ${className}`}>
      {children}
    </div>
  );
}
