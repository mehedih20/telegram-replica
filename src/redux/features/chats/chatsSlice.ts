import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
type TChat = {
  chatName: string;
};

const initialState: TChat = {
  chatName: "",
};

const chatsSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChatUsername: (state, action) => {
      state.chatName = action.payload;
    },
    removeChatUsername: (state) => {
      state.chatName = "";
    },
  },
});

export const { setChatUsername, removeChatUsername } = chatsSlice.actions;
export default chatsSlice.reducer;
export const getChatUsername = (state: RootState) => state.chats.chatName;
