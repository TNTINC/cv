import React, { Component } from "react";
import PropTypes from "prop-types";

import projectList from "data/projects.json";

class Detail extends Component {
  render() {
    let project = projectList.filter(prj => {
      return prj.name === this.props.match.params.name;
    })[0];
    return (
      <div className="Detail">
        <img src={project.image} alt={project.description} />
        <div className="text">
          <h1>{project.name}</h1>
          <p>{project.body}</p>
        </div>
      </div>
    );
  }
}

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default Detail;
