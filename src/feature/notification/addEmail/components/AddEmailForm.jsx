import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Dialog, Box, TextField, Radio, RadioGroup, FormControlLabel, Typography, Avatar } from '@mui/material';

const AddEmailForm = () => {
  const [openModal, setOpenModal] = useState(false);
  const [recipients, setRecipients] = useState([
    { id: 1, name: 'Lorem Ipsum', userId: '1234566' }
  ]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample users data
  const users = [
    { id: 1, name: 'John Smith', userId: '1234566' },
    { id: 2, name: 'Jane Doe', userId: '1234567' },
    { id: 3, name: 'Bob Johnson', userId: '1234568' },
    { id: 4, name: 'Alice Williams', userId: '1234569' },
    { id: 5, name: 'Charlie Brown', userId: '1234570' },
    { id: 6, name: 'Diana Prince', userId: '1234571' },
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.userId.includes(searchQuery)
  );

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSearchQuery('');
    setSelectedUserId(null);
  };

  const handleSelectUser = (userId) => {
    setSelectedUserId(userId);
  };

  const handleAddRecipient = () => {
    if (selectedUserId) {
      const user = users.find(u => u.id === selectedUserId);
      if (user && !recipients.find(r => r.id === user.id)) {
        setRecipients([...recipients, user]);
      }
      handleCloseModal();
    }
  };

  const handleRemoveRecipient = (id) => {
    setRecipients(recipients.filter(r => r.id !== id));
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Recipients</label>
        <div className="flex items-center gap-2 flex-wrap border border-gray-300 rounded-md px-3 py-2 min-h-[42px]">
          {recipients.map((recipient) => (
            <span
              key={recipient.id}
              className="inline-flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-full text-sm"
            >
              <Avatar
                sx={{
                  width: 20,
                  height: 20,
                  fontSize: '0.7rem',
                  bgcolor: '#F8069D',
                }}
              >
                {getInitials(recipient.name)}
              </Avatar>
              {recipient.name}
              <button
                onClick={() => handleRemoveRecipient(recipient.id)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </span>
          ))}
          <button
            onClick={handleOpenModal}
            className="ml-auto bg-pink-600 hover:bg-pink-700 text-white text-xs font-semibold px-3 py-1 rounded"
          >
            + ADD
          </button>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
        <input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <div className="border border-gray-300 rounded-md p-2 relative">
          <textarea
            rows={6}
            className="w-full outline-none resize-none"
            placeholder="Enter message"
          />
          <div className="flex items-center gap-3 text-gray-600 absolute bottom-2 left-2">
            <Icon icon="mdi:paperclip" width={18} height={18} className="cursor-pointer hover:text-gray-800" />
            <Icon icon="mdi:emoticon-outline" width={18} height={18} className="cursor-pointer hover:text-gray-800" />
            <Icon icon="mdi:delete-outline" width={18} height={18} className="cursor-pointer hover:text-gray-800" />
          </div>
        </div>
      </div>
      <div className="flex gap-3 pt-2">
        <button className="px-5 py-2 rounded-md border border-pink-600 text-pink-600 font-semibold">Cancel</button>
        <button className="px-5 py-2 rounded-md bg-pink-600 hover:bg-pink-700 text-white font-semibold">Send</button>
      </div>

      {/* Recipient Selection Modal */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        BackdropProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          },
        }}
        PaperProps={{
          sx: {
            position: 'fixed',
            right: 0,
            top: 0,
            bottom: 0,
            margin: 0,
            maxHeight: '100vh',
            height: '100vh',
            width: '400px',
            maxWidth: '90vw',
            borderRadius: 0,
          },
        }}
        sx={{
          '& .MuiDialog-container': {
            justifyContent: 'flex-end',
            alignItems: 'stretch',
          },
        }}
      >
        <Box sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Search Bar */}
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <Icon icon="mdi:magnify" width={20} height={20} style={{ marginRight: 8, color: '#9CA3AF' }} />
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '0.5rem',
                },
              }}
            />
          </Box>

          {/* User List */}
          <Box sx={{ flex: 1, overflowY: 'auto' }}>
            <RadioGroup
              value={selectedUserId}
              onChange={(e) => handleSelectUser(Number(e.target.value))}
            >
              {filteredUsers.map((user) => (
                <FormControlLabel
                  key={user.id}
                  value={user.id}
                  control={<Radio />}
                  label={
                    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
                      <Typography sx={{ fontWeight: 600, color: '#1A1A1A' }}>
                        {user.name}
                      </Typography>
                      <Typography sx={{ fontSize: '0.875rem', color: '#5A6678' }}>
                        User ID - {user.userId}
                      </Typography>
                    </Box>
                  }
                  sx={{
                    borderBottom: '1px solid #E5E7EB',
                    py: 1.5,
                    '&:last-child': {
                      borderBottom: 'none',
                    },
                  }}
                />
              ))}
            </RadioGroup>
          </Box>

          {/* Add Button */}
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={handleAddRecipient}
              disabled={!selectedUserId}
              className={`px-4 py-2 rounded-md text-white font-semibold ${
                selectedUserId
                  ? 'bg-pink-600 hover:bg-pink-700'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              Add
            </button>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};

export default AddEmailForm;



