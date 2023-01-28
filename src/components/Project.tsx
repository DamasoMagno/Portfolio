import { Folder, Star, GitBranch } from "phosphor-react";

export function Project() {
  return (
    <div className="bg-backgroundSection p-7 rounded-3xl flex flex-col gap-4">
      <header className="text-main flex items-center gap-3">
        <Folder size={20} />
        <strong>my-onix</strong>
      </header>

      <p className="text-main">
        Consulte os códigos de erro que aparecem no painel do veículo Onix. 
      </p>

      <footer className="flex items-center justify-between">
        <ul className="flex items-center list-none gap-4">
          <li className="flex items-center gap-2 text-main">
            <Star /> 100
          </li>
          <li className="flex items-center gap-2 text-main">
            <GitBranch /> 100
          </li>
        </ul>

        <div className="text-main flex items-center gap-3">
          <span className="w-3 h-3 block bg-yellow-300 rounded-3xl" />
          <span>JavaScript</span>
        </div>
      </footer>
    </div>
  );
}