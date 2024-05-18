import { IPedido } from "../../domain";

export interface IPedidoRepository {
    getListaPedidos(): Promise<IPedido[]>;
    create(pedido: Omit<IPedido, 'id'>): Promise<IPedido>;
}
