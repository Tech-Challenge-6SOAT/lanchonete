import { FastifyReply, FastifyRequest, RouteGenericInterface } from "fastify";
import { PedidoService } from "../../../core/applications/services";
import { ICheckoutInput } from "../../../core/domain";


export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) { }

  async getListaPedidos(request: FastifyRequest, response: FastifyReply) {
    const pedidos = await this.pedidoService.getListaPedidos();

    return response.status(200).send(pedidos);
  }

  async checkout(request: FastifyRequest, response: FastifyReply) {
    const { produtos, cliente } = request.body as ICheckoutInput

    const created = await this.pedidoService.checkout({ produtos, cliente })

    return response.status(201).send(created)
  }
}
