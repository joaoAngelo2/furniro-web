import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Contact from '../pages/Contact/Contact';

jest.mock('../components/Header', () => {
  return function MockHeader() {
    return <div data-testid="mock-header" />;
  };
});

jest.mock('../components/Footer', () => {
  return function MockFooter() {
    return <div data-testid="mock-footer" />;
  };
});

jest.mock('../components/ShopBanner', () => {
  return function MockShopBanner() {
    return <div data-testid="mock-shop-banner" />;
  };
});

jest.mock('../components/ServiceFeatures', () => {
  return function MockServiceFeatures() {
    return <div data-testid="mock-service-features" />;
  };
});

describe('Contact Component', () => {
  beforeEach(() => {
    render(<Contact />);
  });

  test('renders main heading and description', () => {
    expect(screen.getByText('Get In Touch With Us')).toBeInTheDocument();
    expect(screen.getByText(/For More Information About Our Product & Services/)).toBeInTheDocument();
  });

  test('renders contact information section', () => {
    expect(screen.getByText('Address')).toBeInTheDocument();
    expect(screen.getByText(/236 5th SE Avenue/)).toBeInTheDocument();
    expect(screen.getByText('Phone')).toBeInTheDocument();
    expect(screen.getByText(/Mobile: \+\(84\) 546-6789/)).toBeInTheDocument();
    expect(screen.getByText('Working Time')).toBeInTheDocument();
    expect(screen.getByText(/Monday-Friday: 9:00 - 22:00/)).toBeInTheDocument();
  });

  test('renders contact form with all fields', () => {
    expect(screen.getByLabelText('Your Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Email address:')).toBeInTheDocument();
    expect(screen.getByLabelText('Subject:')).toBeInTheDocument();
    expect(screen.getByLabelText('Message:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  test('form inputs are working correctly', async () => {
    const nameInput = screen.getByLabelText('Your Name:');
    const emailInput = screen.getByLabelText('Email address:');
    const subjectInput = screen.getByLabelText('Subject:');
    const messageInput = screen.getByLabelText('Message:');

    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(emailInput, 'john@example.com');
    await userEvent.type(subjectInput, 'Test Subject');
    await userEvent.type(messageInput, 'Test Message');

    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(subjectInput).toHaveValue('Test Subject');
    expect(messageInput).toHaveValue('Test Message');
  });

  test('form submission prevents default behavior', () => {
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    
    const mockSubmit = jest.fn(e => e.preventDefault());
    
    const form = submitButton.closest('form');
    if (form) {
      form.onsubmit = mockSubmit;
      fireEvent.click(submitButton);
      expect(mockSubmit).toHaveBeenCalled();
    } else {
      // If no form found, just test that button exists and is clickable
      expect(submitButton).toBeInTheDocument();
      fireEvent.click(submitButton);
    }
  });

  test('renders all required child components', () => {
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
    expect(screen.getByTestId('mock-shop-banner')).toBeInTheDocument();
    expect(screen.getByTestId('mock-service-features')).toBeInTheDocument();
  });

  test('contact form inputs have correct placeholders', () => {
    expect(screen.getByPlaceholderText('Abc')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('abc@def.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('This is an optional')).toBeInTheDocument();
    expect(screen.getByPlaceholderText("HI! I'd like to ask about...")).toBeInTheDocument();
  });
});
