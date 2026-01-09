import React, { useState } from "react";
import { chats } from "../../data/data";
import ChatList from "../../component/chat/ChatList";
import ChatWindow from "../../component/chat/ChatWindow";

const ChatPage = () => {
  const [activeChat, setActiveChat] = useState(null);

  return (
    <div className="min-h-screen bg-[#f7f8fb] px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 h-[80vh]">
        <div className="lg:col-span-1">
          <ChatList
            chats={chats}
            activeChat={activeChat}
            setActiveChat={setActiveChat}
          />
        </div>

        <div className="lg:col-span-3">
          <ChatWindow chat={activeChat} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
