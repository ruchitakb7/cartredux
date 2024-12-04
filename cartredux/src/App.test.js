// Mocking react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // Import all other functions
  Link: ({ children }) => <div>{children}</div>, // Mock the Link component
}));

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Home from "../src/components/cart/Home";  
import cartReducer from "../src/store/cartReducer"; 

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

describe('Home Component', () => {
  test('should render "Buy Your Favourite Product" section', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const headingElement = screen.getByText('Buy Your Favourite Product');
    expect(headingElement).toBeInTheDocument();

    // Check if the product titles are displayed
    expect(screen.getByText('Bag')).toBeInTheDocument();
    expect(screen.getByText('Mobile')).toBeInTheDocument();
    expect(screen.getByText('Watch')).toBeInTheDocument();
    expect(screen.getByText('Fan')).toBeInTheDocument();
  });
});
