import { BiLogoTelegram } from "react-icons/bi";
import MobileLayout from "./components/layout/MobileLayout";
import WebLayout from "./components/layout/WebLayout";
import { useWindowWidth } from "./hooks/useWindowWidth";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getAppState, setAppLoaded } from "./redux/features/app/appSlice";

function App() {
  const [animationString, setAnimationString] = useState("");
  const [showAnimation, setShowAnimation] = useState(true);
  const isAppLoaded = useAppSelector(getAppState);
  const dispatch = useAppDispatch();
  const windowWidth = useWindowWidth();

  console.log(isAppLoaded);

  useEffect(() => {
    setAnimationString("-translate-x-[105%] translate-y-[105%]");
    const timeOut = setTimeout(() => {
      setAnimationString("translate-x-0 translate-y-0");
    });

    return () => clearTimeout(timeOut);
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShowAnimation(false);
      dispatch(setAppLoaded());
    }, 1500);

    return () => clearTimeout(timeOut);
  }, [dispatch]);

  if (showAnimation && !isAppLoaded) {
    return (
      <div className="h-svh w-full bg-white flex items-center justify-center">
        <div className="h-[150px] w-[150px] rounded-full bg-[#28A7E8] flex items-center justify-center overflow-hidden">
          <BiLogoTelegram
            className={`${animationString} transition-all duration-1000 ease-in-out text-[80px] text-white`}
          />
        </div>
      </div>
    );
  } else {
    return <>{windowWidth > 850 ? <WebLayout /> : <MobileLayout />}</>;
  }
}

export default App;
