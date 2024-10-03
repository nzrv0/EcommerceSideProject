import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductById } from "../actions/product.actions";

interface Product {
    id: string;
    name: string;
    image?: string;
    description: string;
    price: number;
    rating?: number;
    reviews?: string[];
    category: string;
    inStock?: boolean;
    colours: string[];
    quantity: number;
    discount?: number;
}
interface InitialState {
    products: Product[];
    product: Product;
    currentColor: string;
    amount: number;
    isLoading: boolean;
}

const initialState: InitialState = {
    products: [],
    product: {},
    currentColor: "",
    amount: 0,
    isLoading: true,
};

export const fetchProduct = createAsyncThunk(
    "products/fetchProduct",
    async (id: string) => {
        const data = await fetchProductById(id);
        const serilze = await JSON.parse(JSON.stringify(data));
        return serilze;
    }
);

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        increase: (state, action) => {
            state.products.map((product) => {
                if (product.inStock && product.id === action.id) {
                    product.quantity += 1;
                }
            });
        },
        decrease: (state, action) => {
            state.products.map((product) => {
                if (product.inStock && product.id === action.id) {
                    product.quantity -= 1;
                }
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
    },
});
export const { increase } = productsSlice.actions;
export default productsSlice.reducer;
