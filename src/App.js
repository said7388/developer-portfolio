import React, { useContext } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { BackToTop } from './components';
import { ThemeContext } from './contexts/ThemeContext';
import { BlogPage, HomePage, ProjectPage } from './pages';
import ScrollToTop from './utils/ScrollToTop';

import './App.css';

function App() {

  const { theme } = useContext(ThemeContext);

  console.log("%cDEVELOPER PORTFOLIO", `color:${theme.primary}; font-size:50px`);
  console.log("%chttps://github.com/hhhrrrttt222111/developer-portfolio", `color:${theme.tertiary}; font-size:20px`);
  // console.log = console.warn = console.error = () => {};

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
    </div>
  );
}

export default App;
