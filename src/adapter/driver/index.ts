import { app } from './app';

const start = async () => {
  try {
    app.listen({
      port: 3000,
      host: '0.0.0.0'
    })

    app.log.info('Server started successfully')
  } catch (err) {
    app.log.error('Error starting server: ', err)
  }
}

start()
