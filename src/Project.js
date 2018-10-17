import React, { Component } from "react";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotation: Math.random() * 4.0 - 2.0,
    };
  }

  render() {
    return (
      <div
        className="Project"
        style={{ transform: `rotate(${this.state.rotation}deg)` }}
        onMouseEnter={this.onMouseEnter.bind(this)}
      >
        <a href={this.props.link}>
          <img src={this.props.image} alt={this.props.name} />
          <h3> {this.props.name} </h3>
          <p> {this.props.description} </p>
        </a>
      </div>
    );
  }

  onMouseEnter() {
    // Set a new rotation each time the user hovers over a project.
    this.setState(state => {
      return Object.assign({}, state, {
        rotation: Math.random() * 4.0 - 2.0,
      });
    });
  }
}

export default Project;
