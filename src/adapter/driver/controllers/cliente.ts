import { FastifyReply, FastifyRequest } from "fastify";
import { ClienteService } from "../../../core/applications/services/clienteService";
import { ICliente } from "../../../core/domain";

export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  async getCliente(request: FastifyRequest, response: FastifyReply) {
    const { cpf } = request.query as ICliente;
    const cliente = await this.clienteService.getCliente(cpf);

    return response.status(200).send(cliente);
  }

  async createCliente(request: FastifyRequest, response: FastifyReply) {
    const { email, cpf, nome } = request.body as ICliente;

    const created = await this.clienteService.createCliente({
      email,
      cpf,
      nome,
    });

    return response.status(201).send(created);
  }
}
