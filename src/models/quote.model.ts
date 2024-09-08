import mongoose, { Schema, Document } from 'mongoose';

// Define schema for feature
const featureSchema = new Schema({
    feature_name: { type: String, required: true },
    available_for_this_package: { type: Boolean, required: true }
});

// Define schema for quote
const quoteSchema = new Schema({
    quote_level: { type: String, required: true },
    features: [featureSchema],
    price: { type: String, required: true }
});

// Define schema for quote data
const quoteDataSchema = new Schema({
    service_id: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
    service_name: { type: String, required: true },
    description: { type: String, required: true },
    quote: [quoteSchema]
});

// Define the interface for the document
interface IQuoteData extends Document {
    service_id: mongoose.Types.ObjectId;
    service_name: string;
    description: string;
    quote: {
        quote_level: string;
        features: {
            feature_name: string;
            available_for_this_package: boolean;
        }[];
        price: string;
    }[];
}

// Create the model
const QuoteDataModel = mongoose.model<IQuoteData>('QuoteData', quoteDataSchema);

export default QuoteDataModel;
