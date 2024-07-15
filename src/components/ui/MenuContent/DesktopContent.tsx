import { IoRadioButtonOff } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  getNightModeStatus,
  toggleNightMode,
} from "../../../redux/features/chats/chatsSlice";

type TProps = {
  isMenuOpen: boolean;
};

const DesktopContent = ({ isMenuOpen }: TProps) => {
  const dispatch = useAppDispatch();
  const isNightMode = useAppSelector(getNightModeStatus);

  return (
    <div
      className={`absolute top-14 rounded-lg overflow-hidden z-30 backdrop-blur-lg transition-all duration-500 ease-in-out ${
        isMenuOpen && "box-shadow"
      } w-[270px] ${!isMenuOpen && "-translate-x-[110%]"}`}
    >
      <div className="bg-white/70 dark:bg-color-dark/90 py-1">
        <p className="flex items-center mx-1 pt-1.5 pb-2 pl-1 pr-3 text-[14px] font-medium hover:bg-gray-400/30 transition-colors duration-300 ease-in-out rounded-lg cursor-pointer dark:text-white">
          <IoRadioButtonOff className="text-lg ml-2 mr-5 -mt-0.5 text-gray-400" />
          Saved Messages
        </p>
        <p className="flex items-center mx-1 pt-1.5 pb-2 pl-1 pr-3 text-[14px] font-medium hover:bg-gray-400/30 transition-colors duration-300 ease-in-out rounded-lg cursor-pointer dark:text-white">
          <IoRadioButtonOff className="text-lg ml-2 mr-5 -mt-0.5 text-gray-400" />
          Contacts
        </p>
        <p className="flex items-center mx-1 pt-1.5 pb-2 pl-1 pr-3 text-[14px] font-medium hover:bg-gray-400/30 transition-colors duration-300 ease-in-out rounded-lg cursor-pointer dark:text-white">
          <IoRadioButtonOff className="text-lg ml-2 mr-5 -mt-0.5 text-gray-400" />
          My Stories
        </p>
        <p className="flex items-center mx-1 pt-1.5 pb-2 pl-1 pr-3 text-[14px] font-medium hover:bg-gray-400/30 transition-colors duration-300 ease-in-out rounded-lg cursor-pointer dark:text-white">
          <IoRadioButtonOff className="text-lg ml-2 mr-5 -mt-0.5 text-gray-400" />
          Settings
        </p>
        <div className="flex justify-between items-center mx-1 pt-1.5 pb-2 pl-1 pr-3 text-[14px] font-medium hover:bg-gray-400/30 transition-colors duration-300 ease-in-out rounded-lg cursor-pointer  dark:text-white">
          <div className="flex items-center">
            <IoRadioButtonOff className="text-lg ml-2 mr-5 -mt-0.5 text-gray-400" />
            <p>Night Mode</p>
          </div>
          <button
            onClick={() => dispatch(toggleNightMode())}
            className={`w-7 h-3 bg-gray-400/60 dark:bg-color-purple rounded-full flex -mt-1 transition-all duration-300 ease-in-out ${
              isNightMode && "justify-end"
            }`}
          >
            <span className="inline-block w-3 h-3 scale-125 rounded-full bg-white border border-gray-400/60 dark:text-color-purple"></span>
          </button>
        </div>
        <p className="flex items-center mx-1 pt-1.5 pb-2 pl-1 pr-3 text-[14px] font-medium hover:bg-gray-400/30 transition-colors duration-300 ease-in-out rounded-lg cursor-pointer  dark:text-white">
          <IoRadioButtonOff className="text-lg ml-2 mr-5 -mt-0.5 text-gray-400" />
          Telegram Features
        </p>
        <p className="flex items-center mx-1 pt-1.5 pb-2 pl-1 pr-3 mb-3 text-[14px] font-medium hover:bg-gray-400/30 transition-colors duration-300 ease-in-out rounded-lg cursor-pointer  dark:text-white">
          <IoRadioButtonOff className="text-lg ml-2 mr-5 -mt-0.5 text-gray-400" />
          Report a Bug
        </p>
        <div className="text-center mx-1 pt-1.5 pb-2 text-[13px] text-gray-500/80 font-medium">
          <p>Telegram Web A 10.9.7</p>
        </div>
      </div>
    </div>
  );
};

export default DesktopContent;
