"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const serviceSchema = new mongoose_1.default.Schema({
    service_title: {
        type: String,
        required: true,
    },
    service_image_url: {
        type: String,
        required: true
    },
    service_type_is_home: {
        type: Boolean,
        required: true,
    },
    service_general_question: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'QuestionModel'
        }]
});
const ServiceModel = mongoose_1.default.model('ServiceModel', serviceSchema);
exports.default = ServiceModel;
