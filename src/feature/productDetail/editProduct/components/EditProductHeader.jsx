import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const EditProductHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Icon icon="mdi:chevron-left" width={24} height={24} className="text-gray-700" />
        </button>
        <h2 className="text-lg font-semibold text-gray-900">Edit Details</h2>
      </div>
      <button className="bg-[#F8069D] hover:bg-[#C1057D] text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
        Save
      </button>
    </div>
  );
};

export default EditProductHeader;

