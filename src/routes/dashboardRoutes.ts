import express from 'express'
import { ordersByUser, productsByCategory, fiveMostPopular } from '../handlers/dashboardHandler'
import { verifyAuthToken } from '../middleware/authentication'

const dashboardRoutes = (app: express.Application) => {
  app.get('/orders-by-user/:id', verifyAuthToken, ordersByUser)
  app.get('/products_by_category/:category', productsByCategory)
  app.get('/five-most-popular', fiveMostPopular)
}

export default dashboardRoutes