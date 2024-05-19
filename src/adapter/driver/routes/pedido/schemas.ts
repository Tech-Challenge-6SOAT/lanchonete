const produtosSchema = {
  type: "object",
  properties: {
    produto: { type: 'string' },
    quantidade: { type: 'number' }
  },
  required: ['produto', 'quantidade']
}

export const checkoutPedidoSchema = {
  body: {
    type: 'object',
    properties: {
      produtos: {
        type: 'array',
        items : produtosSchema
      },
      cliente: { type: 'string' },
    },
    required: ['produtos']
  }
}
