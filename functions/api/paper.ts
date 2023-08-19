import { z } from "zod";
import { Env } from "../types";

const paperType = z.object({
  id: z.string(),
  title: z.string(),
  doi: z.string(),
  year: z.number().int().positive().min(2000).max(3000),
  author: z.string(),
  journal: z.string(),
});

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const data = await context.env.DB.prepare("select * from paper").all();
  return Response.json(data.results);
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const body = paperType.omit({ id: true }).parse(await context.request.json());
  const data = await context.env.DB.prepare(
    "INSERT INTO paper (title, doi, year, author, journal) VALUES (?, ?, ?, ?, ?) RETURNING *"
  ).bind(body.title, body.doi, body.year, body.author, body.journal);
  const result = await data.first();
  return Response.json(result);
};
