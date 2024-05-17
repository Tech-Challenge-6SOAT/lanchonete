import { FastifyReply, FastifyRequest, RouteGenericInterface } from "fastify";
import { ClienteService } from "../../../core/applications/services/clienteService";
import { ICliente } from "../../../core/domain/cliente";
import { Email } from "../../../core/domain/value-objects/email";
import { CPF } from "../../../core/domain/value-objects/cpf";

export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  async getCliente(request: FastifyRequest, response: FastifyReply) {
    const { cpf } = request.query as ICliente;
    const cliente = await this.clienteService.getCliente(cpf);

    return response.status(200).send(cliente);
  }

  async createCliente(request: FastifyRequest, response: FastifyReply) {
    const { email, cpf, nome } = request.body as ICliente;

    const emailV0 = Email.create(email);
    const cpfV0 = CPF.create(cpf);

    const created = await this.clienteService.createCliente({
      email: emailV0.getValue(),
      cpf: cpfV0.getValue(),
      nome,
    });

    return response.status(201).send(created);
  }
}
