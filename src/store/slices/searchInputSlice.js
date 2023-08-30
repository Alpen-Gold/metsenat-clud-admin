import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "counter",
  initialState: {
    inputValue: "",
  },
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInputValue } = searchSlice.actions;

export default searchSlice.reducer;
