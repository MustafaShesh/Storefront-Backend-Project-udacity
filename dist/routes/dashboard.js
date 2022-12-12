"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_1 = require("../handlers/dashboard");
var dashboardRoutes = function (app) {
    app.get('/orders-by-user/:id', dashboard_1.ordersByUser);
    app.get('/products_by_category/:category', dashboard_1.productsByCategory);
    app.get('/five-most-popular', dashboard_1.fiveMostPopular);
};
exports.default = dashboardRoutes;
