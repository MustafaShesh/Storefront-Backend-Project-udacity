"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dashboardHandler_1 = require("../handlers/dashboardHandler");
var authentication_1 = require("../middleware/authentication");
var dashboardRoutes = function (app) {
    app.get('/users/:id/orders', authentication_1.verifyAuthToken, dashboardHandler_1.ordersByUser);
    app.get('/users/:id/completed-orders', authentication_1.verifyAuthToken, dashboardHandler_1.completedOrders);
    app.get('/products/category/:category', dashboardHandler_1.productsByCategory);
    app.get('/five-most-popular', dashboardHandler_1.fiveMostPopular);
};
exports.default = dashboardRoutes;
