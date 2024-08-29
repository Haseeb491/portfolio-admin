import express from 'express';
import { createProject, deleteProject, getAllProjects, updateProject } from '../controllers/project.controller.js';
import { protectRoute } from '../middleware/protectRoute.js';

const router = express.Router();

router.post('/create',protectRoute, createProject);
router.post('/update/:id',protectRoute, updateProject);
router.delete('/:id',protectRoute, deleteProject);
router.get('/all',protectRoute,getAllProjects); 


export default router;