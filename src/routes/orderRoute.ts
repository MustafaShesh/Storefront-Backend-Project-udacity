import express from 'express'
import { index, show, create } from '../handlers/orderHandler'

const orderRoutes = (app: express.Application) => {
  app.get('/orders', index)
  app.get('/orders/:id', show)
  app.post('/orders', create)
}

export default orderRoutes