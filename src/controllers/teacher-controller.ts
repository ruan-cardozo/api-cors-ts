import { Request, Response } from 'express'
import { Teacher } from '../models/teacher-model'

export class TeacherController {
  public async getAllCourses(req: Request, res: Response): Promise<void> {
    try {
      const courses = await Teacher.findAll()
      res.send(courses)
    } catch (e) {
      console.error('Ocorreu um erro ao buscar os professores : ', e)
      res.status(500).send('Erro ao buscas as professores')
    }
  }

  public async createCourse(req: Request, res: Response): Promise<void> {
    try {
      await Teacher.create(req.body)
      res.json({
        message: 'Professor criada com sucesso',
      })
    } catch (e) {
      console.error('Ocorreu um erro ao cadastrar um professor: ', e)
      res.status(500).send('Erro ao criar um professor')
    }
  }

  public async editCourse(req: Request, res: Response): Promise<void> {
    try {
      await Teacher.update(req.body, {
        where: {
            matr_professor: req.params.matr_professor,
        },
      })
      res.json({
        message: `O Curprofessorso ${req.params.matr_professor} foi atualizado com sucesso!`,
      })
    } catch (e) {
      console.error('Ocorreu um erro ao atualizar um professor: ', e)
      res.status(500).send('Erro ao atualiar o professor')
    }
  }

  public async deleteCourse(req: Request, res: Response): Promise<void> {
    try {
      await Teacher.destroy({
        where: { matr_professor: req.params.matr_professor },
      })
      res.json({
        message: `O professor ${req.params.matr_professor} foi deletada com sucesso!`,
      })
    } catch (e) {
      console.error('Ocorreu um erro ao deletar um professor: ', e)
      res.status(500).send('Erro ao deletar um professor')
    }
  }
}
