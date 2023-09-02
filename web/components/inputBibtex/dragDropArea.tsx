import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { usePaperInfosContext, useSetPaperInfosContext } from "../contexts";
import fileToPaperInfo from "./fileToPaperInfo";

function BibtexFileReader({ children }) {
  const paperInfos = usePaperInfosContext();
  const setPaperInfos = useSetPaperInfosContext();
  const onDrop = useCallback(
    (acceptedFiles) => {
      for (let i = 0; i < acceptedFiles.length; i += 1) {
        const file = acceptedFiles[i];

        // Create a FileReader to read the file content
        try {
          const reader = new FileReader();
          // Read the file as text
          reader.readAsText(file);
          reader.onload = (e) => {
            const content = e.target!.result;
            // alert(`File content:\n${content}`);
            const additionalPaper = fileToPaperInfo(content);
            setPaperInfos([...paperInfos, additionalPaper]);
          };

          reader.onerror = (error) => {
            console.error("Error reading file:", error);
          };
        } catch (error) {
          console.error("Error:", error);
        }
      }
    },
    [paperInfos, setPaperInfos]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "Bibtex/bibtex": [".bibtex"] }, // Specify accepted file types (e.g., .txt)
  });
  console.log(paperInfos);
  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {/* <p>Drag 'n' drop a text file here, or click to select a text file</p> */}
      {children}
    </div>
  );
}

export default BibtexFileReader;
