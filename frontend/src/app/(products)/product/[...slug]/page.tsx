import React from "react";
import ProductsByDate from "@/components/productsByDate";
import ProductSection from "../../../../components/ProductSection";

function ProductPage({ params }: { params: { slug: string[] } }) {
    const id: string = params.slug.pop() || "";
    return (
        <div className="container my-20">
            <ProductSection id={id} />
            <ProductsByDate Title="Related Item" />
        </div>
    );
}

export default ProductPage;
