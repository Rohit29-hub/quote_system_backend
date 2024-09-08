import express from 'express';
import { 
    addQuote as addQuoteController, 
    getQuote as getQuoteController} from '../controllers/quote.controller';
const router = express.Router();

// Admin Access only route. but middleware not added.

router.route('/:serviceId/add_quote').post(addQuoteController);
router.route('/get_quotes').post(getQuoteController);

export default router;