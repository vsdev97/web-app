import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('Home', () => {
  test('renders hero section with correct text', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(
      screen.getByText(/Make a Difference with IKSHANA CHARITABLE TRUST/i)
    ).toBeInTheDocument();
  });

  test('renders impact statistics correctly', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText(/500+/i)).toBeInTheDocument();
    expect(screen.getByText(/2000+/i)).toBeInTheDocument();
    expect(screen.getByText(/150+/i)).toBeInTheDocument();
  });

  test('clicking the "Learn More" button navigates to About Us page', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByTestId('learn-more-btn'));
    expect(window.location.pathname).toBe('/about');
  });

  test('clicking the "Donate Now" button navigates to Donate page', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByTestId('donate-now-btn'));
    expect(window.location.pathname).toBe('/donate');
  });
});
