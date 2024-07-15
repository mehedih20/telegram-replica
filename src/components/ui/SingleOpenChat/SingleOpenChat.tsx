/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import OpenChatHeader from "./OpenChatHeader";
import { useGetSingleChatQuery } from "../../../redux/features/chats/chatsApi";
import OpenChatInput from "./OpenChatInput";
import { useEffect, useRef } from "react";
import { getFormattedTime } from "../../../utils/getFormattedTime";
import { ImSpinner2 } from "react-icons/im";
import MessageSvg from "../AllSvgs/MessageSvg";
import { useAppSelector } from "../../../redux/hooks";
import { getNightModeStatus } from "../../../redux/features/chats/chatsSlice";

const SingleOpenChat = () => {
  const scrollContainerRef = useRef(null);
  const { chatId } = useParams();
  const { data: chatData, isFetching } = useGetSingleChatQuery(chatId);
  const isDarkModeActive = useAppSelector(getNightModeStatus);

  useEffect(() => {
    const scrollContainer: any = scrollContainerRef.current;
    if (scrollContainer) {
      console.log(scrollContainer.scrollHeight);

      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  }, [chatData]);

  return (
    <div className="flex-1 h-svh flex flex-col dark:bg-[url('/chat-dark-bg.webp')] bg-[url('/chat-light-bg.webp')] bg-cover bg-center">
      {chatId && (
        <>
          <OpenChatHeader />
          {isFetching ? (
            <div className="flex-1 flex justify-center items-center py-5">
              <span className="animate-spin">
                <ImSpinner2 className="text-xl text-[#effedd]" />
              </span>
            </div>
          ) : (
            <div
              ref={scrollContainerRef}
              className="flex-1 w-full xl:w-[696px] mx-auto mb-3 px-4 overflow-y-scroll hide-scrollbar"
            >
              {chatData?.data?.map((chat: any) => {
                const { id, sender_id, message, created_at } = chat;
                return (
                  <div
                    key={id}
                    className={`max-w-[80%] relative w-fit ${
                      sender_id === 1 &&
                      "ml-auto bg-[#effedd] dark:bg-color-purple rounded-bl-xl"
                    } ${
                      sender_id !== 1 &&
                      " bg-white dark:bg-color-dark rounded-br-xl"
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
                            ? `${isDarkModeActive ? "#766ac8" : "#effedd"}`
                            : `${isDarkModeActive ? "#212121" : "#ffffff"}`
                        }
                      />
                    </span>
                  </div>
                );
              })}
            </div>
          )}
          <OpenChatInput />
        </>
      )}
    </div>
  );
};

export default SingleOpenChat;
