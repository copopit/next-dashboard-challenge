import {Menubar, MenubarMenu, MenubarTrigger} from "@/components/ui/menubar";
import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>
                    <Link href="/">Dashboard</Link>
                </MenubarTrigger>
                <MenubarTrigger>
                    <Link href="/products">Products</Link>
                </MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    )
}