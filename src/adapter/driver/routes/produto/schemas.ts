const categorias = ['Lanche', 'Acompanhamento', 'Bebida', 'Sobremesa']

export const createProdutoSchema = {
  body: {
    type: 'object',
    properties: {
      categoria: {
        type: 'string',
        enum: categorias
      },
      nome: { type: 'string' },
      preco: { type: 'number' },
      description: { type: 'string' }
    },
    required: ['categoria', 'nome', 'preco', 'description']
  }
}

export const editProdutoSchema = {
  body: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      categoria: {
        type: 'string',
        enum: categorias
      },
      nome: { type: 'string' },
      preco: { type: 'number' },
      description: { type: 'string' }
    },
    required: ['id']
  }
}

export const deleteProdutoSchema = {
  body: {
    type: 'object',
    properties: {
      id: { type: 'string' },
    },
    required: ['id']
  }
}
