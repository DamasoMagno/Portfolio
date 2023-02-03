import { Folder, CurrencyDollarSimple, User, Eye } from "phosphor-react";

import { IProject } from "@/interfaces/Project";

import { ShowProjectDetailsModal } from "./ShowProjectDetails";
import { Button } from "../Button";

interface ProjectProps {
  project: IProject
}

export function Project({ project }: ProjectProps) {
  return (
    <div className="bg-section p-7 rounded-2xl shadow-section flex flex-col justify-between">
      <header className="text-primary flex items-center gap-4">
        <Folder size={20} />
        <strong className="text-base">{project.name}</strong>
      </header>

      <p className="text-primary mt-5 mb-6">
        {project.description}
      </p>

      <footer className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-primary">
          {project.freelancer ? (
            <>
              <CurrencyDollarSimple size={20} /> Freelancer
            </>
          ) : (
            <>
              <User size={20} /> Pessoal
            </>
          )}
        </span>

        <div>
          <ShowProjectDetailsModal id={project.id}>
            <Button ghost>
              <Eye />
              <span className="hidden sm:block">Visualizar</span>
            </Button>
          </ShowProjectDetailsModal>
        </div>
      </footer>
    </div>
  );
}