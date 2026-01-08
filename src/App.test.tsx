import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('verifica que el título de la app aparece', () => {
  render(<App />);
  const linkElement = screen.getByText("Hola");
  expect(linkElement).toBeInTheDocument();
})