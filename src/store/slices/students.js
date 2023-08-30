import { createSlice } from "@reduxjs/toolkit";
import { studentsData } from "../../data/students";

const students = createSlice({
  name: "students",
  initialState: {
    students: studentsData,
  },
  reducers: {
    editStudents: (state, action) => {
      const newData = action.payload.data;

      state.students[action.payload.index] = newData;

      //   if (newData.sponsorSum && newData.sponsorSum.value !== undefined) {
      //     state.students[action.payload.index].sponsorSum = Number(
      //       newData.sponsorSum.value
      //     );
      //   }

      console.log(state.students[action.payload.index], newData);
    },
  },
});

export const { editStudents } = students.actions;

export default students.reducer;
