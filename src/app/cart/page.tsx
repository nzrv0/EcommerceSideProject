import React from "react";
import ShowRoute from "@/components/shared/ShowRoute";
import CartItems from "@/components/Cart/CartItems";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CartTotal from "@/components/Cart/CartTotal";
function page() {
  return (
    <main className="container mt-20">
      <ShowRoute />
      <div className="mt-20">
        <CartItems />
        <div className="my-6 flex items-start justify-between">
          <Button variant="secondary" size="primary">
            <Link href="/products">Return To Shop</Link>
          </Button>
          <CartTotal />
        </div>
      </div>
    </main>
  );
}

export default page;
