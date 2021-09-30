const {
  MONGO_HOST: dbUrl = 'mongodb://localhost:27017/',
  MONGO_PORT: dbport = 5432,
  MONGO_DB: dbName = 'reveal',
  MONGO_USER: user = 'reveal_user',
  MONGO_PASSWORD: pass = 'password123',
  PORT: port = 8080,
  HOST: host = 'localhost'
} = process.env

const apiUrl = `http://${host}:${port}/api`

const serverLog = (): void => {
  console.log(`REST API on ${apiUrl}`)
}

export default {
  dbUrl,
  user,
  pass,
  dbName,
  serverLog,
  port,
  host,
  apiUrl
}