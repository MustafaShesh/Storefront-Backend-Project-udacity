import client from "../database";

export type Order = {
  id?: string
  status: string
  user_id: number
}

export class OrderStore {
  async index(): Promise<Order[]> {
    // @ts-ignore
    const conn = await client.connect()
    console.log('connection success')
    const sql = 'SELECT * FROM orders'
    const result = await conn.query(sql)
    conn.release()
    return result.rows
  }

  async show(id: string): Promise<Order> {
    // @ts-ignore
    const conn = await client.connect()
    console.log('connection success')
    const sql = 'SELECT * FROM orders WHERE id=($1)'
    const result = await conn.query(sql, [id])
    conn.release()
    return result.rows[0]
  }

  async create(order: Order): Promise<Order> {
    // @ts-ignore
    const conn = await client.connect()
    console.log('connection success')
    const sql = 'INSERT INTO orders (status, user_id) VALUES($1, $2) RETURNING *'
    const result = await conn.query(sql, [order.status, order.user_id])
    conn.release()
    return result.rows[0]
  }

  async edit(order: Order): Promise<Order> {
    try {
      // @ts-ignore
      const conn = await client.connect()
      console.log('connection success')
      const sql = 'UPDATE orders SET status=($1), user_id= ($2) WHERE id=($3)RETURNING *'
      const result = await conn.query(sql, [order.status, order.user_id, order.id])
      conn.release()
      return result.rows[0]
    } catch (error) {
      throw new Error(`${error}`)
    }
  }

  async delete(id: string): Promise<Order> {
    try {
      // @ts-ignore
      const conn = await client.connect()
      const sql = 'DELETE FROM orders WHERE id=($1)'
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
}