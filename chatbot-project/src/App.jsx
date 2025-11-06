import { useState } from "react";
import ChatInput from "./components/ChatInput.jsx";
import ChatMessages from "./components/ChatMessages.jsx";
import "./App.css";

function App() {
  // Convert data into a reactive data
  const [chatMessages, setChatMessages] = useState([]);

  return (
    <>
      {chatMessages.length === 0 ? (
        <p className="my-auto text-center text-black">
          Welcome to the chatbot project!
          <br />
          Send a message using the textbox Below.
        </p>
      ) : (
        <ChatMessages chatMessages={chatMessages} />
      )}
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </>
  );
}

export default App;
