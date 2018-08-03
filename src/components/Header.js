import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="title">M</div>
        <nav className="nav">
          <ul>
            <a href="mailto:notandinotandi@gmail.com">
              <li>Contact me</li>
            </a>
            <Link to="/detail/1">
              <li>Detail test</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
