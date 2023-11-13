import { DataTypes } from 'sequelize';
import { dbConnection } from '../config/mariadb-connection';

const Course = dbConnection.define(
  'curso',
  {
    id_curso: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nome_curso: {
      type: DataTypes.STRING(100),
    },

    id_turma: {
      type: DataTypes.INTEGER,
    },

    matr_professor: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
)

export { Course };
