import { IPedidoRepository } from "../../../core/applications/ports";
import { IPedido } from "../../../core/domain";

export class InMemoryPedidoRepository implements IPedidoRepository {
    private readonly pedidos: IPedido[] = [
        { id: '1', status: 'Preparando', itens: ['Bebida', 'Lanche'] },
        { id: '2', status: 'Pronto', itens: ['Bebida', 'Lanche', 'Batata'] },
    ];

    async getListaPedidos(): Promise<IPedido[]> {
        const pedidos = this.pedidos;
        return pedidos;
    }

    async getPedidoById(id: string): Promise<IPedido> {
        const pedido = this.pedidos.find((u) => u.id === id);
        if (!pedido) {
            throw new Error(`Pedido with id ${id} not found`);
        }
        return pedido;
    }
}