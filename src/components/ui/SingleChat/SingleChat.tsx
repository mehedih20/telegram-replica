import { HiDotsVertical } from "react-icons/hi";
import { IoSearchSharp } from "react-icons/io5";
import { RiMicLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import InputSvg from "./InputSvg";

const SingleChat = () => {
  const { chatId } = useParams();
  console.log(chatId);

  return (
    <div className="flex-1 h-svh flex flex-col bg-slate-200 bg-[url('/chat-light-bg.png')] bg-cover bg-center">
      <div className="py-[8px] pl-[23px] pr-[13px] flex justify-between items-center bg-white ml-[1px] shadow-md">
        <div className="flex items-center gap-[6px]">
          <p className="h-[40px] w-[40px] rounded-full text-lg font-semibold bg-gradient-to-b from-[#ffb8d8] to-[#ea78ab] text-white flex justify-center items-center">
            G
          </p>
          <p className="text-lg font-medium">Greeting</p>
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
      <div>
        {" "}
        <h1></h1>
      </div>
      <div className="w-full mt-auto mb-[20px]">
        <div className="max-w-[696px] flex items-center mx-auto h-14 gap-[8px]">
          <div className="relative h-full">
            <input
              type="text"
              className="h-full w-[632px] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl"
            />
            <div className="absolute -bottom-[3px] right-0 translate-x-full">
              <InputSvg />
            </div>
          </div>
          <button className="h-14 w-14 rounded-full bg-white flex justify-center items-center">
            <RiMicLine className="text-[24px] text-[#707579cc]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleChat;
