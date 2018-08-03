import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./app/App.css";

import Header from "components/Header.js";
import Portfolio from "./app/Portfolio.js";
import Detail from "./app/Detail.js";

class App extends Component {
  render() {
    return (
      <div className="Container">
        <Header />
        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route path="/detail/:name" component={Detail} />
        </Switch>
        <footer className="Footer">
          <p> Friðfinnur M. | 2018 | notandinotandi@gmail.com </p>
        </footer>
      </div>
    );
  }
}

export default App;
