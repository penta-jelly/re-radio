import { useEffect, useRef } from 'react';

export function usePrevious<T>(value: T): T | undefined {
  const prevUrlRef = useRef<T | undefined>(undefined);
  useEffect(() => {
    prevUrlRef.current = value;
  }, [value]);

  return prevUrlRef.current;
}
