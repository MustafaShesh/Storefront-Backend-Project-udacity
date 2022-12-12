"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var productHandler_1 = require("../handlers/productHandler");
var productRoutes = function (app) {
    app.get('/products', productHandler_1.index);
    app.get('/products/:id', productHandler_1.show);
    app.post('/products', productHandler_1.create);
    app.put('/products/:id', productHandler_1.update);
    app.delete('/products/:id', productHandler_1.destroy);
};
exports.default = productRoutes;
