import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRoutes from './routes/userRoute'
import orderRoutes from './routes/orderRoute'
import productRoutes from './routes/productRoute'
import orderProductsRoutes from './routes/orderProductRoutes'
import dashboardRoutes from './routes/dashboardRoutes'

// Intialization
const app: express.Application = express()
const port = 3000
const corsOptions = {
  origin: 'http://someotherdomain.com',
  optionsSuccessStatus: 200 // some legacy browser (IE11, various)
}

app.use(bodyParser.json(), cors(corsOptions))
userRoutes(app)
productRoutes(app)
orderRoutes(app)
orderProductsRoutes(app)
dashboardRoutes(app)

// routes
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})

export default app