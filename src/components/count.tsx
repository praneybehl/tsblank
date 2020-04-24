import { styled } from 'solid-styled-components';

import useCount from '~/hooks/use-count';

export default ({ initialCount = 0 }: { initialCount?: number }) => {
  const [state, { decrement, increment }] = useCount(initialCount);

  return (
    <Container>
      <Stepper onClick={decrement} data-testid="button-decrement">
        -
      </Stepper>
      <Count data-testid="display-count">
        {String(state.count).padStart(2, '0')}
      </Count>
      <Stepper onClick={increment} data-testid="button-increment">
        +
      </Stepper>
    </Container>
  );
};

const Container = styled('div')`
  display: flex;
  align-items: center;
  padding: 0.6em;
`;

const Count = styled('div')`
  margin: 0 0.6em;
`;

const Stepper = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.8em;
  height: 1.8em;
  border: 1px solid #ddd;
  border-radius: 50%;
  font: inherit;
  background-color: transparent;
  cursor: pointer;
  appearance: none;
`;
