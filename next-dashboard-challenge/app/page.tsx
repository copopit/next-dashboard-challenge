import {drizzle} from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { getProducts } from '../db/schema';

export default async function Home() {

    const allProducts = await getProducts();

    return (
        <div className="text-xl max-w-full w-full flex flex-col items-center justify-between">
            Welcome
            {allProducts[0].name}
        </div>
    )
}
