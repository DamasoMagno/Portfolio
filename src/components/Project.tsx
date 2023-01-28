import { IProject } from "@/interfaces/Project";
import { Folder, CurrencyDollarSimple, Share } from "phosphor-react";

interface ProjectProps {
  project: IProject
}

export function Project({ project }: ProjectProps) {
  return (
    <div className="bg-backgroundSection p-7 rounded-3xl shadow-section">
      <header className="text-main flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Folder size={20} />
          <strong className="text-base">{project?.name}</strong>
        </div>

        <a
          href={project?.link}
          target="_blank"
          rel="noreferrer"
          className="border-0 flex justify-center items-center"
        >
          <Share size={20} />
        </a>
      </header>

      <p className="text-main mt-5 mb-6">
        {project?.description}
      </p>

      <footer className="flex items-center justify-between">
        <ul className="flex items-center list-none gap-4">
          <li className="flex items-center gap-2 text-main">
            <CurrencyDollarSimple size={20}/> Free Lancer
          </li>
        </ul>

        <div className="text-main flex items-center gap-3">
          <span className="w-4 h-4 block bg-yellow-300 border-gray-400 border-2 rounded-3xl" />
          <span>JavaScript</span>
        </div>
      </footer>
    </div>
  );
}