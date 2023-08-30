import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./slices/counterSlice";
import drawerSlice from "./slices/drawerSlice";
import sponsors from "./slices/sponsors";
import students from "./slices/students";
import searchValue from "./slices/searchInputSlice";

export default configureStore({
  reducer: {
    searchValue: searchValue,
    drawer: drawerSlice,
    sponsors: sponsors,
    students: students,
  },
});
