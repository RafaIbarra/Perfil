import { useState, useEffect } from "react";
import { Database, Server, Layout, ArrowRight, ShieldCheck, Award } from "lucide-react";
import PDFCard from "../PDFViewer/PDFCard";

const phrases = [
  "SQL Server",
  "PostgreSQL",
  "Python",
  "Django",
  "Django REST Framework",
  "FastAPI",
  "JavaScript",
  "React",
  "React-Native",
  "Ubuntu Desktop",
  "APIs REST",
];

function About({ servidoractivo }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const currentPhrase = phrases[index];

    if (!reverse && subIndex === currentPhrase.length + 1) {
      setPause(true);
      setTimeout(() => {
        setReverse(true);
        setPause(false);
      }, 2500);
      return;
    }

    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 30 : 90);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, pause]);

  const scrollToContact = () => {
    const element = document.getElementById("contact") || document.getElementById("contacto");
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Info & Exact Texts */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm shadow-cyan-500/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Disponible para proyectos y consultoría</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hola, soy{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
                Rafael Ibarra
              </span>
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-slate-300">
              Desarrollador Full-Stack & Especialista en Bases de Datos
            </p>
          </div>

          {/* Animated Terminal / Typewriter */}
          <div className="flex items-center gap-2 text-sm sm:text-base font-mono bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-xl text-slate-400 w-fit backdrop-blur-md shadow-inner">
            <span className="text-cyan-400 font-semibold">$ stack:</span>
            <span className="text-purple-300 font-bold min-w-[120px]">
              {phrases[index].substring(0, subIndex)}
              <span className="text-cyan-400 animate-pulse font-bold">|</span>
            </span>
          </div>

          {/* Description Paragraphs (Exact Wording Preserved) */}
          <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              Como desarrollador con más de una década en el sector financiero cooperativo, me apasiona integrar tecnologías actuales con las plataformas existentes, optimizando procesos y creando soluciones que perduren. Mi enfoque va más allá del código: busco entender las necesidades reales del negocio para aportar verdadero valor.
            </p>
            <p>
              Fuera del ámbito laboral, materializo ideas a través de proyectos full-stack que desarrollo y despliego en mi propio servidor, donde experimento con arquitecturas escalables.
            </p>
          </div>

          {/* Key Pillars / Exact Highlights List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-2 group-hover:scale-110 transition-transform">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm mb-1">Arquitectura de datos</h4>
              <p className="text-xs text-slate-400 leading-snug">
                Desde stored procedures hasta modelos relacionales complejos
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm mb-1">Backend robusto</h4>
              <p className="text-xs text-slate-400 leading-snug">
                APIs que preservan la lógica empresarial y crecen con las necesidades
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 group">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2 group-hover:scale-110 transition-transform">
                <Layout className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm mb-1">Interfaces intuitivas</h4>
              <p className="text-xs text-slate-400 leading-snug">
                Interfaces que simplifican procesos complejos
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <PDFCard servidoractivo={servidoractivo} />
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/70 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer shadow-sm"
            >
              <span>Contáctame</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Right Column: Aesthetic Profile Picture & Badges */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group max-w-sm sm:max-w-md w-full">
            {/* Glowing Backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>

            {/* Image Card Container */}
            <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 p-2 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
                <img
                  src="/profile.png"
                  alt="Rafael Ibarra"
                  width="400"
                  height="400"
                  className="w-full h-auto object-cover object-top filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle bottom gradient shade */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Floating Badges */}
            <div className="absolute -bottom-5 -left-4 sm:-left-6 px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-purple-500/40 backdrop-blur-xl shadow-xl shadow-purple-950/50 flex items-center gap-3 animate-float">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Experiencia</p>
                <p className="text-sm font-bold text-white">+10 Años en IT</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 sm:-right-6 px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-cyan-500/40 backdrop-blur-xl shadow-xl shadow-cyan-950/50 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Especialidad</p>
                <p className="text-sm font-bold text-white">FinTech & BD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
