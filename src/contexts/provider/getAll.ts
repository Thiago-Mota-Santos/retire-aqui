import { FastifyReply, FastifyRequest } from "fastify"
import { provider } from "./core";
import { ProviderInput } from "./type";
import { ProfileModel } from "../../modules/profile/ProfileModel";
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