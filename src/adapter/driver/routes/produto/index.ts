import { FastifyInstance } from "fastify";
import { ProdutoController } from "../../controllers/produto";
import { ProdutoService } from "../../../../core/applications/services/produtoService";
import { ProdutoRepository } from "../../../driven/infra/repositories/produto";
import { createProdutoSchema, deleteProdutoSchema, editProdutoSchema } from "./schemas";
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

  app.put('/produto', {
    schema: editProdutoSchema,
    validatorCompiler
  }, function (request, response) {
    return controller.edit(request, response)
  })

  app.delete('/produto', {
    schema: deleteProdutoSchema,
    validatorCompiler
  }, function (request, response) {
    return controller.delete(request, response)
  })
}
