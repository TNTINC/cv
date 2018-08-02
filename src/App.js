import React, { Component } from "react";
import "./App.css";

import Header from "./Header.js";
import Portfolio from "./Portfolio.js";

class App extends Component {
  render() {
    return (
      <div className="Container">
        <Header />

        <section className="Bio">
          <h1>
            I make stuff sometimes,<br />here's a list.
          </h1>
        </section>

        <Portfolio />

        <footer className="Footer">
          <p> Friðfinnur M. | 2018 | notandinotandi@gmail.com </p>
        </footer>
      </div>
    );
  }
}

export default App;
