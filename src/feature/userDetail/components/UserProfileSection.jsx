import { Box } from '@mui/material';
import { Icon } from '@iconify/react';

const UserProfileSection = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Picture */}
        <div className="flex items-start justify-center lg:justify-start">
          <div className="w-32 h-32 rounded-lg overflow-hidden border-2 border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* User Details Fields */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Row 1 */}
          <div>
            <label className="block text-sm font-semibold text-[#5A6678] mb-2">Name</label>
            <input
              type="text"
              value="Marie Willson"
              disabled
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#5A6678] mb-2">User ID</label>
            <input
              type="text"
              value="123345"
              disabled
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
            />
          </div>

          {/* Row 2 */}
          <div>
            <label className="block text-sm font-semibold text-[#5A6678] mb-2">Phone Number</label>
            <input
              type="text"
              value="555-234-1289"
              disabled
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#5A6678] mb-2">Assign Role</label>
            <input
              type="text"
              value="Admin"
              disabled
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
            />
          </div>

          {/* Row 3 */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-[#5A6678] mb-2">Email</label>
            <input
              type="email"
              value="abc@gmail.com"
              disabled
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
            />
          </div>

          {/* Row 4 */}
          <div>
            <label className="block text-sm font-semibold text-[#5A6678] mb-2">Address</label>
            <input
              type="text"
              value="Lorem Ipsum"
              disabled
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#5A6678] mb-2">Membership</label>
            <div className="relative">
              <input
                type="text"
                value="Platinum Membership"
                disabled
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors pl-10"
              />
              <Box
                component="span"
                sx={{
                  position: 'absolute',
                  left: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Icon icon="mdi:star" width={20} height={20} className="text-yellow-500" />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileSection;

