import { IProdutoRepository } from "../../../../core/applications/ports/produtoRepository";
import { Categoria, IProduto } from "../../../../core/domain/produto";
import { ProdutoModel } from "../database/mongodb/models";

export class ProdutoRepository implements IProdutoRepository {
  async getProdutosByCategoria(categoria: Categoria): Promise<IProduto[]> {
    return [] as IProduto[]
  }

  async create(produto: Omit<IProduto, 'id'>): Promise<IProduto> {
    const response = await ProdutoModel.create({
      ...produto
    })

    return {
      ...produto,
      id: response._id.toString()
    } as IProduto
  }

  async edit(produto: IProduto): Promise<IProduto> {
    const { id, ...fields } = produto

    const response = await ProdutoModel.findOneAndUpdate({ _id: id },
      { ...fields },
      {
        runValidators: true,
        new: true,
      })

    return response as IProduto
  }

  async delete(id: string): Promise<void> {
    await ProdutoModel.findOneAndDelete({ _id: id });
  }
}
