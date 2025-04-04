import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

const users = new Map<string, WebSocket>();


wss.on("connection", (ws) => {
  ws.send("Welcome to the WebSocket server");

  ws.on("message", (data) => {
    try {
      const { type, userId, message, to } = JSON.parse(data.toString());

      switch (type) {
        case "create":
          users.set(userId, ws);
          ws.send(`✅ User ${userId} created successfully`);
          break;

        case "private":
          const receiver = users.get(to);
          if (receiver) {
            receiver.send(`📩 ${userId}: ${message}`);
          } else {
            ws.send("❌ Receiver not found");
          }
          break;

        default:
          ws.send("❗ Unknown message type");
      }
    } catch (err) {
      console.error("Error handling message:", err);
      ws.send("❌ Error processing your request");
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
