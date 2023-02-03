import { GetServerSideProps } from "next";
import Link from "next/link";
import { useState } from "react";
import { Circle, MagnifyingGlass, X } from "phosphor-react";

import { LanguagesDocument, ListAllProjectsDocument } from "@/graphql/generated/graphql";
import { client } from "@/libs/apollo";

import { IProject } from "@/interfaces/Project";
import { ILanguage } from "@/interfaces/Language";

import { Project } from "@/components/Project";
import { Section } from "@/components/Sidebar/section";
import { Button } from "@/components/Button";

interface Projects {
  projects: IProject[];
  languages: ILanguage[]
}


export default function Projects({ projects, languages: listLnguages }: Projects) {
  const [allProjects, setAllProjects] = useState<IProject[]>(projects);
  const [language, setLanguage] = useState<string>("");

  const [languages, setLanguages] = useState<string[]>([]);
  const [projectName, setProjectName] = useState<string>("");

  function setFiltersToSearchProjects(e: any) {
    if (e.code !== "Enter") return;

    let languageAlreadyExists = languages.find(lang => lang === language);
    if (languageAlreadyExists) return;

    setLanguages(languages => [...languages, language]);
    setLanguage("");
  }

  function removeLanguageOfFilter(lang: string) {
    const language = languages.findIndex(language => language === lang);
    languages.splice(language, 1);

    setLanguages([...languages]);
  }

  async function projectsFiltred() {
    try {
      if (!projectName && languages.length === 0) {
        setAllProjects(projects);
        return;
      };

      const { data } = await client.query({
        query: ListAllProjectsDocument,
        variables: {
          where: {
            name_contains: projectName,
            languages_some: languages.length > 0 ? {
              name_in: languages
            } : {}
          }
        }
      });

      setAllProjects(data.projects);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="grid md:grid-cols-layout gap-8 p-4 items-start">
      <aside className="flex flex-col gap-4">
        <Section title="Buscar Projetos">
          <div className="mx-2 mt-5 flex flex-col">
            <div className="flex items-center gap-2">
              <input
                className="bg-transparent outline text-sm border-0 outline-0 text-white w-full"
                placeholder="Nome Projeto"
                onChange={e => setProjectName(e.target.value)}
                value={projectName}
              />

              <button
                className="border-o flex justify-center items-center text-primary"
                onClick={() => setProjectName("")}
              >
                <X />
              </button>
            </div>

            <div className="mt-8 mb-6">
              <input
                className="bg-transparent outline text-sm border-0 outline-0 text-white w-full"
                placeholder="Selecionar Linguagem"
                onChange={(e) => setLanguage(e.target.value)}
                value={language}
                list="Languages"
                onKeyDown={setFiltersToSearchProjects}
              />
              <datalist id="Languages">
                {listLnguages.map(language => {
                  return <option key={language.id}>{language.name}</option>
                })}
              </datalist>

              <ul className="flex flex-wrap mt-6 gap-2">
                {languages.map(lang => {
                  return (
                    <button
                      className="bg-background text-primary bold rounded-3xl flex gap-1 justify-center px-4 py-[6px] items-center text-[0.625rem]"
                      onClick={() => removeLanguageOfFilter(lang)}
                      type="button"
                      key={lang}
                    >
                      <Circle size={10} weight="fill" className="text-primary" /> {lang}
                    </button>
                  )
                })}
              </ul>
            </div>

            <footer className="w-full">
              <Button onClick={projectsFiltred}>
                Buscar Projeto <MagnifyingGlass weight="bold" />
              </Button>
            </footer>
          </div>
        </Section>
      </aside>

      <main className="mt-2 md:mt-0">
        <div className="shadow-section bg-section flex items-center justify-between rounded-2xl p-7">
          <h3 className="text-primary bold text-xl">Todos os Projetos</h3>
          <Link href="/" className="text-primary text-sm">
            Voltar ao Inicio
          </Link>
        </div>

        <div className="grid sm:grid-cols xl:grid-cols-2 gap-4 my-4 md:my-7">
          {allProjects.map((project) => (
            <Project
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </main>
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const [projects, languages] = await Promise.all([
    client.query({ query: ListAllProjectsDocument }),
    client.query({ query: LanguagesDocument })
  ]);

  return {
    props: {
      projects: projects.data.projects,
      languages: languages.data.languages
    }
  }
}