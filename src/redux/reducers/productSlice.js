import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  productDetail: null,
  isLoading: false,
  error: null,
};

export const fetchProductsAll = createAsyncThunk(
  "product/getProducts",
  async (keyword, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/yonghyun421/hnm-practice/products?q=${keyword}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchProductDetail = createAsyncThunk(
  "product/getProductDetail",
  async (id, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/yonghyun421/hnm-practice/products/${id}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (bulider) => {
    bulider
      .addCase(fetchProductsAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProductsAll.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchProductDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetail = action.payload;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
