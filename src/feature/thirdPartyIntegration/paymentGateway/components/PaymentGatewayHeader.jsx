import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const PaymentGatewayHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <button
          onClick={() => navigate('/third-party-integration')}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
        >
          <Icon icon="mdi:chevron-left" width={24} height={24} className="text-gray-600" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Payment Gateway</h1>
      </div>
      <button
        onClick={() => navigate('/third-party-integration/payment-gateway/add')}
        className="flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors"
      >
        <Icon icon="mdi:plus" width={20} height={20} />
        <span>Add New Payment Gateway</span>
      </button>
    </div>
  );
};

export default PaymentGatewayHeader;

