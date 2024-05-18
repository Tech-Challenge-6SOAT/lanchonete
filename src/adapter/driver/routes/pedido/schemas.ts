export const checkoutPedidoSchema = {
  body: {
    type: 'object',
    properties: {
      produtos: {
        type: 'array',
        items: {
          type: 'string'
        }
      },
      cliente: { type: 'string' },
    },
    required: ['produtos', 'cliente']
  }
}