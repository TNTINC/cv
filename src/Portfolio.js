import React, { Component } from "react";

import Project from "./Project.js";

import projectlist from "./data/projects.json";

class Portfolio extends Component { 
  render() {
    return (
      <div className="Portfolio">
        {
          projectlist.map((project) => {
            return (
              <Project
                name={project.name}
                description={project.description}
                image={project.image}
                link={project.link} />
            );
          })
        } 
      </div>
    )
  }
}

export default Portfolio;
