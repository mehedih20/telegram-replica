import { useAppSelector } from "../../../redux/hooks";
import { getChatUsername } from "../../../redux/features/chats/chatsSlice";
import { IoSearchSharp } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";

const OpenChatHeader = () => {
  const chatUsername = useAppSelector(getChatUsername);

  return (
    <div className="h-14 py-[8px] pl-[23px] pr-[13px] flex justify-between items-center bg-white ml-[1px] shadow-md">
      <div className="flex items-center p-[1px]">
        <p className="h-[40px] w-[40px] rounded-full text-lg font-semibold bg-gradient-to-b from-[#ffb8d8] to-[#ea78ab] text-white flex justify-center items-center mr-[10px]">
          G
        </p>
        <div className="h-[40px] flex flex-col">
          <span className="text-lg font-medium -mt-1 -mb-0.5">
            {chatUsername}
          </span>
          <span className="text-sm -mb-0.5 text-[#3390ec]">Online</span>
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
