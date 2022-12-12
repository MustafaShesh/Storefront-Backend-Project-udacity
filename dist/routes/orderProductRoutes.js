"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var orderProductHandler_1 = require("../handlers/orderProductHandler");
var orderProductsRoutes = function (app) {
    // add product
    app.post('/orders/:id/products', orderProductHandler_1.addProduct);
};
exports.default = orderProductsRoutes;
