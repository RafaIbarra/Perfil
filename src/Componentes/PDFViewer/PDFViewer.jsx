import { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

function PDFViewer({ pdfName }) {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
 const [pdfBlob, setPdfBlob] = useState(null); // Guardamos el Blob directamente
  
  // Endpoints de tu backend FastAPI
  //const API_BASE = 'http://127.0.0.1:8000';
  const API_BASE = 'https://pradmin.rafaelibarra.xyz';
  const getViewUrl = () => `${API_BASE}/CurriculumData/NO/`; // Para visualizar (application/pdf)
  const getDownloadUrl = () => `${API_BASE}/CurriculumData/SI/`; // Para descargar (application/octet-stream)

  // Carga el PDF para visualización
  useEffect(() => {
    const loadPDF = async () => {
      try {
        const response = await fetch(getViewUrl(), {
          headers: {
            'Authorization': 'Bearer TU_TOKEN_JWT', // Autenticación
          },
        });
        console.log(response.ok)
        if (!response.ok) throw new Error("Error al cargar el PDF");

        const blob = await response.blob(); // Convertimos la respuesta a Blob
        setPdfBlob(blob)
        console.log(blob)
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      } catch (err) {
        setError(err.message);
        console.error("Error al cargar el PDF:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPDF();

    return () => {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl); // Limpieza
    };
  }, [pdfName]);

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
  if (isLoading) return <div>Cargando PDF...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!pdfUrl) return <div>No se pudo cargar el PDF</div>;

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