import { renderHook } from '@testing-library/react-hooks';
import { useFetch, States } from './useFetch';

describe('useFetch hook', () => {
  it('should handle success', async () => {
    const data = [{ id: 1 }];
    const callback = jest.fn().mockResolvedValue(data);
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(callback, [])
    );

    expect(result.current[0]).toEqual([]);
    expect(result.current[1]).toEqual(States.LOADING);

    await waitForNextUpdate();
    expect(result.current[0]).toEqual(data);
    expect(result.current[1]).toEqual(States.FETCHED);
  });

  it('should handle error', async () => {
    const error = new Error();
    const callback = jest.fn().mockRejectedValue(error);
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(callback, [])
    );

    expect(result.current[0]).toEqual([]);
    expect(result.current[1]).toEqual(States.LOADING);

    await waitForNextUpdate();
    expect(result.current[0]).toEqual([]);
    expect(result.current[1]).toEqual(States.ERROR);
    expect(result.current[2]).toEqual(error);
  });
});
