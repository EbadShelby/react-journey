import RobotProfileImage from "../../public/images/robot.png";
import UserProfileImage from "../../public/images/user.png";
import "./ChatMessage.css";

function ChatMessage({ message, sender }) {
  return (
    <div className={sender === "user" ? "user-chat" : "robot-chat"}>
      {sender === "robot" && (
        <img src={RobotProfileImage} className="message-icon" />
      )}
      <div className="chat-message">
        <p>{message}</p>
      </div>
      {sender === "user" && (
        <img src={UserProfileImage} className="message-icon" />
      )}
    </div>
  );
}
export default ChatMessage;
