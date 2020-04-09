import useCount from './use-count';

describe('useCount', () => {
  it('increments and decrements count', () => {
    const [state, { decrement, increment }] = useCount(2);

    expect(state.count).toBe(2);

    increment();

    expect(state.count).toBe(3);

    decrement();

    expect(state.count).toBe(2);
  });
});
