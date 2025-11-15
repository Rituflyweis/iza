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

const leastSalesData = [
  { month: 'Jan', value: 4200 },
  { month: 'Feb', value: 4500 },
  { month: 'Mar', value: 4700 },
  { month: 'Apr', value: 4400 },
  { month: 'May', value: 5000 },
  { month: 'Jun', value: 4800 },
  { month: 'Jul', value: 5200 },
  { month: 'Aug', value: 5400 },
  { month: 'Sep', value: 5000 },
  { month: 'Oct', value: 5200 },
  { month: 'Nov', value: 4800 },
  { month: 'Dec', value: 4900 },
];

const filters = ['Today', 'This Week', 'This Month', 'This Year'];

const LeastProductSalesSection = () => {
  const [activeFilter, setActiveFilter] = useState('Today');

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Least Product Sales</h2>
        <button className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600">
          <Icon icon="mdi:filter-outline" width={18} height={18} />
          Filter
        </button>
      </div>

      <div className="flex items-center gap-2 rounded-full border border-gray-200 p-1 self-end">
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

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={leastSalesData}>
            <defs>
              <linearGradient id="leastProductSales" x1="0" y1="0" x2="0" y2="1">
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
              fill="url(#leastProductSales)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LeastProductSalesSection;


