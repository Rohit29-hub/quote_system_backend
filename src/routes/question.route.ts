import express from 'express';
import { addQuestions as addQuestionController } from '../controllers/question.controller';
const router = express.Router();

router.route('/:serviceId/add_question').post(addQuestionController);

export default router;