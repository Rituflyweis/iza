import { useState } from 'react';
import { Icon } from '@iconify/react';

const ChatSidebar = ({ selectedChat, onSelectChat }) => {
  const [activeRole, setActiveRole] = useState('Customer');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample chat list data
  const chats = [
    {
      id: 1,
      name: 'Manojowani dhore',
      userId: '#P2399',
      lastMessage: 'Lorem ipsum dolor sit...',
      timestamp: '09:09',
      avatar: 'https://i.pravatar.cc/100?img=1',
      isOnline: true,
    },
    {
      id: 2,
      name: 'John Doe',
      userId: '#P2400',
      lastMessage: 'Hello, I need help with...',
      timestamp: '08:45',
      avatar: 'https://i.pravatar.cc/100?img=2',
      isOnline: false,
    },
    {
      id: 3,
      name: 'Jane Smith',
      userId: '#P2401',
      lastMessage: 'Thank you for your assistance',
      timestamp: '08:30',
      avatar: 'https://i.pravatar.cc/100?img=3',
      isOnline: true,
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-900">Live Chat Support</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span
            className={`cursor-pointer ${activeRole === 'Admin' ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}
            onClick={() => setActiveRole('Admin')}
          >
            Admin
          </span>
          <span className="text-gray-300">|</span>
          <span
            className={`cursor-pointer ${activeRole === 'Customer' ? 'text-pink-600 font-semibold' : 'text-gray-500'}`}
            onClick={() => setActiveRole('Customer')}
          >
            Customer
          </span>
        </div>
      </div>

      {/* Archive Chat Header */}
      <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-2">
        <button className="p-1 hover:bg-gray-100 rounded">
          <Icon icon="mdi:chevron-left" width={20} height={20} className="text-gray-600" />
        </button>
        <span className="text-sm font-semibold text-gray-900">Archive Chat</span>
      </div>

      {/* Search and CHAT+ Button */}
      <div className="p-4 border-b border-gray-200 flex items-center gap-2">
        <div className="flex-1 relative">
          <Icon
            icon="mdi:magnify"
            width={20}
            height={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          />
        </div>
        <button className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg text-sm transition-colors">
          CHAT+
        </button>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors ${
              selectedChat === chat.id ? 'bg-gray-50' : ''
            }`}
          >
            <div className="flex items-start gap-3">
              {/* Profile Picture with Online Status */}
              <div className="relative flex-shrink-0">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {chat.isOnline && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>

              {/* Chat Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-semibold text-gray-900 truncate">{chat.name}</h4>
                  <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{chat.timestamp}</span>
                </div>
                <p className="text-xs text-gray-500 mb-1">ID: {chat.userId}</p>
                <p className="text-xs text-gray-400 truncate">{chat.lastMessage}</p>
              </div>

              {/* Options Menu */}
              <button className="p-1 hover:bg-gray-200 rounded flex-shrink-0">
                <Icon icon="mdi:dots-vertical" width={18} height={18} className="text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;

