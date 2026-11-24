import { useEffect, useRef, useState } from 'react';

export function useIntersectionStatus<T extends Element>() {
  const elementRef = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(true);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry) setIsIntersecting(entry.isIntersecting);
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { elementRef, isIntersecting } as const;
}
