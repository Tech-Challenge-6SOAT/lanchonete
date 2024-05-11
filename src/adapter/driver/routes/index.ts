import { FastifyInstance } from "fastify";
import { produtoRoutes } from './produto'

const apiRoutes = async (app: FastifyInstance) => {
  app.register(produtoRoutes)
  app.get('/', async () => {
    return {
      message: 'API IS ON FIRE!'
    }
  })
}

export default apiRoutes
