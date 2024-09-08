import express from 'express';
const router = express.Router();
import {
    addService as addServiceController,
    getService as getServiceController
} from '../controllers/service.controller';

router.route('/add_service').post(addServiceController);
router.route('/get_service').get(getServiceController);


export default router;