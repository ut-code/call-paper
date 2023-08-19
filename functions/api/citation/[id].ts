import { z } from "zod";
import { Env } from "../../types";

export const pathParamType = z.object({ id: z.string().uuid() });

export const onRequestDelete: PagesFunction<Env> = async (context) => {
  const pathParams = pathParamType.parse(context.params);
  await context.env.DB.prepare("DELETE FROM citation WHERE id = ?")
    .bind(pathParams.id)
    .run();
  return new Response(null);
};
