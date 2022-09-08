import React from 'react';
import { render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
//https://stephencharlesweiss.com/jest-watch-mode

test('renders learn react link', () => {
render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  // 'learn/i' indicate regex including 'learn'
  const screenText = screen.getByText(/Edit/i);

  expect(screenText).toBeInTheDocument();
});
