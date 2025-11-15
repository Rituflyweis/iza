import { useState } from 'react';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const newUserData = [
  { month: 'Jan', value: 4200 },
  { month: 'Feb', value: 4600 },
  { month: 'Mar', value: 5000 },
  { month: 'Apr', value: 4700 },
  { month: 'May', value: 5600 },
  { month: 'Jun', value: 5200 },
  { month: 'Jul', value: 6100 },
  { month: 'Aug', value: 6500 },
  { month: 'Sep', value: 5900 },
  { month: 'Oct', value: 6300 },
  { month: 'Nov', value: 5400 },
  { month: 'Dec', value: 5200 },
];

const filters = ['Today', 'This Week', 'This Month', 'This Year'];

const NewUserSection = () => {
  const [activeFilter, setActiveFilter] = useState('Today');

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">New User</h2>
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
          <AreaChart data={newUserData}>
            <defs>
              <linearGradient id="newUserGradient" x1="0" y1="0" x2="0" y2="1">
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
              fill="url(#newUserGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default NewUserSection;


