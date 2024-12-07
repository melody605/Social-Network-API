import { Router } from 'express';
const router = Router();
import { getAllThoughts, getThoughtsById, createThoughts, updateThoughts, deleteThoughts, addThoughts, removeThoughts, } from '../../controllers/thoughtController.js';
// /api/thoughts
router.route('/').get(getAllThoughts).post(createThoughts);
// /api/thoughts/:thoughtsId
router
    .route('/:thoughtsId')
    .get(getThoughtsById)
    .put(updateThoughts)
    .delete(deleteThoughts);
router.route('/:thoughtId/reactions').post(addThoughts);
router.route('/:thoughtId/reactions/:reactionId').delete(removeThoughts);
export { router as thoughtsRouter };
