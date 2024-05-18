import { IPedidoRepository } from "../../../../core/applications/ports";
import { IPedido } from "../../../../core/domain";
import { PedidoModel } from "../database/mongodb/models";

export class PedidoRepository implements IPedidoRepository {
    async getListaPedidos(): Promise<IPedido[]> {
        const response = await PedidoModel.find().populate('produtos cliente');

        return response;
    }

    async create(pedido: Omit<IPedido, 'id'>): Promise<IPedido> {
        const response = await PedidoModel.create(pedido);

        return {
            ...pedido,
            id: response.id
        };
    }
}
