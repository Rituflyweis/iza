import { useState } from 'react';
import ChatSidebar from './ChatSidebar';
import ChatConversation from './ChatConversation';

const ChatPanel = () => {
  const [selectedChat, setSelectedChat] = useState(1);

  return (
    <div className="w-full flex gap-4 h-[calc(100vh-300px)]">
      {/* Left Sidebar */}
      <div className="w-1/3 min-w-[300px]">
        <ChatSidebar selectedChat={selectedChat} onSelectChat={setSelectedChat} />
      </div>

      {/* Right Chat Area */}
      <div className="flex-1">
        <ChatConversation chatId={selectedChat} />
      </div>
    </div>
  );
};

export default ChatPanel;

