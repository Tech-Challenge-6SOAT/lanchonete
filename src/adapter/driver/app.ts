import express from "express";
import { PedidoController } from "./pedidoController";
import { PedidoService } from "../../core/applications/services";
import { InMemoryPedidoRepository } from "../driven/infra";

const pedidoRepository = new InMemoryPedidoRepository();
const pedidoService = new PedidoService(pedidoRepository);
const pedidoController = new PedidoController(pedidoService);

const app = express();
app.get('/pedidos', pedidoController.getListaPedidos.bind(pedidoController));
app.get('/pedido/:id', pedidoController.getPedidoById.bind(pedidoController));
app.listen(3000, () => console.log('Server is listening on port 3000'));