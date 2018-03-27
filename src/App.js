import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Header">
          <div className="spacer" />
          <div className="title">FM Design</div>
          <nav className="nav">
            <ul>
              <li>Contact me</li>
            </ul>
          </nav>
          <div className="spacer" />
        </div>
        <div className="Intro">
          <div className="name">Friðfinnur M. Þrastarson</div>
        </div>
        <div className="Bio" />
        <div className="Contact" />
      </div>
    );
  }
}

export default App;
