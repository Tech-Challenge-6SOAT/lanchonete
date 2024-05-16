import mongoose from "mongoose";
import { mongoConnection } from "../index";

const Schema = new mongoose.Schema(
  {
    nome: {
      required: true,
      type: String,
    },
    cpf: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

export const ClienteModel = mongoConnection.model("clientes", Schema);
