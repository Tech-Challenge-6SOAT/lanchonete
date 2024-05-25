import { ICliente } from "./cliente";
import { IProduto } from "./produto";

export type Status = 'Recebido' | 'Em preparação' | 'Pronto' | 'Finalizado'

export type IPedidoInput = {
  produtos: {
    id: string,
    quantidade: number,
  }[];
  clienteId?: string;
}

export type IPedidoResponse = {
  cliente?: ICliente
  produtos: {
    produto: IProduto
    quantidade: number
  }[]
  status: Status
  total: number
  senha: string
}

export type ICreatePedido = {
  id: string
  cliente?: string
  produtos: {
    produto: string
    quantidade: number
  }[]
  senha: string
  total: number
  status: Status
}

export type IGetPedido = {
  id: string
  cliente?: ICliente
  produtos: {
    produto: IProduto
    quantidade: number
  }[]
  status: Status
  total: number
  senha: string
}

