import React from "react";
import "./notification.scss";

interface NotificationProps {
  message: string;
  type: "info" | "warning" | "error"; // Type de notification
}

const Notification: React.FC<NotificationProps> = ({ message, type }) => (
  <div className={`notification notification--${type}`}>
    <p className="notification__message">{message}</p>
  </div>
);

export default Notification;
