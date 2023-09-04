import { createSlice } from "@reduxjs/toolkit";
import { SponsorsData } from "../../data/sponsors";
import { useNavigate } from "react-router-dom";

const sponsors = createSlice({
  name: "sponsors",
  initialState: {
    sponsors: SponsorsData,
  },
  reducers: {
    editSponsor: (state, action) => {
      const newData = action.payload.data;

      state.sponsors[action.payload.index] = newData;

      if (newData.sponsorSum && newData.sponsorSum.value !== undefined) {
        state.sponsors[action.payload.index].sponsorSum = Number(
          newData.sponsorSum.value
        );
      }

      if (newData.status && newData.status.value !== undefined) {
        state.sponsors[action.payload.index].status = String(
          newData.status.value
        );
      }

      if (newData.typePayment && newData.typePayment.value !== undefined) {
        state.sponsors[action.payload.index].typePayment = String(
          newData.typePayment.value
        );
      }

      if (newData.projectName && newData.projectName.value !== undefined) {
        state.sponsors[action.payload.index].projectName = String(
          newData.projectName.value
        );
      }

      console.log(state.sponsors[action.payload.index], newData);
    },

    addNewSponsor: (state, action) => {
      let maxId = state.sponsors.reduce((maxId, value) => {
        return Math.max(maxId, value.id);
      }, -1);

      state.sponsors = [
        ...state.sponsors,
        {
          id: maxId + 1,
          fullName: action.payload.fullName,
          phone: action.payload.phone,
          sponsorSum: action.payload.sponsorSum,
          paid: 0,
          date: new Date(),
          status: "Yangi",
          typePayment: "Naqt",
          projectName: action.payload.projectName
            ? action.payload.projectName
            : "",
        },
      ];

      console.log(state.sponsors);
    },
  },
});

export const { editSponsor, addNewSponsor } = sponsors.actions;

export default sponsors.reducer;
