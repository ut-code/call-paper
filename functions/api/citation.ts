import { Env, citationType } from "../types";

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const data = await context.env.DB.prepare("select * from citation").all();
  return Response.json(data.results);
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const body = citationType
    .omit({ id: true })
    .parse(await context.request.json());
  const referencedPaperResult = await context.env.DB.prepare(
    "SELECT id FROM paper WHERE id IN (?, ?)"
  )
    .bind(body.citingPaperId, body.citedPaperId)
    .all();
  if (referencedPaperResult.results.length !== 2) throw new Error();

  const id = crypto.randomUUID();
  await context.env.DB.prepare(
    "INSERT INTO citation (id, citingPaperId, citedPaperId) VALUES (?, ?, ?)"
  )
    .bind(id, body.citingPaperId, body.citedPaperId)
    .run();
  return Response.json({ id, ...body });
};
