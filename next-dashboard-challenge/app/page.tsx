"use client"

import { getProducts, addProduct, Product } from '../db/schema';
import { useEffect, useState } from 'react';
import { Button } from "../components/ui/button";

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(async () => {
        setProducts(await getProducts);
    });

    const handleOnClick = () => {
        const result = addProduct({
            category: "test",
            name: "test",
            price: "test",
            description: "test",
            image: "test",
            rating: 10.0,
        });

        console.log(result);
    }

    return (
        <div className="text-xl max-w-full w-full flex flex-col items-center justify-between">
            Welcome
            <Button onClick={handleOnClick}>Add product</Button>
            {products.map((product) => (
                <div key={product.id}>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    )
}
