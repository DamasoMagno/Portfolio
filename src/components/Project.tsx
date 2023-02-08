import { Folder, CurrencyDollarSimple, User, Eye } from "phosphor-react";

import { IProject } from "@/interfaces/IProject";

import { Button } from "./Button";

interface ProjectProps {
  project: IProject;
  onSelectProject: (id: string) => void;
}

export function Project({ project, onSelectProject }: ProjectProps) {
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
          <Button ghost onClick={() => onSelectProject(project.id)}>
            <Eye />
            <span className="hidden sm:block">Visualizar</span>
          </Button>
        </div>
      </footer>
    </div>
  );
}