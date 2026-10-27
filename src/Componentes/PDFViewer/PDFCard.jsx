import { useState, useEffect } from 'react';
import { Eye, Download, FileText } from 'lucide-react';
import { VITE_APIBASE } from '../../../config';
import pdfPreview from '../../assets/Rafael-Ibarra-CV.pdf';
import pdfDownload from '../../assets/Rafael-Ibarra-CV.pdf';

export default function PDFCard({ servidoractivo }) {
  const [pdfvista, setPdfvista] = useState('');
  const [pdfdescarga, setPdfdescarga] = useState('');
  const [pdfName] = useState('Rafael_Ibarra_CV');

  useEffect(() => {
    if (servidoractivo) {
      setPdfvista(`${VITE_APIBASE}/CurriculumData/NO/`);
      setPdfdescarga(`${VITE_APIBASE}/CurriculumData/SI/`);
    } else {
      setPdfvista(pdfPreview);
      setPdfdescarga(pdfDownload);
    }
  }, [servidoractivo]);

  return (
    <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-2 sm:p-2.5 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl shadow-xl shadow-cyan-950/20">
      <div className="flex items-center gap-2 px-3 py-1 text-slate-300 font-medium text-sm">
        <FileText className="w-4 h-4 text-cyan-400" />
        <span>Curriculum Vitae</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => window.open(pdfvista, '_blank')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-500/40 border border-slate-700/60 transition-all duration-300 shadow-sm cursor-pointer"
        >
          <Eye className="w-4 h-4 text-cyan-400" />
          <span>Vista previa</span>
        </button>

        <a
          href={pdfdescarga}
          download={servidoractivo ? `${pdfName}.pdf` : 'Rafael_Ibarra_CV.pdf'}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>Descargar CV</span>
        </a>
      </div>
    </div>
  );
}
