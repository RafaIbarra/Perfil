import { useEffect, useState } from 'react';
import { 
  User, 
  Briefcase, 
  Layers, 
  Code2, 
  Mail, 
  Menu, 
  X, 
  ArrowUp,
  Github
} from 'lucide-react';

import Generarpeticion from '../Peticiones/apipeticiones';
import LoadingSpinner from './Spiner';

import Skills from './Skills/Skillsv3';
import About from './About/About2';
import { Experiencia } from './Experiencia/Experiencia';
import ProytectoHome from './Proyecto/ProytectoHome';
import { Contact } from './ContactSection/ContactSection';
import repositoriosData from '../data/repositoriosData.json';
import proyectosData from '../data/proyectosData.json';

const Principal = () => {
  const [loading, setLoading] = useState(false);
  const [datacantidades, setDatacantidades] = useState([]);
  const [datalenguajes, setDatalenguajes] = useState([]);
  const [dataproyectos, setDataproyectos] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servidoractivo, setServidoractivo] = useState(true);
  const [activeSection, setActiveSection] = useState('about');

  const navLinks = [
    { id: 'about', label: 'Acerca de mí', icon: User },
    { id: 'experiencia', label: 'Experiencia', icon: Briefcase },
    { id: 'works', label: 'Proyectos', icon: Layers },
    { id: 'skills', label: 'Habilidades', icon: Code2 },
    { id: 'contact', label: 'Contacto', icon: Mail },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const listar_datos_repositorios = async () => {
    const endpoint = 'ListarFrameworks/';
    const result = await Generarpeticion(endpoint);

    if (result.resp === 200) {
      const filteredData = result.data.porcentajes.filter((item) => item.valor > 1.0);
      setDatalenguajes(filteredData);
      setDatacantidades(result.data.cantidades);
    } else {
      setServidoractivo(false);
      const filteredData = repositoriosData.porcentajes.filter((item) => item.valor > 1.0);
      setDatalenguajes(filteredData);
      setDatacantidades(repositoriosData.cantidades);
    }
  };

  const listar_datos_proyectos = async () => {
    const endpoint = 'ListarProyectos/0/';
    const result = await Generarpeticion(endpoint);

    if (result.resp === 200) {
      setDataproyectos(result.data);
    } else {
      setDataproyectos(proyectosData);
    }
  };

  useEffect(() => {
    const cargadatos = async () => {
      setLoading(true);
      await listar_datos_repositorios();
      await listar_datos_proyectos();
      setLoading(false);
    };
    cargadatos();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Calculate scroll progress percentage
      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }

      // Detect active section on scroll
      const sections = ['about', 'experiencia', 'works', 'skills', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col justify-between">
      {/* Top Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-500 via-sky-400 to-purple-500 z-[100] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Capsule Glass Navbar */}
      <header className="sticky top-4 z-50 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto rounded-full bg-slate-900/85 backdrop-blur-xl border border-slate-800/90 shadow-2xl shadow-black/60 px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-300">
          {/* Logo / Name */}
          <button
            onClick={() => {
              scrollToSection('about');
              setMenuOpen(false);
            }}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1.5px] shadow-sm shadow-cyan-500/30 group-hover:shadow-cyan-500/60 transition-shadow">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                <span className="text-xs font-black text-cyan-400">RI</span>
              </div>
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-white group-hover:text-cyan-300 transition-colors text-sm sm:text-base">
                Rafael Ibarra
              </span>
              <span className="hidden sm:inline-block ml-2 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Dev
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const IconComp = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
                  }`}
                >
                  <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Status Indicator & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <div 
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-950/60 border border-slate-800 text-slate-400"
              title={servidoractivo ? "Servidor conectado y activo" : "Servidor en modo local"}
            >
              <span className={`w-2 h-2 rounded-full ${servidoractivo ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span>{servidoractivo ? 'Online' : 'Local'}</span>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-full text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-colors cursor-pointer"
              aria-label="Abrir menú"
            >
              {menuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden max-w-sm mx-auto mt-2 p-3 rounded-3xl bg-slate-900/95 backdrop-blur-2xl border border-slate-800 shadow-2xl space-y-1 animate-in fade-in slide-in-from-top-3 duration-200">
            {navLinks.map((link) => {
              const IconComp = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    scrollToSection(link.id);
                    setMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Main Content Area */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12 sm:space-y-20">
          {/* Section 1: About */}
          <section id="about" className="scroll-mt-28">
            <About servidoractivo={servidoractivo} />
          </section>

          {/* Section Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

          {/* Section 2: Experiencia */}
          <section id="experiencia" className="scroll-mt-28">
            <Experiencia />
          </section>

          {/* Section Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

          {/* Section 3: Proyectos */}
          <section id="works" className="scroll-mt-28">
            <ProytectoHome dataproyectos={dataproyectos} />
          </section>

          {/* Section Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

          {/* Section 4: Habilidades & Estadísticas */}
          <section id="skills" className="scroll-mt-28">
            <Skills datacantidades={datacantidades} datalenguajes={datalenguajes} />
          </section>

          {/* Section Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

          {/* Section 5: Contacto */}
          <section id="contact" className="scroll-mt-28">
            <Contact servidoractivo={servidoractivo} />
          </section>
        </main>
      )}

      {/* Back to top floating button */}
      {scrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900/90 text-cyan-400 border border-cyan-500/40 backdrop-blur-xl shadow-xl shadow-cyan-950/40 hover:bg-cyan-500 hover:text-slate-950 hover:scale-110 transition-all duration-300 cursor-pointer"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-900/90 bg-[#060911]/90 backdrop-blur-md py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-white text-base tracking-tight">
              Rafael Ibarra
            </span>
            <span className="text-slate-600">|</span>
            <span>Full-Stack & Especialista en Bases de Datos</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/RafaIbarra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Contacto</span>
            </button>
          </div>

          <div className="text-slate-500 text-xs text-center sm:text-right">
            © {new Date().getFullYear()} Diseñado con React, Tailwind CSS y Vite.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Principal;
