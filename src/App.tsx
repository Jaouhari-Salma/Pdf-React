import { useState } from 'react'

import './App.css'
import MyDocument from './components/PdfDevis';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

function App() {
  const [previewDevis, setPreviewDevis] = useState(false);


  return (
    <>
     <div className="gap-2 flex">
      <PDFDownloadLink document={<MyDocument />} fileName="my-facture.pdf">
        <button className="border rounded-lg p-2 bg-orange-500">Download Facture</button>
      </PDFDownloadLink>
      <button className=" border rounded-lg p-2 bg-gray-200"  onClick={() => setPreviewDevis(!previewDevis)}>
        {previewDevis ? "Close Facture Preview" : "Preview Facture"}
      </button>
    </div>
      {previewDevis && (
        <PDFViewer  style={{ width: "100%", height: "500px" }}>
          <MyDocument />
        </PDFViewer>
      )}
    </>
    
  )
}

export default App
