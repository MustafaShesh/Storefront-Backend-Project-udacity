"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var orderHandler_1 = require("../handlers/orderHandler");
var orderRoutes = function (app) {
    app.get('/orders', orderHandler_1.index);
    app.get('/orders/:id', orderHandler_1.show);
    app.post('/orders', orderHandler_1.create);
    app.put('/orders/:id', orderHandler_1.update);
    app.delete('/orders/:id', orderHandler_1.destroy);
};
exports.default = orderRoutes;
