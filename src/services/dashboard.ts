import client from '../database'

export class DashboardQueries {
  // Get all users that have made orders
  async ordersByUser(id: string): Promise<{ firstname: string, lastname: string }[]> {
    try {
      //@ts-ignore
      const conn = await client.connect()
      console.log('connection success')
      const sql = `SELECT status FROM orders WHERE orders.user_id = ${id}`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`unable get users with orders: ${err}`)
    }
  }

  // Get all products that have been included in orders
  async productsByCategory(category: string): Promise<{ name: string, price: number }[]> {
    try {
      //@ts-ignore
      const conn = await client.connect()
      console.log('connection success')
      const sql = `SELECT name, price FROM products WHERE products.category=\'${category}\'`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`unable get products and orders: ${err}`)
    }
  }

  // Get all users that have made orders
  async fiveMostPopular(): Promise<{ name: string, price: number }[]> {
    try {
      //@ts-ignore
      const conn = await client.connect()
      const sql = 'SELECT name, SUM(order_products.quantity) FROM products INNER JOIN order_products ON products.id = order_products.product_id GROUP BY name ORDER BY COUNT(order_products.quantity) DESC LIMIT 5'
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`unable get products by price: ${err}`)
    }
  }
}