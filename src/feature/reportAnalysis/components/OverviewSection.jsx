import { useState } from 'react';
import { Icon } from '@iconify/react';

const overviewCards = [
  {
    id: 'sales',
    label: 'Total Sales',
    value: '15,250',
    helper: 'orders',
    delta: '+2.05%',
    icon: 'mdi:cart-outline',
    accent: 'from-[#FFEAEE] to-[#FFD4E4]',
  },
  {
    id: 'revenue',
    label: 'Total Revenue',
    value: '₹ 7,20,000',
    helper: '',
    delta: '+2.05%',
    icon: 'mdi:cash-multiple',
    accent: 'from-[#FFE0FF] to-[#FFC8F2]',
  },
  {
    id: 'newUsers',
    label: 'New Users',
    value: '4,850',
    helper: 'users',
    delta: '+3.08%',
    icon: 'mdi:account-plus-outline',
    accent: 'from-[#FFE9FF] to-[#FFDFFF]',
  },
  {
    id: 'activeUsers',
    label: 'Active Users',
    value: '4,850',
    helper: 'users',
    delta: '+2.06%',
    icon: 'mdi:account-group-outline',
    accent: 'from-[#F0F7FF] to-[#DBE8FF]',
  },
  {
    id: 'inventory',
    label: 'Low Inventory Alerts',
    value: '920',
    helper: '',
    delta: '+2.05%',
    icon: 'mdi:warehouse',
    accent: 'from-[#FFF4E6] to-[#FFE4CC]',
  },
  {
    id: 'traffic',
    label: 'Site Traffic',
    value: '18,000',
    helper: 'visits',
    delta: '+2.05%',
    icon: 'mdi:web',
    accent: 'from-[#EFFFF8] to-[#D4FFE7]',
  },
];

const timeFilters = ['Today', 'This Week', 'This Month', 'This Year'];

const OverviewSection = () => {
  const [activeFilter, setActiveFilter] = useState('Today');

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-gray-700">Overview</p>
        </div>
        <div className="flex items-center gap-3 bg-gray-100 rounded-full p-1">
          {timeFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition ${
                activeFilter === filter ? 'bg-white text-[#F8069D]' : 'text-gray-500'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mt-6">
        {overviewCards.map((card) => (
          <article
            key={card.id}
            className="p-4 rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 shadow-sm"
          >
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.accent} flex items-center justify-center mb-3`}>
              <Icon icon={card.icon} className="text-[#F8069D]" width={20} height={20} />
            </div>
            <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">{card.label}</p>
            <div className="flex items-end gap-1 mt-2">
              <p className="text-2xl font-semibold text-gray-900">{card.value}</p>
              {card.helper && <span className="text-sm text-gray-500 mb-1">{card.helper}</span>}
            </div>
            <p className="text-xs font-semibold text-green-500 mt-2">{card.delta}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default OverviewSection;


