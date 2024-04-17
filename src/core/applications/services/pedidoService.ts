import { IPedido } from "../../domain";
import { IPedidoRepository } from "../ports";

export class PedidoService {
    constructor(private readonly pedidoRepository: IPedidoRepository) { }

    async getListaPedidos(): Promise<IPedido[]> {
        return this.pedidoRepository.getListaPedidos();
    }

    async getPedidoById(id: string): Promise<IPedido> {
        return this.pedidoRepository.getPedidoById(id);
    }


}