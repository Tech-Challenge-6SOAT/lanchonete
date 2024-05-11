import { Logger } from "../../logs/logger"
import mongoose from "mongoose"

export class MongoConnection {
  connection: mongoose.Connection

  constructor () {
    this.connection = this.connect()
  }

  private connect () {
    const mongoUsername = process.env.MONGODB_USERNAME
    const mongoPassword = process.env.MONGODB_PASSWORD
    const mongoHost = process.env.MONGODB_HOST
    const mongoDatabase = process.env.MONGODB_DATABASE
    const url = `mongodb://${mongoUsername}:${mongoPassword}@${mongoHost}/${mongoDatabase}?retryWrites=true&w=majority`
    const conn = mongoose.createConnection(url)

    conn.once('connected', () => {
      Logger.info('MongoDB is connected!')
    })

    conn.on('error', (err: Error) => {
      Logger.error('MongoDBconnection error:', err)
    })

    conn.on('disconnected', () => {
      Logger.error('MongoDB disconnected')
    })

    return conn
  }
}

export const mongoConnection = new MongoConnection().connection
