import { Layers } from "lucide-react";
import Proyecto from "./Proyectov3";

function ProytectoHome({ dataproyectos }) {
  return (
    <div className="py-12 md:py-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide uppercase">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>Portafolio</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Proyectos{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
            Destacados
          </span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Una selección de mis proyectos personales desarrollados de punta a punta
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {dataproyectos && dataproyectos.map((item) => (
          <Proyecto key={item.id} itemdata={item} />
        ))}
      </div>
    </div>
  );
}

export default ProytectoHome;
