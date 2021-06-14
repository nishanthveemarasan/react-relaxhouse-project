import { FastfoodOutlined } from "@material-ui/icons";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chairs: [],
  isChairChanged: true,
  isChairModalOpen: false,
  chairId: 0,
  chairActionType: "",
  isLoading: false,
  showAlert: false,
  isDataChanged: true,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getChairs(state, action) {
      state.chairs = action.payload.chairs;
      state.isChairChanged = false;
    },

    isChairChanged(state, action) {
      state.isChairChanged = true;
    },

    openChairModal(state, action) {
      state.isChairModalOpen = true;
      state.chairId = action.payload.value;
      state.chairActionType = action.payload.type;
    },
    closeChairModal(state) {
      state.isChairModalOpen = false;
      state.chairId = 0;
      state.chairActionType = "";
      state.showAlert = false;
    },
    isLoading(state) {
      state.isLoading = true;
    },
    isCloseLoading(state) {
      state.isLoading = false;
    },
    isShowAlert(state) {
      state.showAlert = true;
    },
    isHideAlert(state) {
      state.showAlert = false;
    },

    isDataChange(state) {
      state.isDataChanged = true;
    },
    isDataNotChange(state) {
      state.isDataChanged = false;
    },
  },
});

export default productSlice;
