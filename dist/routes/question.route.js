"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const question_conroller_1 = require("../controllers/question.conroller");
const router = express_1.default.Router();
router.route('/:serviceId/add_question').post(question_conroller_1.addQuestions);
exports.default = router;
