import React, { useState } from "react";
import FilterBar from "@/components/FilterBar";
import ShowRoute from "@/components/ui/showRoute";
import FilterHeader from "@/components/FilterHeader";
import ProductView from "@/components/ProductView";
function page() {
    return (
        <div className="container mt-20">
            <ShowRoute />
            <div className="max-w-full flex items-start gap-x-8 flex-nowrap mt-16">
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
