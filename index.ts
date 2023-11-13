import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const server = express()
server.use(express.json())
server.use(cors())
dotenv.config()

const port = process.env.SERVER_PORT
server.listen(port, () => {
    console.log('Servidor online na porta: ',port);
})


