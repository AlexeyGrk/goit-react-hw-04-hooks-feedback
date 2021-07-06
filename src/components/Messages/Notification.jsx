import React from "react";
import { MessagesForWithoutStatistics } from "./Notification.styled";

const Notification = ({ message }) => {
  return <MessagesForWithoutStatistics>{message}</MessagesForWithoutStatistics>;
};

export default Notification;
