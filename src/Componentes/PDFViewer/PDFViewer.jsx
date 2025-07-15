import { useState, useEffect } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
// import 'react-pdf/dist/Page/AnnotationLayer.css';
// import 'react-pdf/dist/Page/TextLayer.css';

const workerUrl = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).href;
pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

console.log('PDF.js version:', pdfjs.version);  // Debería mostrar 2.12.313
console.log('Worker path:', pdfjs);  // Debería mostrar la ruta correcta
// pdfjs.GlobalWorkerOptions.workerSrc = new URL('/pdfjs-worker/build/pdf.worker.mjs', window.location.origin).toString();
function PDFViewer({ pdfName }) {
  // const [pdfUrl, setPdfUrl] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [archivoseleccion,setArchivoseleccion]=useState("")
 const [pdfBlob, setPdfBlob] = useState(null); // Guardamos el Blob directamente
  const [pdfUrl, setPdfUrl] = useState("https://pradmin.rafaelibarra.xyz/CurriculumData/NO/");
  // Endpoints de tu backend FastAPI
  //const API_BASE = 'http://127.0.0.1:8000';
  const API_BASE = 'https://pradmin.rafaelibarra.xyz';
  const getViewUrl = () => `${API_BASE}/CurriculumData/NO/`; // Para visualizar (application/pdf)
  const getDownloadUrl = () => `${API_BASE}/CurriculumData/SI/`; // Para descargar (application/octet-stream)

  useEffect(() => {
    // console.log('PDF.js version:', pdfjs.version);
    // console.log('Worker version:', pdfWorker);
    setPdfUrl(`https://pradmin.rafaelibarra.xyz/CurriculumData/NO/`);
  }, [archivoseleccion]);
  //setPdfUrl(`${API_BASE}/CurriculumData/NO/`)
  // Carga el PDF para visualización
  

// useEffect(() => {
//     const fetchPDF = async () => {
//       try {
//         const response = await fetch(
//           `http://127.0.0.1:8000/CurriculumData/NO/`,
//           {
//             headers: { Authorization: 'Bearer TU_TOKEN_JWT' },
//           }
//         );
//         const blob = await response.blob();
//         setPdfBlob(blob); // Almacena el Blob en el estado
//       } catch (error) {
//         console.error("Error al cargar el PDF:", error);
//       }
//     };

//     fetchPDF();
//   }, [pdfName]);
  // if (isLoading) return <div>Cargando PDF...</div>;
  // if (error) return <div>Error: {error}</div>;
  // if (!pdfUrl) return <div>No se pudo cargar el PDF</div>;

  return (
    <div style={{ maxWidth: '600px', margin: '20px' }}>
      {/* Botón para abrir en nueva pestaña */}
      <button onClick={() => window.open(getViewUrl(), '_blank')}>
        Abrir en navegador
      </button>

      {/* Botón de descarga (usa el endpoint con ?download=SI) */}
      <a href={getDownloadUrl()} download={`${pdfName}.pdf`} style={{ marginLeft: '10px' }}>
        <button>Descargar PDF</button>
      </a>

      {/* Vista previa con react-pdf */}
      <Document
        file={pdfUrl}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={<div>Cargando páginas...</div>}
      >
        <Page pageNumber={1} width={600} />
      </Document>

      {/* Navegación entre páginas (opcional) */}
      {numPages && (
        <div style={{ marginTop: '10px' }}>
          <p>Página 1 de {numPages}</p>
        </div>
      )}
    </div>
  );
}

export default PDFViewer;