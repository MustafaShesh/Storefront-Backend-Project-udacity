import { Request, Response } from 'express'
import { DashboardQueries } from '../services/dashboard'

const dashboard = new DashboardQueries()

export const usersWithOrders = async (_req: Request, res: Response) => {
  try {
    const users = await dashboard.usersWithOrders()
    res.json(users)
    console.log('this is the INDEX route')
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const productsInOrders = async (_req: Request, res: Response) => {
  try {
    const products = await dashboard.productsInOrders()
    res.json(products)
    console.log('this is the INDEX route')
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const fiveMostExpensive = async (_req: Request, res: Response) => {
  const users = await dashboard.fiveMostExpensive()
  res.json(users)
}
