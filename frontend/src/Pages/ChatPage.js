import React, { useEffect, useState } from 'react'
import axios from "axios";

const ChatPage = () => {
  const[chats, setChats]= useState([])
  const fethChats = async () => {
    const { data } = await axios.get('/api/chat');

    setChats(data);
  };
  useEffect(() => {
    fethChats();
  }, []);

  return (
    <div>{chats.map((chat) => (
      <div key={chat._id}>{chat.chatName}</div>
    ))}
    </div>
  );
};

export default ChatPage
