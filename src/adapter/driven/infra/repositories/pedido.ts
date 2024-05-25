import { IPedidoRepository } from "../../../../core/applications/ports";
import { ICreatePedido, IGetPedido } from "../../../../core/domain";
import { PedidoModel } from "../database/mongodb/models";

export class PedidoRepository implements IPedidoRepository {
  async getListaPedidos(): Promise<IGetPedido[]> {
    const response = await PedidoModel.find().populate('produtos.produto cliente').sort('-createdAt');
    return response as unknown as IGetPedido[];
  }

  async create(pedido: Omit<ICreatePedido, 'id'>): Promise<ICreatePedido> {
    const response = await PedidoModel.create(pedido);
    return {
      ...pedido,
      id: response.id
    };
  }
}
