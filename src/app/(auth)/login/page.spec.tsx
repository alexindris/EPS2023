import { render } from '@testing-library/react';
import LoginPage from './page';

describe('LoginPage', () => {
  it('renders the LoginPage component', () => {
    const { getByText } = render(<LoginPage />);
    const loginElement = getByText('Login');
    expect(loginElement).toBeInTheDocument();
  });
});
