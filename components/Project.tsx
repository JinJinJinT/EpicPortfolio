import React from "react";
import { ProjectType } from "./ProjectSection";

const Project = ({
  index,
  project,
  className,
}: {
  index: number;
  project: ProjectType;
  className?: string;
}) => {
  // Decide alignment based on the index for flex-row
  const alignmentClass = index % 2 === 0 ? "justify-start" : "justify-end";

  return (
    <div className={`flex flex-row w-[60vw] ${alignmentClass} ${className}`}>
      <div className="flex flex-col space-y-4 mt-[250px] bg-orange-400">
        <h1>Name: {project.Name}</h1>
        <h1>Title: {project.Title}</h1>
        <h1>Location: {project.Location}</h1>
        <h1>CatImage: {project.CatImage}</h1>
        <h1>StartDate: {project.StartDate}</h1>
        <h1>EndDate: {project.EndDate}</h1>
        <h1>ProjectURL: {project.ProjectURL}</h1>
        <h1>Description: {project.Description}</h1>
      </div>
    </div>
  );
};

export default Project;
