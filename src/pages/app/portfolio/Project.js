import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotation: Math.random() * 4 - 2,
    };
  }

  render() {
    return (
      <div
        className="Project"
        style={{ transform: `rotate(${this.state.rotation}deg)` }}
      >
        <Link to={"detail/" + this.props.name}>
          <img src={this.props.image} alt={this.props.name} />
          <h3> {this.props.name} </h3>
          <p> {this.props.description} </p>
        </Link>
      </div>
    );
  }
}

Project.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Project;
