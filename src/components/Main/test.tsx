import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should render the component with the correct name', () => {
    render(<Main />);
    expect(screen.getByRole('heading', { name: /spada/i })).toBeInTheDocument();
  });

  it('should render the colors correctly', () => {
    const { container } = render(<Main />);
    expect(container.firstChild).toHaveStyle({ 'background-color': '#373a5e' });
  });
});
