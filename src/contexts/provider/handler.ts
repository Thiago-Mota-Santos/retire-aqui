import { FastifyReply, FastifyRequest } from "fastify"
import { provider } from "./core";
import { ProviderInput } from "./type";

async function handler(request: FastifyRequest, reply: FastifyReply) {
  const { data } = await provider(request.body as ProviderInput)
  
  if (!data) {
    reply.status(401).send({ message: "some error ocurred" });
    return;
  }

  reply.status(200).send(data);
}

export default handler;