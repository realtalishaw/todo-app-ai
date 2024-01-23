```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import ToDoDashboard from './components/ToDoDashboard';
import NavigationBar from './components/NavigationBar';
import GlobalState from './context/GlobalState';
import './styles.css';

function App() {
  return (
    <GlobalState>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />
          <Route path="/dashboard" component={ToDoDashboard} />
        </Switch>
      </Router>
    </GlobalState>
  );
}

export default App;
```