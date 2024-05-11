export const createProdutoSchema = {
  body: {
    type: 'object',
    properties: {
      categoria: {
        type: 'string',
        enum: ['Lanche', 'Acompanhamento', 'Bebida', 'Sobremesa']
      },
      nome: { type: 'string' },
      preco: { type: 'number' },
      description: { type: 'string' }
    },
    required: ['categoria', 'nome', 'preco', 'description']
  }
}
