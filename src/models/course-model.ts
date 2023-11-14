import { DataTypes } from 'sequelize';
import { dbConnection } from '../config/mariadb-connection';
import { Teacher } from './teacher-model';
import { Class } from './class-model';

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
);

export { Course };

Course.belongsTo(Teacher, {
  foreignKey: 'matr_professor',
  as: 'professor',
  constraints: true,
})

Course.belongsTo(Class, {
  foreignKey: 'id_turma',
  as: 'turma',
  constraints: true,
})


