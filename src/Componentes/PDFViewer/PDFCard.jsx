// PDFCard.jsx
import { useState, useEffect } from 'react';
import { EyeOutlined, CloudDownloadOutlined } from '@ant-design/icons';

import './PDFCard.css'
export default function PDFCard() {
  const [pdfvista, setPdfvista] = useState("https://pradmin.rafaelibarra.xyz/CurriculumData/NO/");
  const [pdfdescarga, setPdfdescarga] = useState("https://pradmin.rafaelibarra.xyz/CurriculumData/SI/");
  const [pdfName,setPdfName]=useState('Rafael_Ibarra_CV')
  const getViewUrl = () => `${pdfvista}`; // Para visualizar (application/pdf)
  const getDownloadUrl = () => `${pdfdescarga}`; 
  return (
    <div className="pdf-card">
      <h3>Mi Currículum</h3>
      
      
      <div className="pdf-buttons-container">
        {/* Botón de vista previa */}
        <button 
         onClick={() => window.open(getViewUrl(), '_blank')}
          className="pdf-button preview-button"
        >
          <EyeOutlined className="pdf-icon" />
          <span>Vista previa</span>
        </button>

        {/* Botón de descarga */}
        <a 
        //   href={getDownloadUrl()} 
        //   download={`${pdfName}.pdf`}
        href={getDownloadUrl()} download={`${pdfName}.pdf`} style={{ marginLeft: '10px' }}
          className="pdf-button download-button"
        >
          <CloudDownloadOutlined className="pdf-icon" />
          <span>Descargar</span>
        </a>
      </div>
    </div>
  );
}