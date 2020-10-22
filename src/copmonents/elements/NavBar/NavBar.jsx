import React, { Component } from "react";
import NavItem from "../NavBar/NavItem/NavItem";
import { Link } from "react-router-dom";
import "./NavBar.scss";

import { withTranslation } from 'react-i18next'


class NavBar extends Component {

  scrollLogo = () => {
    window.scrollTo(0, 0);
  }

  listenToScroll = () => {
    let winScroll = window.pageYOffset
    let link = [].slice.call(document.getElementsByClassName('navigation__link'))
    let linkTrans = [].slice.call(document.getElementsByClassName('langbutton'))

    if (winScroll >= 75) {

      document.getElementById("navigation").style.background = "#ffffff"
      link.forEach(link => link.classList.add("navigation__link--mod"))
      linkTrans.forEach(link => link.classList.add("langbutton--mod"))
    }
    else {
      document.getElementById("navigation").style.background = "transparent"
      link.forEach(link => link.classList.remove("navigation__link--mod"))
      linkTrans.forEach(link => link.classList.remove("langbutton--mod"))
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }
  render() {

    let { sprite, changeLanguage, t } = this.props;
    let navbar = t("navbar", { returnObjects: true })

    return (
      <div className="navigation" id="navigation">
        <div className="navigation__container">
          <ul className="changeLang">
            <li onClick={() => changeLanguage('es')} className="langbutton">es</li>
            <li onClick={() => changeLanguage('en')} className="langbutton">en</li>
            <li onClick={() => changeLanguage('ru')} className="langbutton last">ru</li>
          </ul>
          <Link to="/" onClick={this.scrollLogo} className="logo-img">
            <svg id="logo" >
              <use href={sprite + '#logo'} />
            </svg>
          </Link>
          <ul className="navigation-bar">
            {navbar.map((item) => {
              return (
                <NavItem

                  itemName={item.itemName}
                  key={item.id}
                  url={item.url}
                />
              );
            })}
          </ul>
        </div>
      </div >
    );
  }
}

export default withTranslation()(NavBar)