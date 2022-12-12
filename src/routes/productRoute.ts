import express from 'express'
import { index, show, create } from '../handlers/productHandler'

const productRoutes = (app: express.Application) => {
  app.get('/products', index)
  app.get('/products/:id', show)
  app.post('/products', create)
}

export default productRoutes