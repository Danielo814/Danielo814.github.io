import React from "react";
import { Link } from "react-scroll";

const Introduction = () => {
  return (
    <div className="intro-container">
      <div className="intro-text">
        <p className="intro-line-spacing">Hello, i'm Daniel Ojeda.</p>
        <p className="intro-line-spacing">I'm a web developer</p>
        <p>living in San francisco.</p>
        {/* <i class="angle down icon arrow-down"></i> */}
        <div className="arrow-down">
          <Link
            activeClass="active"
            to="project-container"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
          >
            &#8964;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
