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
          <Link href="/products">
            <Button variant="secondary" size="primary">
              Return To Shop
            </Button>
          </Link>
          <CartTotal />
        </div>
      </div>
    </main>
  );
}

export default page;
