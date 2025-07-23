// PDFCard.jsx
import { EyeOutlined, CloudDownloadOutlined } from '@ant-design/icons';
import './PDFCard.css'
export default function PDFCard() {
  return (
    <div className="pdf-card">
      <h3>Mi Currículum</h3>
      <p className="pdf-subtitle">Documento actualizado</p>
      
      <div className="pdf-buttons-container">
        {/* Botón de vista previa */}
        <button 
        //   onClick={() => window.open(getViewUrl(), '_blank')}
          className="pdf-button preview-button"
        >
          <EyeOutlined className="pdf-icon" />
          <span>Vista previa</span>
        </button>

        {/* Botón de descarga */}
        <a 
        //   href={getDownloadUrl()} 
        //   download={`${pdfName}.pdf`}
          className="pdf-button download-button"
        >
          <CloudDownloadOutlined className="pdf-icon" />
          <span>Descargar</span>
        </a>
      </div>
    </div>
  );
}