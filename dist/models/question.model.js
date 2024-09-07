"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const optionSchema = new mongoose_1.default.Schema({
    question_value: { type: mongoose_1.default.Schema.Types.Mixed },
    question_label: { type: String, required: true },
    question_image: { type: String },
});
const questionSchema = new mongoose_1.default.Schema({
    service_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'ServiceModel'
    },
    question_text: {
        type: String,
        required: true,
    },
    question_service_type: {
        type: String,
        required: true
    },
    question_answer_type: {
        type: String,
        enum: ['button', 'select', 'label_quantity_input_field', 'radio', 'image_quantity_input_field'],
        required: true
    },
    question_image: {
        type: String,
    },
    next_question_id: {
        type: String,
        default: null
    },
    question_description: {
        type: String,
    },
    question_options: [optionSchema],
    minQuantity: { type: Number, default: 0 },
    maxQuantity: { type: Number, default: 10 },
}, {
    timestamps: true
});
const QuestionModel = mongoose_1.default.model('QuestionModel', questionSchema);
exports.default = QuestionModel;
