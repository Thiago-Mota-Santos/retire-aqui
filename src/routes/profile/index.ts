import { FastifyPluginAsync, RouteOptions } from "fastify"
import handler from "../../contexts/profile/handler"

const profile: FastifyPluginAsync = async (fastify): Promise<void> => {
  const options: RouteOptions = {
    method: 'POST',
    url: '/',
    schema: {
      body: {
        type: 'object',
        properties: {
          CPF: { type: 'string' },
          type: { type: 'string', enum: ['provider', 'receiver'] },
        },
        required: ['CPF', 'type'],
      },
    },
    handler: async function (request, reply) {
      return handler(request, reply)
    }
  }
  fastify.route(options)
}

export default profile;