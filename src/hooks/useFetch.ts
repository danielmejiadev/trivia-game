import { useEffect, useState } from 'react';

export enum States {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  FETCHED = 'FETCHED',
  ERROR = 'ERROR'
}

export function useFetch<T>(
  callback: () => Promise<T>,
  initialValue: T
): [T, States, unknown] {
  const [state, setState] = useState<States>(States.IDLE);
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState(States.LOADING);
        const response = await callback();
        setData(response);
        setState(States.FETCHED);
      } catch (errorCatched) {
        setState(States.ERROR);
        setError(errorCatched);
      }
    };
    fetchData();
  }, [callback]);

  return [data, state, error];
}

export default useFetch;
