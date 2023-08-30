import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawer",
  initialState: { open: false },
  reducers: {
    open: (state) => {
      state.open = true;
    },
    close: (state) => {
      state.open = false;
    },
    setDrawerState: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { open, close, setDrawerState } = drawerSlice.actions;

export default drawerSlice.reducer;
