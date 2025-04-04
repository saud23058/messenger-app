"use client";

import { ws } from "@/lib/ws";
import { messageType } from "@/types";
import React, { useEffect, useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<messageType | undefined>(undefined);

  useEffect(() => {
    ws.onopen = () => {};
    ws.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data.toString()]);
    };
    ws.onclose = () => {};

    return () => ws.close();
  }, []);

  const sendMessage = () => {
    if (message) {
      ws.send(JSON.stringify(message));
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">
        🗨️ Simple Chat
      </h2>

      <div className="bg-gray-100 h-64 overflow-y-auto rounded-lg p-4 shadow mb-4">
        {messages.map((msg, index) => (
          <p
            key={index}
            className="text-sm bg-white p-2 rounded mb-2 shadow-sm"
          >
            {msg}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
        <input
          type="text"
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="User ID (for creation)"
          onChange={(e) =>
            setMessage((prev) => {
              return prev
                ? { ...prev, userId: e.target.value, type: "create" }
                : {
                    userId: e.target.value,
                    type: "create",
                    message: "",
                    to: "",
                  };
            })
          }
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
        >
          Create User
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
        <input
          type="text"
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-purple-200"
          placeholder="Send to (userId)"
          onChange={(e) =>
            setMessage((prev) => {
              return prev
                ? { ...prev, to: e.target.value, type: "private" }
                : {
                    userId: "",
                    to: e.target.value,
                    message: "",
                    type: "private",
                  };
            })
          }
        />
        <input
          type="text"
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-purple-200"
          placeholder="Your message"
          onChange={(e) =>
            setMessage((prev) => {
              return prev
                ? { ...prev, message: e.target.value, type: "private" }
                : {
                    userId: "",
                    to: "",
                    message: e.target.value,
                    type: "private",
                  };
            })
          }
        />
      </div>

      <button
        onClick={sendMessage}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded mt-2"
      >
        Send Message
      </button>
    </div>
  );
};

export default Chat;
