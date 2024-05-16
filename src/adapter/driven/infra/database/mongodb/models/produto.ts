import mongoose from "mongoose";
import { Categoria } from "../../../../../../core/domain/produto";
import { mongoConnection } from "../index"

const categoria: Categoria[] = ['Lanche', 'Acompanhamento', 'Bebida', 'Sobremesa']

const Schema = new mongoose.Schema({
  categoria: {
    required: true,
    type: String,
    enum: [...categoria]
  },
  nome: {
    required: true,
    type: String
  },
  preco: {
    required: true,
    type: Number
  },
  description: {
    required: true,
    type: String
  }
}, {
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
})

export const ProdutoModel = mongoConnection.model('produtos', Schema)
