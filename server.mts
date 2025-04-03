import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

const user = new Map<string[], WebSocket>();

wss.on("connection", (ws) => {
  console.log("New client connected");
  ws.on("message", (data) => {
    console.log(data.toString());
    
    const { type, userId, message, to } = JSON.parse(data.toString());

    if (type === "create") {
      user.set(userId, ws);
      ws.send("Successfully created Account");
    }
    if (type === "private") {
      const receiver = user.get(to);
      console.log("Receiver:" + receiver?.toString());

      if (receiver) {
        receiver.send(message);
      } else {
        ws.send("Not found the receiver");
      }
    }

    // wss.clients.forEach((cli) => {
    //   cli.send(data.toString());
    // });
  });

  ws.send("Thank you for joining this server");

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server running on ws://localhost:8080");
