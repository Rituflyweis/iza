import { useState } from 'react';
import { Icon } from '@iconify/react';
import AdminSupportDetails from './AdminSupportDetails';

const ChatConversation = ({ chatId }) => {
  const [message, setMessage] = useState('');
  const [showSupportDetails, setShowSupportDetails] = useState(false);

  // Sample chat data
  const chatData = {
    id: 1,
    name: 'Manojowani dhore',
    userId: '#P2399',
    avatar: 'https://i.pravatar.cc/100?img=1',
  };

  // Sample messages
  const messages = [
    {
      id: 1,
      type: 'incoming',
      text: "Lorem ipsum dolor sit been the industry's standard dummy text ever since the 1500s.",
      timestamp: '09:09 PM',
      avatar: 'https://i.pravatar.cc/100?img=5',
      date: '09/09/2023',
    },
    {
      id: 2,
      type: 'outgoing',
      text: "Lorem ipsum dolor sit been the industry's standard dummy text ever since the 1500s.",
      timestamp: '09:09 PM',
      avatar: chatData.avatar,
      date: '09/09/2023',
    },
    {
      id: 3,
      type: 'incoming',
      text: "Lorem ipsum dolor sit been the industry's standard dummy text ever since the 1500s.",
      timestamp: '09:10 PM',
      avatar: 'https://i.pravatar.cc/100?img=5',
    },
    {
      id: 4,
      type: 'outgoing',
      text: "Lorem ipsum dolor sit been the industry's standard dummy text ever since the 1500s.",
      timestamp: '09:10 PM',
      avatar: chatData.avatar,
    },
  ];

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Send message:', message);
      setMessage('');
      // Implement send message logic
    }
  };

  let lastDate = '';

  return (
    <div className="bg-white border border-gray-200 rounded-lg h-full flex flex-col">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={chatData.avatar}
            alt={chatData.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{chatData.name}</h3>
            <p className="text-xs text-gray-500">ID: {chatData.userId}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setShowSupportDetails(true)}
          className="text-xs text-gray-500 hover:text-pink-600 transition-colors flex items-center gap-1"
        >
          <Icon icon="mdi:phone" width={14} height={14} />
          Admin Support Contact Details
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => {
          const showDate = msg.date && msg.date !== lastDate;
          if (showDate) lastDate = msg.date;

          return (
            <div key={msg.id}>
              {/* Date Separator */}
              {showDate && (
                <div className="flex items-center justify-center my-4">
                  <div className="flex-1 border-t border-gray-200"></div>
                  <span className="px-3 text-xs text-gray-400">{msg.date}</span>
                  <div className="flex-1 border-t border-gray-200"></div>
                </div>
              )}

              {/* Message */}
              {msg.type === 'incoming' ? (
                <div className="flex items-start gap-2 mb-2">
                  <img
                    src={msg.avatar}
                    alt="User"
                    className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-md">
                      <p className="text-sm text-gray-900">{msg.text}</p>
                    </div>
                    <p className="text-xs text-gray-400 mt-1 ml-1">{msg.timestamp}</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-2 mb-2 justify-end">
                  <div className="flex-1 flex justify-end">
                    <div className="max-w-md">
                      <div className="bg-gray-600 rounded-lg px-4 py-2 ml-auto">
                        <p className="text-sm text-white">{msg.text}</p>
                      </div>
                      <p className="text-xs text-gray-400 mt-1 mr-1 text-right">{msg.timestamp}</p>
                    </div>
                  </div>
                  <img
                    src={msg.avatar}
                    alt="Admin"
                    className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200">
        <form onSubmit={handleSend} className="flex items-center gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors"
          >
            <Icon icon="mdi:send" width={20} height={20} />
          </button>
        </form>
      </div>

      {/* Admin Support Details Modal */}
      {showSupportDetails && (
        <AdminSupportDetails onClose={() => setShowSupportDetails(false)} />
      )}
    </div>
  );
};

export default ChatConversation;

