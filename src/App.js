import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import SignUpForm from './components/form/SignUpForm';
import LoginForm from './components/form/LoginForm';
import Home from './components/Home';
import AddScrapForm from './components/form/AddScrapForm';
import AddFeedbackForm from './components/form/AddFeedbackForm';
import ScrapData from './components/ScrapData';
import FeedbackData from './components/FeedbackData';
import SingleData from './components/SingleData';
import EditScrap from './components/form/EditScrap';
import EditFeedback from './components/form/EditFeedback';


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
            <Route path="/editscrap/:id" exact component={EditScrap} />
            <Route path="/singledata/:id" exact component={SingleData} />
            <Route path="/addfeedback" component={AddFeedbackForm} />
            <Route path="/viewfeedback" component={FeedbackData} />
            <Route path="/editfeedback/:id" exact component={EditFeedback} />
          </Switch>

        </header>
      </div>
    </BrowserRouter>

  );
}

export default App;
