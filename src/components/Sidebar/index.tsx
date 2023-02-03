import Image from "next/image";
import { EnvelopeSimple, GithubLogo, LinkedinLogo, MapPin, Globe, Briefcase, DownloadSimple } from "phosphor-react";

import { IAuthor } from "@/interfaces/Author";

import { Button } from "../Button";
import { Section } from "./section";

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
        <strong className="text-primary mt-3 text-2xl">{author.name ?? "Damaso Magno"}</strong>
        <span className="text-primary mt-2 text-sm">{author.area ?? "Front End Developer"}</span>

        <footer className="border-ghost-500 border-t-2 flex w-full py-5 px-16 justify-center items-center mt-14 curriculum">
          <Button ghost>
            Baixar Currículo 
            <DownloadSimple size={20} />
          </Button>
        </footer>
      </div>

      <Section title="Contatos">
        <ul className="flex flex-col gap-4 mx-2">
          <li className="flex gap-4 items-center text-primary text-sm">
            <MapPin size={24} className="text-primary" />
            Brasil
          </li>
          <li className="flex gap-4 items-center text-primary text-sm">
            <Briefcase size={24} className="text-primary" />
            Free Lancer
          </li>
          <a
            href="https://github.com/DamasoMagno"
            target="_blank"
            className="flex gap-4 items-center text-primary text-sm underline underline-offset-4"
          >
            <GithubLogo size={24} className="text-primary" />
            DamasoMagno
          </a>
          <a
            href="https://www.linkedin.com/in/damasomagno/"
            target="_blank"
            className="flex gap-4 items-center text-primary text-sm underline underline-offset-4"
          >
            <LinkedinLogo size={24} className="text-primary" />
            damasomagno
          </a>
          <a
            href="mailto:damaso.jscript.m@gmail.com"
            target="_blank"
            className="flex gap-4 items-center text-primary text-sm underline underline-offset-4"
          >
            <EnvelopeSimple size={24} className="text-primary" />
            damaso.jscript.m@gmail.com
          </a>
          <a
            href="https://damasomagno.vecel.app"
            className="flex gap-4 items-center text-primary text-sm underline underline-offset-4"
          >
            <Globe size={24} className="text-primary" />
            damasomagno.vercel.app
          </a>
        </ul>
      </Section>

      <Section title="Tecnologias">
        <ul className="grid grid-cols-3 mt-4 mx-2 gap-2">
          {author.languages.map(lang => (
            <li
              key={lang.name}
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
              <span className="text-sm indent-3 inline-block">2021 - 2022</span>
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
              <span className="text-sm indent-3 inline-block">2021 - 2022</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

