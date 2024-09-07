"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require("./config/db");
const app_1 = __importDefault(require("./app"));
const PORT = 8000;
app_1.default.listen(PORT, function () {
    console.log(`Server running:- http//localhost:${PORT}`);
});
