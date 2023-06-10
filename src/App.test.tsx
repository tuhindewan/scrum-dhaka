import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../src/components/calculator.component';

test('renders the calculator component', () => {
  render(<Calculator />);

  // Check if the component renders without errors
  const calculatorElement = screen.getByText('Calculate whatever you want');
  expect(calculatorElement).toBeInTheDocument();
});

test('performs addition correctly', () => {
  render(<Calculator />);

  const firstValueInput = screen.getByLabelText('Enter the first value');
  const secondValueInput = screen.getByLabelText('Enter the second value');
  const addButton = screen.getByText('+');
  const resultElement = screen.getByText('Result 0');

  fireEvent.change(firstValueInput, { target: { value: '5' } });
  fireEvent.change(secondValueInput, { target: { value: '3' } });
  fireEvent.click(addButton);

  expect(resultElement).toHaveTextContent('Result 8');
});

test('performs subtraction correctly', () => {
  render(<Calculator />);

  const firstValueInput = screen.getByLabelText('Enter the first value');
  const secondValueInput = screen.getByLabelText('Enter the second value');
  const subtractButton = screen.getByText('-');
  const resultElement = screen.getByText('Result 0');

  fireEvent.change(firstValueInput, { target: { value: '10' } });
  fireEvent.change(secondValueInput, { target: { value: '7' } });
  fireEvent.click(subtractButton);

  expect(resultElement).toHaveTextContent('Result 3');
});

test('performs multiplication correctly', () => {
  render(<Calculator />);

  const firstValueInput = screen.getByLabelText('Enter the first value');
  const secondValueInput = screen.getByLabelText('Enter the second value');
  const multiplyButton = screen.getByText('X');
  const resultElement = screen.getByText('Result 0');

  fireEvent.change(firstValueInput, { target: { value: '4' } });
  fireEvent.change(secondValueInput, { target: { value: '6' } });
  fireEvent.click(multiplyButton);

  expect(resultElement).toHaveTextContent('Result 24');
});
