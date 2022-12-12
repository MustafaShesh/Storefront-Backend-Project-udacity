"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dashboardHandler_1 = require("../handlers/dashboardHandler");
var dashboardRoutes = function (app) {
    app.get('/orders-by-user/:id', dashboardHandler_1.ordersByUser);
    app.get('/products_by_category/:category', dashboardHandler_1.productsByCategory);
    app.get('/five-most-popular', dashboardHandler_1.fiveMostPopular);
};
exports.default = dashboardRoutes;
