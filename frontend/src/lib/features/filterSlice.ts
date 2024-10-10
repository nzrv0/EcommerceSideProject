import { createSlice, current } from "@reduxjs/toolkit";

interface FilterState {
    productItems: ProductInterface[] | [];
    OrginalproductItems: any[];
    max_price: number;
    inStock: boolean;
    sortArray: string;
    isLoading: boolean;
    productId: string;
    singleProduct: any | null;
    view: boolean;
}

const initialState: FilterState = {
    productItems: [],
    OrginalproductItems: [],

    max_price: 0,
    inStock: false,
    sortArray: "lowest",
    isLoading: true,
    productId: "",
    singleProduct: null,
    view: true,
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        sortProducts: (state, action) => {
            let tempProducts = state.OrginalproductItems;
            state.sortArray = action.payload;
            switch (state.sortArray) {
                case "lowest":
                    tempProducts = tempProducts.sort(
                        (a, b) => a.price - b.price
                    );
                    break;
                case "highest":
                    tempProducts = tempProducts.sort(
                        (a, b) => b.price - a.price
                    );
                    break;
                case "a-z":
                    tempProducts = tempProducts.sort((a, b) =>
                        a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
                    );
                    break;
                case "z-a":
                    tempProducts = tempProducts.sort((a, b) =>
                        a.name.toUpperCase() > b.name.toUpperCase() ? -1 : 1
                    );
                    break;
                default:
                    tempProducts = tempProducts.sort(
                        (a, b) => a.price - b.price
                    );
            }
            state.productItems = tempProducts;
        },
        filterProducts: (state, action) => {
            const { search, category, color, price, inStock } = action.payload;
            let tempProducts = state.OrginalproductItems;
            if (search !== "") {
                tempProducts = tempProducts.filter((item) =>
                    item.name.toLowerCase().startsWith(search.toLowerCase())
                );
            }
            if (category !== "All") {
                tempProducts = tempProducts.filter(
                    (item) => item.category === category
                );
            }
            if (color !== "All") {
                tempProducts = tempProducts.filter((item) =>
                    item.colours.includes(color)
                );
            }

            if (price !== "0") {
                tempProducts = tempProducts.filter(
                    (item) =>
                        Math.round(item.price.toString()) >= Math.round(price)
                );
            }
            if (inStock) {
                tempProducts = tempProducts.filter(
                    (item) => item.inStock === inStock
                );
            }
            state.productItems = tempProducts;
        },
        setView: (state, action) => {
            state.view = action.payload;
        },

        setProducts: (state, action) => {
            state.OrginalproductItems = action.payload;
            state.productItems = state.OrginalproductItems;
            state.max_price = Math.max(
                ...state.OrginalproductItems.map((item) => item.price)
            );
        },
    },
});

export const { sortProducts, filterProducts, setProducts, setView } =
    filterSlice.actions;

export default filterSlice.reducer;
