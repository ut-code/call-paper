export type Paper = {
  id: string;
  title: string;
  doi: string;
  year: number;
  author: string;
  journal: string;
};

export type Citation = {
  id: string;
  citingPaperId: string;
  citedPaperId: string;
};

export const getPaper = "/api/paper";
export type GetPaperResponse = Paper[];

export const postPaper = "/api/paper";
export type PostPaperRequest = Omit<Paper, "id">;
export type PostPaperResponse = Paper;

export const putPaper = "/api/paper/:id";
export type PutPaperRequest = Paper;
export type PutPaperResponse = Paper;

export const deletePaper = "/api/paper/:id";
export type DeletePaperResponse = void;

export const getCitation = "/api/citation";
export type GetCitationResponse = Citation[];

export const postCitation = "/api/citation";
export type PostCitationRequest = Omit<Citation, "id">;

export const deleteCitation = "/api/citation/:id";
export type DeleteCitationResponse = void;
