```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RegistrationPage from '../src/components/RegistrationPage';

test('renders registration form', () => {
  const { getByTestId } = render(<RegistrationPage />);
  const registerForm = getByTestId('registerForm');
  expect(registerForm).toBeInTheDocument();
});

test('form inputs are updated on change', () => {
  const { getByLabelText } = render(<RegistrationPage />);
  const usernameInput = getByLabelText(/username/i);
  const passwordInput = getByLabelText(/password/i);

  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

  expect(usernameInput.value).toBe('testuser');
  expect(passwordInput.value).toBe('testpassword');
});

test('form submission calls registerUser function', () => {
  const registerUser = jest.fn();
  const { getByTestId } = render(<RegistrationPage registerUser={registerUser} />);
  const registerForm = getByTestId('registerForm');

  fireEvent.submit(registerForm);

  expect(registerUser).toHaveBeenCalled();
});
```