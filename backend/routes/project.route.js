import express from 'express';
import { createProject, deleteProject, getAllProjects, updateProject } from '../controllers/project.controller.js';

const router = express.Router();

router.post('/create', createProject);
router.post('/update/:id', updateProject);
router.delete('/:id',deleteProject);
router.get('/all',getAllProjects);


export default router;