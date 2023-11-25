import { render } from '@testing-library/react';
import React from 'react';
import { Sample } from '.';

describe('Sample', () => {
  it('should render', () => {
    const { getByText } = render(<Sample name='John' age={30} />);
    const element = getByText(/John/);
    expect(element).toBeInTheDocument();
  });
});
