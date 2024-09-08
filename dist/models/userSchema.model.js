"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    company_name: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: true,
    },
    zip_code: {
        type: String,
        required: true,
    },
    primary_phone: {
        type: String,
        required: true,
    },
    alternate_phone: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});
const UserModel = mongoose_1.default.model('UserModel', userSchema);
exports.default = UserModel;
