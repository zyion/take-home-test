import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from "./store";

test('renders without crashing', () => {
  render(<Provider store={store}>
    <App />
  </Provider>);
});
