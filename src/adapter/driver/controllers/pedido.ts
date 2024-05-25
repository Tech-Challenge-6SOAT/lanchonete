import { FastifyReply, FastifyRequest, RouteGenericInterface } from "fastify";
import { PedidoService } from "../../../core/applications/services";
import { IPedidoInput } from "../../../core/domain";


export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) { }

  async getListaPedidos(_request: FastifyRequest, response: FastifyReply) {
    const pedidos = await this.pedidoService.getListaPedidos();
    return response.status(200).send(pedidos);
  }

  async checkout(request: FastifyRequest, response: FastifyReply) {
    const { produtos, clienteId } = request.body as IPedidoInput
    const created = await this.pedidoService.checkout({ produtos, clienteId })
    return response.status(201).send(created)
  }
}
