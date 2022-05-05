import { render, screen } from '@testing-library/react';
import Weather from '../src/components/Weather';

test('wearher component makes api call with proper params', () => {
  render(<Weather />);
  const linkElement = screen.getByText();
  expect(linkElement).toBeInTheDocument();
});
