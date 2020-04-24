import { renderHook, act } from '@testing-library/react-hooks';

import useCount from './use-count';

describe('useCount', () => {
  it('increments and decrements count', () => {
    const { result } = renderHook(() => useCount(5));

    expect(result.current[0].count).toBe(5);

    act(() => result.current[1].increment());

    expect(result.current[0].count).toBe(6);

    act(() => result.current[1].decrement());

    expect(result.current[0].count).toBe(5);
  });
});
