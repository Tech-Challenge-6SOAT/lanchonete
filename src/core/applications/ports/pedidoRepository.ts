import { IPedido } from "../../domain";

export interface IPedidoRepository {
    getPedidoById(id: string): Promise<IPedido>;
    getListaPedidos(): Promise<IPedido[]>;
}