import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { usePaperInfosContext, useSetPaperInfosContext } from "../contexts";
import fileToPaperInfo from "./fileToPaperInfo";
import type { PaperInfo } from "../../src/App";

function generateAddedPapers(acceptedFiles: []) {
  const newPapers: PaperInfo[] = [];
  for (const file of acceptedFiles) {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const content = reader.result;
      newPapers.push(fileToPaperInfo(content));
    };
  }
  return new Promise((resolve) => {
    resolve(newPapers);
  });
}

function BibtexFileReader({ children }) {
  console.log("BibtexFileReader");
  const paperInfos = usePaperInfosContext();
  const setPaperInfos = useSetPaperInfosContext();
  const [newPapers, setNewPapers] = useState<PaperInfo[]>([]);
  console.log("useState", newPapers.length);
  const onDrop = useCallback(async (acceptedFiles) => {
    const theNewPapers = await generateAddedPapers(acceptedFiles);
    console.log("onDrop callback acceptedFiles.length", acceptedFiles.length);
    console.log("onDrop callback theNewPapers.length", theNewPapers.length);
    setNewPapers(theNewPapers);
  }, []);
  useEffect(() => {
    setPaperInfos([...paperInfos, ...newPapers]);
  }, [newPapers]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "Bibtex/bibtex": [".bibtex"] }, // Specify accepted file types (e.g., .txt)
  });
  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {/* <p>Drag 'n' drop a text file here, or click to select a text file</p> */}
      {children}
    </div>
  );
}

export default BibtexFileReader;
