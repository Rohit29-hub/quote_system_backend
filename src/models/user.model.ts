import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    company_name: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true,
    },
    primary_phone: {
        type: String,
        required: true,
    },
    message_aggrement: {
        type: Boolean,
        default: false,
    },
    altername_phone: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    }
},{timestamps: true})

const UserModel = mongoose.model('UserModel',userSchema);

export default UserModel