import { add } from "mathjs";

export async function onRequest(): Promise<Response> {
  return new Response(`Hello World2!${add(1, 2).toString()}`);
}
