import express from 'express';
import { createTestimonial, deleteTestimonial, getAllTestimonials, updateTestimonial } from '../controllers/testimonial.controller.js';

const router = express.Router();

router.post('/create', createTestimonial);
router.post('/update/:id', updateTestimonial);
router.delete('/:id', deleteTestimonial);
router.get('/create', getAllTestimonials);

export default router;