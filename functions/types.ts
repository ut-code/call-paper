import { z } from "zod";

export type Env = {
  DB: D1Database;
};

export const paperType = z.object({
  id: z.string().uuid(),
  title: z.string(),
  doi: z.string(),
  year: z.number().int().positive().min(2000).max(3000),
  author: z.string(),
  journal: z.string(),
});

export const citationType = z.object({
  id: z.string().uuid(),
  citingPaperId: z.string().uuid(),
  citedPaperId: z.string().uuid(),
});
