import { FastifyReply, FastifyRequest, RouteGenericInterface } from "fastify";
import { ProdutoService } from "../../../core/applications/services/produtoService";
import { IProduto } from "../../../core/domain/produto";

export class ProdutoController {
  constructor (private readonly produtoService: ProdutoService) {}

  async create (request: FastifyRequest, response: FastifyReply) {
    const {
      categoria,
      description,
      nome,
      preco
    } = request.body as IProduto

    const created = await this.produtoService.create({
      categoria,
      description,
      nome,
      preco
    })

    return response.status(201).send(created)
  }
}
