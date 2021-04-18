import { useCallback, useState } from 'react';

type MakeFetchProps = {
  url: RequestInfo;
  opts?: RequestInit;
};

type FetchResponse<T> = {
  statusCode: number;
  body: T;
};

export const useFetch = <T>() => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);

  const makeFetch = useCallback(async ({ url, opts }: MakeFetchProps): Promise<
    FetchResponse<T>
  > => {
    setIsLoading(true);

    const response = await fetch(url, opts);
    const body = await response.json();

    setIsLoading(false);

    if (!response.ok) setHasErrored(true);

    return {
      statusCode: response.status,
      body,
    };
  }, []);

  return {
    fetch: makeFetch,
    isLoading: isLoading,
    hasErrored: hasErrored,
  };
};
