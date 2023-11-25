import { render } from '@testing-library/react';
import RegisterPage from './page';

describe('RegisterPage', () => {
  it('renders the RegisterPage component', () => {
    const { getByText } = render(<RegisterPage />);
    const registerElement = getByText('Register');
    expect(registerElement).toBeInTheDocument();
  });
});
