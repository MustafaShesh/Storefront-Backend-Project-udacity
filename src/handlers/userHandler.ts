import { Request, Response } from 'express'
import { User, UserStore } from '../models/user'
import jwt, { Secret } from 'jsonwebtoken'

const JWTtoken: Secret = process.env.TOKEN_SECRET as Secret
const store = new UserStore()

export const index = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await store.index()
    res.json(users)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const show = async (req: Request, res: Response) => {
  try {
    const user = await store.show(req.params.id)
    res.json(user)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const create = async (req: Request, res: Response) => {
  const user: User = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password
  } as User

  try {
    const newUser = await store.create(user)
    var token = jwt.sign({ user: newUser }, JWTtoken)
    res.json({ message: 'User created successfully', token })
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const authenticate = async (req: Request, res: Response) => {
  const user: User = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password
  } as User
  try {
    const authUser = await store.authenticate(user.firstname, user.lastname, user.password)
    if (authUser == null)
      res.json({ message: 'authentication failed' })
    else
      res.json({ message: 'authorized' })
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const update = async (req: Request, res: Response) => {
  const user: User = {
    id: req.params.id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password
  } as User

  try {
    const editUser = await store.edit(user)
    res.json({ message: 'User updated successfully', editUser })
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const destroy = async (req: Request, res: Response) => {
  try {
    const deleted = await store.delete(req.params.id)
    res.json({ message: `User ${req.params.id} deleted`, deleted })
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}