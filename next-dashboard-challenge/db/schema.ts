// import type { InferModel } from 'drizzle-orm';
// import { sqliteTable, text, integer, uniqueIndex } from 'drizzle-orm/sqlite-core';
// import { drizzle, BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
// import Database from 'better-sqlite3';


// export const products = sqliteTable('products', {
//     id: integer('id').primaryKey(),
//     category: text('category'),
//     name: text('name'),
//     price: text('price'),
//     description: text('description'),
//     image: text('image'),
//     rating: text('rating'),
// });

// export type Product = InferModel<typeof products, "select"> // return type when queried
// export type NewProduct = InferModel<typeof products, "insert"> // insert type

// export const sqlite = new Database('sqlite.db');
// export const db: BetterSQLite3Database = drizzle(sqlite);

// export const getProducts = db.select().from(products).all();

// export function addProduct(product: NewProduct) {
//     return db.insert(products).values(product).returning();
// }

//
//
// const sqlite = new Database('sqlite.db');
// const db: BetterSQLite3Database = drizzle(sqlite);
// //const getProducts = await db.select().from(products);
//
// export async function getProducts(): Product[] {
//     return await db.query.products.findMany();
// }

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


export const getProducts = db.select().from(products);

export async function addProduct(product: NewProduct) {
    return await db.insert(products).values(product);
}

export default db;