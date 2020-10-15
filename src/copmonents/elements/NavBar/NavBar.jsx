import React, { Component } from "react";
import NavItem from "../NavBar/NavItem/NavItem";
import { Link } from "react-router-dom";
import "./NavBar.scss";

import { withTranslation } from 'react-i18next'


class NavBar extends Component {
  state = {
    activeColor: "#cccccc",
    itemClass: "navigation__link",
    navBackground: "trasparent"
  };

  listenToScroll = () => {
    const winScroll = window.pageYOffset
    if (winScroll > 75) {
      this.setState({
        activeColor: "#4D4D4D",
        itemClass: "navigation__link--mod",
        navBackground: "#ffffff"
      })
    }
    else {
      this.setState({
        activeColor: "#cccccc",
        itemClass: "navigation__link",
        navBackground: "transparent"
      })
    }
  }


  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }


  scrollLogo = () => {
    window.scrollTo(0, 0);
  }

  render() {
    let { sprite, changeLanguage, t } = this.props;
    let navbar = t("navbar", { returnObjects: true })

    return (
      <div className="navigation" style={{ background: this.state.navBackground }} >
        <div className="navigation__container">
          <button onClick={() => changeLanguage('ru')}>ru</button>
          <button onClick={() => changeLanguage('en')}>en</button>
          <button onClick={() => changeLanguage('es')}>es</button>
          <Link to="/" onClick={this.scrollLogo} className="logo-img" style={{ fill: this.state.activeColor }} >
            <svg id="logo" >
              <use href={sprite + '#logo'} />
            </svg>
          </Link>
          <ul className="navigation-bar">
            {navbar.map((item) => {
              return (
                <NavItem
                  itemClass={this.state.itemClass}
                  activeColor={this.state.activeColor}
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