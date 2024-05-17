import mongoose from "mongoose";
import { mongoConnection } from "../index";
import { Email } from "../../../../../../core/domain/value-objects/email";
import { CPF } from "../../../../../../core/domain/value-objects/cpf";

interface ValidationProps {
  value: string;
}

const Schema = new mongoose.Schema(
  {
    nome: {
      required: true,
      type: String,
    },
    cpf: {
      required: true,
      type: String,
      unique: true,
      validate: {
        validator: (value: string) => {
          try {
            CPF.create(value);
            return true;
          } catch {
            return false;
          }
        },
        message: (props: ValidationProps) =>
          `${props.value} não é um CPF válido`,
      },
    },
    email: {
      required: true,
      type: String,
      validate: {
        validator: (value: string) => {
          try {
            Email.create(value);
            return true;
          } catch {
            return false;
          }
        },
        message: (props: ValidationProps) =>
          `${props.value} não é um email válido`,
      },
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

export const ClienteModel = mongoConnection.model("clientes", Schema);
