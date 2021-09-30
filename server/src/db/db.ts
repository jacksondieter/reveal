import mongoose from 'mongoose'
import config from '../config'

export const connect = (url = config.dbUrl, opts = {}) => {
  return mongoose.connect(
    url,
    { ...opts, user:config.user, pass: config.pass, dbName: config.dbName},
    () => {
      console.log('Connected to database')
    }
  )
}
