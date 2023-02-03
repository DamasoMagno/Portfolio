import { GetServerSideProps } from "next";
import Link from "next/link";

import { AuthorDocument, ListRecentsProjectsDocument } from "@/graphql/generated/graphql";
import { client } from "@/libs/apollo";

import { IProject } from "@/interfaces/Project";

import { Project } from "@/components/Project";
import { SidebarContent } from "@/components/Sidebar";

interface Home {
  projects: IProject[];
  author: any;
}

export default function Home({ projects, author }: Home) {
  return (
    <div className="grid md:grid-cols-layout gap-8 p-4 items-start">
      <aside className="flex flex-col gap-4">
        <SidebarContent author={author} />
      </aside>

      <main className="flex flex-col mt-4 md:mt-0">
        <div className="shadow-section bg-section flex items-center justify-between rounded-2xl p-7">
          <h3 className="text-primary bold text-xl">
            Projetos Recentes
          </h3>
          <Link href="/projects" className="text-primary text-sm">
            Veja todos
          </Link>
        </div>

        <div className="grid sm:grid-cols xl:grid-cols-2 gap-4 my-4 md:my-7">
          {projects.map((project: IProject) => {
            return <Project project={project} key={project.id} />
          })}
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const [projects, author] = await Promise.all([
    client.query({
      query: ListRecentsProjectsDocument
    }),

    client.query({
      query: AuthorDocument,
      variables: {
        name: "Damaso Magno"
      }
    }),
  ])

  return {
    props: {
      projects: projects.data.projects,
      author: author.data.author
    }
  }
}
