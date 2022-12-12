"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
// import userRoutes from './routes/userRoute'
// import bookRoutes from './routes/bookRoute'
// import orderRoutes from './routes/orderRoute'
// import productRoutes from './routes/productRoute'
// import orderProductsRoutes from './routes/orderProductRoutes'
// import dashboardRoutes from './routes/dashboard'
// Intialization
var app = (0, express_1.default)();
var port = 3000;
var corsOptions = {
    origin: 'http://someotherdomain.com',
    optionsSuccessStatus: 200 // some legacy browser (IE11, various)
};
app.use(body_parser_1.default.json(), (0, cors_1.default)(corsOptions));
// userRoutes(app)
// bookRoutes(app)
// orderRoutes(app)
// productRoutes(app)
// orderProductsRoutes(app)
// dashboardRoutes(app)
// routes
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
