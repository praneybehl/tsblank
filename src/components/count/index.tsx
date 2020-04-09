import useCount from '~/state-hooks/use-count';

import classNames from './count.local.css';

export default ({ initialCount = 0 }: { initialCount?: number }) => {
  const [state, { decrement, increment }] = useCount(initialCount);

  return (
    <div className={classNames.root}>
      <button
        className={classNames.controlButton}
        onClick={decrement}
        data-testid="button-decrement"
      >
        -
      </button>
      <div className={classNames.countDisplay} data-testid="display-count">
        {String(state.count).padStart(2, '0')}
      </div>
      <button
        className={classNames.controlButton}
        onClick={increment}
        data-testid="button-increment"
      >
        +
      </button>
    </div>
  );
};
