"use client";

import { ws } from "@/lib/ws";
import React, { useEffect, useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    ws.onopen = () => {
      console.log("Connection is Open");
    };

    ws.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data.toString()]);
    };

    ws.onclose = () => {
      console.log("Connection Closed");
    };

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() !== "") {
      ws.send(message);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {messages.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
      {/* Input for message */}
      <input
        type="text"
        value={message}
        placeholder="Enter message"
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
