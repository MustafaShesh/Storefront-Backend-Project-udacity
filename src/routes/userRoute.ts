import express from 'express'
import { index, show, create, authenticate, update, destroy } from '../handlers/userHandler'
import { verifyAuthToken } from '../middleware/authentication'

const userRoutes = (app: express.Application) => {
  app.get('/users', verifyAuthToken, index)
  app.get('/users/:id', verifyAuthToken, show)
  app.post('/users', verifyAuthToken, create)
  app.post('/users/authenticate', verifyAuthToken, authenticate)
  app.put('/users/:id', verifyAuthToken, update)
  app.delete('/users/:id', verifyAuthToken, destroy)
}

export default userRoutes