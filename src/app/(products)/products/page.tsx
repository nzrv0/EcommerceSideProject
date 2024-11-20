import React from "react";
import FilterBar from "@/components/Products/FilterBar";
import ShowRoute from "@/components/shared/ShowRoute";
import FilterHeader from "@/components/Products/FilterHeader";
import ProductView from "@/components/Products/ProductView";
function page() {
  return (
    <div className="container mt-20">
      <ShowRoute />
      <div className="mt-16 flex max-w-full flex-nowrap items-start gap-x-20">
        <FilterBar />
        <div className="flex w-full flex-col">
          <FilterHeader />
          <ProductView />
        </div>
      </div>
    </div>
  );
}

export default page;
