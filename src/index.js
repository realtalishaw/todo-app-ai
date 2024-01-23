```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import App from './App';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
```