import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const UserDetailHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between mb-6">
      {/* Back Button and Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate('/user-management')}
          className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Icon icon="mdi:chevron-left" width={24} height={24} className="text-gray-700" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">User Details</h1>
      </div>

      {/* Edit Button */}
      <button
        className="flex items-center gap-2 px-4 py-2 bg-[#F8069D] text-white rounded-lg hover:bg-[#d60589] transition-colors"
        style={{ backgroundColor: '#F8069D' }}
      >
        <Icon icon="mdi:pencil" width={20} height={20} />
        <span className="font-semibold">Edit</span>
      </button>
    </div>
  );
};

export default UserDetailHeader;


