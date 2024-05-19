import { Categoria, IProduto } from '../../domain/produto';
import type { IProdutoRepository } from '../ports/produtoRepository'

export class ProdutoService {
    constructor(private readonly produtoRepository: IProdutoRepository) { }

    async getProdutosByCategoria(categoria: Categoria): Promise<IProduto[]> {
        return this.produtoRepository.getProdutosByCategoria(categoria)
    }

    async getProdutoById(id: string): Promise<IProduto> {
        return this.produtoRepository.getProdutoById(id)
    }

    async create(produto: Omit<IProduto, 'id'>): Promise<IProduto> {
        return this.produtoRepository.create(produto)
    }

    async edit(produto: IProduto): Promise<IProduto> {
        return this.produtoRepository.edit(produto)
    }

    async delete(id: string): Promise<void> {
        return this.produtoRepository.delete(id)
    }
}
