import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage.jsx";
import "./ChatMessages.css";

export default function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll([chatMessages]);

  function useAutoScroll(dependencies) {
    const containerRef = useRef(null);

    useEffect(() => {
      const containerElem = containerRef.current;
      if (containerElem) {
        containerElem.scrollTop = containerElem.scrollHeight;
      }
    }, [dependencies]);

    return containerRef;
  }
  return (
    <div className="chat-messages-group" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}
