import React from "react";
import FilterBar from "@/components/Products/FilterBar";
import ShowRoute from "@/components/shared/ShowRoute";
import FilterHeader from "@/components/Products/FilterHeader";
import ProductView from "@/components/Products/ProductView";
function page() {
    return (
        <div className="container mt-20">
            <ShowRoute />
            <div className="max-w-full flex items-start gap-x-20 flex-nowrap mt-16">
                <FilterBar />
                <div className="flex flex-col w-full">
                    <FilterHeader />
                    <ProductView />
                </div>
            </div>
        </div>
    );
}

export default page;
