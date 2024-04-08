import { FastifyReply, FastifyRequest } from "fastify"
import { RegisterInput } from "./types";
import { register } from "./core";

async function handler(request: FastifyRequest, reply: FastifyReply) {
  console.log("kkk 1")
  const { error, data } = await register(request.body as RegisterInput)
  console.log("kkk 2")
  if (error) {
    reply.status(400).send({ message: error });
    return;
  }

  reply.status(200).send(data);
}

export default handler;