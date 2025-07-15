import PDFViewer from './PDFViewer';

function Cvfile() {
  const pdfUrl = 'http://tu-backend.com/view-pdf/mi_archivo.pdf'; // Usa tu endpoint FastAPI

  return (
    <div className="App">
      <h1>Visualizador de PDF</h1>
      <PDFViewer pdfUrl={pdfUrl} />
    </div>
  );
}

export default Cvfile;