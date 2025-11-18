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

const leastProducts = [
  { id: 'lp-1', rank: 1, product: 'Matte Finish Foundation', sales: '$2,500', rating: 45, engagement: '900 views', returned: 24 },
  { id: 'lp-2', rank: 2, product: 'Sheer Glow Primer', sales: '$2,140', rating: 48, engagement: '820 views', returned: 16 },
  { id: 'lp-3', rank: 3, product: 'Feather Light Mascara', sales: '$1,980', rating: 42, engagement: '780 views', returned: 12 },
  { id: 'lp-4', rank: 4, product: 'Calm Balance Toner', sales: '$1,760', rating: 40, engagement: '640 views', returned: 18 },
  { id: 'lp-5', rank: 5, product: 'Mineral Touch Compact', sales: '$1,540', rating: 38, engagement: '600 views', returned: 21 },
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

const LeastProductSalesSection = () => {
  const [activeFilter, setActiveFilter] = useState('Today');

  return (<>
       <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
        <div className="flex items-start justify-between">
          <p className="text-base font-semibold text-gray-900">Least Performing Products</p>
          <button className="text-sm font-semibold text-[#F8069D]">See all</button>
        </div>
        <CustomTable
          columns={productColumns}
          rows={leastProducts}
          rowsPerPageOptions={[5]}
          defaultRowsPerPage={5}
        />
     </div>
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
  
  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <p className="text-base font-semibold text-gray-900">Least Product Sales</p>
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


  
    </>
  );
};

export default LeastProductSalesSection;



