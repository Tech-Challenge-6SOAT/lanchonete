import express, { Request, Response } from 'express';
import { PedidoService } from '../../core/applications/services';

export class PedidoController {
    constructor(private readonly pedidoService: PedidoService) { }

    async getListaPedidos(req: Request, res: Response) {
        const pedidos = await this.pedidoService.getListaPedidos();
        res.status(200).json(pedidos);
    }

    async getPedidoById(req: Request, res: Response) {
        const id = req.params.id;
        const pedido = await this.pedidoService.getPedidoById(id);
        res.status(200).json(pedido);
    }
}
