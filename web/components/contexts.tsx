import { createContext, useContext } from "react";
import type { PaperInfo } from "../src/App";

const PaperInfosContext = createContext<PaperInfo[] | null>(null);

export function PaperInfosContextProvider(props: {
  children: React.ReactNode;
  value: PaperInfo[];
}) {
  const { children, value } = props;
  return (
    <PaperInfosContext.Provider value={value}>
      {children}
    </PaperInfosContext.Provider>
  );
}

export function usePaperInfosContext() {
  const context = useContext(PaperInfosContext);
  if (!context) {
    throw new Error(
      "usePaperInfosContext must be used within a PaperInfosContextProvider"
    );
  }
  return context;
}

type SetPaperInfosContext = {
  (paperInfos: PaperInfo[]): void;
};

const SetPaperInfosContext = createContext<SetPaperInfosContext | null>(null);

export function SetPaperInfosContextProvider(props: {
  children: React.ReactNode;
  value: SetPaperInfosContext;
}) {
  const { children, value } = props;
  return (
    <SetPaperInfosContext.Provider value={value}>
      {children}
    </SetPaperInfosContext.Provider>
  );
}

export function useSetPaperInfosContext() {
  const context = useContext(SetPaperInfosContext);
  if (!context) {
    throw new Error(
      "useSetPaperInfosContext must be used within a SetPaperInfosContextProvider"
    );
  }
  return context;
}

// const EditingIndexContext = createContext<number | null>(null);

// export function EditingIndexContextProvider(props: {
//   children: React.ReactNode;
//   value: number;
// }) {
//   const { children, value } = props;
//   return (
//     <EditingIndexContext.Provider value={value}>
//       {children}
//     </EditingIndexContext.Provider>
//   );
// }

// export function useEditingIndexContext() {
//   const context = useContext(EditingIndexContext);
//   if (!context) {
//     throw new Error(
//       "useEditingIndexContext must be used within a EditingIndexContextProvider"
//     );
//   }
//   return context;
// }

// type SetEditingIndexContext = {
//   (index: number): void;
// };

// const SetEditingIndexContext = createContext<SetEditingIndexContext | null>(
//   null
// );

// export function SetEditingIndexContextProvider(props: {
//   children: React.ReactNode;
//   value: SetEditingIndexContext;
// }) {
//   const { children, value } = props;
//   return (
//     <SetEditingIndexContext.Provider value={value}>
//       {children}
//     </SetEditingIndexContext.Provider>
//   );
// }

// export function useSetEditingIndexContext() {
//   const context = useContext(SetEditingIndexContext);
//   if (!context) {
//     throw new Error(
//       "useSetEditingIndexContext must be used within a SetEditingIndexContextProvider"
//     );
//   }
//   return context;
// }
