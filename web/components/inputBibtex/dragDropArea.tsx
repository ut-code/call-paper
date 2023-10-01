import { useCallback, type ReactNode } from "react";
import { useDropzone } from "react-dropzone";
import { usePaperInfosContext, useSetPaperInfosContext } from "../contexts";
import fileToPaperInfo from "./fileToPaperInfo";
import type { PaperInfo } from "../../src/App";

async function loadFile(file: File) {
  return new Promise<PaperInfo>((resolve) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const content = fileToPaperInfo(String(reader.result));
      resolve(content);
    };
  });
}

function BibtexFileReader({ children }: { children: ReactNode }) {
  const paperInfos = usePaperInfosContext();
  const setPaperInfos = useSetPaperInfosContext();
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const newPapers = await Promise.all(acceptedFiles.map(loadFile));
      setPaperInfos([...paperInfos, ...newPapers]);
    },
    [paperInfos, setPaperInfos]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    noClick: true,
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
