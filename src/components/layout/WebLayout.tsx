/* eslint-disable @typescript-eslint/no-explicit-any */
import SingleChat from "../ui/SingleChat/SingleChat";
import { useGetAllChatsQuery } from "../../redux/features/chats/chatsApi";

const WebLayout = () => {
  const { data: chatData } = useGetAllChatsQuery(1);
  console.log(chatData);

  return (
    <div className="flex">
      <div className="w-[480px]">
        {chatData?.data?.data?.map((item: any) => {
          const { creator } = item;
          return (
            <div key={item?.id}>
              <p>{creator?.phone}</p>
            </div>
          );
        })}
      </div>
      <SingleChat />
    </div>
  );
};

export default WebLayout;
