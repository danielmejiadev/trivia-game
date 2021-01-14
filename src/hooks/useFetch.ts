import { useEffect, useState } from 'react';

export enum States {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  FETCHED = 'FETCHED',
  ERROR = 'ERROR',
}

export function useFetch<T>(url: string, options?: RequestInit): [T | undefined, States] {
  const [state, setState] = useState<States>(States.IDLE)
  const [data, setData] = useState<T>();

  useEffect(() => {
    async function fetchData() {
      try {
        setState(States.LOADING);
        const res = await fetch(url, options);
        const json = await res.json();
        setData(json);
        setState(States.FETCHED);
      } catch (error) {
        setState(States.ERROR);
      }
    }
    fetchData();
  }, []);

  return [data, state];
}

export default useFetch;
