```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginPage from '../../src/components/LoginPage';

test('renders login form', () => {
  const { getByTestId } = render(<LoginPage />);
  const loginForm = getByTestId('loginForm');
  expect(loginForm).toBeInTheDocument();
});

test('inputs are editable', () => {
  const { getByPlaceholderText } = render(<LoginPage />);
  const usernameInput = getByPlaceholderText('Username');
  const passwordInput = getByPlaceholderText('Password');

  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

  expect(usernameInput.value).toBe('testuser');
  expect(passwordInput.value).toBe('testpassword');
});

test('submit button is clickable', () => {
  const { getByText } = render(<LoginPage />);
  const submitButton = getByText('Login');

  fireEvent.click(submitButton);
});
```