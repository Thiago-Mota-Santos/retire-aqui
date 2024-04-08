// index.ts

import fastify from 'fastify';
import app from './app'; 

const start = async () => {
  try {
    const server = fastify();

    await server.register(app);
    
    const address = await server.listen({ port: 5666 });
    console.log(`Server listening on ${address}`);
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
};

start();
