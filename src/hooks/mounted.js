import { useCallback, useEffect, useRef } from 'react';

export const useMounted = () => {
  const mountedRef = useRef(false);
  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);
  return useCallback(() => mountedRef.current, []);
};

export const useAsync = () => {
  const isMounted = useMounted();
  return useCallback((promise, onCancle) => new Promise((resolve, reject) => {
    promise
      .then((result) => {
        if (isMounted()) {
          resolve(result);
        }
      })
      .catch((error) => {
        if (isMounted()) {
          reject(error);
        }
      })
      .finally(() => {
        if (!isMounted() && onCancle) {
          onCancle();
        }
      });
  }), [isMounted]);
};
