export interface MessageType {
    value: string;
    avatarURL: string;
    authorName: string;
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
interface Chat {
    id: number;
    title: string;
}
export interface ChatListItemType {
    chat: Chat;
    lastMessage: MessageType;
}
export interface ChatType {
    chat: Chat;
    messages: MessageType[];
}
