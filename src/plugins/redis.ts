import fp from 'fastify-plugin'
import fastifyRedis, { FastifyRedisPluginOptions, FastifyRedis } from '@fastify/redis'
import { config } from '../config'

export default fp<FastifyRedisPluginOptions>(async (fastify, opts) => {
  fastify.register(fastifyRedis, {
    host: config.REDIS_HOST,
    port: Number(config.REDIS_PORT),
    password: config.REDIS_PASSWORD,
  })
})

declare module 'fastify' {
  interface FastifyInstance {
    redis: FastifyRedis
  }
}