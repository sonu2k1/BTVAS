"use client";

import { useState, useEffect } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export const useFetch = <T>(url: string, options?: RequestInit): FetchState<T> => {
  const [prevUrl, setPrevUrl] = useState<string>(url);
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  // Reset state synchronously during render if the URL changes
  if (prevUrl !== url) {
    setPrevUrl(url);
    setState({
      data: null,
      loading: true,
      error: null,
    });
  }

  useEffect(() => {
    let active = true;

    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Fetch error: ${res.statusText}`);
        }
        return res.json() as Promise<T>;
      })
      .then((data) => {
        if (active) {
          setState({ data, loading: false, error: null });
        }
      })
      .catch((error: Error) => {
        if (active) {
          setState({ data: null, loading: false, error });
        }
      });

    return () => {
      active = false;
    };
  }, [url, options]);

  return state;
};
