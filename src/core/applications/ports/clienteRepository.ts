import type { ICliente } from "../../domain/cliente";

export interface IClienteRepository {
    getCliente(cpf: string): Promise<ICliente>;
    createCliente(cliente: ICliente): Promise<ICliente>;
}
