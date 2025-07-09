import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { toast } from 'react-toastify';
import Contact from '../pages/Contact/Contact';
import '@testing-library/jest-dom';

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn()
  }
}));

jest.mock('../components/Header', () => {
  return function MockHeader() {
    return <div data-testid="mock-header">Header</div>;
  };
});

jest.mock('../components/Footer', () => {
  return function MockFooter() {
    return <div data-testid="mock-footer">Footer</div>;
  };
});

jest.mock('../components/ShopBanner', () => {
  return function MockShopBanner() {
    return <div data-testid="mock-shop-banner">Shop Banner</div>;
  };
});

jest.mock('../components/ServiceFeatures', () => {
  return function MockServiceFeatures() {
    return <div data-testid="mock-service-features">Service Features</div>;
  };
});

describe('Contact Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders contact form with all required fields', () => {
    render(<Contact />);
    
    expect(screen.getByLabelText(/your name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('displays contact information correctly', () => {
    render(<Contact />);
    
    expect(screen.getByText(/236 5th SE Avenue/i)).toBeInTheDocument();
    expect(screen.getByText(/Mobile: \+\(84\) 546-6789/i)).toBeInTheDocument();
    expect(screen.getByText(/Monday-Friday: 9:00 - 22:00/i)).toBeInTheDocument();
  });

  test('submits form with valid data successfully', async () => {
    render(<Contact />);
    
    const nameInput = screen.getByLabelText(/your name:/i);
    const emailInput = screen.getByLabelText(/email address:/i);
    const subjectInput = screen.getByLabelText(/subject:/i);
    const messageInput = screen.getByLabelText(/message:/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(emailInput, 'john@example.com');
    await userEvent.type(subjectInput, 'Test Subject');
    await userEvent.type(messageInput, 'Test Message');

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('Your message has been sent successfully!');
    });
  });

  test('displays validation errors for empty required fields', async () => {
    render(<Contact />);
    
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Minimum 3 characters required/i)).toBeInTheDocument();
      expect(screen.getByText(/Required field/i)).toBeInTheDocument();
    });
  });

  test('validates email format', async () => {
    render(<Contact />);
    
    const emailInput = screen.getByLabelText(/email address:/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    await userEvent.type(emailInput, 'invalid-email');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Invalid email/i)).toBeInTheDocument();
    });
  });

  test('renders all component dependencies', () => {
    render(<Contact />);
    
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
    expect(screen.getByTestId('mock-shop-banner')).toBeInTheDocument();
    expect(screen.getByTestId('mock-service-features')).toBeInTheDocument();
  });
});
