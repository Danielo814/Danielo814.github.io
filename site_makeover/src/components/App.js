import React from "react";
import Logo from "./Logo";
import MenuItems from "./MenuItems";
import Introduction from "./Introduction";
import Project from "./Project";
import "../App.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="menu-container">
          <Logo />
          <MenuItems />
        </div>
        <Introduction />
        <div id="project-container">
          <Project
            project_name="Converter"
            project_description="See temperatures in fahrenheit and celcius."
          />
          <Project
            project_name="Reminders App"
            project_description="See list of reminders and mark as complete or incomplete."
          />
          <Project
            project_name="Timer"
            project_description="Count down from a time specified by the user"
          />
          <Project
            project_name="Image Display"
            project_description="Displays 10 images based on a search term entered by the user. Built with React."
          />
          <Project
            project_name="Song Selector"
            project_description="Displays a list of songs and allows user to select song to see more information. Built with React/Redux"
          />
          <Project
            project_name="Video Generator"
            project_description="Takes a search term and renders 5 relateable youtube videos using the youtube API. Built with React/Redux"
          />
        </div>
      </div>
    );
  }
}

export default App;
