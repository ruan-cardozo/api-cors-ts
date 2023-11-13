import { DataTypes } from 'sequelize';
import { dbConnection } from '../config/mariadb-connection';

const Teacher = dbConnection.define(
  'professor',
  {
    matr_professor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nome_professor: {
      type: DataTypes.STRING(200),
    },
    email_professor: {
      type: DataTypes.STRING(100),
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
)

export { Teacher };
