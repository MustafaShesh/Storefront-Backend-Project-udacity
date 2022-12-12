import { Request, Response } from 'express'
import { User, UserStore } from '../models/user'
import jwt, { Secret } from 'jsonwebtoken'

const JWTtoken: Secret = process.env.TOKEN_SECRET as Secret
const store = new UserStore()

export const index = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await store.index()
    res.json(users)
    console.log('this is the INDEX route')
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const show = async (req: Request, res: Response) => {
  try {
    const user = await store.show(req.params.id)
    res.json(user)
    console.log('this is the SHOW route')
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
    console.log('this is the CREATE route')
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const authenticate = async (req: Request, res: Response) => {
  const user: User = {
    firstname: req.body.firstName,
    lastname: req.body.lastname,
    password: req.body.password
  } as User

  try {
    const authUser = await store.authenticate(user.firstname, user.lastname, user.password)
    var token = jwt.sign({ user: authUser }, JWTtoken)
    res.json({ message: 'Checking authentication', token })
    console.log('this is the authenticate route')
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const update = async (req: Request, res: Response) => {
  const user: User = {
    id: req.params.id,
    firstname: req.body.firstName,
    lastname: req.body.lastname,
    password: req.body.password
  } as User

  try {
    const editUser = await store.edit(user)
    res.json({ message: 'User updated successfully', editUser })
    console.log('this is the EDIT route')
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const destroy = async (req: Request, res: Response) => {
  try {
    const deleted = await store.delete(req.params.id)
    res.json({ message: `User ${req.params.id} deleted`, deleted })
    console.log('this is the DELETE route')
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}