export type Categoria = 'Lanche' | 'Acompanhamento' | 'Bebida' | 'Sobremesa'

export type IProduto = {
    id: string;
    categoria: Categoria;
    nome: string;
    preco: number;
    description: string;
}
