import { createRoot } from 'solid-js';
import { getByTestId, fireEvent, waitFor } from '@testing-library/dom';

// import Count from './count';
import CountUnstyled from './count-unstyled';

describe('Count', () => {
  it('renders without crashing', () => {
    createRoot((dispose) => {
      const container = document.createElement('div');

      container.appendChild((<CountUnstyled initialCount={2} />) as Node);

      expect(getByTestId(container, 'button-decrement').textContent).toBe('-');
      expect(getByTestId(container, 'button-increment').textContent).toBe('+');
      expect(getByTestId(container, 'display-count').textContent).toBe('02');

      dispose();
    });
  });

  it('updates', () => {
    createRoot(async (dispose) => {
      expect.assertions(2);

      const container = document.createElement('div');

      container.appendChild((<CountUnstyled initialCount={2} />) as Node);

      expect(getByTestId(container, 'display-count').textContent).toBe('02');

      fireEvent.click(getByTestId(container, 'button-increment'));

      await waitFor(() =>
        expect(getByTestId(container, 'display-count').textContent).toBe('03'),
      );

      dispose();
    });
  });
});
