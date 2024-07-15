import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type TApp = {
  isAppLoaded: boolean;
};

const initialState: TApp = {
  isAppLoaded: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppLoaded: (state) => {
      state.isAppLoaded = true;
    },
  },
});

export const { setAppLoaded } = appSlice.actions;
export default appSlice.reducer;

export const getAppState = (state: RootState) => state.app.isAppLoaded;
