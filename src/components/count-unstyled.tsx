import useCount from '~/hooks/use-count';

export default ({ initialCount = 0 }: { initialCount?: number }) => {
  const [state, { decrement, increment }] = useCount(initialCount);

  return (
    <div>
      <button onClick={decrement} data-testid="button-decrement">
        -
      </button>
      <strong data-testid="display-count">
        {String(state.count).padStart(2, '0')}
      </strong>
      <button onClick={increment} data-testid="button-increment">
        +
      </button>
    </div>
  );
};
