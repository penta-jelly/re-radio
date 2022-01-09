import { useRef, useCallback, useEffect } from 'react';

export function useScrollMonitor<T extends HTMLElement = HTMLDivElement>(
  { onBottomReached }: { onBottomReached?: () => void },
  deps: React.DependencyList,
): [object, React.RefObject<T>] {
  const containerRef = useRef<T>(null);

  const scrollListener = useCallback(
    (event: Event) => {
      const node = event.target as T | null;
      if (!node) return;
      const bottom = Math.abs(node.scrollHeight - node.scrollTop - node.clientHeight);
      if (bottom < 24) {
        onBottomReached?.();
      }
    },
    [onBottomReached],
  );

  useEffect(
    () => {
      if (!containerRef.current) return;
      const element = containerRef.current;
      element.addEventListener('scroll', scrollListener);
      return () => {
        element.removeEventListener('scroll', scrollListener);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [scrollListener, ...deps],
  );

  return [{}, containerRef];
}
