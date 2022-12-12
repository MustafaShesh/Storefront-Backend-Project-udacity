import express from 'express'
import { addProduct } from '../handlers/orderProductHandler'

const orderProductsRoutes = (app: express.Application) => {
  // add product
  app.post('/orders/:id/products', addProduct)
}

export default orderProductsRoutes