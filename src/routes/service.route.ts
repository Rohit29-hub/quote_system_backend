import express from 'express';
const router = express.Router();
import {
    addService as addServiceController,
    getService as getServiceController,
    getQuestion as getQuestionController
} from '../controllers/service.controller';
import { getQuote } from '../controllers/quote.controller';

router.route('/add_service').post(addServiceController);
router.route('/get_service').get(getServiceController);
router.route('/get_questions').post(getQuestionController);
router.route('/get_quotes').post(getQuote);

export default router;