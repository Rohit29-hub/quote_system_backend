import { Request, Response } from "express";

// i can make api routes for quote.
// i am building..., I know time is over.

const quote_data = [
    {
        service_id: "66d96e888e8f7383faacd17e",
        service_name: "Soft Home Washing",
        description: "Gently clean your home exterior using our damage-free soft wash method, designed to remove dirt, grime, and mildew without damaging surfaces.",
        quote: [
            {
                quote_level: "Premium (Best Value)",
                features: [
                    {
                        feature_name: "Complete exterior soft wash using eco-friendly products",
                        available_for_this_package: true
                    },
                    {
                        feature_name: "Extended warranty on all washing services",
                        available_for_this_package: true
                    },
                ],
                price: "487"
            },
            {
                quote_level: "Deluxe (Most Popular)",
                features: [
                    {
                        feature_name: "Complete exterior soft wash using eco-friendly products",
                        available_for_this_package: true
                    },
                    {
                        feature_name: "One-year washing warranty",
                        available_for_this_package: true
                    },
                ],
                price: "425"
            },
            {
                quote_level: "The Standard",
                features: [
                    {
                        feature_name: "Basic exterior soft wash service",
                        available_for_this_package: true
                    },
                ],
                price: "357"
            },
        ],
    },
    {
        service_id: "66d96e888e8f7383faacd17f",
        service_name: "Window Cleaning",
        description: "Professional window cleaning services to give you crystal-clear, streak-free windows inside and out.",
        quote: [
            {
                quote_level: "Premium (Best Value)",
                features: [
                    {
                        feature_name: "Interior and exterior window cleaning",
                        available_for_this_package: true
                    },
                    {
                        feature_name: "Screens and tracks cleaned",
                        available_for_this_package: true
                    },
                ],
                price: "295"
            },
            {
                quote_level: "Deluxe (Most Popular)",
                features: [
                    {
                        feature_name: "Exterior window cleaning",
                        available_for_this_package: true
                    },
                    {
                        feature_name: "Tracks cleaned",
                        available_for_this_package: true
                    },
                ],
                price: "225"
            },
            {
                quote_level: "The Standard",
                features: [
                    {
                        feature_name: "Basic exterior window cleaning",
                        available_for_this_package: true
                    },
                ],
                price: "175"
            },
        ],
    },
    {
        service_id: "66d96e888e8f7383faacd180",
        service_name: "Gutter Cleaning",
        description: "Keep your gutters clean and flowing freely to prevent water damage to your home.",
        quote: [
            {
                quote_level: "Premium (Best Value)",
                features: [
                    {
                        feature_name: "Complete gutter cleaning and flushing",
                        available_for_this_package: true
                    },
                    {
                        feature_name: "Debris removal and downspout inspection",
                        available_for_this_package: true
                    },
                ],
                price: "350"
            },
            {
                quote_level: "Deluxe (Most Popular)",
                features: [
                    {
                        feature_name: "Gutter cleaning and flushing",
                        available_for_this_package: true
                    },
                ],
                price: "275"
            },
            {
                quote_level: "The Standard",
                features: [
                    {
                        feature_name: "Basic gutter cleaning",
                        available_for_this_package: true
                    },
                ],
                price: "200"
            },
        ],
    },
    {
        service_id: "66d96e888e8f7383faacd181",
        service_name: "Patio & Sidewalk Cleaning",
        description: "Deep cleaning for patios and sidewalks to remove dirt, stains, and mildew for a fresh look.",
        quote: [
            {
                quote_level: "Premium (Best Value)",
                features: [
                    {
                        feature_name: "Pressure washing for patios and sidewalks",
                        available_for_this_package: true
                    },
                    {
                        feature_name: "Stain removal and sealing",
                        available_for_this_package: true
                    },
                ],
                price: "450"
            },
            {
                quote_level: "Deluxe (Most Popular)",
                features: [
                    {
                        feature_name: "Pressure washing for patios and sidewalks",
                        available_for_this_package: true
                    },
                ],
                price: "375"
            },
            {
                quote_level: "The Standard",
                features: [
                    {
                        feature_name: "Basic pressure washing for patios and sidewalks",
                        available_for_this_package: true
                    },
                ],
                price: "300"
            },
        ],
    },
    {
        service_id: "66d96e888e8f7383faacd182",
        service_name: "Deck Cleaning",
        description: "Professional deck cleaning services to remove dirt, mold, and stains, keeping your deck looking new.",
        quote: [
            {
                quote_level: "Premium (Best Value)",
                features: [
                    {
                        feature_name: "Complete deck cleaning with mold treatment",
                        available_for_this_package: true
                    },
                    {
                        feature_name: "Wood sealing and stain application",
                        available_for_this_package: true
                    },
                ],
                price: "500"
            },
            {
                quote_level: "Deluxe (Most Popular)",
                features: [
                    {
                        feature_name: "Deck cleaning and mold treatment",
                        available_for_this_package: true
                    },
                ],
                price: "425"
            },
            {
                quote_level: "The Standard",
                features: [
                    {
                        feature_name: "Basic deck cleaning",
                        available_for_this_package: true
                    },
                ],
                price: "350"
            },
        ],
    },
    {
        service_id: "66d96e888e8f7383faacd183",
        service_name: "Dryer Vent Cleaning",
        description: "Ensure your dryer operates safely and efficiently with a thorough vent cleaning service.",
        quote: [
            {
                quote_level: "Premium (Best Value)",
                features: [
                    {
                        feature_name: "Full dryer vent cleaning and inspection",
                        available_for_this_package: true
                    },
                    {
                        feature_name: "Airflow optimization",
                        available_for_this_package: true
                    },
                ],
                price: "225"
            },
            {
                quote_level: "Deluxe (Most Popular)",
                features: [
                    {
                        feature_name: "Complete dryer vent cleaning",
                        available_for_this_package: true
                    },
                ],
                price: "175"
            },
            {
                quote_level: "The Standard",
                features: [
                    {
                        feature_name: "Basic dryer vent cleaning",
                        available_for_this_package: true
                    },
                ],
                price: "125"
            },
        ],
    },
    {
        service_id: "66d96e888e8f7383faacd184",
        service_name: "Fence Cleaning",
        description: "Restore your fence’s appearance by removing dirt, mold, and mildew buildup.",
        quote: [
            {
                quote_level: "Premium (Best Value)",
                features: [
                    {
                        feature_name: "Fence cleaning with mold and mildew treatment",
                        available_for_this_package: true
                    },
                    {
                        feature_name: "Fence sealing and protection",
                        available_for_this_package: true
                    },
                ],
                price: "425"
            },
            {
                quote_level: "Deluxe (Most Popular)",
                features: [
                    {
                        feature_name: "Fence cleaning with mold and mildew treatment",
                        available_for_this_package: true
                    },
                ],
                price: "375"
            },
            {
                quote_level: "The Standard",
                features: [
                    {
                        feature_name: "Basic fence cleaning",
                        available_for_this_package: true
                    },
                ],
                price: "300"
            },
        ],
    },
    {
        service_id: "66d96e888e8f7383faacd185",
        service_name: "Holiday Light Installation",
        description: "Get your home ready for the holidays with professional light installation services.",
        quote: [
            {
                quote_level: "Premium (Best Value)",
                features: [
                    {
                        feature_name: "Full holiday light installation, maintenance, and removal",
                        available_for_this_package: true
                    },
                    {
                        feature_name: "Custom lighting design",
                        available_for_this_package: true
                    },
                ],
                price: "675"
            },
            {
                quote_level: "Deluxe (Most Popular)",
                features: [
                    {
                        feature_name: "Holiday light installation and removal",
                        available_for_this_package: true
                    },
                ],
                price: "525"
            },
            {
                quote_level: "The Standard",
                features: [
                    {
                        feature_name: "Basic holiday light installation",
                        available_for_this_package: true
                    },
                ],
                price: "400"
            },
        ],
    },
    {
        service_id: "66d96e888e8f7383faacd187",
        service_name: "Roof Cleaning",
        description: "Maintain your roof’s longevity by removing dirt, moss, and algae with a safe, gentle cleaning process.",
        quote: [
            {
                quote_level: "Premium (Best Value)",
                features: [
                    {
                        feature_name: "Complete roof cleaning with moss and algae treatment",
                        available_for_this_package: true
                    },
                    {
                        feature_name: "Roof sealing for long-term protection",
                        available_for_this_package: true
                    },
                ],
                price: "675"
            },
            {
                quote_level: "Deluxe (Most Popular)",
                features: [
                    {
                        feature_name: "Complete roof cleaning with moss and algae treatment",
                        available_for_this_package: true
                    },
                ],
                price: "525"
            },
            {
                quote_level: "The Standard",
                features: [
                    {
                        feature_name: "Basic roof cleaning",
                        available_for_this_package: true
                    },
                ],
                price: "425"
            },
        ],
    },
    {
        service_id: "66d96e888e8f7383faacd188",
        service_name: "Track Cleaning",
        description: "Professional cleaning of sliding door and window tracks to ensure smooth operation and remove debris buildup.",
        quote: [
            {
                quote_level: "Premium (Best Value)",
                features: [
                    {
                        feature_name: "Complete track cleaning and lubrication",
                        available_for_this_package: true
                    },
                    {
                        feature_name: "Debris removal and inspection",
                        available_for_this_package: true
                    },
                ],
                price: "200"
            },
            {
                quote_level: "Deluxe (Most Popular)",
                features: [
                    {
                        feature_name: "Track cleaning with debris removal",
                        available_for_this_package: true
                    },
                ],
                price: "150"
            },
            {
                quote_level: "The Standard",
                features: [
                    {
                        feature_name: "Basic track cleaning",
                        available_for_this_package: true
                    },
                ],
                price: "100"
            },
        ],
    },
];

/**
 * 
 *   selectedServices, ==> selected services
 *   user_info, => user_information
 *   question_answers, => questions's answer
 *   aboutProjectData, => user project info like home size, company,comapany size
 * 
 */

export const getQuote = (req: Request, res: Response) => {
    const {selectedServices, user_info,questions_answer} = req.body;

    // we can also take the quote data according to the user answer but i need more time. 
    console.log(user_info);
    
    try {
        const data = quote_data
            .filter(service => selectedServices.includes(service.service_id))
            .map(service => ({
                service_id: service.service_id,
                service_name: service.service_name,
                description: service.description,
                quote: service.quote
            }));

        return res.status(200).json({
            message: 'fetch Quotes successfully',
            status: true,
            success: true,
            data: data
        })

    } catch (err) {
        return res.status(500).json({
            message: 'Quotes',
            status: false,
            success: false,
        })
    }
}
