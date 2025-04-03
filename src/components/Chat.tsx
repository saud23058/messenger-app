"use client";

import { ws } from "@/lib/ws";
import React, { useEffect, useState } from "react";

interface messageType {
  userId: string;
  type: "create" | "private" | "group";
  message: string;
  to: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<messageType | undefined>(undefined);

  useEffect(() => {
    ws.onopen = () => {
      console.log("Connection is Open");
    };

    ws.onmessage = (event) => {
      setMessages((pre) => [...pre, event.data.toString()]);
    };

    ws.onclose = () => {
      console.log("Connection Closed");
    };

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (message !== undefined) {
      console.log(message);

      ws.send(JSON.stringify(message));
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {messages.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
      {/* Input for message */}
      {/* <input
        type="text"
        value={message}
        placeholder="Enter message"
        onChange={(e) => setMessage(e.target.value)}
      /> */}

      <input
        type="text"
        placeholder="send to "
        onChange={(e) =>
          setMessage((pre) => {
            return pre
              ? { ...pre, to: e.target.value }
              : {
                  userId: "",
                  type: "private",
                  message: "",
                  to: e.target.value,
                };
          })
        }
      />

      <input
        type="text"
        placeholder="message..."
        onChange={(e) =>
          setMessage((pre) => {
            return pre
              ? { ...pre, message: e.target.value }
              : {
                  userId: "",
                  type: "private",
                  message: e.target.value,
                  to: "",
                };
          })
        }
      />
      <button onClick={sendMessage}>Send to private</button>
      <input
        type="text"
        placeholder="create user"
        onChange={(e) =>
          setMessage((pre) => {
            return pre
              ? { ...pre, userId: e.target.value }
              : {
                  userId: e.target.value,
                  type: "create",
                  message: "",
                  to: "",
                };
          })
        }
      />
      <button onClick={sendMessage}>Create user</button>
    </div>
  );
};

export default Chat;
