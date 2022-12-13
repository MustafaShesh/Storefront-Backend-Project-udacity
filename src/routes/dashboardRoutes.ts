import express from 'express'
import { ordersByUser, productsByCategory, fiveMostPopular, completedOrders } from '../handlers/dashboardHandler'
import { verifyAuthToken } from '../middleware/authentication'

const dashboardRoutes = (app: express.Application) => {
  app.get('/users/:id/orders', verifyAuthToken, ordersByUser)
  app.get('/users/:id/completed-orders', verifyAuthToken, completedOrders)
  app.get('/products/category/:category', productsByCategory)
  app.get('/five-most-popular', fiveMostPopular)
}

export default dashboardRoutes