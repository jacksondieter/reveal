import express,{json} from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './config/'
import {connect} from './db/db'
import secretRouter from './controllers/router'

export const app = express()

app.use(cors())
app.use(json())
app.use(morgan('dev'))

app.use('/api',secretRouter)
app.use('/',async (req, res) => {
    res.send("/api/");
  })

export const start = async () => {
    try {
      await connect()
      app.listen(config.port, config.serverLog)
    } catch (e) {
      console.error(e)
    }
  }