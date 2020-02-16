import React from "react";

const Project = props => {
  return (
    <div className="project">
      <p>{props.project_name}</p>
      <p className="description">{props.project_description}</p>
    </div>
  );
};

export default Project;
