import { IoMenu, IoSearchSharp } from "react-icons/io5";
import AllChats from "../ui/AllChats/AllChats";
import MobileContent from "../ui/MenuContent/MobileContent";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { getNightModeStatus } from "../../redux/features/chats/chatsSlice";
import { FaPen } from "react-icons/fa";

const MobileLayout = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const isNightMode = useAppSelector(getNightModeStatus);
  console.log(isNightMode);

  const openSideMenu = () => {
    setIsSideMenuOpen(true);
  };
  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };

  return (
    <div className={`relative ${isNightMode && "dark"}`}>
      <div
        className={`${
          isSideMenuOpen && "translate-x-[1%]"
        } relative transition-all duration-200 ease-in-out h-svh flex flex-col dark:bg-color-dark`}
      >
        <div className={`bg-mobile-primary dark:bg-[#233040] mb-2`}>
          <div className="h-16 pt-[6px] pb-[8px] px-[8px] w-full flex items-center relative">
            <div className="flex items-center flex-1">
              <button
                onClick={openSideMenu}
                className="rounded-full w-[40px] h-[40px] text-[24px] flex justify-center items-center hover:bg-gray-200/50 dark:hover:bg-gray-700/50  transition-colors duration-300 ease-in-out"
              >
                <IoMenu className="text-[24px] text-white font-medium" />
              </button>
              <p className="ml-4 text-lg font-medium text-white">Telegram</p>
            </div>
            <button className="h-[40px] w-[40px] rounded-full flex justify-center items-center hover:bg-gray-200/50 transition-colors duration-300 ease-in-out">
              <IoSearchSharp className="text-[22px] font-medium text-white" />
            </button>
          </div>
        </div>
        <AllChats />
        <button className="absolute bottom-4 right-4 h-12 w-12 rounded-full bg-color-blue dark:bg-color-purple text-white flex justify-center items-center text-xl shadow-lg transition-all duration-300 ease-out hover:bg-blue-700">
          <FaPen />
        </button>
      </div>
      <div
        onClick={closeSideMenu}
        className={`${
          !isSideMenuOpen ? "w-0" : "w-full"
        } absolute z-10 top-0 left-0 h-full bg-color-dark/90`}
      ></div>
      <MobileContent isSideMenuOpen={isSideMenuOpen} />
    </div>
  );
};

export default MobileLayout;
