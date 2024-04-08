import fp from 'fastify-plugin'
import db from '../database'

export default fp(async (fastify) => {
  fastify.addHook('onClose', async (_, done) => {
    await db.close()
    done()
  })
})