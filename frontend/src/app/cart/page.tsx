import React from "react";
import ShowRoute from "@/components/ui/showRoute";
import CardItems from "@/components/CardItems";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CardTotal from "@/components/CardTotal";
function page() {
    return (
        <main className="container mt-20">
            <ShowRoute />
            <div className="mt-20 ">
                <CardItems />
                <div className="flex items-start justify-between my-6">
                    <Button variant="secondary" size="primary">
                        <Link href="products">Return To Shop</Link>
                    </Button>
                    <CardTotal />
                </div>
            </div>
        </main>
    );
}

export default page;
