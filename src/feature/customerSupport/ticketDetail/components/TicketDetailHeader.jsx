import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const TicketDetailHeader = () => {
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
        Ticket Raised
      </span>
    </div>
  );
};

export default TicketDetailHeader;





