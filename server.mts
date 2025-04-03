import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

const user = new Map<string, WebSocket>();

const createGroup = new Map<string, Set<string>>();

const groups = new Map<string, WebSocket>();

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

    if (type === "create_group") {
      createGroup.set(message, new Set[userId]());
      groups.set(message, ws);
      ws.send("Group created successfully");
    }

    if (type === "join_group") {
      const getGroup = createGroup.get(message);
      if (getGroup) {
        getGroup.add(userId);
      } else {
        ws.send("Not found the Group");
      }
    }

    if (type === "group_message") {
      const group = createGroup.get(to);

      if (group) {
        group.forEach((member) => {
          const memId = user.get(member);
          if (memId) {
            memId.send(message);
          }
        });
      }
    }
  });

  ws.send("Thank you for joining this server");

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server running on ws://localhost:8080");
