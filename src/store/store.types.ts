export interface MessageType {
    message: string;
    avatar: string;
    author: string;
}
export interface MessagesStateType {
    messages: MessageType[];
}
export interface ChatListItemType {
    lastMessage: MessageType;
    chatName: string;
}
