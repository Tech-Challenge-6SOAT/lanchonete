import { ICheckoutInput, IPedido, IProdutos } from "../../domain";
import { IPedidoRepository, IProdutoRepository } from "../ports";

export class PedidoService {
    constructor(private readonly pedidoRepository: IPedidoRepository, private readonly produtoRepository: IProdutoRepository) { }

    async getListaPedidos(): Promise<IPedido[]> {
        const results = await this.pedidoRepository.getListaPedidos()

        const pedidos = results.map((pedido) => {
            const produtos = this.transformProdutos(pedido.produtos);


            return {
                id: pedido.id,
                status: pedido.status,
                produtos,
                cliente: pedido?.cliente?.nome,
                total: pedido.total,
                senha: pedido.senha
            }
        })

        return pedidos;
    }

    async checkout(pedido: ICheckoutInput): Promise<IPedido> {
        const promises = pedido.produtos.map(async ({ produto: id, quantidade }) => {
            const produto = await this.produtoRepository.getProdutoById(id);
            const valor = produto.preco * quantidade

            return { produto, valor, quantidade };
        });

        const results = await Promise.all(promises);
        const total = results.reduce((t, { valor }) => t + valor, 0);
        const produtos = this.transformProdutos(results);

        const pedidoCreated = await this.pedidoRepository.create({
            ...pedido,
            total,
            status: 'Em preparação',
            senha: '1001',
        })

        const checkout = {
            id: pedidoCreated.id,
            status: pedidoCreated.status,
            produtos,
            total,
            senha: pedidoCreated.senha,
        }

        return checkout;
    }

    private transformProdutos(produtos: IProdutos[]): IProdutos[] {
        return produtos.map(({ produto, quantidade }) => ({ produto: produto.nome, quantidade }))
    }
}
