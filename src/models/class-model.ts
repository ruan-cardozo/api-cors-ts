import { DataTypes } from 'sequelize'
import { dbConnection } from '../config/mariadb-connection'

const Class = dbConnection.define(
  'turma',
  {
    id_turma: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nome_turma: {
      type: DataTypes.STRING(100),
    },
    turno_turma: {
      type: DataTypes.STRING(100),
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
)
