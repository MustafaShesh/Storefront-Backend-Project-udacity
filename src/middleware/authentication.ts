import { Request, Response } from 'express'
import jwt, { Secret } from 'jsonwebtoken'

const JWTtoken: Secret = process.env.TOKEN_SECRET as Secret

export const verifyAuthToken = (req: Request, res: Response, next: Function) => {
  try {
    const authorizationHeader: string = req.headers.authorization as string
    const token = authorizationHeader.split(' ')[1]
    const decoded = jwt.verify(token, JWTtoken)

    next()
  } catch (error) {
    res.status(401)
    res.json(`Access denied, invalid token ${error}`)
    return
  }
}