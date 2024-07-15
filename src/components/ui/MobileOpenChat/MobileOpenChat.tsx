/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import MobileChatHeader from "./MobileChatHeader";
import MobileChatInput from "./MobileChatInput";
import { useEffect, useRef } from "react";
import { useGetSingleChatQuery } from "../../../redux/features/chats/chatsApi";
import { useAppSelector } from "../../../redux/hooks";
import { getNightModeStatus } from "../../../redux/features/chats/chatsSlice";
import { ImSpinner2 } from "react-icons/im";
import { getFormattedTime } from "../../../utils/getFormattedTime";
import MessageSvg from "../AllSvgs/MessageSvg";

const MobileOpenChat = () => {
  const scrollContainerRef = useRef(null);
  const { chatId } = useParams();
  const { data: chatData, isFetching } = useGetSingleChatQuery(chatId);
  const isNightModeActive = useAppSelector(getNightModeStatus);

  useEffect(() => {
    const scrollContainer: any = scrollContainerRef.current;
    if (scrollContainer) {
      console.log(scrollContainer.scrollHeight);

      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  }, [chatData]);

  return (
    <div
      className={`${
        isNightModeActive && "dark"
      } fixed top-0 left-0 z-30 transition-all duration-300 ease-in-out bg-white h-svh w-full flex flex-col`}
    >
      <MobileChatHeader />
      <div
        ref={scrollContainerRef}
        className="flex-1 dark:bg-[url('/chat-dark-bg.webp')] bg-[url('/chat-light-bg.webp')] bg-cover bg-center pb-5 px-4 overflow-y-scroll hide-scrollbar"
      >
        {isFetching && (
          <div className="flex-1 flex justify-center items-center py-5">
            <span className="animate-spin">
              <ImSpinner2 className="text-xl text-[#effedd]" />
            </span>
          </div>
        )}
        {chatData?.data?.map((chat: any) => {
          const { id, sender_id, message, created_at } = chat;
          return (
            <div
              key={id}
              className={`max-w-[80%] relative w-fit ${
                sender_id === 1 &&
                "ml-auto bg-[#effedd] dark:bg-color-purple rounded-bl-xl"
              } ${
                sender_id !== 1 && "bg-white dark:bg-color-dark rounded-br-xl"
              } mt-[10px] px-[8px] pt-[5px] pb-[5px] rounded-tl-xl rounded-tr-xl `}
            >
              <p className="dark:text-white mr-6">{message}</p>
              <div className="text-right -mt-1">
                <span
                  className={`inline-block text-xs text-gray-500 ml-10 ${
                    sender_id === 1 && "dark:text-gray-300"
                  }`}
                >
                  {getFormattedTime(created_at)}
                </span>
              </div>
              <span
                className={`absolute -bottom-0 -right-2 w-2 scale-150 ${
                  sender_id !== 1 && "-left-2 scale-x-[-1]"
                }`}
              >
                <MessageSvg
                  color={
                    sender_id === 1
                      ? `${isNightModeActive ? "#766ac8" : "#effedd"}`
                      : `${isNightModeActive ? "#212121" : "#ffffff"}`
                  }
                />
              </span>
            </div>
          );
        })}
      </div>
      <MobileChatInput />
    </div>
  );
};

export default MobileOpenChat;
