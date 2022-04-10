import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/med amine ci/,workflow
  /i);
  expect(linkElement).toBeInTheDocument();
});
