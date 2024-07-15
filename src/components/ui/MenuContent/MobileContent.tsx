import { BsMoonStarsFill } from "react-icons/bs";
import { FaRegBookmark, FaRegQuestionCircle, FaUserPlus } from "react-icons/fa";
import { FaRegCircleUser, FaUser, FaUserGroup } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaUsersSolid } from "react-icons/lia";
import { MdOutlineLocalPhone, MdSunny } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  getNightModeStatus,
  toggleNightMode,
} from "../../../redux/features/chats/chatsSlice";

type TProps = {
  isSideMenuOpen: boolean;
};

const MobileContent = ({ isSideMenuOpen }: TProps) => {
  const dispatch = useAppDispatch();
  const isNightMode = useAppSelector(getNightModeStatus);

  return (
    <div
      className={`fixed z-30 top-0 left-0 h-svh w-[320px] flex transition-all duration-300 ease-in-out ${
        isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="w-[270px] h-full bg-white flex flex-col">
        <div className="flex justify-between items-start h-[150px] dark:bg-[#233040] bg-[#5A8FBB] pt-6 px-4">
          <div>
            <h2
              className={`w-14 h-14 rounded-full mr-[8px] flex justify-center items-center text-lg font-semibold text-white bg-[#5085B1] dark:bg-[#559CDE]`}
            >
              BC
            </h2>
            <p className="mt-5 text-gray-100 text-sm font-semibold">
              Beyond Chats
            </p>
            <p className="text-xs font-medium text-gray-300">+0123456789</p>
          </div>
          <button
            onClick={() => dispatch(toggleNightMode())}
            className="scale-x-[-1] mt-2 text-white"
          >
            {isNightMode ? (
              <MdSunny className="text-2xl" />
            ) : (
              <BsMoonStarsFill className="text-lg" />
            )}
          </button>
        </div>
        <div className="dark:bg-[#1C242F] flex-1">
          <p className="flex gap-5 text-sm items-center font-semibold py-4 px-3 text-color-dark dark:text-gray-200 border-b border-b-gray-200 dark:border-b-[#233040] mb-2">
            <FaRegCircleUser className="text-lg text-gray-500 dark:text-gray-400" />{" "}
            My Profile
          </p>
          <p className="flex gap-5 text-sm items-center font-semibold py-3 px-3 text-color-dark dark:text-gray-200">
            <FaUserGroup className="text-lg text-gray-500 dark:text-gray-400" />{" "}
            New Group
          </p>
          <p className="flex gap-5 text-sm items-center font-semibold py-3 px-3 text-color-dark dark:text-gray-200">
            <FaUser className="text-lg text-gray-500 dark:text-gray-400" />{" "}
            Contacts
          </p>
          <p className="flex gap-5 text-sm items-center font-semibold py-3 px-3 text-color-dark dark:text-gray-200">
            <MdOutlineLocalPhone className="text-xl text-gray-500 dark:text-gray-400 -ml-0.5" />{" "}
            Calls
          </p>
          <p className="flex gap-5 text-sm items-center font-semibold py-3 px-3 text-color-dark dark:text-gray-200">
            <LiaUsersSolid className="text-2xl text-gray-500 dark:text-gray-400 -ml-0.5" />{" "}
            People Nearby
          </p>
          <p className="flex gap-5 text-sm items-center font-semibold py-3 px-3 text-color-dark dark:text-gray-200">
            <FaRegBookmark className="text-lg text-gray-500 dark:text-gray-400" />{" "}
            Saved Messages
          </p>
          <p className="flex gap-5 text-sm items-center font-semibold py-3 px-3 text-color-dark dark:text-gray-200 border-b border-b-gray-200 dark:border-b-[#233040] mb-2">
            <IoSettingsOutline className="text-lg text-gray-500 dark:text-gray-400" />{" "}
            Settings
          </p>
          <p className="flex gap-5 text-sm items-center font-semibold py-3 px-3 text-color-dark dark:text-gray-200">
            <FaUserPlus className="text-lg text-gray-500 dark:text-gray-400 ml-0.5" />{" "}
            Invite Friends
          </p>
          <p className="flex gap-5 text-sm items-center font-semibold py-3 px-3 text-color-dark dark:text-gray-200">
            <FaRegQuestionCircle className="text-lg text-gray-500 dark:text-gray-400" />{" "}
            Telegram Features
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileContent;
