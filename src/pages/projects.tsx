import Link from "next/link";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { Circle, MagnifyingGlass, X } from "phosphor-react";
import { CircleSpinner } from "react-spinners-kit";

import { LanguagesDocument, ListAllProjectsDocument } from "@/graphql/generated/graphql";
import { client } from "@/libs/apollo";

import { IProject } from "@/interfaces/IProject";
import { ILanguage } from "@/interfaces/ILanguage";

import { ListProjects } from "@/components/ListProjects";
import { Section } from "@/components/Sidebar/sectionContainer";
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

  const [loadingProjects, setLoadingProjects] = useState(false);

  function setFiltersToSearchProjects(e: any) {
    if (e.keyCode !== 13) return;

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
      if (!projectName && languages.length === 0) return;

      setLoadingProjects(true);

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

    setLoadingProjects(false);
  }

  async function clearFilters() {
    setLanguages([]);
    setProjectName("");

    setAllProjects([...projects]);
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

            <div className="mt-8 mb-8">
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

            <footer className="w-full flex flex-col gap-2">
              <Button ghost onClick={clearFilters}>
                Limpar Busca <X />
              </Button>

              <Button onClick={projectsFiltred}>
                Buscar Projeto
                <MagnifyingGlass weight="bold" />
              </Button>
            </footer>
          </div>
        </Section>
      </aside>

      <main className="mt-2 md:mt-0">
        <div className="shadow-section bg-section flex items-center justify-between rounded-2xl p-7">
          <h3 className="text-primary bold text-xl">Todos os Projetos</h3>
          <Link
            href="/"
            className="text-primary text-sm"
          >
            Voltar ao Inicio
          </Link>
        </div>

        {!loadingProjects ? (
          allProjects.length > 0 ? (
            <ListProjects projects={allProjects} />
          ) : (
            <div className="flex justify-center items-center flex-col mt-20">
              <strong className="text-primary text-xl w-44 text-center leading-8 opacity-50">
                Nenhum Projeto Encontrado
              </strong>
            </div>
          )
        ) : (
          <div className="flex flex-col justify-center gap-4 items-center mt-20">
            <CircleSpinner size={30} color="#837E9F" />
            <strong className="text-primary text-xl w-44 text-center leading-8 opacity-50">
              Buscando Projetos
            </strong>
          </div>
        )}
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