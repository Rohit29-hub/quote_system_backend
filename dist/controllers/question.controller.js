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
exports.addQuestions = exports.getQuestions = void 0;
const question_model_1 = __importDefault(require("../models/question.model"));
const service_model_1 = __importDefault(require("../models/service.model"));
// get Question for the selected services
const getQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceIds = req.body.serviceIds;
    if (!Array.isArray(serviceIds) || serviceIds.length === 0) {
        return res.status(400).json({
            message: 'Invalid input. Provide an array of service IDs.',
            success: false,
            status: false
        });
    }
    try {
        const servicesData = yield service_model_1.default.find({
            _id: { $in: serviceIds }
        })
            .populate({
            path: 'service_general_question',
            populate: {
                path: 'next_questions',
            }
        });
        // checking data len 
        if (servicesData.length === 0) {
            return res.status(404).json({
                message: 'No services found for the provided IDs.',
                success: false,
                status: false
            });
        }
        const result = servicesData.map(service => ({
            service_name: service.service_title,
            questions: service.service_general_question || []
        }));
        res.status(200).json({
            message: 'Questions retrieved successfully',
            data: result,
            success: true,
            status: true
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'An error occurred while fetching questions.',
            success: false,
            status: false
        });
    }
});
exports.getQuestions = getQuestions;
/**
 * [addQuestions] for admin purpose
 *
 * This method handles the creation of a new question associated with a specific service.
 * It accepts various fields related to the question such as question text, answer type,
 * description, options, and quantity constraints from the request body.
 *
 * The flow of this function:
 * 1. Retrieves the `serviceId` from the request parameters to identify the service.
 * 2. Checks if the service exists in the database. If not, it returns a 404 response.
 * 3. Creates a new question using the provided details and associates it with the service.
 * 4. Saves the newly created question and updates the service's `service_general_question` array.
 * 5. If the question depends on another question (based on `depends_on_question_id`),
 *    it adds this question's ID to the `next_questions` array of the parent question.
 * 6. Finally, the method returns a success response or handles any server errors.
 *
 * Note:
 * - The `depends_on_question_id` field allows conditional logic for questions. If present,
 *   this specifies that the new question is dependent on the answer of another question.
 */
const addQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // check service id for identify this quesiton belog to this particular service
    const serviceId = req.params.serviceId;
    const { question_text, question_service_type, question_answer_type, question_image, question_description, depends_on_question_id, question_options, } = req.body;
    try {
        // Find Service
        const serviceData = yield service_model_1.default.findOne({
            _id: serviceId
        });
        // If service not found so return "Service not found"
        if (!serviceData) {
            return res.status(404).json({
                message: 'Service not found !',
                success: true,
                status: false
            });
        }
        // Service found, and creating new question
        const newQuestion = new question_model_1.default({
            service_id: serviceData._id,
            question_text,
            question_service_type,
            question_answer_type,
            question_image,
            depends_on_question_id,
            question_description,
            question_options,
        });
        // save the question in to database        
        yield newQuestion.save();
        // also put the question id to their service.
        serviceData.service_general_question.push(newQuestion._id);
        // and save the service to save changes
        yield serviceData.save();
        /** Make sure this [depends_on_question_id] key passing empty.
         *  if question not dependent to other question or id of that question they dependent on.
         *  Only question id their answer type is [yes] or [no]
         * */
        if (depends_on_question_id !== "") {
            // find question they depends on
            const parentQuestion = yield question_model_1.default.findOne({
                _id: depends_on_question_id
            });
            if (parentQuestion) {
                // and put the this question id to their [next_question] array.
                parentQuestion.next_questions.push(newQuestion._id);
                // and save the question for save the changes
                yield parentQuestion.save();
            }
        }
        // return successfull response.
        return res.status(200).json({
            message: 'Question added Successfully.',
            status: true,
            success: true
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
