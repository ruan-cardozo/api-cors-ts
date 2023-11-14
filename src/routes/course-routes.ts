import express from 'express';
import { CourseController } from '../controllers/course-controller';

const router = express.Router();
const courseClass = new CourseController();

router.get('/courses', courseClass.getAllCourses);
router.post('/course/new', courseClass.createCourse);
router.put('/course/edit/:id_curso', courseClass.editCourse);
router.delete('/course/delete/:id_curso', courseClass.deleteCourse);

export { router }
