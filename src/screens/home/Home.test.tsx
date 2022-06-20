import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders Home Page', () => {
  const { getByText } = render(<Home />);

  // expect(getByText(/learn/i)).toBeInTheDocument();
});
