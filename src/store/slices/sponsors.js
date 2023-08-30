import { createSlice } from "@reduxjs/toolkit";
import { SponsorsData } from "../../data/sponsors";

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
  },
});

export const { editSponsor } = sponsors.actions;

export default sponsors.reducer;
