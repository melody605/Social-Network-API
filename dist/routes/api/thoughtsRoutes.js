import { Router } from 'express';
const router = Router();
import { getAllThoughts, getThoughtsById, createThoughts, updateThoughts, deleteThoughts, } from '../../controllers/thoughtsController.js';
// /api/thoughtss
router.route('/').get(getAllThoughts).post(createThoughts);
// /api/thoughtss/:thoughtsId
router
    .route('/:thoughtsId')
    .get(getThoughtsById)
    .put(updateThoughts)
    .delete(deleteThoughts);
export { router as thoughtsRouter };
