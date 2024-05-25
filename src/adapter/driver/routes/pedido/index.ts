import { FastifyInstance } from "fastify";
import { PedidoController } from "../../controllers";
import { PedidoService } from "../../../../core/applications/services";
import { PedidoRepository, ProdutoRepository } from "../../../driven/infra/repositories";
import { checkoutPedidoSchema, getListaPedidosSchema } from "./schemas";
import { validatorCompiler } from "../../../driven/infra/validators/ajv"

export const pedidoRoutes = async (app: FastifyInstance) => {
  const produtoRepository = new ProdutoRepository()
  const pedidoRepository = new PedidoRepository()
  const pedidoService = new PedidoService(pedidoRepository, produtoRepository)
  const controller = new PedidoController(pedidoService)

  app.get('/pedidos', {
    schema: getListaPedidosSchema,
    validatorCompiler
  }, function (request, response) {
    return controller.getListaPedidos(request, response)
  })

  app.post('/pedido/checkout', {
    schema: checkoutPedidoSchema,
    validatorCompiler
  }, function (request, response) {
    return controller.checkout(request, response)
  })
}
