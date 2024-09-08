import express from 'express';
import {
    addQuestions as addQuestionController,
    getQuestion as getQuestionController
} from '../controllers/question.controller';
const router = express.Router();

router.route('/:serviceId/add_question').post(addQuestionController);
router.route('/get_questions').post(getQuestionController);

export default router;