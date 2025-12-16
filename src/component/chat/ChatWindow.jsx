import React, { useState } from "react";
import MessageBubble from "./MessageBubble";

const ChatWindow = ({ chat }) => {
  const [input, setInput] = useState("");

  if (!chat) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        Select a chat to start messaging
      </div>
    );
  }

  return (
    <div className="bg-white border rounded-2xl flex flex-col h-full">
      <div className="p-4 border-b font-semibold">{chat.user}</div>

      <div className="flex-1 p-4 space-y-3 overflow-y-auto">
        {chat.messages.map((msg, i) => (
          <MessageBubble key={i} message={msg} />
        ))}
      </div>

      <div className="p-4 border-t flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border rounded-xl px-4 py-2 focus:outline-none"
        />
        <button className="bg-blue-600 text-white px-5 rounded-xl">Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
