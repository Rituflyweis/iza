import { useState } from 'react';
import { GradientOverviewCards } from '../../../components';
import graphIcon from '../../../assets/graph.png';
import coinIcon from '../../../assets/coin.png';
import shipmentsIcon from '../../../assets/shipments.png';
import failedIcon from '../../../assets/failedTransaction.png';

const integrationMetrics = [
  {
    id: 'transactions',
    label: 'Total Transactions',
    value: '1,250',
    trend: '+4.2%',
    icon: graphIcon,
    gradient: 'linear-gradient(135deg, #7F21B5, #FF6BB5)',
  },
  {
    id: 'successRate',
    label: 'Success Rate',
    value: '98%',
    trend: '+1.1%',
    icon: coinIcon,
    gradient: 'linear-gradient(135deg, #6C63FF, #A683FF)',
  },
  {
    id: 'failedTransactions',
    label: 'Failed Transactions',
    value: '25',
    trend: '-0.3%',
    icon: failedIcon,
    gradient: 'linear-gradient(135deg, #FF6BB5, #FF9A9E)',
  },
  {
    id: 'shipments',
    label: 'Total Shipments',
    value: '950',
    trend: '+3.6%',
    icon: shipmentsIcon,
    gradient: 'linear-gradient(135deg, #4FACFE, #00F2FE)',
  },
  {
    id: 'onTimeDeliveries',
    label: 'On-Time Deliveries',
    value: '920',
    trend: '+2.4%',
    icon: graphIcon,
    gradient: 'linear-gradient(135deg, #43E97B, #38F9D7)',
  },
];

const OverviewCards = () => {
  const [range, setRange] = useState('Today');

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <GradientOverviewCards
        activeFilter={range}
        onFilterChange={setRange}
        metrics={integrationMetrics}
        title="Overview"
        subtitle="Monitor integration health and logistics"
      />
    </div>
  );
};

export default OverviewCards;
