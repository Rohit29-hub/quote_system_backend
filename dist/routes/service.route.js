"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const service_controller_1 = require("../controllers/service.controller");
const quote_controller_1 = require("../controllers/quote.controller");
router.route('/add_service').post(service_controller_1.addService);
router.route('/get_service').get(service_controller_1.getService);
router.route('/get_questions').post(service_controller_1.getQuestion);
router.route('/get_quotes').post(quote_controller_1.getQuote);
exports.default = router;
