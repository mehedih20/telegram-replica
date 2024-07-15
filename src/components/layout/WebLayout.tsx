/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaPen } from "react-icons/fa6";
import AllChats from "../ui/AllChats/AllChats";
import SingleChat from "../ui/SingleOpenChat/SingleOpenChat";
import { IoMenu, IoSearchSharp } from "react-icons/io5";
import DesktopContent from "../ui/MenuContent/DesktopContent";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { getNightModeStatus } from "../../redux/features/chats/chatsSlice";

const WebLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isNightMode = useAppSelector(getNightModeStatus);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`${
        isNightMode && "dark"
      } flex fixed h-svh top-0 left-0 w-full dark:bg-color-dark`}
    >
      <div className="w-[480px] h-svh flex flex-col relative group">
        <div className="h-14 pt-[6px] pb-[8px] px-[13px] w-full flex items-center relative">
          <button
            onClick={toggleMenu}
            className="rounded-full w-[40px] h-[40px] text-[24px] flex justify-center items-center hover:bg-gray-200/50 dark:hover:bg-gray-700/50  transition-colors duration-300 ease-in-out"
          >
            <IoMenu className="text-[24px] text-[#707579] font-medium" />
          </button>
          <div className="h-[40px] ml-[13px] px-[15px] py-[10px] flex-1 bg-gray-200/50 dark:bg-gray-700/30 rounded-3xl flex items-center">
            <button className="mr-[10px]">
              <IoSearchSharp className="text-[20px] font-medium text-[#b5bcc3]" />
            </button>
            <input
              type="text"
              className="outline-none bg-transparent"
              placeholder="Search"
            />
          </div>
          <DesktopContent isMenuOpen={isMenuOpen} />
        </div>
        <AllChats />
        <button className="absolute bottom-4 right-4 h-14 w-14 rounded-full bg-color-blue dark:bg-color-purple text-white flex justify-center items-center text-xl shadow-lg group-hover:translate-y-0 translate-y-[200%] transition-all duration-300 ease-out hover:bg-blue-700">
          <FaPen />
        </button>
      </div>
      <SingleChat />
    </div>
  );
};

export default WebLayout;
