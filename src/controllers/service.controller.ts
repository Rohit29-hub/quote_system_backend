import { Request, Response } from "express";
import ServiceModel from "../models/service.model";

export const addService = async (req: Request, res: Response) => {
    const {
        service_title,
        service_image_url,
        service_type_is_home,
        service_general_question
    } = req.body;

    try {

        const newService = new ServiceModel({
            service_title,
            service_image_url,
            service_type_is_home,
            service_general_question
        })

        await newService.save();

        return res.status(200).json({
            message: 'Service add successfully.',
            status: true,
            success: true
        })

    } catch (err: any) {
        console.log(err.message);
        return res.status(500).json({
            status: false,
            success: false,
            message: 'Server error. Could not add service.',
        });
    }
}

export const getService = async (req: Request, res: Response) => {
    try {
        const services = await ServiceModel.find().select('-service_general_question');

        return res.status(200).json({
            message: 'Services retrieved successfully',
            data: services,
            success: true,
            status: true
        });

    } catch (err: any) {
        console.log(err.message);
        return res.status(500).json({
            message: 'Server error. Could not retrieve services.',
            status: false,
            success: false,
        });
    }
}

export const getQuestion = async (req: Request, res: Response) => {
    const serviceIds = req.body.serviceIds;

    if (!Array.isArray(serviceIds) || serviceIds.length === 0) {
        return res.status(400).json({
            message: 'Invalid input. Provide an array of service IDs.',
            success: false,
            status: false
        });
    }

    try {
        const servicesData = await ServiceModel.find({
            _id: { $in: serviceIds } 
        }).populate('service_general_question')

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

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'An error occurred while fetching questions.',
            success: false,
            status: false
        });
    }
};