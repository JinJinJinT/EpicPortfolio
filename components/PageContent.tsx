import React from "react";
import BackgroundContent from "./BackgroundContent";
import ProjectSection from "./ProjectSection";
import BackgroundImage from "./BackgroundImage";
import door from "../public/images/door.png";
import doorDark from "../public/images/door-dark.png";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";

const PageContent = () => {
  return (
    <React.Fragment>
      <Welcome />
      <ProjectSection />
      <AboutMe />
    </React.Fragment>
  );
};

export default PageContent;
