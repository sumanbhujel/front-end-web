import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import SignUpForm from './components/form/SignUpForm';
import LoginForm from './components/form/LoginForm';
import UserDashboard from './components/UserDashboard';
import Home from './components/Home';
import AddScrapForm from './components/form/AddScrapForm';
import ScrapData from './components/ScrapData';
import EditScrap from './components/form/EditSrap';
import SingleData from './components/SingleData';


function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Home />
          <Switch>
            <Route path="/signupform" component={SignUpForm} />
            <Route path="/loginform" component={LoginForm} />
            <Route path="/addscrap" component={AddScrapForm} />
            <Route path="/viewscrap" component={ScrapData} />
            <Route path="/scrapupdate/:id" exact component={EditScrap} />
            <Route path="/singledata/:id" exact component={SingleData} />
          </Switch>

        </header>
      </div>
    </BrowserRouter>

  );
}

export default App;
