export const createClienteSchema = {
  body: {
    type: "object",
    properties: {
      nome: { type: "string" },
      cpf: { type: "string" },
      email: { type: "string" },
    },
    required: ["nome", "cpf", "email"],
  },
};
