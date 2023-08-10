"use client"

import { GetProducts, AddProduct } from "@/components/serverActions";
import {
    Form, FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

import * as z from "zod";


const formSchema = z.object({
    name: z.string().min(3).max(255),
    category: z.string().min(3).max(255),
    price: z.string().min(3).max(255),
    description: z.string().min(3).max(255),
    image: z.string().min(3).max(255),
    rating: z.coerce.number().min(0).max(10),
});

export default function Products() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            category: "",
            price: "",
            description: "",
            image: "",
            rating: 0,
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        AddProduct(values)
            .then((result) => console.log(result))
            .catch((error) => console.log("error: " + error));

        console.log(values)
    }

    return (<div className="flex flex-col w-full items-center">
        <div>
            Products
        </div>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="m-auto py-10 flex flex-row flex-wrap">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="mx-4">
                            <FormLabel>Product name</FormLabel>
                            <FormControl>
                                <Input className="text-black" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem className="mx-4">
                            <FormLabel>Product category</FormLabel>
                            <FormControl>
                                <Input className="text-black" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                        <FormItem className="mx-4">
                            <FormLabel>Product price</FormLabel>
                            <FormControl>
                                <Input className="text-black" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem className="mx-4">
                            <FormLabel>Product description</FormLabel>
                            <FormControl>
                                <Input className="text-black" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem className="mx-4">
                            <FormLabel>Product image</FormLabel>
                            <FormControl>
                                <Input className="text-black" placeholder="image URL" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                        <FormItem className="mx-4">
                            <FormLabel>Product rating</FormLabel>
                            <FormControl>
                                <Input type="number" className="text-black" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    </div>
    )
}