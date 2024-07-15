import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
type TChat = {
  chatName: string;
  isNightModeEnabled: boolean;
  chatId: string;
};

const initialState: TChat = {
  chatName: "",
  isNightModeEnabled: false,
  chatId: "",
};

const chatsSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChatUsername: (state, action) => {
      state.chatName = action.payload;
    },
    toggleNightMode: (state) => {
      state.isNightModeEnabled = !state.isNightModeEnabled;
    },
  },
});

export const { setChatUsername, toggleNightMode } = chatsSlice.actions;
export default chatsSlice.reducer;
export const getChatUsername = (state: RootState) => state.chats.chatName;
export const getNightModeStatus = (state: RootState) =>
  state.chats.isNightModeEnabled;
