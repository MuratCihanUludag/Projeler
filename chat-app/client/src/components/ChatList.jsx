import React from "react";
import "./style.css";
import ChatItem from "./ChatItem";
import { useChat } from "../context/chatContext";
import ScrollableFeed from "react-scrollable-feed";

function ChatList() {
  const { messages } = useChat();
  return (
    <div className="chatlist">
      <ScrollableFeed>
        {messages.map((item, key) => (
          <ChatItem key={key} item={item} />
        ))}
      </ScrollableFeed>
    </div>
  );
}

export default ChatList;
