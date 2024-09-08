"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const quote_controller_1 = require("../controllers/quote.controller");
const router = express_1.default.Router();
// Admin Access only route. but middleware not added.
router.route('/:serviceId/add_quote').post(quote_controller_1.addQuote);
router.route('/get_quotes').post(quote_controller_1.getQuote);
exports.default = router;
