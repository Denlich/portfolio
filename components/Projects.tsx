import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./Project";

const Projects = () => {
  return (
    <section>
      <h1 className="heading">My projects</h1>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
