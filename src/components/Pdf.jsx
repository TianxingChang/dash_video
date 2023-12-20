// import { useState } from "react";
// import { Document, Page } from "react-pdf";
// import pdf_file from "./course/9.pdf";
// function Pdf() {
//   const [numPages, setNumPages] = useState();
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <Document
//       file={pdf_file}
//       onLoadSuccess={onDocumentLoadSuccess}
//       className="overflow-y-auto h-500 w-300"
//     >
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </Document>
//   );
// }

// export default Pdf;
