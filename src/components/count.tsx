import React from 'react';
import styled from 'styled-components';

import useCount from '~/state-hooks/use-count';
import type { FCWithoutChildren } from '~/types/component';

const Count: FCWithoutChildren<{ initialCount?: number }> = ({
  initialCount = 0,
}) => {
  const [{ count }, { increment, decrement }] = useCount(initialCount);

  return (
    <Root>
      <Button data-testid="button-decrement" onClick={decrement}>
        -
      </Button>
      <Display data-testid="display-count">
        {String(count).padStart(2, '0')}
      </Display>
      <Button data-testid="button-increment" onClick={increment}>
        +
      </Button>
    </Root>
  );
};

export default Count;

const Root = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.4em;
`;

const Display = styled.div`
  margin: 0 0.4em;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.8em;
  height: 1.8em;
  border: 1px solid ${({ theme }) => theme.colors.keyline};
  border-radius: 50%;
  color: currentColor;
  font: inherit;
  background-color: transparent;
  cursor: pointer;
  appearance: none;
`;
