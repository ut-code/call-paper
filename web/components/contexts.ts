import { createContext } from "react";
import type { PaperInfo } from "../src/App";

export const PaperInfosContext = createContext<PaperInfo[]>([
  {
    id: "",
    author: "",
    title: "",
    year: "",
    journal: "",
    tags: [""],
    citations: [""],
    citedBy: [""],
  },
]);
export const SetPaperInfosContext = createContext<
  React.Dispatch<React.SetStateAction<PaperInfo[]>>
>(() => undefined);

export const EditingIndexContext = createContext<number>(-1);
export const SetEditingIndexContext = createContext<
  React.Dispatch<React.SetStateAction<number>>
>(() => undefined);
