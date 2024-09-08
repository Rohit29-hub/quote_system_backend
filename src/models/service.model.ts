import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    service_title: {
        type: String,
        required: [true,"Service name is required"],
    },
    service_image_url: {
        type: String,
        required: [true,"Service image is required"]
    },
    service_type_is_home: {
        type: Boolean,
        required: [true, "Service type is required"],
    },
    service_general_question: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuestionModel'
    }]
})

const ServiceModel = mongoose.model('ServiceModel', serviceSchema);

export default ServiceModel;