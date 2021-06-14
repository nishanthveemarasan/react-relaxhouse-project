import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./dash-board-slice";
import orderSlice from "./order-slice";
import productSlice from "./product-slice";

const store = configureStore({
  reducer: {
    dashboardStore: dashboardSlice.reducer,
    productStore: productSlice.reducer,
    orderStore: orderSlice.reducer,
  },
});

export const dashboardActions = dashboardSlice.actions;
export const productStoreAction = productSlice.actions;
export const orderStoreAction = orderSlice.actions;

export default store;
