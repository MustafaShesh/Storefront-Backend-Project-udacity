import { Request, Response } from 'express'
import { OrderProduct, OrderProductStore } from '../models/orderProduct'

const store = new OrderProductStore()

export const addProduct = async (_req: Request, res: Response) => {
  const orderProduct: OrderProduct = {
    quantity: _req.body.quantity,
    order_id: _req.params.id,
    product_id: _req.body.product_id
  } as OrderProduct

  try {
    const addedProduct = await store.addProduct(orderProduct.quantity, orderProduct.order_id, orderProduct.product_id)
    console.log(addedProduct)
    res.json(addedProduct)
    console.log('this is the add product route')
  } catch (err) {
    res.status(400)
    res.json(err)
  }
} 