import { join } from 'path';
import AutoLoad, { AutoloadPluginOptions } from '@fastify/autoload';
import fastify, { FastifyPluginAsync } from 'fastify';
import './database';

export type AppOptions = {
} & Partial<AutoloadPluginOptions>;


const options: AppOptions = {
}

const app: FastifyPluginAsync<AppOptions> = async (
    fastify,
    opts
): Promise<void> => {
  
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: opts
  })

  
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    options: opts
  })
};


export default app;
export { app, options }