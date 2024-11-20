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
    <div className="container h-auto w-full">
      <main className="mb-36 flex h-full w-full items-start justify-center">
        <SideMenu />
        <ProductCaruesel />
      </main>
      <ProductsByDate Title="Today's" SubTitle="Flash Sales" Counter />
      <hr className="my-[70px] max-w-[1170px]" />
      <CategoriesCorusel />
      <hr className="my-[70px] max-w-[1170px]" />
      <ProductsByDate Title="This Month" SubTitle="Best Selling Products" />
      <TimeLimitedProduct />
      <OurProducts />
      <OurProductsShowcase />
      <OurAdvantages />
    </div>
  );
}
