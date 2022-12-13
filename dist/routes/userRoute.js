"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userHandler_1 = require("../handlers/userHandler");
var authentication_1 = require("../middleware/authentication");
var userRoutes = function (app) {
    app.get('/users', authentication_1.verifyAuthToken, userHandler_1.index);
    app.get('/users/:id', authentication_1.verifyAuthToken, userHandler_1.show);
    app.post('/users', authentication_1.verifyAuthToken, userHandler_1.create);
    app.post('/users/authenticate', authentication_1.verifyAuthToken, userHandler_1.authenticate);
    app.put('/users/:id', authentication_1.verifyAuthToken, userHandler_1.update);
    app.delete('/users/:id', authentication_1.verifyAuthToken, userHandler_1.destroy);
};
exports.default = userRoutes;
