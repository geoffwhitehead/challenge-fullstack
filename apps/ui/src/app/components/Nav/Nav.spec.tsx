import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Nav } from './Nav';

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

const routes = [
  {
    path: 'route-a-path',
    name: 'route-a-name',
  },
  {
    path: 'route-b-path',
    name: 'route-b-name',
  },
];

it('renders all routes', () => {
  act(() => {
    render(<Nav routes={routes} />, container);
  });
  routes.forEach(({ name }) => {
    expect(container.textContent).toContain(name);
  });
});
