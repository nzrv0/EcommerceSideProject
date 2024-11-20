import React, { Suspense } from "react";
import ProductsByDate from "@/components/ProductsByDate";
import ProductSection from "../../../../components/ProductSection";

async function ProductPage(props: { params: Promise<{ slug: string[] }> }) {
    const params = await props.params;
    const id: string = params.slug.pop() || "";
    return (
        <Suspense>
            <div className="container my-20">
                <ProductSection id={id} />
                <ProductsByDate Title="Related Item" />
            </div>
        </Suspense>
    );
}

export default ProductPage;
