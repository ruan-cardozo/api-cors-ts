import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
import { Dialect } from 'sequelize'
dotenv.config()

const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbPass = process.env.DB_PASS as string
const dbHost = process.env.DB_HOST as string
const dbDialect = process.env.DB_DIALECT as Dialect

const dbConnection = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: dbDialect,
})

export { dbConnection }
