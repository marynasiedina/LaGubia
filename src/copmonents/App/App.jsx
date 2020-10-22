import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../elements/NavBar/NavBar";
import Home from "../pages/Home/Home"
import WeAre from "../pages/WeAre/WeAre"
import sprite from '../../images/sprite.svg'

import { withTranslation } from 'react-i18next'

import './App.scss';

class App extends Component {

  render() {
    let { i18n, t } = this.props
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng)
    }

    return (
      <Router>
        <NavBar sprite={sprite} changeLanguage={changeLanguage} />
        <Route exact path="/" render={() => <Home t={t} />} />
        <Route path="/we-are" render={() => <WeAre t={t} />} />
        {/* <Route path="/our-lapms" render={() => <OurLapms />} />
      <Route path="/bespoken-lagubia" render={() => <Bespoken />} />
      <Route path="/where-i-can-buy" render={() => <WhereICanBuy />} />
      <Route path="/contact-us" render={() => <ContactUs />} />

      <Footer /> */}
      </Router>
    );
  }
}


export default withTranslation()(App)
