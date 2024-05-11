import Fastify from "fastify";

export const app = Fastify({
  logger: {
    transport: {
      target: 'pino-pretty'
    }
  } 
});
