import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Error } from './Error';

let container: Element | null = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
  }

  container = null;
});

it('renders with a message', () => {
  act(() => {
    render(<Error message="Test message 1" />, container);
  });
  expect(container.textContent).toBe('Test message 1');
  act(() => {
    render(<Error message="Test message 2" />, container);
  });
  expect(container.textContent).toBe('Test message 2');
  act(() => {
    render(<Error />, container);
  });
  expect(container.textContent).toBe('Something has gone wrong...');
});
