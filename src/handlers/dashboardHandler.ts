import { Request, Response } from 'express'
import { DashboardQueries } from '../services/dashboard'

const dashboard = new DashboardQueries()

export const ordersByUser = async (_req: Request, res: Response) => {
  try {
    const users = await dashboard.ordersByUser(_req.params.id)
    res.json(users)
    console.log('this is the INDEX route')
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const productsByCategory = async (_req: Request, res: Response) => {
  try {
    const products = await dashboard.productsByCategory(_req.params.category)
    res.json(products)
    console.log('this is the INDEX route')
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const fiveMostPopular = async (_req: Request, res: Response) => {
  const users = await dashboard.fiveMostPopular()
  res.json(users)
}
