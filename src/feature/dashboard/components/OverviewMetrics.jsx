import { useState } from 'react';
import { GradientOverviewCards } from '../../../components';
import coin from '../../../assets/coin.png';
import shipments from '../../../assets/shipments.png';
import graph from '../../../assets/graph.png';
import failedTransaction from '../../../assets/failedTransaction.png';

const dashboardMetrics = [
  {
    id: 'sales',
    label: 'Total Sales',
    value: '15,250 orders',
    trend: '+2.06%',
    icon: graph,
    gradient: 'linear-gradient(135deg, #FB3AA9, #FF6B98)',
  },
  {
    id: 'revenue',
    label: 'Total Revenue',
    value: '₹ 7,20,000',
    trend: '+2.06%',
    icon: coin,
    gradient: 'linear-gradient(135deg, #FF7D9E, #FF2EBE)',
  },
  {
    id: 'activeUsers',
    label: 'Active Users',
    value: '4,850 users',
    trend: '+2.06%',
    icon: failedTransaction,
    gradient: 'linear-gradient(135deg, #FB3AA9, #FF6B98)',
  },
  {
    id: 'traffic',
    label: 'Site Traffic',
    value: '18,000 visits',
    trend: '+2.06%',
    icon: shipments,
    gradient: 'linear-gradient(135deg, #FF7D9E, #FF2EBE)',
  },
];

const OverviewMetrics = () => {
  const [activeFilter, setActiveFilter] = useState('Today');

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-3 shadow-sm">
      <GradientOverviewCards
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        metrics={dashboardMetrics}
        title="Overview"
        subtitle="Quick glance at store performance"
      />
    </div>
  );
};

export default OverviewMetrics;