import { FastifyReply, FastifyRequest } from "fastify"
import { ProfileInput } from "./types";
import { profile } from "./core";

async function handler(request: FastifyRequest, reply: FastifyReply) {
  const { error, data } = await profile(request.body as ProfileInput)
  
  if (error) {
    reply.status(401).send({ message: error });
    return;
  }

  reply.status(200).send(data);
}

export default handler;