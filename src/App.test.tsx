import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('Pruebas en <App />', () => {
  
  beforeEach(() => {
    render(<App />);
  });

  test ('renders Vite + React heading', () => {
    const headingElement = screen.getByText(/Vite \+ React/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('aparece el texto de hola', () => {
    const linkElement = screen.getByTestId("hello-text");
    expect(linkElement).toBeInTheDocument();
  });

  test('el botón de conteo incrementa el valor al hacer clic', async () => {
    const button = screen.getByRole('button', { name: /count is 0/i });

    fireEvent.click(button);

    const updatedButton = screen.getByRole('button', { 
      name: (content) => content.includes('count is 1') 
    });
    
    expect(updatedButton).toBeInTheDocument();
  });
});