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
-   [OPTIONAL] Products by category (args: product category): '/products_by_category/:category' [GET]

#### Users

-   Index: '/users' [GET] [token required]
-   Show: 'users/:id' [GET] [token required]
-   Create N: '/users' [POST] [token required]
-   Authenticate: '/users/authenticate' [POST] [token required]
-   Update: '/products/:id' [PUT] [token required]
-   Destroy: '/products/:id' [DELETE] [token required]

#### Orders

-   Current Order by user (args: user id): '/orders-by-user/:id' [GET] [token required]
-   [OPTIONAL] Completed Orders by user (args: user id) [token required]

## Data Shapes

#### Product

-   id
-   name
-   price
-   [OPTIONAL] category

#### User

-   id
-   firstName
-   lastName
-   password

#### Orders

-   id
-   id of each product in the order
-   quantity of each product in the order
-   user_id
-   status of order (active or complete)
