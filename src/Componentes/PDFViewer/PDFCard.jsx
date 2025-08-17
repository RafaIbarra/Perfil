// PDFCard.jsx
import { useState, useEffect } from 'react';
import { EyeOutlined, CloudDownloadOutlined } from '@ant-design/icons';
import { VITE_APIBASE } from '../../../config';
import pdfPreview  from '../../assets/Rafael-Ibarra-CV.pdf'
import pdfDownload from  '../../assets/Rafael-Ibarra-CV.pdf'
import './PDFCard.css';

export default function PDFCard({ servidoractivo }) {
  const [pdfvista, setPdfvista] = useState('');
  const [pdfdescarga, setPdfdescarga] = useState('');
  const [pdfName, setPdfName] = useState('Rafael_Ibarra_CV');

  useEffect(() => {
    // Actualiza las URLs cuando cambia servidoractivo
    if (servidoractivo) {
      setPdfvista(`${VITE_APIBASE}/CurriculumData/NO/`);
      setPdfdescarga(`${VITE_APIBASE}/CurriculumData/SI/`);
    } else {
      setPdfvista(pdfPreview);
      setPdfdescarga(pdfDownload);
    }
    
  }, [servidoractivo]);

  return (
    <div className="pdf-card">
      <h3>Mi Currículum</h3>
      
      <div className="pdf-buttons-container">
        <button 
          onClick={() => window.open(pdfvista, '_blank')}
          className="pdf-button preview-button"
        >
          <EyeOutlined className="pdf-icon" />
          <span>Vista previa</span>
        </button>

        <a 
          href={pdfdescarga} 
          download={servidoractivo ? `${pdfName}.pdf` : pdfDownload}
          className="pdf-button download-button"
          style={{ marginLeft: '10px' }}
        >
          <CloudDownloadOutlined className="pdf-icon" />
          <span>Descargar</span>
        </a>
      </div>
    </div>
  );
}