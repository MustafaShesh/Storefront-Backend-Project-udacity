import express from 'express'
import { usersWithOrders, productsInOrders, fiveMostExpensive } from '../handlers/dashboard'

const dashboardRoutes = (app: express.Application) => {
  app.get('/users-with-orders', usersWithOrders)
  app.get('/products_in_orders', productsInOrders)
  app.get('/five-most-expensive', fiveMostExpensive)
}

export default dashboardRoutes