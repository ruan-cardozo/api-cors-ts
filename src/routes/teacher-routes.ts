import express from 'express';
import { TeacherController } from '../controllers/teacher-controller';

const router = express.Router();
const teacherClass = new TeacherController();

router.get('/teachers', teacherClass.getAllCourses);
router.post('/teacher/new', teacherClass.createCourse);
router.put('/teacher/edit/:matr_professor', teacherClass.editCourse);
router.delete('/teacher/delete/:matr_professor', teacherClass.deleteCourse);

export { router }
