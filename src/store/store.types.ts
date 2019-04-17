export interface Message {
    message: string;
    avatar: string;
    author: string;
}
export interface MessagesState {
    messages: Message[];
}
export interface ChatListItem {
    lastMessage: Message;
    chatName: string;
}
