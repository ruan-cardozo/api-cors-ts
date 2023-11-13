import express from 'express'
import { ClassController } from '../controllers/class-controller'

const router = express.Router()
const classController = new ClassController();

router.get('/classes', classController.getAllClasses);
router.post('/class/new', classController.createClass)
router.put('/class/edit/:id_turma', classController.editClass)
router.delete('/class/delete/:id_turma', classController.deleteClass)

export { router }
