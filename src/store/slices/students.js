import { createSlice } from "@reduxjs/toolkit";
import { studentsData } from "../../data/students";

const students = createSlice({
  name: "students",
  initialState: {
    students: studentsData,
    studentSponserIndex: 0,
    editPaidSponsorValue: null,
    editSponsorValue: null,
  },
  reducers: {
    newSponsorAdd: (state, action) => {
      const { studentIndex, newSponsorValue, paidSponsorValue } =
        action.payload;

      const newSponsor = {
        sponsorFullName: newSponsorValue,
        sponsorPrice: Number(paidSponsorValue),
      };

      state.students[studentIndex].sponsorsStudent.push(newSponsor);
      console.log(state.students[studentIndex].sponsorsStudent);
    },

    editStudent: (state, action) => {
      console.log(state.students[action.payload.index], "salon");

      const newData = action.payload.data;

      console.log(newData);

      state.students[action.payload.index] = newData;

      state.students[action.payload.index].kontraktSum = Number(
        newData.kontraktSum
      );

      console.log(state.students[action.payload.index], "salon");
    },

    setStudentSponserIndex: (state, action) => {
      console.log(action.payload, state.students, "click sponsor !");
      state.studentSponserIndex = action.payload.indexSponsor;
    },

    editSponsor: (state, action) => {
      console.log(action.payload);
    },

    setEditPaidSponsorValue: (state, action) => {
      console.log(action.payload);
      state.editPaidSponsorValue = action.payload;
    },

    setEditSponsorValue: (state, action) => {
      console.log(action.payload);
      state.editSponsorValue = action.payload;
    },

    editSponsorClick: (state, action) => {
      state.editSponsorValue =
        state.students[action.payload].sponsorsStudent[
          state.studentSponserIndex
        ].sponsorFullName;

      state.editPaidSponsorValue = Number(
        state.students[action.payload].sponsorsStudent[
          state.studentSponserIndex
        ].sponsorPrice
      );
    },

    editFullSponsor: (state, action) => {
      console.log(state.editSponsorValue, state.editPaidSponsorValue);
      state.students[action.payload].sponsorsStudent[
        state.studentSponserIndex
      ] = {
        sponsorFullName: state.editSponsorValue,
        sponsorPrice: state.editPaidSponsorValue,
      };
    },

    deleteStudentSponsor: (state, action) => {
      state.students[action.payload].sponsorsStudent = state.students[
        action.payload
      ].sponsorsStudent.filter((sponsor) => {
        return (
          sponsor.sponsorPrice !== state.editPaidSponsorValue &&
          sponsor.sponsorFullName !== state.editSponsorValue
        );
      });
    },

    addNewStudent: (state, action) => {
      let maxId = state.students.reduce((maxId, value) => {
        return Math.max(maxId, value.id);
      }, -1);

      console.log(action.payload);

      const newStudent = {
        id: maxId + 1,
        fullName: action.payload.fullName,
        statusStudents: action.payload.statusStudents,
        univerType: action.payload.univerType,
        sponsorSum: 0,
        kontraktSum: Number(action.payload.kontraktSum),
        phone: action.payload.phone,
        sponsorsStudent: [],
      };

      return {
        ...state,
        students: [newStudent, ...state.students],
      };
    },
  },
});

export const {
  setStudentSponserIndex,
  editStudent,
  newSponsorAdd,
  editSponsor,
  setEditSponsorValue,
  setEditPaidSponsorValue,
  editSponsorClick,
  editFullSponsor,
  deleteStudentSponsor,
  addNewStudent,
} = students.actions;
export default students.reducer;
