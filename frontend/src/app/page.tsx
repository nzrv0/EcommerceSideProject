import React from "react";
import SideMenu from "@/components/sideMenu";
import ProductCaruesel from "@/components/ProductCarusel";
import ProductsByDate from "@/components/ProductsByDate";
import CategoriesCorusel from "@/components/CategoriesCorusel";
import OurProducts from "@/components/OurProducts";
import TimeLimitedProduct from "@/components/TimeLimitedProduct";
import OurProductsShowcase from "@/components/OurProductsShowcase";
import OurAdvantages from "@/components/shared/OurAdvantages";

export default function Home() {
    return (
        <div className="container w-full h-auto">
            <main className="flex w-full h-full items-start justify-center mb-36">
                <SideMenu />
                <ProductCaruesel />
            </main>
            <ProductsByDate Title="Today's" SubTitle="Flash Sales" Counter />
            <hr className="max-w-[1170px] my-[70px]" />
            <CategoriesCorusel />
            <hr className="max-w-[1170px] my-[70px]" />
            <ProductsByDate
                Title="This Month"
                SubTitle="Best Selling Products"
            />
            <TimeLimitedProduct />
            <OurProducts />
            <OurProductsShowcase />
            <OurAdvantages />
        </div>
    );
}
