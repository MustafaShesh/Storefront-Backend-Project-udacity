import express from 'express'
import { index, show, create, update, destroy } from '../handlers/productHandler'
import { verifyAuthToken } from '../middleware/authentication'


const productRoutes = (app: express.Application) => {
  app.get('/products', index)
  app.get('/products/:id', show)
  app.post('/products', create)
  app.put('/products/:id', update)
  app.delete('/products/:id', destroy)
}

export default productRoutes