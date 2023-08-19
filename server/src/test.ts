import { Env } from "../types";

export const onRequest: PagesFunction<Env> = async (context) => {
  const data = await context.env.DB.prepare("select * from paper").all();
  return Response.json(data.results);
};
