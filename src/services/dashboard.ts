import client from '../database'

export class DashboardQueries {
  // Get all orders that have been made by user
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
      throw new Error(`unable get order with users: ${err}`)
    }
  }

  // Get all products by catehory
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
      throw new Error(`unable get products by category: ${err}`)
    }
  }

  // Get all most five wanted products
  async fiveMostPopular(): Promise<{ name: string, price: number }[]> {
    try {
      //@ts-ignore
      const conn = await client.connect()
      console.log('connection success')
      const sql = 'SELECT name, SUM(order_products.quantity) FROM products INNER JOIN order_products ON products.id = order_products.product_id GROUP BY name ORDER BY COUNT(order_products.quantity) DESC LIMIT 5'
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`unable get products by order: ${err}`)
    }
  }

  // Get all completed orders by user
  async completedOrders(id: string): Promise<{ stauts: string }[]> {
    try {
      //@ts-ignore
      const conn = await client.connect();
      console.log('connection success')
      const sql = `SELECT status FROM orders INNER JOIN users ON orders.user_id = users.id WHERE status='complete' AND orders.user_id=${id}`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`unable get completed orders by user: ${err}`)
    }
  }
}