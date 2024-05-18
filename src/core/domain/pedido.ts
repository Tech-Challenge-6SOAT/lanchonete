import { IProduto } from "./produto";

export type Status = 'Recebido' | 'Em preparação' | 'Pronto' | 'Finalizado'

export type IPedido = {
    id: string;
    status: Status;
    produtos: IProduto[];
    cliente?: string;
    total: number;
    senha: string;
}

export type ICheckout = {
    id: string;
    status: Status;
    produtos: string[];
    cliente?: string;
    total: number;
    senha: string;
}
