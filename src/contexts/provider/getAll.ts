import { FastifyReply } from "fastify"

import { ProviderModel } from "../../modules/provider/providerModel";

async function getAll(reply: FastifyReply) {
   const providers = await ProviderModel.find();
   
   if (!providers) {
      reply.status(401).send({ message: "There is no provider" });
      return;
}
 
  reply.status(200).send(providers);
}

export default getAll;