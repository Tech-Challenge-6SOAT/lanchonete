import { IProduto } from "./produto";

export type IPedido = {
    id: string;
    status: string;
    produtos: IProduto[];
    cpf?: string;
    total: number;
}
