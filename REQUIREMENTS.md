# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

-   Index: '/products' [GET]
-   Show: '/products/:id' [GET]
-   Create: '/products' [POST] [token required]
-   Update: '/products/:id' [PUT]
-   Destroy: '/products/:id' [DELETE]
-   [OPTIONAL] Top 5 most popular products: '/five-most-popular' [GET]
-   [OPTIONAL] Products by category (args: product category name): '/products/category/:category' [GET]

#### Users

-   Index: '/users' [GET] [token required]
-   Show: 'users/:id' [GET] [token required]
-   Create N: '/users' [POST] [token required]
-   Authenticate: '/users/authenticate' [POST] [token required]
-   Update: '/users/:id' [PUT] [token required]
-   Destroy: '/users/:id' [DELETE] [token required]

#### Orders

-   Index: '/orders' [GET]
-   Show: '/orders/:id' [GET]
-   Create: '/orders' [POST] [token required]
-   Update: '/orders/:id' [PUT]
-   Destroy: '/orders/:id' [DELETE]
-   Add products to order: '/orders/:id/products' [POST] [token required]
-   Current Order by user (args: user id): '/users/:id/orders' [GET] [token required]
-   [OPTIONAL] Completed Orders by user (args: user id): '/users/:id/completed-orders' [GET] [token required]

## Data Shapes

#### Product

-   id: varchar
-   name: varcahr
-   price: number
-   [OPTIONAL] category: varchar

#### User

-   id: varchar
-   firstName: varchar
-   lastName: varcahr
-   password: varchar

#### Orders

-   id: varchar
-   id of each product in the order
-   user_id: string[foreign key to users table]
-   status of order: varchar (active or complete)

#### Order of products

-   id: varchar
-   quantity of each product in the order: number
-   id of order: string[foreign key to orders table]
-   id of each product in the order: string[foreign key to products table]
