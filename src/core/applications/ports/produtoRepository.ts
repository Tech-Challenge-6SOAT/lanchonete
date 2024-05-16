import { Categoria, IProduto } from "../../domain/produto";

export interface IProdutoRepository {
    getProdutosByCategoria(categoria: Categoria): Promise<IProduto[]>;
    create(produto: Omit<IProduto, 'id'>): Promise<IProduto>;
    edit(produto: IProduto): Promise<IProduto>;
    delete(id: string): Promise<void>;
}
