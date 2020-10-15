import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../elements/NavBar/NavBar";
import WeAre from "../pages/WeAre/WeAre"
import sprite from '../../images/sprite.svg'

import { useTranslation } from 'react-i18next'

import './App.scss';

function App() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <Router>
      <NavBar sprite={sprite} changeLanguage={changeLanguage} />
      {/* <Route exact path="/" render={() => <Home />} /> */}
      <Route path="/we-are" render={() => <WeAre />} />
      {/* <Route path="/our-lapms" render={() => <OurLapms />} />
      <Route path="/bespoken-lagubia" render={() => <Bespoken />} />
      <Route path="/where-i-can-buy" render={() => <WhereICanBuy />} />
      <Route path="/contact-us" render={() => <ContactUs />} />

      <Footer /> */}
    </Router>
  );
}

export default App;
