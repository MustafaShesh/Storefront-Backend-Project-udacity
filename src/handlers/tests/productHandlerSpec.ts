import supertest from 'supertest'
import app from '../../server';
import { Request } from 'express'

const request = supertest(app)

describe("Product Handler", () => {
  // test the endpoint
  it("should respond with JSON array for index", async () => {
    const response = await request.get('/products')
    expect(response.status).toBe(200)
  })

  it("should respond with JSON array for show", async () => {
    const response = await request.get('/products/:id')
    expect(response.status).toBe(400)
  })

  // Test endpoint autherization responses
  it("should require authorization for create", async () => {
    const verfiy = async (req: Request) => {
      const authorizationHeader: string = req.headers.authorization as string
      const token = authorizationHeader.split(' ')[1]
      const response = await request.post('/products').set('Authorization', 'bearer ' + token)
      expect(response.status).toBe(200)
    }
  })

  it("should update the product", async () => {
    const response = await request.put('/products/:id')
    expect(response.status).toBe(400)
  })

  it("should delete the product", async () => {
    const response = await request.delete('/products/:id')
    expect(response.status).toBe(400)
  })
})