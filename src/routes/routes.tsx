import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SingleChat from "../components/ui/SingleOpenChat/SingleOpenChat";

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
]);

export default router;
