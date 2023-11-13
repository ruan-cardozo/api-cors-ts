import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { dbConnection } from './src/config/mariadb-connection'

const server = express()
server.use(express.json())
server.use(cors())
dotenv.config()

try {
  const port = process.env.SERVER_PORT
  server.listen(port, () => {
    console.log('Servidor online na porta: ', port)
  })
} catch (error) {
  console.error('Ocorreu um erro ao se conectar com o servidor', error)
}

try {
    dbConnection.authenticate();
    console.log("Conectado ao banco de dados!");
    
} catch (error) {
    console.error("Ocorreu um erro ao se conectar com o banco de dados", error);
}
