import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const listUsers = createSlice({
  name: "userList", // Cambié el nombre del slice a "userList" para mayor claridad
  initialState,
  reducers: {
    update: (state, action) => {
      state.counter += action.payload;
    },
    deletee: (state) => {
      state.counter = null;
    },
  },
});

export const { update, deletee } = listUsers.actions; // Corregí los nombres de las acciones

export default listUsers.reducer;
