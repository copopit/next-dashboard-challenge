"use client"

import { Product } from "../db/schema";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { GetProducts, DeleteProduct } from "../components/serverActions";
import { useEffect, useState } from "react";


export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [imgUrl, setImgUrl] = useState<string>("" as string);

    useEffect(() => {
        GetProducts().then((values) => {
            setProducts(values);
        }).catch((error) => {
            console.log(error);
        });
    }, [])

    function handleOnClick(id: number) {
        DeleteProduct(id).then((result) => {
            setProducts(products.filter((product) => product.id !== id));
            console.log(result);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="text-xl max-w-full w-full flex flex-col items-center justify-between">
            Welcome
            <Table>
                <TableCaption>Our products</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Image</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead className="text-right">price</TableHead>
                        <TableHead>Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        products.map((product) => {
                            return (
                                <TableRow key={product.name as string + product.id}>
                                    <TableCell className="font-medium">{product.name}</TableCell>
                                    <TableCell>{product.category}</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                    <TableCell><Dialog>
                                        <DialogTrigger onClick={() => setImgUrl(product.image as string)}>Open</DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Image</DialogTitle>
                                            </DialogHeader>
                                            <img src={imgUrl} />
                                        </DialogContent>
                                    </Dialog></TableCell>
                                    <TableCell>{product.rating}</TableCell>
                                    <TableCell className="text-right">{product.price}</TableCell>
                                    <TableCell><Button onClick={() => handleOnClick(product.id)}>X</Button></TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </div >
    )
}
