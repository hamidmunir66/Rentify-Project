import React from "react";

const MessageBubble = ({ message }) => {
  return (
    <div
      className={`max-w-xs px-4 py-2 rounded-xl text-sm ${
        message.from === "me"
          ? "bg-blue-600 text-white ml-auto"
          : "bg-gray-200 text-gray-800"
      }`}
    >
      {message.text}
    </div>
  );
};

export default MessageBubble;
