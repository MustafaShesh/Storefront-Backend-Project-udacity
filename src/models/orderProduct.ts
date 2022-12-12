import client from "../database";

export type OrderProduct = {
  id?: string
  quantity: number
  order_id: string
  product_id: string
}

export class OrderProductStore {
  async addProduct(quantity: number, orderId: string, productId: string): Promise<OrderProduct> {
    try {
      //@ts-ignore
      const conn = await client.connect()
      const ordersql = 'SELECT * FROM orders WHERE id=($1)'
      const result = await conn.query(ordersql, [orderId])
      const order = result.rows[0]
      // get order to see if it is open
      if (order.status == "active") {
        try {
          //@ts-ignore
          const conn = await client.connect()
          const sql = 'INSERT INTO order_products (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *'
          const result = await conn.query(sql, [quantity, orderId, productId])
          conn.release()
          return result.rows[0]
        } catch (err) {
          throw new Error(`Could not add product ${productId} to order ${orderId}: ${err}`)
        }
      }
      conn.release()
      throw new Error(`Could not add product ${productId} to order ${orderId} because order status is ${order.status}`)
    } catch (err) {
      throw new Error(`${err}`)
    }
  }
}