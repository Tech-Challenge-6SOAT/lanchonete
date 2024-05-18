import { FastifyInstance } from "fastify";
import { pedidoRoutes } from "./pedido";
import { produtoRoutes } from "./produto";
import { clienteRoutes } from "./cliente";

const apiRoutes = async (app: FastifyInstance) => {
  app.register(pedidoRoutes);
  app.register(produtoRoutes);
  app.register(clienteRoutes);
  app.get("/", async () => {
    return {
      message: "API IS ON FIRE!",
    };
  });
};

export default apiRoutes;
