import { Request, Response } from "express";
import QuestionModel from "../models/question.model";
import ServiceModel from "../models/service.model";

export const addQuestions = async (req: Request, res: Response) => {
    const serviceId = req.params.serviceId;
    const {
        question_text,
        question_service_type,
        question_answer_type,
        question_image,
        question_description,
        next_question_id,
        question_options,
        minQuantity,
        maxQuantity,
    } = req.body;
    try {
        const serviceData = await ServiceModel.findOne({
            _id: serviceId
        });

        if (!serviceData) {
            return res.status(404).json({
                message: 'Service not found !',
                success: true,
                status: false
            })
        }

        const newQuestion = new QuestionModel({
            service_id: serviceData._id,
            question_text,
            question_service_type,
            question_answer_type,
            question_image,
            next_question_id,
            question_description,
            question_options,
            minQuantity,
            maxQuantity
        })

        await newQuestion.save();
        serviceData.service_general_question.push(newQuestion._id);
        await serviceData.save();

        return res.status(200).json({
            message: 'Question added Successfully.',
            status: true,
            success: false
        })

    } catch (err: any) {
        console.log(err.message)
        return res.status(500).json({
            status: false,
            success: false,
            message: 'Server error. Could not add service.',
        });
    }
}