import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";
import dayjs from "dayjs";

export default function ChatInput({ chatMessages, setChatMessages }) {
  let [inputText, setInputText] = useState("");
  let [isLoading, setLoading] = useState(false);

  function saveInputText(event) {
    inputText = event.target.value;
    setInputText(inputText);
  }

  async function sendMessage() {
    if (isLoading) return;
    setLoading(true);
    const messageTime = dayjs().format("H:mm");

    // make new variable and add the chat messages then push new message
    let newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        time: messageTime,
        id: crypto.randomUUID(),
      },
      {
        message: (
          <div className="flex items-center gap-2">
            <span>Thinking </span>
            <img className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
          </div>
        ),
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);
    const response = await Chatbot.getResponseAsync(inputText);
    setLoading(false);
    newChatMessages =
      // update the new chat messages to include the chatbot response
      newChatMessages = [
        // remove the loading object
        ...newChatMessages.slice(0, newChatMessages.length - 1),
        {
          message: response,
          sender: "robot",
          time: messageTime,
          id: crypto.randomUUID(),
        },
      ];
    // update the real chat messages data again to include the chatbot response
    setChatMessages(newChatMessages);
    setInputText("");
  }

  function clearMessage() {
    setChatMessages([]);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      sendMessage();
    } else if (event.key === "Escape") {
      setInputText("");
    }
  }

  return (
    <div className="chat-input-group">
      <input
        placeholder="Send a message to the Chatbot"
        size="30"
        disabled={isLoading}
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        value={inputText}
      />
      <button
        className="bg-green-500"
        disabled={isLoading}
        onClick={sendMessage}
      >
        Send
      </button>
      <button
        className="bg-gray-500"
        disabled={isLoading}
        onClick={clearMessage}
      >
        Clear
      </button>
    </div>
  );
}
