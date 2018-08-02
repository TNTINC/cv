import React, { Component } from "react";
import PropTypes from "prop-types";

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
        <a href={this.props.link}>
          <img src={this.props.image} alt={this.props.name} />
          <h3> {this.props.name} </h3>
          <p> {this.props.description} </p>
        </a>
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
