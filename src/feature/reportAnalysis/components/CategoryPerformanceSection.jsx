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
import CustomTable from '../../../components/CustomTable';

const categories = [
  { id: 1, name: 'Skincare', revenue: '$12,500', expenses: '$3,500', margin: 72 },
  { id: 2, name: 'Makeup', revenue: '$8,200', expenses: '$2,800', margin: 66 },
  { id: 3, name: 'Haircare', revenue: '$3,750', expenses: '$1,250', margin: 60 },
  { id: 4, name: 'Fragrances', revenue: '$1,000', expenses: '$500', margin: 50 },
];

const categoryColumns = [
  {
    id: 'name',
    label: 'Category',
  },
  {
    id: 'revenue',
    label: 'Revenue',
  },
  {
    id: 'expenses',
    label: 'Expenses',
  },
  {
    id: 'margin',
    label: 'Profit Margin',
    render: (row) => (
      <div className="flex items-center gap-3">
        <div className="h-1.5 bg-gray-100 rounded-full flex-1">
          <div
            className="h-full rounded-full bg-[#F8069D]"
            style={{ width: `${row.margin}%` }}
          />
        </div>
        <span className="text-sm font-semibold text-gray-900">{row.margin}%</span>
      </div>
    ),
  },
];

const categoryTrends = [
  { category: 'Skincare', value: 12500 },
  { category: 'Makeup', value: 8200 },
  { category: 'Haircare', value: 3750 },
  { category: 'Fragrances', value: 1000 },
  { category: 'Accessories', value: 2800 },
  { category: 'Tools', value: 1900 },
  { category: 'Brushes', value: 3200 },
  { category: 'Nail Care', value: 1500 },
  { category: 'Body Care', value: 4100 },
  { category: 'Men\'s Care', value: 2400 },
];

const filters = ['Today', 'This Week', 'This Month', 'This Year'];

const CategoryPerformanceSection = () => {
  const [activeFilter, setActiveFilter] = useState('Today');

  return (<>

  <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Category Performance</h2>
          <p className="text-sm text-gray-500">Revenue and profit analysis by category</p>
        </div>
        {/* <div className="flex items-center gap-4">
          <button className="text-sm font-semibold text-[#F8069D]">See all</button>
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600">
            <Icon icon="mdi:filter-outline" width={18} height={18} />
            Filter
          </button>
        </div> */}
      </div>
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-6">
      

      <div className="border border-gray-100 rounded-2xl">
        <CustomTable
          columns={categoryColumns}
          rows={categories}
          rowsPerPageOptions={[5, 10]}
          defaultRowsPerPage={5}
        />
      </div>

      {/* <div className="border border-gray-100 rounded-2xl p-5">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <p className="text-base font-semibold text-gray-900">Category Performance Trends</p>
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
            <AreaChart data={categoryTrends}>
              <defs>
                <linearGradient id="categoryPerformance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F8069D" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="#F8069D" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f1f1f1" />
              <XAxis dataKey="category" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
              <Tooltip cursor={{ stroke: '#F8069D', strokeWidth: 1 }} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#F8069D"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#categoryPerformance)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div> */}
    </div></>
  );
};

export default CategoryPerformanceSection;



