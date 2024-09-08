import { Request, Response } from "express";
import ServiceModel from "../models/service.model";

// for admin purpose add the service
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