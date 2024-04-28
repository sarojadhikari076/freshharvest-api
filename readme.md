# FoodHarvest API

## Introduction

FoodHarvest API serves as the backend for the FoodHarvest platform, providing essential functionalities for managing users, products, carts, orders, and frequently asked questions (FAQs). This API is built using Node.js and Express.js, with MongoDB as the database. It is written in TypeScript, offering type safety and better code organization.

## Features

- **User Authentication:** Allows users to login and register securely.
- **User Management:** Enables users to update their profiles, change passwords, and delete accounts.
- **Product Management:** Provides CRUD operations for managing products.
- **Cart Management:** Supports adding/removing items from the cart and viewing cart summary.
- **Order Management:** Facilitates order creation and retrieval for users.
- **FAQ Management:** Allows administrators to manage frequently asked questions.

## Deployment

The API is deployed and accessible at [https://freshharvest-api.onrender.com/api](https://freshharvest-api.onrender.com/api).

## Installation

To run the API locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```
   PORT=3000
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

4. **Run the development server:**

   ```bash
   npm run start:dev
   ```

## API Routes

### Authentication

- `POST /auth/login`: User login
- `POST /auth/register`: User registration

### Users

- `GET /auth/me`: Get current user profile
- `PATCH /auth/me`: Update current user profile
- `PATCH /auth/me/password`: Update current user password
- `DELETE /auth/me`: Delete current user account

### Carts

- `GET /carts`: Get current user's cart
- `POST /carts`: Add a product to the cart
- `DELETE /carts`: Remove a product from the cart
- `GET /carts/summary`: Get summary of the cart

### Orders

- `GET /orders`: Get current user's orders
- `POST /orders`: Create a new order

### Products

- `GET /products`: Get all products
- `GET /products/featured`: Get featured products
- `GET /products/best-selling`: Get best selling products
- `GET /products/sub-categories`: Get sub-categories of products
- `GET /products/:slug`: Get product by slug

### FAQs

- `GET /faqs`: Get all FAQs
- `GET /faqs/:id`: Get FAQ by ID
- `POST /faqs`: Create a new FAQ
- `PUT /faqs/:id`: Update an existing FAQ
- `DELETE /faqs/:id`: Delete an existing FAQ

## Technology Stack

- **Node.js:** A JavaScript runtime for building server-side applications.
- **Express.js:** A minimalist web framework for Node.js, used for handling HTTP requests and routes.
- **MongoDB:** A NoSQL database used for storing application data.
- **TypeScript:** A statically typed superset of JavaScript that compiles to plain JavaScript. It provides type safety, enhanced code quality, and better tooling support.
- **Mongoose:** An Object Data Modeling (ODM) library for MongoDB and Node.js, used for modeling application data and interacting with MongoDB.
- **JWT (JSON Web Tokens):** A compact, URL-safe means of representing claims to be transferred between two parties. JWTs are used for user authentication and authorization.
- **bcrypt:** A library for hashing passwords securely, used for user password encryption.
- **dotenv:** A zero-dependency module for loading environment variables from a `.env` file.
- **nodemon:** A utility that monitors for changes in files and automatically restarts the server.
- **rimraf:** A cross-platform tool for removing directories and their contents.
- **ts-node:** A TypeScript execution and REPL for Node.js, used for running TypeScript code directly without compilation.
- **TypeScript Compiler (tsc):** The TypeScript compiler that converts TypeScript code into JavaScript.

## License

This project is licensed under the ISC License.

## Author

- **Saroj Adhikari**
