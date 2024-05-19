import { ICliente } from "./cliente";
import { IProduto } from "./produto";

export type Status = 'Recebido' | 'Em preparação' | 'Pronto' | 'Finalizado'

export type IProdutos = {
    produto: string | IProduto,
    quantidade: number,
}

export type IPedido = {
    id: string;
    status: Status;
    produtos: IProdutos[];
    cliente?: string;
    total: number;
    senha: string;
}

type IProdutosCheckoutInput = {
    produto: string,
    quantidade: number,
}

export type ICheckoutInput = {
    produtos: IProdutosCheckoutInput[];
    cliente?: string;
}
