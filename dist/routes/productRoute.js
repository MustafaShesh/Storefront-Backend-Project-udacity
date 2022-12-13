"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var productHandler_1 = require("../handlers/productHandler");
var authentication_1 = require("../middleware/authentication");
var productRoutes = function (app) {
    app.get('/products', productHandler_1.index);
    app.get('/products/:id', productHandler_1.show);
    app.post('/products', authentication_1.verifyAuthToken, productHandler_1.create);
    app.put('/products/:id', productHandler_1.update);
    app.delete('/products/:id', productHandler_1.destroy);
};
exports.default = productRoutes;
