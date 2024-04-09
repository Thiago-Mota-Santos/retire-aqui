import { FastifyPluginAsync, RouteOptions } from "fastify"
import getAll from "../../contexts/provider/getAll"

const providers: FastifyPluginAsync = async (fastify): Promise<void> => {
  const options: RouteOptions = {
    method: 'GET',
    url: '/',

    handler: async function (_, reply) {
      return getAll(reply)
    }
  }
  fastify.route(options)
}

export default providers;