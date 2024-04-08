import 'dotenv/config'

import fp from 'fastify-plugin'
import fastifyRedis, { FastifyRedisPluginOptions, FastifyRedis } from '@fastify/redis'

export default fp<FastifyRedisPluginOptions>(async (fastify, opts) => {
  fastify.register(fastifyRedis, {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    password: process.env.REDIS_PASSWORD,
  })
})

declare module 'fastify' {
  interface FastifyInstance {
    redis: FastifyRedis
  }
}