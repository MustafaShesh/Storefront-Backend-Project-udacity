import supertest from 'supertest'
import app from '../../server';
import { Request } from 'express'

const request = supertest(app)

describe("User Handler", () => {
  describe('Test endpoint autherization responses', () => {
    // test the endpoint
    it("should require authorization for index", async () => {
      const verfiy = async (req: Request) => {
        const authorizationHeader: string = req.headers.authorization as string
        const token = authorizationHeader.split(' ')[1]
        const response = await request.get('/users').set('Authorization', 'bearer ' + token)
        expect(response.status).toBe(200)
      }
    })

    it("should require authorization for show", async () => {
      const verfiy = async (req: Request) => {
        const authorizationHeader: string = req.headers.authorization as string
        const token = authorizationHeader.split(' ')[1]
        const response = await request.get('/users/:id').set('Authorization', 'bearer ' + token)
        expect(response.status).toBe(200)
      }
    })

    it("should require authorization for create", async () => {
      const verfiy = async (req: Request) => {
        const authorizationHeader: string = req.headers.authorization as string
        const token = authorizationHeader.split(' ')[1]
        const response = await request.post('/users/').set('Authorization', 'bearer ' + token)
        expect(response.status).toBe(200)
      }
    })

    it("should require authorization for authenticate", async () => {
      const verfiy = async (req: Request) => {
        const authorizationHeader: string = req.headers.authorization as string
        const token = authorizationHeader.split(' ')[1]
        const response = await request.post('/users/authenticate').set('Authorization', 'bearer ' + token)
        expect(response.status).toBe(200)
      }
    })

    it("should require authorization for update", async () => {
      const verfiy = async (req: Request) => {
        const authorizationHeader: string = req.headers.authorization as string
        const token = authorizationHeader.split(' ')[1]
        const response = await request.put('/users/:id').set('Authorization', 'bearer ' + token)
        expect(response.status).toBe(200)
      }
    })

    it("should require authorization for delete", async () => {
      const verfiy = async (req: Request) => {
        const authorizationHeader: string = req.headers.authorization as string
        const token = authorizationHeader.split(' ')[1]
        const response = await request.delete('/users/:id').set('Authorization', 'bearer ' + token)
        expect(response.status).toBe(200)
      }
    })
  })
})