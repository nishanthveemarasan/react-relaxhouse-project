import {configureStore} from '@reduxjs/toolkit';
import dashboardSlice from './dash-board-slice';

const store = configureStore({
    reducer:{
        dashboardStore: dashboardSlice.reducer
    }
});

export const dashboardActions = dashboardSlice.actions;

export default store;
