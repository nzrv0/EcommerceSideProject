"use client";
import React, { useEffect } from "react";
import ListProduct from "@/components/Products/ListProduct";
import RowProduct from "./RowProduct";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import useAllProducts from "@/lib/hooks/useAllProducts";
import { setProducts } from "@/lib/features/filterSlice";

function ProductView() {
  const dispatch = useDispatch();

  const view = useSelector<RootState>((state) => state.filterSlice.view);

  const products = useSelector<RootState>(
    (state) => state.filterSlice.productItems,
  );

  const originalProducts = useAllProducts("20");

  useEffect(() => {
    dispatch(setProducts(originalProducts));
    console.log("ss");
  }, [originalProducts]);

  return (
    <div>
      {!view ? (
        <ListProduct products={products} />
      ) : (
        <RowProduct products={products} />
      )}
    </div>
  );
}

export default ProductView;
