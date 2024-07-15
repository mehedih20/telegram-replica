import { FaRegFaceSmile } from "react-icons/fa6";
import { GrAttachment } from "react-icons/gr";
import { RiMicLine } from "react-icons/ri";
import MessageSvg from "../AllSvgs/MessageSvg";
import { useAppSelector } from "../../../redux/hooks";
import { getNightModeStatus } from "../../../redux/features/chats/chatsSlice";
import { useState } from "react";
import { IoSend } from "react-icons/io5";

const MobileChatInput = () => {
  const [newChat, setNewChat] = useState("");
  const isDarkModeActive = useAppSelector(getNightModeStatus);

  return (
    <div className="w-full mt-auto dark:bg-color-dark">
      <div className="max-w-[696px] flex items-center mx-auto h-14 gap-[8px]">
        <div className="relative h-full w-full xl:w-[632px]  rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl flex dark:bg-color-dark bg-white">
          <button className="h-14 w-8 ml-3 mr-2 rounded-full dark:bg-color-dark bg-white flex justify-center items-center">
            <FaRegFaceSmile className="text-[22px] text-[#707579cc] hover:text-[#3390ec] duration-300 transition-colors ease-in-out" />
          </button>
          <input
            type="text"
            onChange={(e) => setNewChat(e.target.value)}
            className="flex-1 mr-8 outline-none dark:bg-color-dark dark:text-white"
            placeholder="Message"
          />
          <button className="h-14 w-14 ml-auto rounded-full dark:bg-color-dark bg-white flex justify-center items-center">
            <GrAttachment className="text-[22px] text-[#707579cc] hover:text-[#3390ec] duration-300 transition-colors ease-in-out" />
          </button>
          <div className="absolute -bottom-[3px] right-0 translate-x-full">
            <MessageSvg color={`${isDarkModeActive ? "#212121" : "#ffffff"}`} />
          </div>
        </div>
        <button className="h-14 w-14 group hover:bg-[#3390ec] transition-colors duration-300 ease-in-out rounded-full dark:bg-color-dark bg-white flex justify-center items-center">
          {/* <RiMicLine className="text-[24px] group-hover:text-white text-[#707579cc]" /> */}
          {newChat ? (
            <IoSend className="text-[24px] group-hover:text-white text-[#707579cc]" />
          ) : (
            <RiMicLine className="text-[24px] group-hover:text-white text-[#707579cc]" />
          )}
        </button>
      </div>
    </div>
  );
};

export default MobileChatInput;
