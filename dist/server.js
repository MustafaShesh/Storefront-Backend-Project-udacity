"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var userRoute_1 = __importDefault(require("./routes/userRoute"));
var orderRoute_1 = __importDefault(require("./routes/orderRoute"));
var productRoute_1 = __importDefault(require("./routes/productRoute"));
var orderProductRoutes_1 = __importDefault(require("./routes/orderProductRoutes"));
var dashboardRoutes_1 = __importDefault(require("./routes/dashboardRoutes"));
// Intialization
var app = (0, express_1.default)();
var port = 3000;
var corsOptions = {
    origin: 'http://someotherdomain.com',
    optionsSuccessStatus: 200 // some legacy browser (IE11, various)
};
app.use(body_parser_1.default.json(), (0, cors_1.default)(corsOptions));
(0, userRoute_1.default)(app);
(0, productRoute_1.default)(app);
(0, orderRoute_1.default)(app);
(0, orderProductRoutes_1.default)(app);
(0, dashboardRoutes_1.default)(app);
// routes
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
