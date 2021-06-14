import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalUsers: 0,
  totalComments: 0,
  totalPosts: 0,
  totalProducts: 0,
  popularItems: [],
  recentOrders: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    getAllDashBoardData(state, action) {
      state.totalUsers = action.payload.users;
      state.totalComments = action.payload.comments;
      state.totalPosts = action.payload.posts;
      state.totalProducts = action.payload.totalProducts;
      state.recentOrders = action.payload.recentOrders;
      state.popularItems = action.payload.topOrders;
    },
  },
});

export default dashboardSlice;
