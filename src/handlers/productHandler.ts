import { Request, Response } from 'express'
import { Product, ProductStore } from '../models/product'

const store = new ProductStore()

export const index = async (_req: Request, res: Response): Promise<void> => {
  try {
    const products = await store.index()
    res.json(products)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const show = async (req: Request, res: Response) => {
  try {
    const products = await store.show(req.params.id)
    res.json(products)
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
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const update = async (req: Request, res: Response) => {
  const product: Product = {
    id: req.params.id,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category
  } as Product

  try {
    const editProduct = await store.edit(product)
    res.json({ message: 'Product updated successfully', editProduct })
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const destroy = async (req: Request, res: Response) => {
  try {
    const deleted = await store.delete(req.params.id)
    res.json({ message: `Product ${req.params.id} deleted`, deleted })
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}