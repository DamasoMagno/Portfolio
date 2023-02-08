export function Loader() {
  return (
    <div className="flex flex-col justify-between mt-3 h-full">
      <div>
        <div className="h-40 rounded-md w-full bg-gray-300 animate-pulse" />

        <div className="mt-3 flex flex-col">
          <header className="flex justify-between items-center animate-pulse">
            <div className="h-6 w-40 rounded-md bg-gray-300"></div>
            <div className="h-6 w-28 rounded-md bg-gray-300"></div>
          </header>

          <div className="mt-2 animate-pulse flex flex-col gap-1">
            <span className="h-6 w-full rounded-md bg-gray-300"></span>
            <span className="h-6 w-full rounded-md bg-gray-300"></span>
          </div>

          <div className="mt-6 flex flex-col gap-2 animate-pulse">
            <span className="text-primary text-sm">Ferramentas Usadas:</span>

            <ul className="grid grid-cols-3 gap-2">
              <li className="h-6 rounded-3xl  bg-gray-300 " />
              <li className="h-6 rounded-3xl bg-gray-300 " />
              <li className="h-6 rounded-3xl bg-gray-300 " />
              <li className="h-6 rounded-3xl bg-gray-300 " />
              <li className="h-6 rounded-3xl bg-gray-300 " />
            </ul>
          </div>
        </div>
      </div>


      <footer className="animate-pulse flex items-center gap-2 mt-8 self-end w-2/4">
        <div className="h-8 w-9/12 rounded-md bg-gray-300 "></div>
        <div className="h-8 w-9/12 rounded-md bg-gray-300 "></div>
      </footer>
    </div>
  );
}