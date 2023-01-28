import { GetServerSideProps } from "next";
import Link from "next/link";
import { gql } from "@apollo/client";

import { client } from "@/libs/apollo";
import { IProject } from "../interfaces/Project";

import { Project } from "@/components/Project";
import { Sidebar } from "@/components/Sidebar";

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

interface Home {
  projects: IProject[]
}

export default function Home({ projects }: Home) {
  return (
    <div className="grid md:grid-cols-r gap-14 p-10 items-start">
      <Sidebar />

      <section>
        <div className="shadow-section bg-backgroundSection flex items-center justify-between rounded-2xl p-7">
          <h3 className="text-main bold text-xl">
            Meus Projetos
          </h3>
          <Link
            href="/projects"
            className="text-main text-sm"
          >
            Veja todos
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
