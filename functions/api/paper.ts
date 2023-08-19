import { Env, paperType } from "../types";

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const data = await context.env.DB.prepare("select * from paper").all();
  return Response.json(data.results);
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const body = paperType.omit({ id: true }).parse(await context.request.json());
  const id = crypto.randomUUID();
  await context.env.DB.prepare(
    "INSERT INTO paper (id, title, doi, year, author, journal) VALUES (?, ?, ?, ?, ?)"
  )
    .bind(id, body.title, body.doi, body.year, body.author, body.journal)
    .run();
  return Response.json({ id, ...body });
};
