import { Request, Response } from 'express'
import { Course } from '../models/course-model'

export class CourseController {
  public async getAllCourses(req: Request, res: Response): Promise<void> {
    try {
      const courses = await Course.findAll()
      res.send(courses)
    } catch (e) {
      console.error('Ocorreu um erro ao buscar as cursos: ', e)
      res.status(500).send('Erro ao buscas as cursos')
    }
  }

  public async createCourse(req: Request, res: Response): Promise<void> {
    try {
      await Course.create(req.body)
      res.json({
        message: 'Curso criada com sucesso',
      })
    } catch (e) {
      console.error('Ocorreu um erro ao cadastrar uma Curso: ', e)
      res.status(500).send('Erro ao criar uma Curso')
    }
  }

  public async editCourse(req: Request, res: Response): Promise<void> {
    try {
      await Course.update(req.body, {
        where: {
          id_curso: req.params.id_curso,
        },
      })
      res.json({
        message: `A Curso ${req.params.id_curso} foi atualizado com sucesso!`,
      })
    } catch (e) {
      console.error('Ocorreu um erro ao atualizar uma Curso: ', e)
      res.status(500).send('Erro ao atualiar a Curso')
    }
  }

  public async deleteCourse(req: Request, res: Response): Promise<void> {
    try {
      await Course.destroy({
        where: { id_curso: req.params.id_curso },
      })
      res.json({
        message: `A Curso ${req.params.id_curso} foi deletada com sucesso!`,
      })
    } catch (e) {
      console.error('Ocorreu um erro ao deletar uma Curso: ', e)
      res.status(500).send('Erro ao deletar uma Curso')
    }
  }
}
