import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
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
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    orders: { order: Product[]; quantity: number }[];
    whislist: (Product & { length: string })[];
    canceled: (Product & { date: Date })[];
    return: (Product & { date: Date })[];
    purched: (Product & { date: Date })[];
    address: string;
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
const URL = process.env.NEXT_PUBLIC_BACKEND_URL || "";

export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
  const cookie = Cookies;
  const token = cookie.get("token");
  const response = await axios.get(`${URL}/user/validate`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${token}`,
    },
  });
  return response.data;
});

export const validateUser = createAsyncThunk(
  "users/ValidateUser",
  async ({ email, password }: { email: string; password: string }) => {
    const response = await axios.post("${URL}/user/login", {
      email: email,
      password: password,
    });
    if (response.status === 200) {
      return true;
    }
    return false;
  },
);
export const createUser = createAsyncThunk(
  "users/createUser",
  async ({ email, password }: { email: string; password: string }) => {
    const response = await axios.post("${URL}/user/register", {
      email: email,
      password: password,
    });
    if (response.status === 201) {
      return response.data;
    }
  },
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (values: any) => {
    const {
      firstName,
      lastName,
      email,
      address,
      currentPassword,
      newPassword,
    } = values;

    try {
      const cookie = Cookies;
      const token = cookie.get("token");
      console.log(values);
      const response = await axios.post(
        "${URL}/user/update",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          address: address,
          password: currentPassword,
          newPassword: newPassword,
        },
        {
          headers: {
            Authorization: `token ${token}`,
          },
        },
      );
      return response.data;
    } catch (err) {
      throw new Error(`something has been happend ${err}`);
    }
  },
);

export const usersSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setColor: (state, action) => {},
  },
  extraReducers: (builder) => {
    // fetch user case
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
    // validate user case
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
    // create user user
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
    // update user case
    builder.addCase(updateUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(updateUser.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
export const { setColor } = usersSlice.actions;
export default usersSlice.reducer;
