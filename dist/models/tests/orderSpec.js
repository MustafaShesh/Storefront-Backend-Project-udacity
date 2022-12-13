"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var order_1 = require("../order");
var order = new order_1.OrderStore();
describe("Order Model", function () {
    it('should have an index method', function () {
        expect(order.index).toBeDefined();
    });
    it('should have a show method', function () {
        expect(order.show).toBeDefined();
    });
    it('should have a create method', function () {
        expect(order.create).toBeDefined();
    });
    it('should have a update method', function () {
        expect(order.edit).toBeDefined();
    });
    it('should have a delete method', function () {
        expect(order.delete).toBeDefined();
    });
    // it('create method should add a order', async () => {
    //   const result = await order.create({
    //     id: '',
    //     status: 'active',
    //     user_id: '1'
    //   });
    //   expect(result).toEqual({
    //     id: result.id,
    //     status: result.status,
    //     user_id: result.user_id,
    //   });
    // });
    // it('show method should return the correct order', async () => {
    //   const result = await order.show('1');
    //   expect(result).toEqual({
    //     id: result.id,
    //     status: result.status,
    //     user_id: result.user_id,
    //   });
    // });
    // it('update method should return a edited product', async () => {
    //   const result = await order.edit({
    //     id: '',
    //     status: 'complete',
    //     user_id: '1'
    //   });
    //   expect(result).toEqual({
    //     id: result.id,
    //     status: result.status,
    //     user_id: result.user_id,
    //   });
    // });
    // it('delete method should remove the order', async () => {
    //   order.delete("1");
    //   const result = await order.index()
    //   expect(result).toEqual([]);
    // });
});
