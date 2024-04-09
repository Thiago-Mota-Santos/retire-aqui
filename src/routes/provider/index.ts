import { FastifyPluginAsync, RouteOptions } from "fastify"
import handler from "../../contexts/provider/handler"

const properties = {
    CPF: { type: 'string' },
    productName: { type: 'string' },
    whereIsPurchased: { type: 'string' },
    deliveryDate: { type: 'string' },
    productSize: { type: 'string', enum: ['small', 'medium', 'large'] },
    address: { type: 'string' },
    hasRequisitioned: { type: 'boolean' },
    status: { type: 'string', enum: ['pending', 'done'] },
  }

const provider: FastifyPluginAsync = async (fastify): Promise<void> => {
  const options: RouteOptions = {
    method: 'POST',
    url: '/',
    schema: {
      body: {
        type: 'object',
        properties,
        required: Object.keys(properties),
      },
    },
    handler: async function (request, reply) {
      return handler(request, reply)
    }
  }
  fastify.route(options)
}

export default provider;