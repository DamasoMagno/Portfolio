import Image from "next/image";
import { CurrencyDollarSimple, User } from "phosphor-react";
import * as Modal from "@radix-ui/react-dialog";

import { IProject } from "@/interfaces/IProject";

import { Button } from "../Button";

interface ContentProps {
  project: IProject;
}

export function Content({ project }: ContentProps) {
  return (
    <div className="flex flex-col justify-between mt-3 h-full">
      <div>
        <Image
          src={project.image?.url}
          className="rounded-md w-full max-h-48"
          alt="Foto do projeto dt money"
          sizes="100%"
          width={30}
          height={30}
        />

        <div className="mt-3"> 
          <header className="flex items-center justify-between">
            <Modal.Title className="text-lg md:text-xl text-primary bold">
              {project.name}
            </Modal.Title>

            <div className="flex items-center gap-1 opacity-80">
              {project.freelancer ? (
                <>
                  <span className="text-primary">Freelancer</span>
                  <CurrencyDollarSimple size={18} className="text-primary" />
                </>
              ) : (
                <>
                  <span className="text-primary">Pessoal</span>
                  <User className="text-primary" size={18} />
                </>
              )}
            </div>
          </header>

          <Modal.Description className="text-primary text-sm leading-6 mt-2">
            {project.description}
          </Modal.Description>

          <div className="mt-6 flex flex-col gap-2">
            <span className="text-primary text-sm">Ferramentas Usadas: </span>

            <ul className="grid grid-cols-3 gap-2">
              {project.languages?.map(lang => (
                <li
                  key={lang.id}
                  className="bg-background text-primary bold rounded-3xl flex justify-center py-1 items-center text-sm"
                >
                  {lang.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <footer className="flex items-center gap-2 mt-8 self-end">
        <Button ghost asChild>
          <a
            href={project.repository}
            target="_blank"
            rel="noreferrer"
          >
            Repositório
          </a>
        </Button>

        <Button asChild>
          <a
            href={project.address}
            target="_blank"
            rel="noreferrer"
          >
            Acessar
          </a>
        </Button>
      </footer>
    </div>
  );
}