import type { ICliente } from '../../domain/cliente';
import { CPF } from '../../domain/value-objects/cpf';
import { Email } from '../../domain/value-objects/email';
import { IClienteRepository } from '../ports/clienteRepository';

export class ClienteService {
  constructor(private readonly clienteRepository: IClienteRepository) { }

  async getCliente(cpf: string): Promise<ICliente> {
    return this.clienteRepository.getCliente(cpf);
  }

  async createCliente(cliente: ICliente): Promise<ICliente> {
    const email = new Email(cliente.email).getValue();
    const cpf = new CPF(cliente.cpf).getValue();
    return this.clienteRepository.createCliente({
      ...cliente,
      email,
      cpf
    });
  }
}
