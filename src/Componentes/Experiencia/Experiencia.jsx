import { Calendar, MapPin, Briefcase, CheckCircle2, Trophy, Cpu } from 'lucide-react';

export function Experiencia() {
  const experiences = [
    {
      title: "Desarrollador Full Stack & Analista de Bases de Datos",
      company: "Cooperativa Capiatá Ltda.",
      location: "Capiatá, Dpto Central",
      period: "2014 - Presente",
      description: "Desarrollo soluciones de software para procesos financieros, contables y administrativos, transformando requerimientos del negocio en sistemas integrados y adaptados a las necesidades operativas de la cooperativa.",
      responsibilities: [
        "Diseño y optimización de bases de datos relacionales",
        "Migración de sistemas legacy a arquitecturas modernas (DRF + React)",
        "Configuración de entornos de despliegue (Ubuntu + Nginx)",
        "Integración con APIs de terceros (VISA/CABAL)"
      ],
      technologies: ["SQL Server", "Django REST Framework", "React", "Node.js", "Nginx", "Ubuntu", "APIs REST", "Stored Procedures"],
      achievements: [
  "Participé en la migración de bases de datos de MySQL a SQL Server, colaborando en la adaptación de estructuras y datos.",
  "Diseñé y desarrollé un sistema de compras integrado con tesorería y contabilidad, incluyendo la gestión de pagos a proveedores y el control de inventario de los artículos adquiridos.",
  "Desarrollé el sistema de débitos de ahorro de socios para pagos y transferencias utilizados por empresas externas como DIMO, procesando más de 5.000 transacciones mensuales.",
  "Diseñé y desarrollé un sistema de digitalización de documentos para solicitudes de crédito, facilitando la gestión electrónica de expedientes y reduciendo los costos asociados a la documentación física.",
  "Implementé un sistema de scoring crediticio basado en patrones de pago, actividad económica y movimientos de ahorro para apoyar la evaluación del riesgo crediticio.",
  "Participé en la implementación de un sistema de facturación autogenerada, reemplazando los formularios preimpresos y reduciendo los costos asociados a su adquisición y reimpresión.",
  "Diseñé y desarrollé un sistema integral de venta de electrodomésticos, integrado con los módulos de crédito para ventas financiadas y caja para operaciones al contado.",
  "Configuré la infraestructura de desarrollo y producción basada en Ubuntu y Nginx como reverse proxy para el despliegue de aplicaciones frontend y backend, como parte de la modernización de los sistemas de la cooperativa.",
  "Implementé un sistema de ejecución de tareas automatizadas con Python, Celery y Redis para el procesamiento contable de transacciones, el envío de pagos a VISA y CABAL, los cálculos de scoring, las copias de seguridad de scripts de base de datos y las notificaciones por correo institucional.",
  "Participo en la migración del sistema legacy hacia una arquitectura moderna, desarrollando APIs y servicios backend con Django REST Framework y FastAPI.",
  "Configuré e implementé un servidor de intranet corporativa con notificaciones en tiempo real e integración con la base de datos de producción.",
  "Configuré un entorno para ejecutar modelos de inteligencia artificial de pesos abiertos e integrarlos con el backend para su utilización desde las aplicaciones de la cooperativa."
]
    },
  ];

  return (
    <div className="py-12 md:py-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wide uppercase">
          <Briefcase className="w-3.5 h-3.5 text-purple-400" />
          <span>Trayectoria</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Experiencia{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Profesional
          </span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Mi trayectoria combinando sistemas robustos de misión crítica con tecnologías modernas
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl p-6 sm:p-10 shadow-2xl overflow-hidden hover:border-slate-700/80 transition-all duration-300"
          >
            {/* Glowing top line with dual gradients */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500" />

            {/* Header Content */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-base sm:text-lg">
                  <Briefcase className="w-5 h-5 text-cyan-400" />
                  <span>{exp.company}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>{exp.period}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs sm:text-sm font-medium">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Main Description */}
            <div className="py-6">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed bg-slate-950/40 p-5 rounded-2xl border border-slate-800/50">
                {exp.description}
              </p>
            </div>

            {/* Responsibilities */}
            {exp.responsibilities && (
              <div className="py-4 space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Mis responsabilidades incluyen:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {exp.responsibilities.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/60 hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-sm shadow-cyan-400/80" />
                      <span className="text-slate-300 text-sm leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="py-6 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>Tecnologías clave:</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-purple-200 bg-purple-500/10 border border-purple-500/25 hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="pt-4 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-emerald-400" />
                <span>Logros destacados:</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {exp.achievements.map((achievement, achIndex) => (
                  <div
                    key={achIndex}
                    className="p-4 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/80 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-950/20 transition-all duration-300 flex items-start gap-3.5 group"
                  >
                    <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiencia;
