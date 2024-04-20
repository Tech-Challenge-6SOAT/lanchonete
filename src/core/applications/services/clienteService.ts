import type { ICliente } from '../../domain/cliente'
import { IClienteRepository } from '../ports/clienteRepository'

export class ClienteService {
    constructor(private readonly clienteRepository: IClienteRepository) { }

    async getCliente(cpf: string): Promise<ICliente> {
        return this.clienteRepository.getCliente(cpf)
    }

    async createCliente(cliente: ICliente): Promise<ICliente> {
        return this.clienteRepository.createCliente(cliente)
    }
}
