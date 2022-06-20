import React from 'react';
import { render } from '@testing-library/react';
import Movies from './Movies';

test('renders Movies Page', () => {
  const { getByText } = render(<Movies />);

  // expect(getByText(/learn/i)).toBeInTheDocument();
});
