"use server"

import { eq, or, sql } from "drizzle-orm";
import db, { Product, NewProduct, products } from '../db/schema';


export async function GetProducts() {
    return await db.select().from(products);
}


export async function AddProduct(newProduct: NewProduct) {
    return await db.insert(products).values(newProduct);
}

export async function DeleteProduct(id: number) {
    return await db.delete(products).where(eq(products.id, id));
}