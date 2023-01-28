import { EnvelopeSimple, GithubLogo, LinkedinLogo, MapPin, Briefcase } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-4">
      <div className="bg-backgroundSection rounded-2xl flex flex-col items-center pt-8 pb-11 shadow-section">
        <img
          src="https://github.com/DamasoMagno.png"
          alt="Github Damaso Magno"
          className="w-32 h-32 rounded-full border-green-200 border-2"
        />
        <strong className="text-main mt-3 text-2xl">Damaso Magno</strong>
        <span className="text-main mt-2 text-sm">Front End Developer</span>
      </div>

      <div className="bg-backgroundSection rounded-2xl px-10 py-7 shadow-section">
        <ul className="flex flex-col gap-6">
          <li className="flex gap-5 items-center text-main text-sm">
            <MapPin size={24} className="text-main" />
            Brasil
          </li>
          <li className="flex gap-5 items-center text-main text-sm">
            <Briefcase size={24} className="text-main" />
            Free Lancer
          </li>
          <li className="flex gap-5 items-center text-main text-sm">
            <GithubLogo size={24} className="text-main" />
            DamasoMagno
          </li>
          <li className="flex gap-5 items-center text-main text-sm">
            <LinkedinLogo size={24} className="text-main" />
            damasomagno
          </li>
          <li className="flex gap-5 items-center text-main text-sm">
            <EnvelopeSimple size={24} className="text-main" />
            limamdamaso@gmail.com
          </li>
        </ul>
      </div>

      <div className="bg-backgroundSection rounded-2xl px-5 py-7 shadow-section">
        <h3 className="text-main">Tecnologias</h3>

        <ul className="grid grid-cols-3 mt-4 gap-4">
          <li className="bg-backgroundTec text-black bold rounded-3xl flex justify-center py-1 items-center text-[0.625rem]">JAVASCRIPT</li>
          <li className="bg-backgroundTec text-black bold rounded-3xl flex justify-center py-1 items-center text-[0.625rem]">HTML</li>
          <li className="bg-backgroundTec text-black bold rounded-3xl flex justify-center py-1 items-center text-[0.625rem]">CSS</li>
          <li className="bg-backgroundTec text-black bold rounded-3xl flex justify-center py-1 items-center text-[0.625rem]">REACTJS</li>
          <li className="bg-backgroundTec text-black bold rounded-3xl flex justify-center py-1 items-center text-[0.625rem]">NEXTJS</li>
        </ul>
      </div>

      <div className="bg-backgroundSection rounded-2xl px-5 py-7 shadow-section">
        <h3 className="text-main">Experiências</h3>

        <ul className="flex flex-col gap-3 mt-5">
          <li className="items-center text-main">
            <strong className="text-sm flex items-center gap-2">
              <span className="w-1 h-1 rounded-3xl bg-backgroundText"/> PayperCash Comércio e Serviços LTDA
            </strong>
            <span className="text-sm indent-3 inline-block">2021 - 2022</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}