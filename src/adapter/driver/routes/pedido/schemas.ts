const produtosSchema = {
  type: "object",
  properties: {
    id: { type: 'string' },
    quantidade: { type: 'number' }
  },
  required: ['id', 'quantidade']
}

export const checkoutPedidoSchema = {
  tags: ['pedido'],
  body: {
    type: 'object',
    properties: {
      produtos: {
        type: 'array',
        items : produtosSchema
      },
      clienteId: { type: 'string' },
    },
    required: ['produtos']
  },
  response: {
    201: {
      type: "object",
      properties: {
        id: { type: "string" },
        status: { type: "string" },
        produtos: {
          type: "array",
          items: {
            type: "object",
            properties: {
              produto: {
                type: "object",
                properties: {
                  id: { type: "string" },
                  nome: { type: "string" },
                  categoria: { type: "string" },
                  description: { type: "string" },
                  preco: { type: "number" }
                }
              },
              quantidade: {
                type: "number"
              }
            }
          }
        },
        total: { type: "string" },
        senha: { type: "string" }
      }
    }
  }
}

export const getListaPedidosSchema = {
  tags: ['pedido'],
  response: {
    200: {
      type: 'array',
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          status: { type: "string" },
          total: { type: "number" },
          senha: { type: "string" },
          produtos: {
            type: "array",
            items: {
              type: "object",
              properties: {
                produto: {
                  type: "object",
                  properties: {
                    id: { type: "string" },
                    nome: { type: "string" },
                    categoria: { type: "string" },
                    description: { type: "string" },
                    preco: { type: "number" }
                  }
                },
                quantidade: {
                  type: "number"
                }
              }
            },
          },
          cliente: {
            type: "object",
            properties: {
              id: { type: "string" },
              nome: { type: "string" },
              cpf: { type: "string" },
              email: { type: "string" }
            }
          }
        }
      }
    }
  }
}
