import express from 'express';
const router = express.Router();
import {
    addService as addServiceController,
    getService as getServiceController,
    getQuestion as getQuestionController
} from '../controllers/service.controller';

router.route('/add_service').post(addServiceController);
router.route('/get_service').get(getServiceController);
router.route('/get_questions').post(getQuestionController);

export default router;