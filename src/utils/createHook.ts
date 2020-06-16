import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

export type HookData<T> = {
  data?: T;
  error?: string | Error;
  called: boolean;
  loading: boolean;
};

export const createHook = <T>(request: () => Observable<T>) => {
  const useHook = () => {
    const [hookData, setHookData] = useState({
      data: undefined,
      error: undefined,
      called: false,
      loading: false,
    } as HookData<T>);

    useEffect(() => {
      setHookData((prevState) => ({ ...prevState, called: true, loading: true }));
      const sub = request().subscribe(
        (data) => {
          setHookData((prevState) => ({ ...prevState, data, loading: false }));
        },
        (error) => {
          setHookData((prevState) => ({ ...prevState, error, loading: false }));
        },
      );

      return () => sub.unsubscribe();
    }, []);

    return hookData;
  };

  return useHook;
};

export default createHook;
