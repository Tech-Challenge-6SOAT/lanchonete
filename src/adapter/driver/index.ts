import dotenv from 'dotenv'
import { app } from './app';
import routes from './routes'

dotenv.config()

const start = async () => {
  try {
    app.listen({
      port: 3000,
      host: '0.0.0.0'
    })

    await app.register(routes)

    app.log.info('Server started successfully')
  } catch (err) {
    app.log.error('Error starting server: ', err)
  }
}

start()
