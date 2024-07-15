/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useGetSingleChatQuery } from "../../../redux/features/chats/chatsApi";
import { getNameInitials } from "../../../utils/getNameInitials";
import { truncateMessage } from "../../../utils/truncateMessage";
import { getFormattedTime } from "../../../utils/getFormattedTime";
import { getAvatarClassName } from "../../../utils/getAvatarClassName";
import { useWindowWidth } from "../../../hooks/useWindowWidth";

type TProps = {
  item: any;
  selectedChat: string;
  handleSelectedChat: (str: string, creatorName: string) => void;
};

const SingleChatCard = ({ item, selectedChat, handleSelectedChat }: TProps) => {
  const windowWidth = useWindowWidth();
  const { data: chatDetails } = useGetSingleChatQuery(item?.id);
  const dataLength = chatDetails && chatDetails?.data?.length;
  const lastMessage: string =
    chatDetails && truncateMessage(chatDetails?.data[dataLength - 1]?.message);
  const lastSenderId: number = chatDetails?.data[dataLength - 1]?.sender_id;
  const lastMessageTime: string = chatDetails?.data[dataLength - 1]?.updated_at;
  const { creator } = item;

  const gradient = creator?.name
    ? getAvatarClassName(getNameInitials(creator?.name))
    : getAvatarClassName("U");

  const linkAddress =
    windowWidth < 850 ? `/m/chat/${item?.id}` : `/chat/${item?.id}`;

  return (
    <Link
      onClick={() => handleSelectedChat(item?.id, creator?.name)}
      to={linkAddress}
    >
      <div
        key={item?.id}
        className={`relative sm:p-[2px] md:p-[9px] mb-6 md:mb-3 flex items-center rounded-xl
            ${
              selectedChat !== item?.id &&
              "hover:bg-gray-200/50 dark:hover:bg-gray-700/30 transition-colors duration-300 ease-in-out"
            }   ${
          selectedChat === item?.id &&
          "dark:bg-color-purple bg-color-blue text-white"
        }`}
      >
        <h2
          className={`w-14 h-14 rounded-full mr-[8px] flex justify-center items-center text-lg font-semibold text-white ${gradient}`}
        >
          {creator?.name ? getNameInitials(creator?.name) : "U"}
        </h2>
        <div>
          <p className="font-medium dark:text-white">
            {creator?.name
              ? creator?.name
              : creator?.phone
              ? creator?.phone
              : "Unknown"}
          </p>
          <div
            className={`${
              selectedChat === item?.id
                ? "text-white"
                : "text-gray-500 dark:text-gray-400"
            } `}
          >
            {lastSenderId === 1 ? (
              <p>
                <span
                  className={`${selectedChat === item?.id && "text-white"} `}
                >
                  <span
                    className={`${
                      selectedChat === item?.id
                        ? "text-white"
                        : "text-gray-500 dark:text-gray-200"
                    }`}
                  >
                    You:
                  </span>{" "}
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
