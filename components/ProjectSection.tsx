import React from "react";
import Project from "./Project";

export type ProjectType = {
  Name: string;
  Title: string;
  Location: string;
  CatImage: string;
  StartDate: string;
  EndDate: string;
  ProjectURL: string;
  Description: string[];
};

const ProjectSection = ({ className }: { className?: string }) => {
  const projectData: ProjectType[] = [
    {
      Name: "Project Name",
      Title: "Project Title",
      Location: "Project Location",
      CatImage: "Project Cat Image",
      StartDate: "Project Start Date",
      EndDate: "Project End Date",
      ProjectURL: "Project URL",
      Description: ["Project Description 1", "Project Description 2"],
    },
    {
      Name: "Project Name",
      Title: "Project Title",
      Location: "Project Location",
      CatImage: "Project Cat Image",
      StartDate: "Project Start Date",
      EndDate: "Project End Date",
      ProjectURL: "Project URL",
      Description: ["Project Description 1", "Project Description 2"],
    },
    {
      Name: "Project Name",
      Title: "Project Title",
      Location: "Project Location",
      CatImage: "Project Cat Image",
      StartDate: "Project Start Date",
      EndDate: "Project End Date",
      ProjectURL: "Project URL",
      Description: ["Project Description 1", "Project Description 2"],
    },
  ];
  return (
    <section
      className={` ${className} relative border border-black border-3 w-full top-[-25vw]`}
    >
      <hr className="absolute bg-secondary dark:border-white w-[60vw] h-[5px] top-[200px]" />
      <h1 className="absolute font-semibold tracking-wider rotate-90 text-[5vw] right-[-110px] top-[300px]">
        PROJECTS
      </h1>

      {projectData.map((project: ProjectType, index: number) => (
        <Project
          key={index}
          index={index}
          project={{
            ...project,
          }}
        />
      ))}
      <hr className="absolute bg-secondary dark:bg-white w-[40vw] h-[3px] left-[60vw] mt-[100px]" />
    </section>
  );
};

export default ProjectSection;
