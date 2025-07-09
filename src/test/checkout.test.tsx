import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Checkout from '../pages/Checkout/Checkout';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

jest.mock('../components/Header', () => () => <div data-testid="header" />);
jest.mock('../components/Footer', () => () => <div data-testid="footer" />);
jest.mock('../components/ServiceFeatures', () => () => <div data-testid="features" />);
jest.mock('../components/ShopBanner', () => () => <div data-testid="banner" />);
jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
  },
}));

const mockInitialState = {
  cart: {
    items: [
      { id: '1', name: 'Test Product', quantity: 2, price: 100 }
    ],
    total: 200
  }
};


const createMockStore = (initialState = mockInitialState) => {
  return configureStore({
    reducer: {
      cart: (state = initialState.cart) => state,
    },
  });
};

describe('Checkout Component', () => {
  let mockStore: any;

  beforeEach(() => {
    mockStore = createMockStore();
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          bairro: 'Test District',
          localidade: 'Test City',
          uf: 'TS',
          logradouro: 'Test Street'
        }),
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders checkout form with all required fields', () => {
    render(
      <Provider store={mockStore}>
        <Checkout />
      </Provider>
    );

    expect(screen.getByLabelText(/First Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ZIP Code/i)).toBeInTheDocument();
  });

  test('displays cart items and total correctly', () => {
    render(
      <Provider store={mockStore}>
        <Checkout />
      </Provider>
    );

    expect(screen.getByText('Test Product x 2')).toBeInTheDocument();
    expect(screen.getAllByText('Rs. 200.00')).toHaveLength(2);
  });

  test('handles ZIP code input and auto-fills address fields', async () => {
    render(
      <Provider store={mockStore}>
        <Checkout />
      </Provider>
    );

    const zipInput = screen.getByLabelText(/ZIP Code/i);
    await userEvent.type(zipInput, '01310100');

    await waitFor(() => {
      expect((global as any).fetch).toHaveBeenCalledWith(
        'https://viacep.com.br/ws/01310100/json/'
      );
    });

    await waitFor(() => {
      expect(screen.getByLabelText(/Town \/ City/i)).toHaveValue('Test City');
      expect(screen.getByLabelText(/Province/i)).toHaveValue('TS');
      expect(screen.getByLabelText(/Street Address/i)).toHaveValue('Test Street');
    });
  });

  test('handles form submission with valid data', async () => {
    const { container } = render(
      <Provider store={mockStore}>
        <Checkout />
      </Provider>
    );

    await userEvent.type(screen.getByLabelText(/First Name:/i), 'John');
    await userEvent.type(screen.getByLabelText(/Last Name:/i), 'Doe');
    await userEvent.type(screen.getByLabelText(/Email address/i), 'john@example.com');
    await userEvent.type(screen.getByLabelText(/Phone/i), '1234567890');
    await userEvent.type(screen.getByLabelText(/ZIP Code/i), '12345-678');

    const directTransfer = screen.getByLabelText(/Direct bank transfer/i);
    await userEvent.click(directTransfer);

    const submitButton = screen.getByText(/Place order/i);
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.queryByText(/Form errors/i)).not.toBeInTheDocument();
    });
  });

  test('displays validation errors for required fields', async () => {
    render(
      <Provider store={mockStore}>
        <Checkout />
      </Provider>
    );

    const submitButton = screen.getByText(/Place order/i);
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/First name must be at least 3 characters long/i)).toBeInTheDocument();
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    });
  });

  test('handles API error during ZIP code lookup', async () => {
    (global as any).fetch = jest.fn(() => Promise.reject('API Error'));
    (console as any).error = jest.fn();

    render(
      <Provider store={mockStore}>
        <Checkout />
      </Provider>
    );

    const zipInput = screen.getByLabelText(/ZIP Code/i);
    await userEvent.type(zipInput, '12345678');

    await waitFor(() => {
      expect(console.error).toHaveBeenCalled();
    });
  });

  test('handles invalid ZIP code from API', async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ erro: true }),
      })
    );

    render(
      <Provider store={mockStore}>
        <Checkout />
      </Provider>
    );

    const zipInput = screen.getByLabelText(/ZIP Code/i);
    await userEvent.type(zipInput, '00000000');

    await waitFor(() => {
      expect((global as any).fetch).toHaveBeenCalledWith(
        'https://viacep.com.br/ws/00000000/json/'
      );
    });

    await waitFor(() => {
      expect(screen.getByLabelText(/Town \/ City/i)).toHaveValue('');
      expect(screen.getByLabelText(/Province/i)).toHaveValue('');
    });
  });
});
