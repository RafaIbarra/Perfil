import { 
  Code2, 
  Database, 
  Server, 
  Smartphone, 
  Terminal, 
  BarChart3, 
  CloudUpload, 
  Github, 
  ExternalLink,
  Activity
} from "lucide-react";
import FrameworksGraficos from '../Graficos/FrameworksGraficos';
import LenguajesGraficos from '../Graficos/LenguajesGraficos';

function Skills({ datacantidades, datalenguajes }) {
  const skillCategories = [
    {
      title: "Lenguajes",
      icon: Code2,
      accent: "cyan",
      borderColor: "border-cyan-500/30 hover:border-cyan-400",
      iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      skills: [
        { name: 'JavaScript', logoKey: 'javascript', wordmark: false },
        { name: 'TypeScript', logoKey: 'typescript', wordmark: false },
        { name: 'Python', logoKey: 'python', wordmark: false },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      accent: "emerald",
      borderColor: "border-emerald-500/30 hover:border-emerald-400",
      iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      skills: [
        { name: 'Django', logoKey: 'django', wordmark: true },
        { name: 'Django REST Framework', logoKey: 'djangorest', wordmark: false },
        { name: 'FastAPI', logoKey: 'fastapi', wordmark: false },
        { name: 'Express', logoKey: 'express', wordmark: true },
        { name: 'Node.js', logoKey: 'nodejs', wordmark: true },
      ],
    },
    {
      title: "Base de Datos",
      icon: Database,
      accent: "purple",
      borderColor: "border-purple-500/30 hover:border-purple-400",
      iconBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      skills: [
        { name: 'SQL Server', logoKey: 'microsoftsqlserver', wordmark: false },
        { name: 'MySQL', logoKey: 'mysql', wordmark: false },
        { name: 'PostgreSQL', logoKey: 'postgresql', wordmark: false },
      ],
    },
    {
      title: "Frontend & Móvil",
      icon: Smartphone,
      accent: "amber",
      borderColor: "border-amber-500/30 hover:border-amber-400",
      iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      skills: [
        { name: 'React', logoKey: 'react', wordmark: true },
        { name: 'React-Native', logoKey: 'react', wordmark: false },
        { name: 'Expo-GO', logoKey: 'expo', wordmark: false },
      ],
    },
    {
      title: "Infraestructura",
      icon: Terminal,
      accent: "sky",
      borderColor: "border-sky-500/30 hover:border-sky-400",
      iconBg: "bg-sky-500/10 text-sky-400 border-sky-500/30",
      skills: [
        { name: 'Git', logoKey: 'git', wordmark: true },
        { name: 'Nginx', logoKey: 'nginx', wordmark: false },
        { name: 'Ubuntu', logoKey: 'ubuntu', wordmark: true },
        { name: 'Cloudflare', logoKey: 'cloudflare', wordmark: true },
      ],
    },
    {
      title: "Data & Análisis",
      icon: BarChart3,
      accent: "rose",
      borderColor: "border-rose-500/30 hover:border-rose-400",
      iconBg: "bg-rose-500/10 text-rose-400 border-rose-500/30",
      skills: [
        { name: 'Pandas', logoKey: 'pandas', wordmark: true },
        { name: 'Matplotlib', logoKey: 'matplotlib', wordmark: false },
      ],
    },
    {
      title: "Despliegue & Cloud",
      icon: CloudUpload,
      accent: "indigo",
      borderColor: "border-indigo-500/30 hover:border-indigo-400",
      iconBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
      skills: [
        { name: 'Vercel', logoKey: 'vercel', wordmark: false },
        { name: 'Render', logoKey: 'render', wordmark: false },
      ],
    },
  ];

  const traer_img = (valor, wordmark) => {
    const imagenesLocales = ['expo', 'render'];
    if (imagenesLocales.includes(valor)) {
      return `/${valor}.png`;
    }
    if (valor === 'django') {
      return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${valor}/${valor}-plain-wordmark.svg`;
    } else {
      if (wordmark) {
        return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${valor}/${valor}-original-wordmark.svg`;
      } else {
        return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${valor}/${valor}-original.svg`;
      }
    }
  };

  return (
    <div className="py-12 md:py-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide uppercase">
          <Code2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>Habilidades</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Stack & Competencias{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
            Técnicas
          </span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Dominio de tecnologías modernas para desarrollo completo de aplicaciones
        </p>
      </div>

      {/* Skills Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
        {skillCategories.map((category, index) => {
          const IconComp = category.icon;
          return (
            <div
              key={index}
              className={`rounded-3xl bg-slate-900/60 border ${category.borderColor} backdrop-blur-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-2xl border ${category.iconBg} shadow-inner group-hover:scale-110 transition-transform`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-600 hover:bg-slate-800/60 transition-all duration-200 group/item cursor-default"
                    >
                      <img
                        src={traer_img(skill.logoKey, skill.wordmark)}
                        alt={skill.name}
                        className={`w-5 h-5 object-contain ${
                          skill.logoKey === 'expo' || skill.logoKey === 'render' ? 'filter invert' : ''
                        }`}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <span className="text-xs font-medium text-slate-300 group-hover/item:text-white">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Statistics Section */}
      <div className="rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl p-6 sm:p-10 shadow-2xl space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>Métricas en Tiempo Real</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Estadísticas de Repositorios
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/RafaIbarra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 transition-all duration-200 hover:text-white shadow-sm"
            >
              <Github className="w-4 h-4 text-purple-400" />
              <span>github.com/RafaIbarra</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              href="https://profile-summary-for-github.com/user/RafaIbarra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all duration-200 shadow-sm"
            >
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>Resumen de Perfil</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
            </a>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Frameworks Chart */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-950/60 border border-slate-800/70 p-5 shadow-inner">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-purple-300">
                Frameworks más utilizados
              </h4>
              <span className="text-xs text-slate-400">Por repositorios</span>
            </div>
            <FrameworksGraficos datacantidades={datacantidades} />
          </div>

          {/* Languages Chart */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-950/60 border border-slate-800/70 p-5 shadow-inner">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-300">
                Lenguajes de programación
              </h4>
              <span className="text-xs text-slate-400">% de presencia</span>
            </div>
            <LenguajesGraficos datalenguajes={datalenguajes} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
