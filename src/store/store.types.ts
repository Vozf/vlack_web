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
export interface ChatInfo {
    id: number;
    title: string;
}
export interface ChatListItemType {
    chat: ChatInfo;
    lastMessage: MessageType;
}
export interface ChatType {
    chat: ChatInfo;
    messages: MessageType[];
}
