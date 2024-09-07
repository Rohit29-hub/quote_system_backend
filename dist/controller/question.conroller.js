"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addQuestions = void 0;
const question_model_1 = __importDefault(require("../models/question.model"));
const service_model_1 = __importDefault(require("../models/service.model"));
const addQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceId = req.params.serviceId;
    const { question_text, question_service_type, question_answer_type, question_image, question_description, question_options, minQuantity, maxQuantity } = req.body;
    try {
        const serviceData = yield service_model_1.default.findOne({
            _id: serviceId
        });
        if (!serviceData) {
            return res.status(404).json({
                message: 'Service not found !',
                success: true,
                status: false
            });
        }
        const newQuestion = new question_model_1.default({
            service_id: serviceData._id,
            question_text,
            question_service_type,
            question_answer_type,
            question_image,
            question_description,
            question_options,
            minQuantity,
            maxQuantity
        });
        yield newQuestion.save();
        serviceData.service_general_question.push(newQuestion._id);
        yield serviceData.save();
        return res.status(200).json({
            message: 'Question added Successfully.',
            status: true,
            success: false
        });
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({
            status: false,
            success: false,
            message: 'Server error. Could not add service.',
        });
    }
});
exports.addQuestions = addQuestions;
