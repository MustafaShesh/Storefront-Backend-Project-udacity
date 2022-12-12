"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userHandler_1 = require("../handlers/userHandler");
var userRoutes = function (app) {
    app.get('/users', userHandler_1.index);
    app.get('/users/:id', userHandler_1.show);
    app.post('/users', userHandler_1.create);
    app.post('/users/authenticate', userHandler_1.authenticate);
    app.put('/users/:id', userHandler_1.update);
    app.delete('/users/:id', userHandler_1.destroy);
};
exports.default = userRoutes;
