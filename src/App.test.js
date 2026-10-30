import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn Jenkins link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn Jenkins/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the application version', () => {
  render(<App />);
  const expectedAppVersion = process.env.REACT_APP_VERSION || '1';
  expect(screen.getByText(`Application version: ${expectedAppVersion}`)).toBeInTheDocument();
});
