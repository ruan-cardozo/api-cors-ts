import { Request, Response } from 'express'
import { Class } from '../models/class-model'

export class ClassController {
  public async getAllClasses(req: Request, res: Response): Promise<void> {
    try {
      const classes = await Class.findAll()
      res.send(classes)
    } catch (e) {
      console.error('Ocorreu um erro ao buscar as turmas: ', e)
      res.status(500).send('Erro ao buscas as turmas')
    }
  }

  public async createClass(req: Request, res: Response): Promise<void> {
    try {
      await Class.create(req.body)
      res.json({
        message: 'Turma criada com sucesso',
      })
    } catch (e) {
      console.error('Ocorreu um erro ao cadastrar uma turma: ', e)
      res.status(500).send('Erro ao criar uma turma')
    }
  }

  public async editClass(req: Request, res: Response): Promise<void> {
    try {
      await Class.update(req.body, {
        where: {
          id_turma: req.params.id_turma,
        },
      })
      res.json({
        message: `A turma ${req.params.id_turma} foi atualizado com sucesso!`,
      })
    } catch (e) {
      console.error('Ocorreu um erro ao atualizar uma turma: ', e)
      res.status(500).send('Erro ao atualiar a turma')
    }
  }

  public async deleteClass(req: Request, res: Response): Promise<void> {
    try {
      await Class.destroy({
        where: { id_turma: req.params.id_turma },
      })
      res.json({
        message: `A turma ${req.params.id_turma} foi deletada com sucesso!`,
      })
    } catch (e) {
      console.error('Ocorreu um erro ao deletar uma turma: ', e)
      res.status(500).send('Erro ao deletar uma turma')
    }
  }
}
