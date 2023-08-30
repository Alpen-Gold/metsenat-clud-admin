import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import drawerSlice from "./slices/drawerSlice";
import sponsors from "./slices/sponsors";
import students from "./slices/students";

export default configureStore({
  reducer: {
    counter: counterReducer,
    drawer: drawerSlice,
    sponsors: sponsors,
    students: students,
  },
});
