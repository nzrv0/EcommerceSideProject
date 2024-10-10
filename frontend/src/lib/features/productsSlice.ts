import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface InitialState {
    products: ProductInterface[];
    product: ProductInterface;
    currentColor: string;
    amount: number;
    isLoading: boolean;
}

const initialState: InitialState = {
    products: [],
    product: {
        id: "",
        name: "",
        description: "",
        price: 0,
        category: "",
        colours: [],
        quantity: 0,
    },
    currentColor: "",
    amount: 0,
    isLoading: true,
};

export const fetchProduct = createAsyncThunk(
    "products/fetchProduct",
    async (id: string) => {
        const response = await axios.get(
            `http://localhost:3001/products/product/id/${id}`
        );
        return response.data;
    }
);
export const fetchAllProducts = createAsyncThunk(
    "products/fetchAllProducts",
    async (size: string) => {
        const response = await axios.get(
            `http://localhost:3001/products?size=5`
        );
        return response.data;
    }
);
export const fetchByCategory = createAsyncThunk(
    "products/fetchByCategory",
    async (category?: string) => {
        const response = await axios.get(
            `http://localhost:3001/products/product/category/${category}`
        );
        return response.data;
    }
);

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        increase: (state, action) => {
            state.products.map((product) => {
                // if (product.inStock && product.id === action?.id) {
                //     product.quantity += 1;
                // }
            });
        },
        decrease: (state, action) => {
            state.products.map((product) => {
                // if (product.inStock && product.id === action.id) {
                //     product.quantity -= 1;
                // }
            });
        },
        setColor: (state, action) => {
            // state.products.filter((product) => product.colours.length !== 0).map(item=>item.);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
        });
        builder.addCase(fetchProduct.rejected, (state) => {
            state.isLoading = false;
        });
        builder.addCase(fetchAllProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        });
        builder.addCase(fetchAllProducts.rejected, (state) => {
            state.isLoading = false;
        });
        builder.addCase(fetchByCategory.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchByCategory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        });
        builder.addCase(fetchByCategory.rejected, (state) => {
            state.isLoading = false;
        });
    },
});
export const { increase } = productsSlice.actions;
export default productsSlice.reducer;
