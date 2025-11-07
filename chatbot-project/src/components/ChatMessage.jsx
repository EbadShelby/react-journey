import RobotProfileImage from "../assets/images/robot.png";
import UserProfileImage from "../assets/images/user.jpg";
import "./ChatMessage.css";
function ChatMessage({ message, sender, time }) {
  return (
    <div className={sender === "user" ? "user-chat" : "robot-chat"}>
      {sender === "robot" && (
        <img src={RobotProfileImage} className="message-icon" />
      )}
      <div className="chat-message">
        <div>
          <p>{message}</p>
          <p className="message-time">{time}</p>
        </div>
      </div>
      {sender === "user" && (
        <img src={UserProfileImage} className="message-icon" />
      )}
    </div>
  );
}
export default ChatMessage;
