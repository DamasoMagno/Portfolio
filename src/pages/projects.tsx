import Link from "next/link";

import { Project } from "@/components/Project";
import { RadiosGroup } from "@/components/RadioGrou";
import { MagnifyingGlass } from "phosphor-react";
import { GetServerSideProps } from "next";
import { client } from "@/libs/apollo";
import { gql } from "@apollo/client";
import { IProject } from "@/interfaces/Project";

const GET_PROJECTS = gql`
  query Projects {
    projects {
      link
      id
      name
      description
      freelancer
      languages {
        name
      }
    }
  }
`;

interface Projects {
  projects: IProject[]
}

export default function Projects({ projects }: Projects) {
  return (
    <div className="grid md:grid-cols-r gap-14 p-10 items-start">
      <aside className="flex flex-col gap-4">
        <div className="text-main flex items-center gap-4 bg-backgroundSection rounded-2xl px-5 py-5 shadow-section">
          <input type="text" className="bg-transparent outline text-sm border-0 outline-0 text-white w-full" placeholder="Pesquisar Projeto" />
          <button className="flex justify-center items-center border-0">
            <MagnifyingGlass size={20} />
          </button>
        </div>

        <section className="bg-backgroundSection rounded-2xl px-5 py-7 shadow-section">
          <h3 className="text-main">Selecionar Linguagens</h3>
          <RadiosGroup />
        </section>
      </aside>

      <section>
        <div className="shadow-section bg-backgroundSection flex items-center justify-between rounded-2xl p-7">
          <h3 className="text-main bold text-xl">
            Todos os Projetos
          </h3>
          <Link
            href="/"
            className="text-main text-sm"
          >
            Voltar para o Home
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 my-8">
          {projects.map((project: any) => {
            return <Project project={project} key={project.id} />
          })}
        </div>
      </section>
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_PROJECTS
  });

  return {
    props: {
      projects: data.projects
    }
  }
}
