import supertest from 'supertest'
import app from '../../server';
import { Request } from 'express'

const request = supertest(app)

describe("Order Handler", () => {
  // Test endpoint autherization responses
  it("should get orders by user", async () => {
    const verfiy = async (req: Request) => {
      const authorizationHeader: string = req.headers.authorization as string
      const token = authorizationHeader.split(' ')[1]
      const response = await request.get('/users/:id/orders').set('Authorization', 'bearer ' + token)
      expect(response.status).toBe(200)
    }
  })

  it("should get completed orders", async () => {
    const verfiy = async (req: Request) => {
      const authorizationHeader: string = req.headers.authorization as string
      const token = authorizationHeader.split(' ')[1]
      const response = await request.post('/users/:id/completed-orders').set('Authorization', 'bearer ' + token)
      expect(response.status).toBe(200)
    }
  })

  it("should get products by category", async () => {
    const verfiy = async (req: Request) => {
      const authorizationHeader: string = req.headers.authorization as string
      const token = authorizationHeader.split(' ')[1]
      const response = await request.post('/products/category/:category').set('Authorization', 'bearer ' + token)
      expect(response.status).toBe(200)
    }
  })

  it("should get most five popular products", async () => {
    const verfiy = async (req: Request) => {
      const authorizationHeader: string = req.headers.authorization as string
      const token = authorizationHeader.split(' ')[1]
      const response = await request.post('/five-most-popular').set('Authorization', 'bearer ' + token)
      expect(response.status).toBe(200)
    }
  })
})