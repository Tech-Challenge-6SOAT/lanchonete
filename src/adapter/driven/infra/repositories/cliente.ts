import { IClienteRepository } from "../../../../core/applications/ports/clienteRepository";
import { ICliente } from "../../../../core/domain/cliente";
import { ClienteModel } from "../database/mongodb/models/cliente";

export class ClienteRepository implements IClienteRepository {
  async getCliente(cpf: String): Promise<ICliente> {
    const response = await ClienteModel.findOne({ cpf });
    return response as ICliente;
  }

  async createCliente(cliente: ICliente): Promise<ICliente> {
    const response = await ClienteModel.create({
      ...cliente,
    });

    return {
      ...cliente,
      id: response._id.toString(),
    } as ICliente;
  }
}
