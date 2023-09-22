import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  infoUser: {namee:""},
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.infoUser = action.payload;
    },
    deleteData: (state) => {
      state.infoUser = null;
    },
  },
});

export const { updateData, deleteData,  } = authSlice.actions;

export default authSlice.reducer;
