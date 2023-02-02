
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  item: "",
  price: 0,
  productList: [],
};
export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      

      state.item = action.payload.product
      state.price = action.payload.price;

      console.log(state.price)

      state.productList = [
        ...state.productList,
        { productName: state.item,  productPrice: state.price },
      ];
      state.total += Math.floor(Number(action.payload.price));
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;