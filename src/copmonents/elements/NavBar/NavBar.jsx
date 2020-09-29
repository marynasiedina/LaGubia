import React, { Component } from "react";
import NavItem from "../NavBar/NavItem/NavItem";
import { Link } from "react-router-dom";
import "./NavBar.scss";


export default class NavBar extends Component {
  state = {
    navbar: [
      { itemName: "we are", id: 1, url: "/we-are" },
      { itemName: "our lamps", id: 2, url: "/our-lapms" },
      { itemName: "bespoken lagubia", id: 3, url: "/bespoken-lagubia" },
      { itemName: "where i can buy?", id: 4, url: "/where-i-can-buy" },
      { itemName: "contact us", id: 5, url: "/contact-us" },
    ],

    activeColor: "#cccccc",
  };

  listenToScroll = () => {
    const winScroll = window.pageYOffset
    if (winScroll > 50) {
      document.getElementById("navigation").style.background = "#ffffff"
      this.setState({ activeColor: "#4D4D4D" })
    }
    else {
      this.setState({ activeColor: "#cccccc" })
      document.getElementById("navigation").style.background = "transparent"
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }


  scrollLogo = () => {
    window.scrollTo(0, 0);
  }

  render() {
    let { sprite } = this.props;

    return (
      <div className="navigation" id="navigation">
        <div className="navigation__container">
          <Link to="/" onClick={this.scrollLogo} className="logo-img" style={{ fill: this.state.activeColor }} >
            <svg id="logo" >
              <use href={sprite + '#logo'} />
            </svg>
          </Link>
          <ul className="navigation-bar">
            {this.state.navbar.map((item) => {
              return (
                <NavItem
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