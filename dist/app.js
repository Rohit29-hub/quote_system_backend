"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const service_route_1 = __importDefault(require("./routes/service.route"));
const question_route_1 = __importDefault(require("./routes/question.route"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// ***** middlewares and config *****
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// ***** Routes *****
app.use('/service/v1', service_route_1.default);
app.use('/question/v1', question_route_1.default);
app.get('/', function (req, res) {
    res.status(200).json({
        message: "Quatation System -- server is working",
        date: new Date().toISOString()
    });
});
exports.default = app;
