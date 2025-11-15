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

const leastPerformingProducts = [
  { product: 'Matte Finish Foundation', sales: '$2,500', rating: 45, engagement: '900 views', returned: 0 },
  { product: 'Matte Finish Foundation', sales: '$2,500', rating: 45, engagement: '900 views', returned: 0 },
  { product: 'Matte Finish Foundation', sales: '$2,500', rating: 45, engagement: '900 views', returned: 0 },
  { product: 'Matte Finish Foundation', sales: '$2,500', rating: 45, engagement: '900 views', returned: 0 },
  { product: 'Matte Finish Foundation', sales: '$2,500', rating: 45, engagement: '900 views', returned: 0 },
];

const filters = ['Today', 'This Week', 'This Month', 'This Year'];

const TopProductSalesSection = () => {
  const [activeFilter, setActiveFilter] = useState('Today');

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Top Product Sales</h2>
        <button className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600">
          <Icon icon="mdi:filter-outline" width={18} height={18} />
          Filter
        </button>
      </div>

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

      <div>
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-base font-semibold text-gray-900">Least Performing Products</p>
          </div>
          <button className="text-sm font-semibold text-[#F8069D]">See all</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b border-gray-100">
                <th className="py-3 font-semibold">#</th>
                <th className="py-3 font-semibold">Product</th>
                <th className="py-3 font-semibold">Sales</th>
                <th className="py-3 font-semibold">Rating</th>
                <th className="py-3 font-semibold">Engagement</th>
                <th className="py-3 font-semibold">Total Returned</th>
              </tr>
            </thead>
            <tbody>
              {leastPerformingProducts.map((product, index) => (
                <tr key={`${product.product}-${index}`} className="border-b border-gray-100 last:border-transparent">
                  <td className="py-3 text-gray-500">0{index + 1}</td>
                  <td className="py-3 font-semibold text-gray-900">{product.product}</td>
                  <td className="py-3 text-gray-700">{product.sales}</td>
                  <td className="py-3 text-gray-700">
                    <div className="flex items-center gap-3 w-32">
                      <div className="flex-1 h-1.5 bg-gray-100 rounded-full">
                        <div className="h-full rounded-full bg-[#F8069D]" style={{ width: `${product.rating}%` }} />
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
                    </div>
                  </td>
                  <td className="py-3 text-gray-700">{product.engagement}</td>
                  <td className="py-3 text-gray-700">{product.returned}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopProductSalesSection;


