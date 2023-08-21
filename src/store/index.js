import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleModal(state) {
        state.isModalOpen = !state.isModalOpen;
    },
  },
});

const store = configureStore({
  reducer: {
    app: appSlice.reducer
  },
});

export const actions = appSlice.actions;

export default store;
