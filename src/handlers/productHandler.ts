import { Request, Response } from 'express'
import { Product, ProductStore } from '../models/product'

const store = new ProductStore()

export const index = async (_req: Request, res: Response): Promise<void> => {
  try {
    const products = await store.index()
    res.json(products)
    console.log('this is the INDEX route')
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const show = async (req: Request, res: Response) => {
  try {
    const products = await store.show(req.params.id)
    res.json(products)
    console.log('this is the SHOW route')
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const create = async (req: Request, res: Response) => {
  const product: Product = {
    name: req.body.name,
    price: req.body.price,
    category: req.body.category
  } as Product

  try {
    const newProduct = await store.create(product)
    res.json({ message: 'Product created successfully', newProduct })
    console.log('this is the CREATE route')
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const update = async (req: Request, res: Response) => {
  const product: Product = {
    name: req.body.name,
    price: req.body.price,
    category: req.body.category
  } as Product

  try {
    const editProduct = await store.edit(product)
    res.json({ message: 'Product updated successfully', editProduct })
    console.log('this is the EDIT route')
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const destroy = async (req: Request, res: Response) => {
  try {
    const deleted = await store.delete(req.params.id)
    res.json({ message: `Product ${req.params.id} deleted`, deleted })
    console.log('this is the DELETE route')
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}