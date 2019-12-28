import React from 'react';
import Header from './components/Header.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import AddJob from './components/AddJob/AddJob.jsx';
import TaskList from './components/TaskList/TaskList.jsx';
import Home from './components/Home/HomeComponent.jsx'
import EditJob from './components/AddJob/EditJob.jsx';

import { Router, Route, Switch, Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

const App = () => (
  <Router history={browserHistory}>
    <Header/>
    <Switch>
      <Route path="/home" component={Home}/>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/taskList" component={TaskList} />
      <Route exact path="/addJob" component={AddJob} />
      <Route exact path="/edit" component={EditJob} />
      <Redirect to="home" />
    </Switch>
  </Router>
);

export default App;
