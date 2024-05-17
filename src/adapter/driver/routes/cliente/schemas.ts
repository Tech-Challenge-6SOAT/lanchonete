export const getClienteSchema = {
  querystring: {
    type: "object",
    properties: {
      cpf: {
        type: "string",
      },
    },
    required: ["cpf"],
    additionalProperties: false,
  },
};

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
