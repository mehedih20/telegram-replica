import { useAppSelector } from "../../../redux/hooks";
import { getChatUsername } from "../../../redux/features/chats/chatsSlice";
import { IoSearchSharp } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { getNameInitials } from "../../../utils/getNameInitials";
import { getAvatarClassName } from "../../../utils/getAvatarClassName";

const OpenChatHeader = () => {
  const chatUsername = useAppSelector(getChatUsername);
  const gradient = getAvatarClassName(getNameInitials(chatUsername));

  return (
    <div className="h-14 py-[8px] pl-[23px] pr-[13px] flex justify-between items-center bg-white dark:bg-color-dark ml-[1px] shadow-md">
      <div className="flex items-center p-[1px]">
        <p
          className={`${gradient} h-[40px] w-[40px] rounded-full text-lg font-semibold text-white flex justify-center items-center mr-[10px]`}
        >
          {getNameInitials(chatUsername)}
        </p>
        <div className="h-[40px] flex flex-col">
          <span className="text-lg dark:text-white font-medium -mt-1 -mb-0.5">
            {chatUsername}
          </span>
          <span className="text-sm -mb-0.5 text-gray-300">Online</span>
        </div>
      </div>
      <div className="flex items-center gap-[4px]">
        <button className="h-[40px] w-[40px] rounded-full flex justify-center items-center hover:bg-gray-200/50 transition-colors duration-300 ease-in-out">
          <IoSearchSharp className="text-[22px] font-medium text-[#707579]" />
        </button>
        <button className="h-[40px] w-[40px] rounded-full flex justify-center items-center hover:bg-gray-200/50 transition-colors duration-300 ease-in-out">
          <HiDotsVertical className="text-[20px] text-[#707579]" />
        </button>
      </div>
    </div>
  );
};

export default OpenChatHeader;
