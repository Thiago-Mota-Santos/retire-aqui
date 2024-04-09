import { FastifyPluginAsync, RouteOptions } from "fastify"
import handler from "../../contexts/login/handler"

const login: FastifyPluginAsync = async (fastify): Promise<void> => {
  const options: RouteOptions = {
    method: 'POST',
    url: '/',
    schema: {
      body: {
        type: 'object',
        properties: {
          email: { type: 'string' },
          password: { type: 'string' },
        },
        required: ['email', 'password'],
      },
    },
    handler: async function (request, reply) {
      return handler(fastify, request, reply)
    }
  }
  fastify.route(options)
}

export default login;