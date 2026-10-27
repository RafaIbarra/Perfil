import Principal from "../Componentes/Principal";

function App() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300 relative overflow-hidden">
      {/* Background ambient glowing gradients */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="fixed top-1/3 right-10 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-1/3 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[140px] pointer-events-none -z-10" />
      
      {/* Subtle background tech grid */}
      <div 
        className="fixed inset-0 pointer-events-none -z-10 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <Principal />
    </div>
  );
}

export default App;
