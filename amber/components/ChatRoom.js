import React, { useState, useEffect } from 'react';
import { io } from "socket.io-client";

const socket = io('http://localhost:3000');

function ChatRoom() {
    // keeps tracks of messages
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    //sends messages
    const sendMessage = () => {
        socket.emit('message', messageText);
        setMessageText('');
    };
    // recieve messages
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(messages => [...messages, message]);
        });
    }, []);

    // Join a chat room
  const joinChatRoom = (userDetails) => {
    setUser(userDetails);
    socket.emit('join', userDetails);
  };

  // Leave a chat room
  const leaveChatRoom = () => {
    socket.emit('leave', user);
    setUser(null);
  };

    return (
      <div className="chat-room">
       // The chat room components will go here
      </div>
    );
}

export default ChatRoom;