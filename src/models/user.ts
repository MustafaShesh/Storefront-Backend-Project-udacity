import client from '../database';
import bcrypt from 'bcrypt';

export const pepper: string = process.env.BCRYPT_PASSWORD as string
export const saltRounds: string = process.env.SALT_ROUNDS as string

export type User = {
  id?: number
  firstname: string
  lastname: string
  password: string
}

export class UserStore {
  async index(): Promise<User[]> {
    try {
      // @ts-ignore
      const conn = await client.connect()
      console.log('connection success')
      const sql = 'SELECT * FROM users'
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (error) {
      throw new Error(`${error}`)
    }
  }

  async show(id: string): Promise<User> {
    try {
      // @ts-ignore
      const conn = await client.connect()
      console.log('connection success')
      const sql = 'SELECT * FROM users WHERE id=($1)'
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (error) {
      throw new Error(`${error}`)
    }
  }

  async create(user: User): Promise<User> {
    try {
      // @ts-ignore
      const conn = await client.connect()
      console.log('connection success')
      const sql = 'INSERT INTO users (firstname, lastname, password) VALUES($1, $2, $3) RETURNING *'
      const hash = bcrypt.hashSync(user.password + pepper, parseInt(saltRounds))
      const result = await conn.query(sql, [user.firstname, user.lastname, hash])
      conn.release()
      return result.rows[0]
    } catch (error) {
      throw new Error(`${error}`)
    }
  }

  async authenticate(firstname: string, lastname: string, password: string): Promise<User | null> {
    try {
      // @ts-ignore
      const conn = await client.connect()
      const sql = 'SELECT password FROM users WHERE firstname=($1) AND lastname=($2)'
      const result = await conn.query(sql, [firstname, lastname])
      if (result.rows.length) {
        const passHash = result.rows[0]
        if (bcrypt.compareSync(password + pepper, passHash.password)) {
          return passHash
        }
      }
      return null
    } catch (error) {
      throw new Error(`${error}`)
    }
  }

  async edit(user: User): Promise<User> {
    try {
      // @ts-ignore
      const conn = await client.connect()
      console.log('connection success')
      const sql = 'UPDATE users SET firstname=($1), lastname=($2), password=($3) WHERE id=($4) RETURNING *'
      const result = await conn.query(sql, [user.firstname, user.lastname, user.password, user.id])
      conn.release()
      return result.rows[0]
    } catch (error) {
      throw new Error(`${error}`)
    }
  }

  async delete(id: string): Promise<User> {
    try {
      // @ts-ignore
      const conn = await client.connect()
      const sql = 'DELETE FROM users WHERE id=($1)'
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
}