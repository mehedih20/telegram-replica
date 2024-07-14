import { baseApi } from "../../api/baseApi";

const chatsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllChats: builder.query({
      query: (page) => ({
        url: `get_all_chats?page=${page}`,
        method: "GET",
      }),
      providesTags: ["chats"],
    }),
    getSingleChat: builder.query({
      query: (chatId) => ({
        url: `get_chat_messages?chat_id=${chatId}`,
        method: "GET",
      }),
      providesTags: ["chats"],
    }),
  }),
});

export const { useGetAllChatsQuery, useGetSingleChatQuery } = chatsApi;
