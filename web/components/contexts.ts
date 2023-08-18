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
>(() => {});

export const ClickedIndexContext = createContext<number>(-1);
export const SetClickedIndexContext = createContext<
  React.Dispatch<React.SetStateAction<number>>
>(() => {});
