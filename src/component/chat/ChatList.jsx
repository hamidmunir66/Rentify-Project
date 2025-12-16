import React from "react";

const ChatList = ({ chats, activeChat, setActiveChat }) => {
  return (
    <div className="bg-white border rounded-2xl overflow-hidden">
      <h2 className="p-4 font-semibold border-b">Chats</h2>

      {chats.map((chat) => {
        const Icon = chat.avatar;
        return (
          <div
            key={chat.id}
            onClick={() => setActiveChat(chat)}
            className={`flex items-center gap-3 p-4 cursor-pointer transition
              ${
                activeChat?.id === chat.id
                  ? "bg-blue-50"
                  : "hover:bg-gray-50"
              }`}
          >
            <Icon className="text-3xl text-gray-500" />
            <div>
              <p className="font-medium">{chat.user}</p>
              <p className="text-sm text-gray-500 truncate">
                {chat.lastMessage}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatList;
