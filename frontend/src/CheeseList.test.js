import { render, screen } from '@testing-library/react';
import CheeseList from './CheeseList';

test('renders Cheese Selection heading', () => {
  render(<CheeseList />);
  const headingElement = screen.getByText(/Cheese Selection/i);
  expect(headingElement).toBeInTheDocument();
});
