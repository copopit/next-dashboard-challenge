import type { InferModel } from 'drizzle-orm';
import { sqliteTable, text, integer, uniqueIndex } from 'drizzle-orm/sqlite-core';

export const products = sqliteTable('products', {
    id: integer('id').primaryKey(),
    category: text('category'),
    name: text('name'),
    price: text('price'),
    description: text('description'),
    image: text('image'),
    rating: text('rating'),
});

//export type Product = InferModel<typeof products, "select"> // return type when queried
//export type NewProduct = InferModel<typeof products, 'insert'> // insert type
//
//
// const sqlite = new Database('sqlite.db');
// const db: BetterSQLite3Database = drizzle(sqlite);
// //const getProducts = await db.select().from(products);
//
// export async function getProducts(): Product[] {
//     return await db.query.products.findMany();
// }