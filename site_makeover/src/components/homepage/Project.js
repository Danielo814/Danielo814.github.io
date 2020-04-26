import React from "react";

const Project = props => {
  return (
    <div className="project">
      {/* <a href={props.project_link}>{props.project_name}</a> */}
      <p>{props.project_name}</p>
      <p className="description">{props.project_description}</p>
    </div>
  );
};

export default Project;
