import Image from "next/image";
import { DownloadSimple } from "phosphor-react";

import { IAuthor } from "@/interfaces/IAuthor";
import { verifyDateIsCurrent } from "@/utils/verify-date-is-valid";

import { Button } from "../Button";
import { Section } from "./sectionContainer";
import { Contact } from "./contact";

interface SidebarContentProps {
  author: IAuthor;
}

export function SidebarContent({ author }: SidebarContentProps) {
  return (
    <>
      <div className="bg-section rounded-2xl flex flex-col items-center pt-8 shadow-section">
        <Image
          src={author.photo.url}
          alt="Github Damaso Magno"
          sizes="100%"
          width={30}
          height={30}
          className="w-32 h-32 rounded-full border-ghost-900 border-4 box-content"
        />
        <strong className="text-primary mt-3 text-2xl">{author.name}</strong>
        <span className="text-primary mt-2 text-sm">{author.area}</span>

        <footer className="border-ghost-500 border-t-2 flex w-full py-5 px-16 justify-center items-center mt-14 curriculum">
          <Button ghost asChild>
            <a
              href={author.curriculum.url}
              target="_blank"
              rel="noreferrer"
            >
              Baixar Currículo
              <DownloadSimple size={20} />
            </a>
          </Button>
        </footer>
      </div>

      <Section title="Contatos">
        <ul className="flex flex-col gap-4 mx-2">
          {author.socialNetworks.map(network => (
            <Contact
              network={network}
              key={network.id}
            />
          ))}
        </ul>
      </Section>

      <Section title="Tecnologias">
        <ul className="grid grid-cols-3 mt-4 mx-2 gap-2">
          {author.languages.map(lang => (
            <li
              key={lang.id}
              className="bg-background text-primary bold rounded-3xl flex justify-center py-[6px] items-center text-[0.625rem]"
            >
              {lang.name}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Experiências">
        <ul className="flex flex-col gap-4 mt-4 mx-2">
          {author.experiencies.map(exp => (
            <li className="items-center text-primary" key={exp.id}>
              <strong className="text-sm flex items-center gap-2">
                <span className="w-1 h-1 rounded-3xl bg-backgroundSecondary" /> {exp.name}
              </strong>
              <span className="text-sm indent-3 inline-block">
                {verifyDateIsCurrent(exp.startedAt)} - {verifyDateIsCurrent(exp.finishedAt)}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Educação">
        <ul className="flex flex-col gap-4 mt-4 mx-2">
          {author.courses.map(course => (
            <li className="items-center text-primary" key={course.id}>
              <strong className="text-sm flex items-center gap-2">
                <span className="w-1 h-1 rounded-3xl bg-backgroundSecondary" />{course.name}
              </strong>
              <span className="text-sm indent-3 inline-block">
                {verifyDateIsCurrent(course.startedAt)} - {verifyDateIsCurrent(course.finishedAt)}
              </span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

