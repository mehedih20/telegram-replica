/* eslint-disable @typescript-eslint/no-explicit-any */
import AllChats from "../ui/AllChats/AllChats";
import SingleChat from "../ui/SingleOpenChat/SingleOpenChat";
import { IoMenu, IoSearchSharp } from "react-icons/io5";

const WebLayout = () => {
  return (
    <div className="flex fixed h-screen top-0 left-0 w-full">
      <div className="w-[480px] h-full">
        <div className="h-14 pt-[6px] pb-[8px] px-[13px] w-full flex items-center">
          <button className="rounded-full w-[40px] h-[40px] text-[24px] flex justify-center items-center hover:bg-gray-200/50 transition-colors duration-300 ease-in-out">
            <IoMenu className="text-[24px] text-[#707579] font-medium" />
          </button>
          <div className="h-[40px] ml-[13px] px-[15px] py-[10px] flex-1 bg-gray-200/50 rounded-3xl flex items-center">
            <button className="mr-[10px]">
              <IoSearchSharp className="text-[20px] font-medium text-[#b5bcc3]" />
            </button>
            <input
              type="text"
              className="outline-none bg-transparent"
              placeholder="Search"
            />
          </div>
        </div>
        <AllChats />
      </div>
      <SingleChat />
    </div>
  );
};

export default WebLayout;
