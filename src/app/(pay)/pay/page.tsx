import React from "react";
import ShowRoute from "@/components/shared/ShowRoute";
import Checkout from "@/components/Payment/checkout";
import CheckoutForm from "@/components/Payment/checkoutForm";
async function page() {
  return (
    <div className="container mt-20">
      <ShowRoute routes={["Products", "Pay"]} />
      <h1 className="mb-10 mt-20 text-5xl font-medium text-black">
        Billing Details
      </h1>
      <div className="flex items-start justify-between gap-[170px]">
        <CheckoutForm />
        <Checkout />
      </div>
    </div>
  );
}

export default page;
