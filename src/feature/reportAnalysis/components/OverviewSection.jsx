import { useState } from 'react';
import { GradientOverviewCards } from '../../../components';
import graph from "../../../assets/graph.png"
import coin from "../../../assets/coin.png"
import shipments from "../../../assets/shipments.png"
import failedTransaction from "../../../assets/failedTransaction.png"
const reportOverviewMetrics = [
  {
    id: 'sales',
    label: 'Total Sales',
    value: '15,250 orders',
    trend: '+2.05%',
    icon: graph,
    gradient: 'linear-gradient(102.03deg, #7F21B5 -10.83%, #FF6BB5 89.48%), linear-gradient(102.03deg, #FF6BB5 4.77%, #7F21B5 105.08%)',
  },
  {
    id: 'revenue',
    label: 'Total Revenue',
    value: '₹ 7,20,000',
    trend: '+3.12%',
    icon: coin,
    gradient: 'linear-gradient(102.03deg, #7F21B5 -10.83%, #FF6BB5 89.48%), linear-gradient(102.03deg, #FF6BB5 4.77%, #7F21B5 105.08%)',
  },
  {
    id: 'newUsers',
    label: 'New Users',
    value: '4,850 users',
    trend: '+3.08%',
    icon: failedTransaction,
    gradient: 'linear-gradient(102.03deg, #7F21B5 -10.83%, #FF6BB5 89.48%), linear-gradient(102.03deg, #FF6BB5 4.77%, #7F21B5 105.08%)',
  },
  {
    id: 'activeUsers',
    label: 'Active Users',
    value: '4,120 users',
    trend: '+2.06%',
    icon: failedTransaction,
     gradient: 'linear-gradient(102.03deg, #7F21B5 -10.83%, #FF6BB5 89.48%), linear-gradient(102.03deg, #FF6BB5 4.77%, #7F21B5 105.08%)',
  },
  {
    id: 'inventory',
    label: 'Low Inventory Alerts',
    value: '920 SKUs',
    trend: '-1.12%',
    icon: failedTransaction,
     gradient: 'linear-gradient(102.03deg, #7F21B5 -10.83%, #FF6BB5 89.48%), linear-gradient(102.03deg, #FF6BB5 4.77%, #7F21B5 105.08%)',
  },
  {
    id: 'traffic',
    label: 'Site Traffic',
    value: '18,000 visits',
    trend: '+5.40%',
    icon: shipments,
     gradient: 'linear-gradient(102.03deg, #7F21B5 -10.83%, #FF6BB5 89.48%), linear-gradient(102.03deg, #FF6BB5 4.77%, #7F21B5 105.08%)',
  },
];

const OverviewSection = () => {
  const [activeFilter, setActiveFilter] = useState('Today');

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <GradientOverviewCards
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        metrics={reportOverviewMetrics}
        title="Overview"
        subtitle="Monitor store-wide performance at a glance"
      />
    </div>
  );
};

export default OverviewSection;



