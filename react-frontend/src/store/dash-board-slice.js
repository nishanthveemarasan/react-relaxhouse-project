import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalUsers: 0,
  totalOrders: 0,
  totalPosts: 0,
  totalProducts: 0,
  popularItems: [],
  recentOrders: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    getAllDashBoardData(state, action) {},
  },
});

export default dashboardSlice;
