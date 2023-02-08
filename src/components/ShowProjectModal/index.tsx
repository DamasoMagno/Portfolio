import { useEffect, useState } from "react";
import * as Modal from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

import { ProjectDocument } from "@/graphql/generated/graphql";
import { client } from "@/libs/apollo";

import { IProject } from "@/interfaces/IProject";

import { Loader } from "./loadEffect";
import { Content } from "./content";

interface ProjectDetailsModalProps {
  projectSelected: string;
  onClearSelectedProjet: () => void;
}

export function ProjectDetailsModal({ projectSelected, onClearSelectedProjet }: ProjectDetailsModalProps) {
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
    <Modal.Root
      open={isModalOpen}
      onOpenChange={onClearSelectedProjet}
    >
      <Modal.Portal>
        <Modal.Overlay className="fixed inset-0 bg-[#00000080] h-screen]" />
        <Modal.Content className="projectModal">
          <Modal.Close asChild>
            <button className="self-end text-primary">
              <X size={20} />
            </button>
          </Modal.Close>
          
          {
            projectDataLoading ?
              <Loader /> :
              <Content project={project} />
          }
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  );
}

