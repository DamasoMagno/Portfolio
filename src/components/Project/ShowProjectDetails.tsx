import Image from "next/image";
import * as Modal from "@radix-ui/react-dialog";
import { User, X } from "phosphor-react";

import { Button } from "../Button";

export function ShowProjectDetailsModal({ children, id }: any) {
  return (
    <Modal.Root>
      <Modal.Trigger asChild>
        {children}
      </Modal.Trigger>

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
                Organage
              </Modal.Title>

              <User className="text-primary" size={20} />
            </header>

            <Modal.Description className="mt-1 text-primary text-sm leading-7">
              Plataforma desenvolvida para facilitar a organização interna de uma escola
            </Modal.Description>

            <div className="mt-8">
              <span className="text-primary text-sm">Ferramentas Usadas: </span>

              <ul className="grid grid-cols-3 gap-2 mt-2">
                <li className="bg-background text-primary bold rounded-3xl flex justify-center py-1 items-center text-sm">CSS</li>
                <li className="bg-background text-primary bold rounded-3xl flex justify-center py-1 items-center text-sm">CSS</li>
                <li className="bg-background text-primary bold rounded-3xl flex justify-center py-1 items-center text-sm">CSS</li>
                <li className="bg-background text-primary bold rounded-3xl flex justify-center py-1 items-center text-sm">CSS</li>
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