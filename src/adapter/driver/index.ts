import dotenv from 'dotenv'
import { app } from './app';
import routes from './routes'
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'

dotenv.config()

const start = async () => {
  try {
    app.listen({
      port: 3000,
      host: '0.0.0.0'
    })

    await app.register(swagger, {
      swagger: {
        securityDefinitions: {
          Bearer: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header'
          }
        }
      }
    })

    await app.register(swaggerUi, {
      routePrefix: '/documentation',
      uiConfig: {
        docExpansion: 'full',
        deepLinking: false
      },
      uiHooks: {
        onRequest: function (_request, _reply, next) { next() },
        preHandler: function (_request, _reply, next) { next() }
      },
      staticCSP: true,
      transformStaticCSP: (header) => header,
      transformSpecification: (swaggerObject, _request, _reply) => { return swaggerObject },
      transformSpecificationClone: true,
    })

    await app.register(routes)
    await app.ready()

    app.log.info('Server started successfully')
  } catch (err) {
    app.log.error('Error starting server: ', err)
  }
}

start()
