import React, { Component } from "react";

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
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
