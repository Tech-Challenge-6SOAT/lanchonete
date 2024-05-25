import { IGetPedido, IPedidoInput, IPedidoResponse } from "../../domain";
import { IPedidoRepository, IProdutoRepository } from "../ports";

export class PedidoService {
  constructor(private readonly pedidoRepository: IPedidoRepository, private readonly produtoRepository: IProdutoRepository) { }

  async getListaPedidos(): Promise<IGetPedido[]> {
    const results = await this.pedidoRepository.getListaPedidos()

    const pedidos = results.map((pedido) => {
      return {
        id: pedido.id,
        status: pedido.status,
        produtos: pedido.produtos,
        cliente: pedido.cliente,
        total: pedido.total,
        senha: pedido.senha
      }
    })

    return pedidos;
  }

  async checkout(pedido: IPedidoInput): Promise<IPedidoResponse> {
    const promises = pedido.produtos.map(async ({ id, quantidade }) => {
      const produto = await this.produtoRepository.getProdutoById(id);
      const valor = produto.preco * quantidade
      return { produto, valor, quantidade };
    });

    const produtos = await Promise.all(promises);
    const total = produtos.reduce((t, { valor }) => t + valor, 0);

    const pedidoCreated = await this.pedidoRepository.create({
      cliente: pedido.clienteId,
      produtos: produtos.map(({ produto, quantidade }) => ({ produto: produto.id, quantidade })),
      total,
      status: 'Em preparação',
      senha: String(Math.floor(Math.random() * 10000)),
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
}
