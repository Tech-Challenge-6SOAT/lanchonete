import { FastifyInstance } from "fastify";
import { ProdutoController } from "../../controllers/produto";
import { ProdutoService } from "../../../../core/applications/services/produtoService";
import { ProdutoRepository } from "../../../driven/infra/repositories/produto";
import { createProdutoSchema } from "./schemas";
import { validatorCompiler } from "../../../driven/infra/validators/ajv"

export const produtoRoutes = async (app: FastifyInstance) => {
  const produtoRepository = new ProdutoRepository()
  const produtoService = new ProdutoService(produtoRepository)
  const controller = new ProdutoController(produtoService)

  app.post('/produto', {
    schema: createProdutoSchema,
    validatorCompiler
  }, function (request, response) {
    return controller.create(request, response)
  })
}
