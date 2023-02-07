import { useState } from "react";

import { IProject } from "@/interfaces/IProject";

import { Project } from "./Project";
import { ProjectDetailsModal } from "./Project/ProjectDetailsModal";

interface ProjectProps {
  projects: IProject[];
}


export function ListProjects({ projects }: ProjectProps) {
  const [selectedProject, setSelectedProject] = useState("");

  function handleSelectProject(id: string) {
    setSelectedProject(id);
  }

  function handleClearSelectedProject() {
    setSelectedProject("");
  }

  return (
    <div className="grid sm:grid-cols xl:grid-cols-2 gap-4 my-4 md:my-7">
      {projects.map((project: IProject) => {
        return (
          <Project
            project={project}
            key={project.id}
            onSelectProject={handleSelectProject}
          />
        );
      })}

      <ProjectDetailsModal 
        projectSelected={selectedProject} 
        onClearSelectedProjet={handleClearSelectedProject} 
      />
    </div>
  );
}