import { ICheckout, IPedido } from "../../domain";
import { IPedidoRepository, IProdutoRepository } from "../ports";

export class PedidoService {
    constructor(private readonly pedidoRepository: IPedidoRepository, private readonly produtoRepository: IProdutoRepository) { }

    async getListaPedidos(): Promise<IPedido[]> {
        return this.pedidoRepository.getListaPedidos();
    }

    async checkout(pedido: Omit<IPedido, 'id' | 'status' | 'total'>): Promise<ICheckout> {
        const promises = pedido.produtos.map(async (id) => {
            const produto = await this.produtoRepository.getProdutoById(id);
            return produto;
        });

        const produtos = await Promise.all(promises);
        const total = produtos.reduce((t, { preco }) => t + preco, 0);
        const nomeProdutos = produtos.map(({ nome }) => nome);

        const pedidoCreated = await this.pedidoRepository.create({
            ...pedido,
            total,
            status: 'Em preparação',
            senha: '1001',
        })

        const checkout = {
            id: pedidoCreated.id,
            status: pedidoCreated.status,
            produtos: nomeProdutos,
            total,
            senha: pedidoCreated.senha,
        }

        return checkout;
    }
}
