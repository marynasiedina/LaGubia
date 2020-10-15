import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../NavItem/NavItem.scss"


export default class NavItem extends Component {
  render() {
    let { itemName, url, activeColor, itemClass } = this.props;
    return (
      <li className="navigation__item">
        <NavLink className={itemClass} activeStyle={{ color: activeColor }} to={url}>
          {itemName}
        </NavLink>
      </li>
    );
  }
}
