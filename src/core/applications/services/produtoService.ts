import { Categoria, IProduto } from '../../domain/produto';
import type { IProdutoRepository } from '../ports/produtoRepository'

export class ProdutoService {
    constructor(private readonly produtoRepository: IProdutoRepository) { }

    async getProdutosByCategoria(categoria: Categoria): Promise<IProduto[]> {
        return this.produtoRepository.getProdutosByCategoria(categoria)
    }

    async create(produto: Omit<IProduto, 'id'>): Promise<IProduto> {
        return this.produtoRepository.create(produto)
    }

    async edit(produto: IProduto): Promise<IProduto> {
        return this.produtoRepository.edit(produto)
    }

    async delete(id: number): Promise<void> {
        return this.produtoRepository.delete(id)
    }
}
