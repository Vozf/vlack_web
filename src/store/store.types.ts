export interface MessageType {
    message: string;
    avatar: string;
    author: string;
}
export interface ChatStateType {
    currentChat?: ChatType;
    chats: ChatListItemType[];
    route:
        | {
              path: string;
              params: any;
              query: any;
          }
        | any;
}
interface ChatId {
    chatId: number;
    chatName: string;
}
export interface ChatListItemType extends ChatId {
    lastMessage: MessageType;
}
export interface ChatType extends ChatId {
    messages: MessageType[];
}
