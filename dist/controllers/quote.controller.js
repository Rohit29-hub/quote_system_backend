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
exports.addQuote = exports.getQuote = void 0;
const quote_model_1 = __importDefault(require("../models/quote.model"));
const service_model_1 = __importDefault(require("../models/service.model"));
// return the quote data according to user selected service
const getQuote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { selectedServices, user_info, questions_answer } = req.body;
    // we can also give the quote data according to the user answer. 
    console.log(user_info);
    console.log(questions_answer);
    try {
        // Fetch the quotes from the database based on selected services
        const data = yield quote_model_1.default.find({
            service_id: { $in: selectedServices }
        }).exec();
        // Transform the fetched data to match the into good format
        const responseData = data.map(service => ({
            service_id: service.service_id,
            service_name: service.service_name,
            description: service.description,
            quote: service.quote
        }));
        // Return the success response with fetched data
        return res.status(200).json({
            message: 'Fetched quotes successfully',
            status: true,
            success: true,
            data: responseData
        });
    }
    catch (err) {
        return res.status(500).json({
            message: err.message,
            status: false,
            success: false,
        });
    }
});
exports.getQuote = getQuote;
// For ** admin purpose **
// add the quote data for new service for 
const addQuote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceId = req.params.serviceId;
    const { service_name, description, quote } = req.body;
    try {
        // Check if the service exists
        const serviceData = yield service_model_1.default.findById(serviceId);
        if (!serviceData) {
            return res.status(404).json({
                message: 'Service not found!',
                success: false
            });
        }
        // Create a new quote entry
        const newQuote = new quote_model_1.default({
            service_id: serviceId,
            service_name,
            description,
            quote
        });
        // Save the quote data to the database
        yield newQuote.save();
        return res.status(201).json({
            message: 'Quote added successfully.',
            status: true,
            success: true,
            data: newQuote
        });
    }
    catch (err) {
        console.error(err.message);
        return res.status(500).json({
            message: 'Server error. Could not add quote.',
            status: false,
            success: false
        });
    }
});
exports.addQuote = addQuote;
