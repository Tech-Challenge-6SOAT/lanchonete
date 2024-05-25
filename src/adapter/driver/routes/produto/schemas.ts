const categorias = ["Lanche", "Acompanhamento", "Bebida", "Sobremesa"];

export const getProdutosByCategoriaSchema = {
  tags: ["produto"],
  query: {
    type: "object",
    properties: {
      categoria: {
        type: "string",
      },
    },
    required: ["categoria"],
    additionalProperties: false,
  },
  response: {
    200: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          categoria: { type: "string" },
          nome: { type: "string" },
          preco: { type: "number" },
          description: { type: "string" },
        },
        required: ["categoria", "nome", "preco", "description"],
      },
    },
  },
};

export const createProdutoSchema = {
  tags: ["produto"],
  body: {
    type: "object",
    properties: {
      categoria: {
        type: "string",
        enum: categorias,
      },
      nome: { type: "string" },
      preco: { type: "number" },
      description: { type: "string" },
    },
    required: ["categoria", "nome", "preco", "description"],
  },
  response: {
    201: {
      type: "object",
      properties: {
        id: { type: "string" },
        categoria: {
          type: "string",
          enum: categorias,
        },
        nome: { type: "string" },
        preco: { type: "number" },
        description: { type: "string" },
      },
    },
  },
};

export const editProdutoSchema = {
  tags: ["produto"],
  body: {
    type: "object",
    properties: {
      id: { type: "string" },
      categoria: {
        type: "string",
        enum: categorias,
      },
      nome: { type: "string" },
      preco: { type: "number" },
      description: { type: "string" },
    },
    required: ["id"],
  },
  response: {
    200: {
      type: "object",
      properties: {
        id: { type: "string" },
        categoria: {
          type: "string",
          enum: categorias,
        },
        nome: { type: "string" },
        preco: { type: "number" },
        description: { type: "string" },
      },
    },
  },
};

export const deleteProdutoSchema = {
  tags: ["produto"],
  body: {
    type: "object",
    properties: {
      id: { type: "string" },
    },
    required: ["id"],
  },
  response: {
    204: {
      type: "object",
    },
  },
};
