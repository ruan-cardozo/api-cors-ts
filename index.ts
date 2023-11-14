import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { dbConnection } from './src/config/mariadb-connection'
import { router as ClassController } from './src/routes/class-routes'
import { router as CourseController } from './src/routes/course-routes'
import { router as TeacherController } from './src/routes/teacher-routes'

const server = express()
dotenv.config()
server.use(express.json())
server.use(cors())
server.use('/api', ClassController, CourseController, TeacherController)

try {
  const port = process.env.SERVER_PORT
  server.listen(port, () => {
    console.log('Servidor online na porta: ', port)
  })
} catch (error) {
  console.error('Ocorreu um erro ao se conectar com o servidor', error)
}

try {
  dbConnection.authenticate()
  console.log('Conectado ao banco de dados!')
} catch (error) {
  console.error('Ocorreu um erro ao se conectar com o banco de dados', error)
}

export { server }
