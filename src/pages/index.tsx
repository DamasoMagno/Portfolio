import { Project } from "@/components/Project";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="grid md:grid-cols-r gap-14 px-4 py-8">
      <Sidebar />

      <section>
        <div className="bg-backgroundSection flex items-center justify-between rounded-2xl p-7">
          <h3 className="text-main bold text-xl">My Projects</h3>
          <span className="text-main text-sm">Veja todos</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 my-8">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </section>
    </div>
  )
}
