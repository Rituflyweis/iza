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

const topSalesData = [
  { month: 'Jan', value: 4600 },
  { month: 'Feb', value: 4900 },
  { month: 'Mar', value: 5200 },
  { month: 'Apr', value: 5000 },
  { month: 'May', value: 5600 },
  { month: 'Jun', value: 5400 },
  { month: 'Jul', value: 6100 },
  { month: 'Aug', value: 6300 },
  { month: 'Sep', value: 5800 },
  { month: 'Oct', value: 6200 },
  { month: 'Nov', value: 5600 },
  { month: 'Dec', value: 5400 },
];

const topProducts = [
  { id: 'tp-1', rank: 1, product: 'Radiant Glow Serum', sales: '$12,500', rating: 85, engagement: '2,100 views', returned: 12 },
  { id: 'tp-2', rank: 2, product: 'Hydra Matte Lipstick', sales: '$10,430', rating: 82, engagement: '1,980 views', returned: 6 },
  { id: 'tp-3', rank: 3, product: 'Velvet Touch Blush', sales: '$9,860', rating: 79, engagement: '1,720 views', returned: 3 },
  { id: 'tp-4', rank: 4, product: 'Silk Finish Foundation', sales: '$8,540', rating: 75, engagement: '1,610 views', returned: 9 },
  { id: 'tp-5', rank: 5, product: 'Ultra Define Kajal', sales: '$7,120', rating: 71, engagement: '1,420 views', returned: 4 },
];

const productColumns = [
  {
    id: 'rank',
    label: '#',
    format: (value) => value.toString().padStart(2, '0'),
  },
  {
    id: 'product',
    label: 'Product',
  },
  {
    id: 'sales',
    label: 'Sales',
  },
  {
    id: 'rating',
    label: 'Rating',
    format: (value) => `${value}%`,
  },
  {
    id: 'engagement',
    label: 'Engagement',
  },
  {
    id: 'returned',
    label: 'Total Returned',
  },
];

const filters = ['Today', 'This Week', 'This Month', 'This Year'];

const TopProductSalesSection = () => {
  const [activeFilter, setActiveFilter] = useState('Today');

  return (
    <>
       <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Top And Least Performing Products</h2>
        <button className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600">
          <Icon icon="mdi:filter-outline" width={18} height={18} />
          Filter
        </button>
      </div>
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-6">
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <p className="text-base font-semibold text-gray-900">Top Performing Products</p>
          <button className="text-sm font-semibold text-[#F8069D]">See all</button>
        </div>
        <CustomTable
          columns={productColumns}
          rows={topProducts}
          rowsPerPageOptions={[5]}
          defaultRowsPerPage={5}
        />
      </div>
      </div>
 <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-base font-semibold text-gray-800">Top Product Sales</p>
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
          <AreaChart data={topSalesData}>
            <defs>
              <linearGradient id="topProductSales" x1="0" y1="0" x2="0" y2="1">
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
              fill="url(#topProductSales)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

   </div>
 
  </>);
};

export default TopProductSalesSection;



