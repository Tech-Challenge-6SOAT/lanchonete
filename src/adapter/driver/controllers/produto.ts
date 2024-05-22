import { FastifyReply, FastifyRequest, RouteGenericInterface } from "fastify";
import { ProdutoService } from "../../../core/applications/services/produtoService";
import { IProduto } from "../../../core/domain/produto";

export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  async getByCategoria(request: FastifyRequest, response: FastifyReply) {
    const { categoria } = request.query as IProduto;

    const produtos = await this.produtoService.getProdutosByCategoria(
      categoria
    );

    return response.status(200).send(produtos);
  }

  async create(request: FastifyRequest, response: FastifyReply) {
    const { categoria, description, nome, preco } = request.body as IProduto;

    const created = await this.produtoService.create({
      categoria,
      description,
      nome,
      preco,
    });

    return response.status(201).send(created);
  }

  async edit(request: FastifyRequest, response: FastifyReply) {
    const { id, categoria, description, nome, preco } =
      request.body as IProduto;

    const edited = await this.produtoService.edit({
      id,
      categoria,
      description,
      nome,
      preco,
    });

    return response.status(200).send(edited);
  }

  async delete(request: FastifyRequest, response: FastifyReply) {
    const { id } = request.body as IProduto;

    await this.produtoService.delete(id);

    return response.status(204).send();
  }
}
