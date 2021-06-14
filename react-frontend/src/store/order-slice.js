import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderData: [],
  isModalOpen: false,
  action: "",
  orderId: 0,
  isLoading: false,
  showAlert: false,
  isDataChange: true,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getOrderData(state, action) {
      state.orderData = action.payload.data;
    },
    openModal(state, action) {
      state.isModalOpen = true;
      state.action = action.payload.type;
      state.orderId = action.payload.id;
      //console.log(state.action, state.orderId);
    },
    closeModal(state) {
      state.isModalOpen = false;
      state.action = "";
      state.orderId = 0;
      state.isLoading = false;
      state.showAlert = false;
    },
    loadingAction(state) {
      state.isLoading = true;
    },
    closeLoadingAction(state) {
      state.isLoading = false;
    },
    isAhowAlert(state) {
      state.showAlert = true;
    },
    dataIsChanged(state) {
      state.isDataChange = true;
    },
    dataNotChanged(state) {
      state.isDataChange = false;
    },
  },
});

export default orderSlice;
