import { ICreatePedido, IGetPedido } from "../../domain";

export interface IPedidoRepository {
    getListaPedidos(): Promise<IGetPedido[]>;
    create(pedido: Omit<ICreatePedido, 'id'>): Promise<ICreatePedido>;
}
