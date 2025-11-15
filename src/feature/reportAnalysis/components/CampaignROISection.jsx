import { useState } from 'react';
import { Icon } from '@iconify/react';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const adSpendData = [
  { month: 'Jan', value: 3200 },
  { month: 'Feb', value: 3600 },
  { month: 'Mar', value: 3000 },
  { month: 'Apr', value: 3800 },
  { month: 'May', value: 3400 },
  { month: 'Jun', value: 4000 },
  { month: 'Jul', value: 3700 },
  { month: 'Aug', value: 4100 },
  { month: 'Sep', value: 3600 },
  { month: 'Oct', value: 3900 },
  { month: 'Nov', value: 3500 },
  { month: 'Dec', value: 3700 },
];

const filters = ['Today', 'This Week', 'This Month', 'This Year'];

const CampaignROISection = () => {
  const [activeFilter, setActiveFilter] = useState('Today');

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Campaign ROI</h2>
        <button className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600">
          <Icon icon="mdi:filter-outline" width={18} height={18} />
          Filter
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <p className="text-base font-semibold text-gray-800">Ad spends</p>
        <div className="flex items-center gap-2 rounded-full border border-gray-200 p-1">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1 rounded-full text-sm font-semibold transition ${
                activeFilter === filter ? 'bg-[#F8069D] text-white' : 'text-gray-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={adSpendData}>
            <defs>
              <linearGradient id="campaignROI" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F8069D" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#F8069D" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f1f1f1" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
            <Tooltip cursor={{ stroke: '#F8069D', strokeWidth: 1 }} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#F8069D"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#campaignROI)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CampaignROISection;


