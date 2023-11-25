import { render } from '@testing-library/react';
import DashboardPage from './page';

describe('DashboardPage', () => {
  it('renders the DashboardPage component', () => {
    const { getByText } = render(<DashboardPage />);
    const dashboardElement = getByText('Dashboard');
    expect(dashboardElement).toBeInTheDocument();
  });
});
