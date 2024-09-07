import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
    question_value: { type: mongoose.Schema.Types.Mixed },
    question_label: { type: String, required: true },
    question_image: { type: String },
});

const questionSchema = new mongoose.Schema({
    service_id: {
        type: mongoose.Schema.Types.ObjectId,
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
        enum: ['button', 'select', 'label_quantity_input_field', 'radio','image_quantity_input_field'],
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
})

const QuestionModel = mongoose.model('QuestionModel', questionSchema);

export default QuestionModel;