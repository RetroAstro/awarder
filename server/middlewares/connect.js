import mongoose from 'mongoose'

export const connect = (DB) => {
  mongoose.Promise = global.Promise

  mongoose.connect(DB, { useNewUrlParser: true })

  const db = mongoose.connection

  db.on('error', console.error.bind('connection error :('))

  db.once('open', console.log.bind('connection success :)'))
}
