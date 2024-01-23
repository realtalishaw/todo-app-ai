```javascript
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ isLoggedIn, logout }) => {
  return (
    <nav id="navbar">
      <div>
        <Link to="/">Starter React ToDo App</Link>
      </div>
      <div>
        {!isLoggedIn ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
```