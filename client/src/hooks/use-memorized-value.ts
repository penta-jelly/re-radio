import { useRef, useMemo, useEffect } from 'react';

/**
 * Keep the memorized value when it is {@link T}
 * When the value change to undefined, the hook function keeps returning the memorized value
 * When the value change back to {@link T}, the memorized value will be updated with the latest value
 */
export function useMemorizedValue<T>(value: T | undefined | null): [T | null, T | undefined | null] {
  const prevValue = useRef<T | undefined | null>(undefined);

  // This variable is mean to keep the previous URL so that the player will not be unmounted on down time between playing songs
  const nonUndefinedValue = useMemo<T | null>(() => {
    if (value !== undefined) return value;
    if (prevValue.current !== undefined) return prevValue.current;
    return null;
  }, [value]);

  useEffect(() => {
    prevValue.current = nonUndefinedValue;
  }, [nonUndefinedValue]);

  return [nonUndefinedValue, prevValue.current];
}
