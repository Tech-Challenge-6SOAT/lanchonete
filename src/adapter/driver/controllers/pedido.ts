import { FastifyReply, FastifyRequest, RouteGenericInterface } from "fastify";
import { PedidoService } from "../../../core/applications/services";
import { IPedido } from "../../../core/domain";


export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  async getListaPedidos(request: FastifyRequest, response: FastifyReply) {
    const pedidos = await this.pedidoService.getListaPedidos();

    return response.status(200).send(pedidos);
  }

  async checkout (request: FastifyRequest, response: FastifyReply) {
    const pedido = request.body as IPedido

    const created = await this.pedidoService.checkout(pedido)

    return response.status(201).send(created)
  }
}
