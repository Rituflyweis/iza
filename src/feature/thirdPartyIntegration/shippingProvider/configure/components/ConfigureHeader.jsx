import { useNavigate, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';

const ConfigureHeader = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="flex items-center gap-2 mb-6">
      <button
        onClick={() => navigate('/third-party-integration/shipping-provider')}
        className="p-1 hover:bg-gray-100 rounded"
      >
        <Icon icon="mdi:chevron-left" width={22} height={22} className="text-gray-700" />
      </button>
      <h1 className="text-base font-bold text-gray-900">Configure</h1>
    </div>
  );
};

export default ConfigureHeader;

