import { useState, useEffect } from "react";
import { ExternalLink, Github, Database, Globe, Smartphone, ArrowUpRight } from 'lucide-react';

function Proyecto({ itemdata }) {
  const [databackend, setDatabackend] = useState({});
  const [datafronted, setDatafronted] = useState({});
  const [datamovil, setDatamovil] = useState({});
  const [datatags, setDatatags] = useState([]);
  const [activeTab, setActiveTab] = useState('backend');

  useEffect(() => {
    if (itemdata) {
      setDatatags(itemdata.detalle_tags || []);
      setDatabackend(itemdata.detalle_backend?.[0] || {});
      setDatafronted(itemdata.detalle_frontend?.[0] || {});
      setDatamovil(itemdata.detalle_movil?.[0] || {});

      // Auto-set initial active tab
      if (itemdata.detalle_backend?.[0]?.Framework) {
        setActiveTab('backend');
      } else if (itemdata.detalle_frontend?.[0]?.Framework) {
        setActiveTab('frontend');
      } else if (itemdata.detalle_movil?.[0]?.Framework) {
        setActiveTab('movil');
      }
    }
  }, [itemdata]);

  const getAvailableTabs = () => {
    const tabs = [];
    if (databackend.Framework) {
      tabs.push({ key: 'backend', label: 'Backend', icon: Database, color: 'text-purple-400' });
    }
    if (datafronted.Framework) {
      tabs.push({ key: 'frontend', label: 'Web', icon: Globe, color: 'text-cyan-400' });
    }
    if (datamovil.Framework) {
      tabs.push({ key: 'movil', label: 'Móvil', icon: Smartphone, color: 'text-emerald-400' });
    }
    return tabs;
  };

  const availableTabs = getAvailableTabs();

  return (
    <div className="relative rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:border-slate-700 hover:shadow-2xl hover:shadow-cyan-950/20 transition-all duration-300 group">
      {/* Top ambient highlight on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

      <div>
        {/* Project Header */}
        <div className="flex items-start gap-4 mb-5">
          <div className="w-14 h-14 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-center p-2 shrink-0 shadow-inner group-hover:border-cyan-500/30 transition-colors">
            <img
              src={itemdata.Logo || "/placeholder.svg"}
              alt={itemdata.Sistema}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          <div className="space-y-1 min-w-0">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
              {itemdata.Sistema}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
              {itemdata.Descripcion}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {datatags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 border border-slate-700/60 text-slate-300 group-hover:border-slate-600 transition-colors"
            >
              {tag.Tag}
            </span>
          ))}
        </div>

        {/* Tabs navigation */}
        {availableTabs.length > 0 && (
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950/60 border border-slate-800 mb-5 w-fit">
            {availableTabs.map((tab) => {
              const IconComp = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                  }`}
                >
                  <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Tab Content Display */}
        <div className="rounded-2xl bg-slate-950/50 border border-slate-800/70 p-4 sm:p-5 text-xs sm:text-sm space-y-3 mb-4">
          {activeTab === 'backend' && databackend.Framework && (
            <div className="space-y-2.5">
              <div className="flex justify-between items-center py-1 border-b border-slate-800/50">
                <span className="text-slate-400 font-medium">Framework & Lenguaje:</span>
                <span className="text-purple-300 font-semibold">{databackend.Framework} ({databackend.Lenguaje})</span>
              </div>
              {databackend.BaseDatos && (
                <div className="flex justify-between items-center py-1 border-b border-slate-800/50">
                  <span className="text-slate-400 font-medium">Base de Datos:</span>
                  <span className="text-cyan-300 font-semibold">{databackend.BaseDatos}</span>
                </div>
              )}
              {databackend.Alojamiento && (
                <div className="flex justify-between items-center py-1 border-b border-slate-800/50">
                  <span className="text-slate-400 font-medium">Alojamiento & SO:</span>
                  <span className="text-slate-200">{databackend.Alojamiento} {databackend.SO ? `(${databackend.SO})` : ''}</span>
                </div>
              )}
              {databackend.ServidorWeb && (
                <div className="flex justify-between items-center py-1 border-b border-slate-800/50">
                  <span className="text-slate-400 font-medium">Servidor Web:</span>
                  <span className="text-slate-200">{databackend.ServidorWeb}</span>
                </div>
              )}
              {databackend.Repositorio && (
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400 font-medium">Repositorio:</span>
                  <a
                    href={databackend.Repositorio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors font-medium truncate max-w-[200px]"
                  >
                    <Github className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">Ver código</span>
                    <ArrowUpRight className="w-3 h-3 shrink-0" />
                  </a>
                </div>
              )}
            </div>
          )}

          {activeTab === 'frontend' && datafronted.Framework && (
            <div className="space-y-2.5">
              <div className="flex justify-between items-center py-1 border-b border-slate-800/50">
                <span className="text-slate-400 font-medium">Framework:</span>
                <span className="text-cyan-300 font-semibold">{datafronted.Framework}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/50">
                <span className="text-slate-400 font-medium">Lenguaje:</span>
                <span className="text-slate-200">{datafronted.Lenguaje}</span>
              </div>
              {datafronted.Alojamiento && (
                <div className="flex justify-between items-center py-1 border-b border-slate-800/50">
                  <span className="text-slate-400 font-medium">Alojamiento:</span>
                  <span className="text-slate-200">{datafronted.Alojamiento}</span>
                </div>
              )}
              {datafronted.Repositorio && (
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400 font-medium">Repositorio:</span>
                  <a
                    href={datafronted.Repositorio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors font-medium truncate max-w-[200px]"
                  >
                    <Github className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">Ver código</span>
                    <ArrowUpRight className="w-3 h-3 shrink-0" />
                  </a>
                </div>
              )}
            </div>
          )}

          {activeTab === 'movil' && datamovil.Framework && (
            <div className="space-y-2.5">
              <div className="flex justify-between items-center py-1 border-b border-slate-800/50">
                <span className="text-slate-400 font-medium">Framework:</span>
                <span className="text-emerald-300 font-semibold">{datamovil.Framework}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/50">
                <span className="text-slate-400 font-medium">Lenguaje:</span>
                <span className="text-slate-200">{datamovil.Lenguaje}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/50">
                <span className="text-slate-400 font-medium">Soporte:</span>
                <span className="text-slate-200">
                  Android: {datamovil.VersionAndroid || 'Sí'} | iOS: {datamovil.VersioniOS || 'No'}
                </span>
              </div>
              {datamovil.Repositorio && (
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400 font-medium">Repositorio:</span>
                  <a
                    href={datamovil.Repositorio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors font-medium truncate max-w-[200px]"
                  >
                    <Github className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">Ver código</span>
                    <ArrowUpRight className="w-3 h-3 shrink-0" />
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Action Footer Buttons */}
      <div className="pt-2 flex flex-wrap items-center gap-3">
        {/* Direct Link to Web or App */}
        {datafronted.Urls && (
          <a
            href={datafronted.Urls}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Visitar Web</span>
          </a>
        )}

        {databackend.Urls && !datafronted.Urls && (
          <a
            href={databackend.Urls}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-500/20 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
            <span>API Docs / URL</span>
          </a>
        )}

        {datamovil.EnlaceDescarga && (
          <a
            href={datamovil.EnlaceDescarga}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            <Smartphone className="w-4 h-4" />
            <span>Descargar APK</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default Proyecto;
