import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { BackToTop } from './components';
import { BlogPage, HomePage, ProjectPage } from './pages';
import ScrollToTop from './utils/ScrollToTop';

import './App.css';
import ChangeTheme from './components/ChangeTheme/ChangeTheme';

function App() {

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />

          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
      <ChangeTheme />
    </div>
  );
}

export default App;
