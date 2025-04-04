export interface messageType {
  userId: string;
  type: "create" | "private" | "create_group" | "join_group" | "group_message";
  message: string;
  to: string;
}
