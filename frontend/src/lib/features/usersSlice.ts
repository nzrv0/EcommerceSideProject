import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
    user: {
        id: string;
        email: string;
        orders: Product[];
        whislist: (Product & { length: string })[];
        canceled: (Product & { date: Date })[];
        return: (Product & { date: Date })[];
        purched: (Product & { date: Date })[];
        adress: {
            street: string;
            apartment: string;
            town: string;
        };
        paymant: { method: string }[];
    } | null;
    userExists: boolean;
    isLoading: boolean;
}

const initialState: InitialState = {
    user: null,
    userExists: false,
    isLoading: true,
};

export const fetchUser = createAsyncThunk(
    "users/fetchUser",
    async (id: string) => {
        const response = await axios.get(
            `http://localhost:3001/users/user/${id}`
        );
        return response.data;
    }
);
export const validateUser = createAsyncThunk(
    "users/ValidateUser",
    async ({ email, password }: { email: string; password: string }) => {
        const response = await axios.post("http://localhost:3001/user/login", {
            email: email,
            password: password,
        });
        if (response.status === 200) {
            return true;
        }
        return false;
    }
);
export const createUser = createAsyncThunk(
    "users/createUser",
    async ({ email, password }: { email: string; password: string }) => {
        const response = await axios.post(
            "http://localhost:3001/user/register",
            {
                email: email,
                password: password,
            }
        );
        if (response.status === 201) {
            return response.data;
        }
    }
);

export const usersSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setColor: (state, action) => {},
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        });
        builder.addCase(fetchUser.rejected, (state) => {
            state.isLoading = false;
        });
        builder.addCase(validateUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(validateUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userExists = action.payload;
        });
        builder.addCase(validateUser.rejected, (state) => {
            state.isLoading = false;
        });
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        });
        builder.addCase(createUser.rejected, (state) => {
            state.isLoading = false;
        });
    },
});
export const { setColor } = usersSlice.actions;
export default usersSlice.reducer;
