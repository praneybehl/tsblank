import { createState } from 'solid-js';

export default (initialCount = 0) => {
  const [state, setState] = createState({ count: initialCount });
  const decrement = () => setState(({ count }) => ({ count: count - 1 }));
  const increment = () => setState(({ count }) => ({ count: count + 1 }));

  return [state, { decrement, increment }] as const;
};
