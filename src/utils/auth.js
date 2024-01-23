```javascript
import axios from 'axios';

// Function to register a new user
export const registerUser = async (username, password) => {
  try {
    const response = await axios.post('/api/auth/register', { username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to login a user
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post('/api/auth/login', { username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to logout a user
export const logoutUser = () => {
  localStorage.removeItem('token');
};

// Function to set JWT token
export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
  } else {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
};

// Function to get JWT token
export const getAuthToken = () => {
  return localStorage.getItem('token');
};
```