/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import OpenChatHeader from "./OpenChatHeader";
import { useGetSingleChatQuery } from "../../../redux/features/chats/chatsApi";
import OpenChatInput from "./OpenChatInput";
import { useEffect, useRef } from "react";
import { getFormattedTime } from "../../../utils/getFormattedTime";
import { ImSpinner2 } from "react-icons/im";

const SingleOpenChat = () => {
  const scrollContainerRef = useRef(null);
  const { chatId } = useParams();
  const { data: chatData, isFetching } = useGetSingleChatQuery(chatId);

  useEffect(() => {
    const scrollContainer: any = scrollContainerRef.current;
    if (scrollContainer) {
      console.log(scrollContainer.scrollHeight);

      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  }, [chatId]);

  return (
    <div className="flex-1 h-svh flex flex-col bg-slate-200 bg-[url('/chat-light-bg.png')] bg-cover bg-center">
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
              className="flex-1 w-[696px] mx-auto mb-3 px-2 flex flex-col overflow-y-scroll hide-scrollbar"
            >
              {chatData?.data?.map((chat: any) => {
                const { id, sender_id, message, created_at } = chat;
                return (
                  <div
                    key={id}
                    className={`max-w-[80%] w-fit ${
                      sender_id === 1 && "ml-auto bg-[#effedd]"
                    } ${
                      sender_id !== 1 && "bg-white"
                    } mt-[10px] px-[8px] pt-[5px] pb-[5px] rounded-xl`}
                  >
                    <p>{message}</p>
                    <div className="text-right -mt-1">
                      <span className="inline-block text-xs text-gray-500 ml-10">
                        {getFormattedTime(created_at)}
                      </span>
                    </div>
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
