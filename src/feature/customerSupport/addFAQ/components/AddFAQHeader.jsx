import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const AddFAQHeader = ({ isEdit = false }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-2 mb-6">
      <button
        onClick={() => navigate('/customer-support')}
        className="p-1 rounded hover:bg-gray-100"
      >
        <Icon icon="mdi:chevron-left" width={22} height={22} />
      </button>
      <span className="font-semibold text-gray-900 text-base">
        {isEdit ? 'Edit FAQ' : 'Add FAQ'}
      </span>
    </div>
  );
};

export default AddFAQHeader;





