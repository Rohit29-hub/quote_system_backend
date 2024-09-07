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
exports.getQuestion = exports.getService = exports.addService = void 0;
const service_model_1 = __importDefault(require("../models/service.model"));
const addService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { service_title, service_image_url, service_type_is_home, service_general_question } = req.body;
    try {
        const newService = new service_model_1.default({
            service_title,
            service_image_url,
            service_type_is_home,
            service_general_question
        });
        yield newService.save();
        return res.status(200).json({
            message: 'Service add successfully.',
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
exports.addService = addService;
const getService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const services = yield service_model_1.default.find().select('-service_general_question');
        return res.status(200).json({
            message: 'Services retrieved successfully',
            data: services,
            success: true,
            status: true
        });
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({
            message: 'Server error. Could not retrieve services.',
            status: false,
            success: false,
        });
    }
});
exports.getService = getService;
const getQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        }).populate('service_general_question');
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
exports.getQuestion = getQuestion;
