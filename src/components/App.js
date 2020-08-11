// React
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

// Fomantic UI css
import '../assets/fomantic/dist/semantic.css';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import MainMenu from './menus/MainMenu';
import CalculatorPage from './pages/CalculatorPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Fragment>
          <BrowserRouter>
            <MainMenu />
            <Switch>
              <Route path="/" exact component={CalculatorPage} />
              <Route path="/calculate" exact component={CalculatorPage} />
              <Route path="/about" exact component={AboutPage} />
              <Route path="/contact" exact component={ContactPage} />
            </Switch>
          </BrowserRouter>
        </Fragment>
      </div>
    );
  }
}

export default App;
