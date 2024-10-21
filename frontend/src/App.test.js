import { render, screen, waitFor } from '@testing-library/react';
import CheeseList from './CheeseList';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: 1, name: 'Brie', price_per_kilo: 25, image: 'https://cheese.com/media/img/brie.jpg', color: 'White' }
    ]),
  })
);

test('renders Cheese Selection with Brie', async () => {
  render(<CheeseList />);
  
  const headingElement = screen.getByText(/Cheese Selection/i);
  expect(headingElement).toBeInTheDocument();
  
  // Wait for the data to load and check if Brie is rendered
  const cheeseElement = await waitFor(() => screen.getByText(/Brie/i));
  expect(cheeseElement).toBeInTheDocument();
});
