import { mysqlTable, serial, text, varchar, float } from 'drizzle-orm/mysql-core';
import { InferModel } from 'drizzle-orm';
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
 
// create the connection
const connection = connect({
  host: process.env["DATABASE_HOST"],
  username: process.env["DATABASE_USERNAME"],
  password: process.env["DATABASE_PASSWORD"],
});
 
const db = drizzle(connection);

export const products = mysqlTable('products', {
    id: serial('id').primaryKey(),
    category: text('category'),
    name: text('name'),
    price: text('price'),
    description: text('description'),
    image: text('image'),
    rating: float('rating'),
});

export type Product = InferModel<typeof products, "select"> // return type when queried
export type NewProduct = InferModel<typeof products, "insert"> // insert type

export default db;