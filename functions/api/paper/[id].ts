import { z } from "zod";
import { Env, paperType } from "../../types";

export const pathParamType = z.object({ id: z.string().uuid() });

export const onRequestPut: PagesFunction<Env> = async (context) => {
  const pathParams = pathParamType.parse(context.params);
  const body = paperType.parse(await context.request.json());
  if (pathParams.id !== body.id) throw new Error();
  await context.env.DB.prepare(
    "UPDATE paper SET title = ?, doi = ?, year = ?, author = ?, journal = ? WHERE id = ?"
  )
    .bind(body.title, body.doi, body.year, body.author, body.journal, body.id)
    .run();
  return Response.json(body);
};

export const onRequestDelete: PagesFunction<Env> = async (context) => {
  const pathParams = pathParamType.parse(context.params);
  await context.env.DB.prepare("DELETE FROM paper WHERE id = ?")
    .bind(pathParams.id)
    .run();
  return new Response(null);
};
