import express from 'express'
import { index, show, create, authenticate, update, destroy } from '../handlers/userHandler'
import { verifyAuthToken } from '../middleware/authentication'

const userRoutes = (app: express.Application) => {
  app.get('/users', index)
  app.get('/users/:id', show)
  app.post('/users', create)
  app.post('/users/authenticate', authenticate)
  app.put('/users/:id', update)
  app.delete('/users/:id', destroy)
}

export default userRoutes