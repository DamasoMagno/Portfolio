import { EnvelopeSimple, LinkedinLogo } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-4">
      <div className="bg-backgroundSection rounded-2xl flex flex-col items-center pt-8 pb-12 shadow-none shadow-black">
        <img
          src="https://github.com/DamasoMagno.png"
          alt="Github Damaso Magno"
          className="w-32 h-32 rounded-full border-green-300 border-2"
        />
        <strong className="text-main mt-3 text-2xl">Damaso Magno</strong>
        <span className="text-main mt-1 text-sm">Front End Developer</span>
      </div>

      <div className="bg-backgroundSection rounded-md px-10 py-7">
        <ul className="flex flex-col gap-2">
          <li className="flex gap-5 items-center text-main text-sm">
            <LinkedinLogo size={24} className="text-main" />
            Brasil
          </li>
          <li className="flex gap-5 items-center text-main text-sm">
            <LinkedinLogo size={24} className="text-main" />
            Free Lancer
          </li>
          <li className="flex gap-5 items-center text-main text-sm">
            <LinkedinLogo size={24} className="text-main" />
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

      <div className="bg-backgroundSection rounded-md px-4 py-6">
        <h3 className="text-main">Tecnologias</h3>

        <ul className="grid grid-cols-3 mt-4 gap-4">
          <li className="bg-backgroundTec text-black bold rounded-3xl flex justify-center items-center text-xs">JAVASCRIPT</li>
          <li className="bg-backgroundTec text-black bold rounded-3xl flex justify-center items-center text-xs">HTML</li>
          <li className="bg-backgroundTec text-black bold rounded-3xl flex justify-center items-center text-xs">CSS</li>
          <li className="bg-backgroundTec text-black bold rounded-3xl flex justify-center items-center text-xs">REACTJS</li>
          <li className="bg-backgroundTec text-black bold rounded-3xl flex justify-center items-center text-xs">NEXTJS</li>
        </ul>
      </div>

      <div className="bg-backgroundSection rounded-md px-10 py-7">
        <h3 className="text-main">Experiências</h3>

        <ul className="flex flex-col gap-2">
          <li className="items-center text-main">
            <strong className="text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-3xl bg-background"/> Rocketeat
            </strong>
            <span>2019 - Atualmente</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}