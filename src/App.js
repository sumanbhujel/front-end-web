import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import SignUpForm from './components/form/SignUpForm';
import LoginForm from './components/form/LoginForm';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Home />
          <Switch>
            <Route path="/signupform" component={SignUpForm} />
            <Route path="/loginform" component={LoginForm} />
          </Switch>

        </header>
      </div>
    </BrowserRouter>

  );
}

export default App;
