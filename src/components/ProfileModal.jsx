import { Modal, Box, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';

const modalStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
};

const ProfileModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} sx={modalStyle}>
      <Box className="w-full max-w-4xl rounded-2xl bg-white shadow-xl p-6 md:p-8 relative">
        <header className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">My Profile</h2>
            <p className="text-sm text-gray-500">Update your personal information</p>
          </div>
          <IconButton onClick={onClose}>
            <Icon icon="mdi:close" width={22} height={22} />
          </IconButton>
        </header>

        <section className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Personal Info</h3>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-pink-500">
                  <img
                    src="https://i.pravatar.cc/100?img=32"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 rounded-lg bg-pink-500 text-white text-sm font-semibold">
                    Change Picture
                  </button>
                  <button className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50">
                    Delete Picture
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">Name</label>
              <input
                type="text"
                defaultValue="Alice Whitaker"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">Secondary Address</label>
              <input
                type="text"
                defaultValue="123 Maple Avenue"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">Address</label>
              <input
                type="text"
                defaultValue="123 Maple Avenue"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">State / Province</label>
                <select className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none">
                  <option>California</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">Country</label>
                <select className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none">
                  <option>United States</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">City</label>
              <input
                type="text"
                defaultValue="Springfield"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">ZIP Code</label>
              <input
                type="text"
                defaultValue="94025"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none"
              />
            </div>
          </div>
        </section>

        <footer className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <button className="flex items-center gap-2 text-sm font-semibold text-pink-500">
            <Icon icon="mdi:logout" width={18} height={18} />
            Sign Out
          </button>
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={onClose}
              className="flex-1 md:flex-none px-6 py-3 rounded-lg border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button className="flex-1 md:flex-none px-6 py-3 rounded-lg bg-pink-500 text-white text-sm font-semibold shadow hover:bg-pink-600">
              Save Change
            </button>
          </div>
        </footer>
      </Box>
    </Modal>
  );
};

export default ProfileModal;







