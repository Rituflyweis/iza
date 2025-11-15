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

const lowStockAlerts = [
  { category: 'Makeup', product: 'Lipstick', stockLevel: '2 units', status: 'Critical' },
  { category: 'Haircare', product: 'Hair Mask', stockLevel: '6 units', status: 'Low Stock' },
  { category: 'Skincare', product: 'Sunscreen', stockLevel: '5 units', status: 'In Stock' },
  { category: 'Makeup', product: 'Sunscreen', stockLevel: '3 units', status: 'Low Stock' },
  { category: 'Makeup', product: 'Sunscreen', stockLevel: '5 units', status: 'In Stock' },
];

const statusStyles = {
  Critical: 'bg-[#FFE4EE] text-[#F8069D]',
  'Low Stock': 'bg-[#FFF4E5] text-[#F59E0B]',
  'In Stock': 'bg-[#E6F8F0] text-[#22C55E]',
};

const inventoryTrends = [
  { label: 'Lipstick', value: 5200 },
  { label: 'Blush', value: 4800 },
  { label: 'Contour', value: 5600 },
  { label: 'Eyeshadow', value: 5000 },
  { label: 'Cream', value: 4600 },
  { label: 'Sunscreen', value: 5200 },
  { label: 'Comb', value: 5700 },
  { label: 'Eyeliner', value: 6000 },
  { label: 'Kajal', value: 5400 },
  { label: 'Oil', value: 5300 },
];

const filters = ['Today', 'This Week', 'This Month', 'This Year'];

const InventoryRestockSection = () => {
  const [activeFilter, setActiveFilter] = useState('Today');

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Inventory and Restock Trend Analysis</h2>
          <p className="text-sm text-gray-500">Low Stock Alerts</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-semibold text-[#F8069D]">See all</button>
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600">
            <Icon icon="mdi:filter-outline" width={18} height={18} />
            Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto border border-gray-100 rounded-2xl">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b border-gray-100">
              <th className="py-3 px-4 font-semibold">#</th>
              <th className="py-3 px-4 font-semibold">Category</th>
              <th className="py-3 px-4 font-semibold">Product Name</th>
              <th className="py-3 px-4 font-semibold">Stock Level</th>
              <th className="py-3 px-4 font-semibold">Status</th>
              <th className="py-3 px-4 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {lowStockAlerts.map((item, index) => (
              <tr key={`${item.product}-${index}`} className="border-b border-gray-100 last:border-transparent">
                <td className="py-4 px-4 text-gray-500">0{index + 1}</td>
                <td className="py-4 px-4 font-semibold text-gray-900">{item.category}</td>
                <td className="py-4 px-4 text-gray-700">{item.product}</td>
                <td className="py-4 px-4 text-gray-700">{item.stockLevel}</td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[item.status]}`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-right">
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Icon icon="mdi:dots-vertical" width={18} height={18} className="text-gray-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border border-gray-100 rounded-2xl p-5">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <p className="text-base font-semibold text-gray-900">Inventory Trends Graph</p>
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
            <AreaChart data={inventoryTrends}>
              <defs>
                <linearGradient id="inventoryTrend" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F8069D" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="#F8069D" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f1f1f1" />
              <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
              <Tooltip cursor={{ stroke: '#F8069D', strokeWidth: 1 }} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#F8069D"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#inventoryTrend)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default InventoryRestockSection;


