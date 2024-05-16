import { FastifyInstance } from "fastify";
import { createClienteSchema } from "./schemas";
import { validatorCompiler } from "../../../driven/infra/validators/ajv";
import { ClienteRepository } from "../../../driven/infra/repositories/cliente";
import { ClienteService } from "../../../../core/applications/services/clienteService";
import { ClienteController } from "../../controllers/cliente";

export const clienteRoutes = async (app: FastifyInstance) => {
  const clienteRepository = new ClienteRepository();
  const clienteService = new ClienteService(clienteRepository);
  const controller = new ClienteController(clienteService);

  app.get(
    "/cliente",
    {
      validatorCompiler,
    },
    function (request, response) {
      return controller.getCliente(request, response);
    }
  );
  app.post(
    "/cliente",
    {
      schema: createClienteSchema,
      validatorCompiler,
    },
    function (request, response) {
      return controller.createCliente(request, response);
    }
  );
};
