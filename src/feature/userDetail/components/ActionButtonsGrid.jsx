import { Icon } from '@iconify/react';
import { useNavigate, useParams } from 'react-router-dom';

const ActionButtonsGrid = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const actionButtons = [
    {
      id: 'order-history',
      label: 'Order History',
      icon: 'mdi:package-variant-closed',
    },
    {
      id: 'wishlist',
      label: 'Wishlist',
      icon: 'mdi:heart',
    },
    {
      id: 'activity-logs',
      label: 'Activity Logs',
      icon: 'mdi:chart-line',
    },
    {
      id: 'loyalty-rewards',
      label: 'Loyalty & Rewards',
      icon: 'mdi:star-circle',
    },
    {
      id: 'communication-history',
      label: 'Communication History',
      icon: 'mdi:message',
    },
    {
      id: 'ticket-raised',
      label: 'Ticket Raised',
      icon: 'mdi:ticket',
    },
    {
      id: 'referral-history',
      label: 'Referral History',
      icon: 'mdi:account-plus',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {actionButtons.map((button) => (
        <button
          key={button.id}
          className="flex items-center gap-3 px-4 py-4 rounded-lg border transition-all hover:shadow-md"
          style={{
            backgroundColor: '#FF31B233',
            borderColor: '#FF31B233',
          }}
          onClick={() => {
            if (button.id === 'order-history') {
              navigate(`/user-detail/${id || 1}/order-history`);
            } else if (button.id === 'wishlist') {
              navigate(`/user-detail/${id || 1}/wishlist`);
            } else if (button.id === 'activity-logs') {
              navigate(`/user-detail/${id || 1}/activity-logs`);
            } else if (button.id === 'ticket-raised') {
              navigate(`/user-detail/${id || 1}/tickets`);
            } else if (button.id === 'communication-history' || button.id === 'communication' || button.id === 'communication-history') {
              navigate(`/user-detail/${id || 1}/communication`);
            } else if (button.id === 'loyalty-rewards') {
              navigate(`/user-detail/${id || 1}/loyalty`);
            } else if (button.id === 'referral-history') {
              navigate(`/user-detail/${id || 1}/referrals`);
            }
          }}
        >
          <Icon 
            icon={button.icon} 
            width={24} 
            height={24} 
            className="text-gray-900"
          />
          <span 
            className="font-semibold text-sm text-gray-900"
          >
            {button.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ActionButtonsGrid;

