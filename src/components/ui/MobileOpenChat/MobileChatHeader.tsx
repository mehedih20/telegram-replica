import { useAppSelector } from "../../../redux/hooks";
import { getChatUsername } from "../../../redux/features/chats/chatsSlice";
import { IoArrowBack } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { getNameInitials } from "../../../utils/getNameInitials";
import { getAvatarClassName } from "../../../utils/getAvatarClassName";
import { useNavigate } from "react-router-dom";

const MobileChatHeader = () => {
  const chatUsername = useAppSelector(getChatUsername);
  const gradient =
    chatUsername && getAvatarClassName(getNameInitials(chatUsername));
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate("/");
  };

  return (
    <div className="h-16 py-[8px] px-[13px] flex justify-between items-center dark:bg-[#233040] bg-mobile-primary shadow-md">
      <div className="flex items-center">
        <button
          onClick={handleNavigateBack}
          className="rounded-full w-[40px] h-[40px] text-[24px] flex justify-center items-center hover:bg-gray-200/50 dark:hover:bg-gray-700/50  transition-colors duration-300 ease-in-out"
        >
          <IoArrowBack className="text-[24px] text-white font-medium" />
        </button>
        <div className="flex items-center p-[1px]">
          <p
            className={`${gradient} h-[40px] w-[40px] rounded-full text-lg font-semibold text-white flex justify-center items-center mr-[10px]`}
          >
            {getNameInitials(chatUsername)}
          </p>
          <div className="h-[40px] flex flex-col">
            <span className="text-lg text-white font-medium -mt-1 -mb-0.5">
              {chatUsername}
            </span>
            <span className="text-sm -mb-0.5 text-gray-200">Online</span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <button className="h-[40px] w-[40px] rounded-full flex justify-center items-center hover:bg-gray-200/50 transition-colors duration-300 ease-in-out">
          <HiDotsVertical className="text-[20px] text-white" />
        </button>
      </div>
    </div>
  );
};

export default MobileChatHeader;
