import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SingleChat from "../components/ui/SingleOpenChat/SingleOpenChat";
import MobileOpenChat from "../components/ui/MobileOpenChat/MobileOpenChat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/chat/:chatId",
        element: <SingleChat />,
      },
    ],
  },
  {
    path: "m/chat/:chatId",
    element: <MobileOpenChat />,
  },
]);

export default router;
