"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const question_controller_1 = require("../controllers/question.controller");
const router = express_1.default.Router();
router.route('/:serviceId/add_question').post(question_controller_1.addQuestions);
router.route('/get_questions').post(question_controller_1.getQuestions);
exports.default = router;
