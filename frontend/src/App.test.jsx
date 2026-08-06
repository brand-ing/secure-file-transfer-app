import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the upload interface', () => {
  render(<App />);
  expect(screen.getByText(/secure file transfer/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /upload/i })).toBeInTheDocument();
});
