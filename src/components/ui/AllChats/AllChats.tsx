/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useGetAllChatsQuery } from "../../../redux/features/chats/chatsApi";
import SingleChatCard from "../SingleChatCard/SingleChatCard";
import { useAppDispatch } from "../../../redux/hooks";
import { setChatUsername } from "../../../redux/features/chats/chatsSlice";
import { IoIosArrowDown } from "react-icons/io";
import { ImSpinner2 } from "react-icons/im";

const AllChats = () => {
  const [chatData, setChatData] = useState<any>([]);
  const [selectedChat, setSelectedChat] = useState("");
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetAllChatsQuery(page);
  const dispatch = useAppDispatch();

  const handleSelectedChat = (str: string, creatorName: string) => {
    setSelectedChat(str);
    dispatch(setChatUsername(creatorName ? creatorName : "Unknown"));
  };

  useEffect(() => {
    if (data) {
      const newArray = data.data.data;
      setChatData((prev: any) => [...prev, ...newArray]);
    }
  }, [data]);

  useEffect(() => {
    return () => {
      setChatData([]);
    };
  }, []);

  return (
    <div className="py-[8px] pl-[7px] pr-[10px] overflow-y-scroll hide-scrollbar flex flex-col flex-1 relative dark:bg-color-dark">
      {chatData?.map((item: any) => (
        <SingleChatCard
          key={item.id}
          item={item}
          selectedChat={selectedChat}
          handleSelectedChat={handleSelectedChat}
        />
      ))}
      {chatData?.length !== 0 && (
        <div className="flex justify-center mb-7">
          <button
            onClick={() => setPage(page + 1)}
            className="px-3 py-2 bg-gray-200/50 dark:bg-[#31435a] rounded-xl"
          >
            {isFetching ? (
              <span className="animate-spin text-sm inline-block">
                <ImSpinner2 />
              </span>
            ) : (
              <IoIosArrowDown />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default AllChats;
