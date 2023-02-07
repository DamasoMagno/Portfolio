import Image from "next/image";
import { useEffect, useState } from "react";
import * as Modal from "@radix-ui/react-dialog";
import { CurrencyDollarSimple, User, X } from "phosphor-react";

import { ProjectDocument } from "@/graphql/generated/graphql";
import { IProject } from "@/interfaces/IProject";
import { client } from "@/libs/apollo";

import { Button } from "../Button";

interface ProjectDetailsModalProps {
  projectSelected: string;
  onClearSelectedProjet: () => void;
}

export function ProjectDetailsModal({
  projectSelected,
  onClearSelectedProjet
}: ProjectDetailsModalProps) {
  const [project, setProject] = useState({} as IProject);
  const [projectDataLoading, setProjectDataLoading] = useState(false);

  const isModalOpen = !!projectSelected;

  useEffect(() => {
    if (!projectSelected) return;

    setProjectDataLoading(true);

    client.query({
      query: ProjectDocument,
      variables: {
        id: projectSelected
      }
    })
      .then(({ data }) => setProject(data.project))
      .finally(() => setProjectDataLoading(false));
  }, [projectSelected]);

  return (
    <Modal.Root open={isModalOpen} onOpenChange={onClearSelectedProjet}>
      <Modal.Portal>
        <Modal.Overlay className="fixed inset-0 bg-[#00000080] h-screen]" />
        <Modal.Content className="fixed bg-section w-11/12 max-w-md top-2/4 right-2/4 -translate-y-2/4 translate-x-2/4 rounded-xl flex flex-col p-4">
          <Modal.Close asChild>
            <button className="self-end text-primary">
              <X size={20} />
            </button>
          </Modal.Close>

          <Image
            src="https://repository-images.githubusercontent.com/350048655/269bfc00-8a47-11eb-8fdd-be93b6c94413"
            className="rounded-md w-full mt-2"
            alt="Foto do projeto dt money"
            sizes="100%"
            width={30}
            height={30}
          />

          <div className="mt-4">
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

            <Modal.Description className="mt-1 text-primary text-sm leading-7">
              {project.description}
            </Modal.Description>

            <div className="mt-8">
              <span className="text-primary text-sm">Ferramentas Usadas: </span>

              <ul className="grid grid-cols-3 gap-2 mt-2">
                {project.languages?.map(lang => (
                  <li
                    key={lang.name}
                    className="bg-background text-primary bold rounded-3xl flex justify-center py-1 items-center text-sm"
                  >
                    {lang.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <footer className="flex items-center gap-2 mt-8 mb-2 self-end">
            <Button ghost asChild>
              <a
                href="https://activer.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                Repositório
              </a>
            </Button>

            <Button asChild>
              <a
                href="https://activer.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                Acessar
              </a>
            </Button>
          </footer>
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  );
}




function Loader() {
  return (
    <>
      <div className="h-48 w-full rounded-md bg-gray-300 animate-pulse" />

      <div className="flex-row items-center justify-center space-x-1 rounded-xl mt-4">
        <div className="flex flex-col space-y-2 animate-pulse">
          <header className="flex justify-between items-center">
            <div className="h-6 w-40 rounded-md bg-gray-300"></div>
            <div className="h-6 w-28 rounded-md bg-gray-300"></div>
          </header>

          <div className="flex flex-col gap-2 mt-1">
            <div className="h-6 w-full rounded-md bg-gray-300"></div>
            <div className="h-6 w-full rounded-md bg-gray-300"></div>
          </div>

          <div className="mt-8 mb-2">
            <span className="text-primary text-sm">Ferramentas Usadas:</span>
            <ul className="grid grid-cols-3 gap-2 mt-2">
              <li className="h-6 rounded-3xl  bg-gray-300 " />
              <li className="h-6 rounded-3xl bg-gray-300 " />
              <li className="h-6 rounded-3xl bg-gray-300 " />
              <li className="h-6 rounded-3xl bg-gray-300 " />
              <li className="h-6 rounded-3xl bg-gray-300 " />
            </ul>
          </div>

          <footer className="flex self-end gap-2 w-2/4 mt-8">
            <div className="h-8 w-9/12 rounded-md bg-gray-300 "></div>
            <div className="h-8 w-9/12 rounded-md bg-gray-300 "></div>
          </footer>
        </div>
      </div>
    </>
  );
}

