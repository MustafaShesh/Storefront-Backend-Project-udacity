import supertest from 'supertest'
import app from '../../server';
import { Request } from 'express'

const request = supertest(app)

describe("Order Handler", () => {
  // test the endpoint
  it("should get all products of the order", async () => {
    const response = await request.delete('/orders/:id/products')
    expect(response.status).toBe(404)
  })
})