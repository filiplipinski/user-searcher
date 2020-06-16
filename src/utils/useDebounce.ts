import { useEffect, useCallback, DependencyList } from 'react';

export const useDebounce = (operation: Function, delay = 400, deps: DependencyList = []) => {
  const callback = useCallback(() => {
    const timeoutId = setTimeout(() => {
      operation();
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [operation, delay]);

  useEffect(callback, deps);
};
