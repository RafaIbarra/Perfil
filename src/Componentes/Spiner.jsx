const LoadingSpinner = () => (
  <div className="fixed inset-0 z-50 bg-[#070b14]/90 backdrop-blur-md flex flex-col items-center justify-center gap-4">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 rounded-full border-2 border-slate-800"></div>
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-purple-500 animate-spin"></div>
      <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-emerald-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.2s' }}></div>
    </div>
    <div className="flex flex-col items-center gap-1">
      <span className="text-sm font-semibold tracking-wider uppercase text-cyan-400 animate-pulse">
        Cargando portafolio
      </span>
      <span className="text-xs text-slate-500">Rafael Ibarra Dev</span>
    </div>
  </div>
);

export default LoadingSpinner;
