/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useGetSingleChatQuery } from "../../../redux/features/chats/chatsApi";
import { getNameInitials } from "../../../utils/getNameInitials";
import { truncateMessage } from "../../../utils/truncateMessage";
import { getFormattedTime } from "../../../utils/getFormattedTime";
import { getAvatarClassName } from "../../../utils/getAvatarClassName";

type TProps = {
  item: any;
  selectedChat: string;
  handleSelectedChat: (str: string, creatorName: string) => void;
};

const SingleChatCard = ({ item, selectedChat, handleSelectedChat }: TProps) => {
  const { data: chatDetails } = useGetSingleChatQuery(item?.id);
  const lastMessage: string =
    chatDetails && truncateMessage(chatDetails?.data[0]?.message);
  const lastSenderId: number = chatDetails?.data[0]?.sender_id;
  const lastMessageTime: string = chatDetails?.data[0]?.updated_at;
  const { creator } = item;

  const gradient = creator?.name
    ? getAvatarClassName(getNameInitials(creator?.name))
    : getAvatarClassName("U");

  return (
    <Link
      onClick={() => handleSelectedChat(item?.id, creator?.name)}
      to={`/chat/${item?.id}`}
    >
      <div
        key={item?.id}
        className={`relative p-[9px] mb-3 flex items-center rounded-xl
            ${
              selectedChat !== item?.id &&
              "hover:bg-gray-200/50 transition-colors duration-300 ease-in-out"
            }   ${selectedChat === item?.id && "bg-color-blue text-white"}`}
      >
        <h2
          className={`w-14 h-14 rounded-full mr-[8px] flex justify-center items-center text-lg font-semibold text-white ${gradient}`}
        >
          {creator?.name ? getNameInitials(creator?.name) : "U"}
        </h2>
        <div>
          <p className="font-medium">
            {creator?.name
              ? creator?.name
              : creator?.phone
              ? creator?.phone
              : "Unknown"}
          </p>
          <div
            className={`${
              selectedChat === item?.id ? "text-white" : "text-gray-500"
            } `}
          >
            {lastSenderId === 1 ? (
              <p>
                <span
                  className={`${
                    selectedChat === item?.id ? "text-white" : "color-blue"
                  } `}
                >
                  You:{" "}
                </span>
                {lastMessage}
              </p>
            ) : (
              <p>{lastMessage}</p>
            )}
          </div>
          <span
            className={`inline-block text-xs absolute right-2 top-2 ${
              selectedChat === item?.id ? "text-white" : "text-gray-500/70"
            }`}
          >
            {getFormattedTime(lastMessageTime)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SingleChatCard;
