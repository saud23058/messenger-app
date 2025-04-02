import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("New client connected");
  ws.on("message", (data) => {
    wss.clients.forEach((cli) => {
      cli.send(data.toString());
    });
  });

  ws.emit("Thank you for joining this server");

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server running on ws://localhost:8080");
