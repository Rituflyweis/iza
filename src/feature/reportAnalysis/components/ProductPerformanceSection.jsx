import { Icon } from '@iconify/react';
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const viewedProducts = [
  { name: 'Lipstick', value: 1200, color: '#FF3EB5', helper: 'Views' },
  { name: 'Brushes', value: 800, color: '#FF82C9', helper: 'Views' },
  { name: 'Blush', value: 1000, color: '#4DD0E1', helper: 'Adds' },
  { name: 'Contour', value: 1200, color: '#8C4DFF', helper: 'Reviews' },
  { name: 'Makeup', value: 1200, color: '#5B8DEF', helper: 'Joined' },
  { name: 'Kajal', value: 1200, color: '#2EC4B6', helper: 'Used' },
  { name: 'Eyeliner', value: 1200, color: '#00C49F', helper: 'Views' },
];

const purchasedProducts = [
  { name: 'Makeup', value: 900 },
  { name: 'Skincare', value: 1100 },
  { name: 'Haircare', value: 600 },
  { name: 'Hair styling', value: 1200 },
  { name: 'Eye Makeup', value: 1150 },
];

const ProductPerformanceSection = () => {
  return (
    <div className=" p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Product Performance Reports</h2>
        <button className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600">
          <Icon icon="mdi:filter-outline" width={18} height={18} />
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className=" bg-white  shadow-sm border border-gray-100 rounded-2xl p-5">
          <p className="text-base font-semibold text-gray-800 mb-4">Most Viewed Products</p>
          <div className="space-y-4">
            {viewedProducts.map((product) => (
              <div key={product.name}>
                <div className="flex items-center justify-between text-sm font-semibold text-gray-700">
                  <span>{product.name}</span>
                  <span className="text-gray-500">
                    {product.value.toLocaleString()} {product.helper}
                  </span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(product.value / 1200) * 100}%`,
                      backgroundColor: product.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" bg-white  shadow-sm border border-gray-100 rounded-2xl p-5">
          <p className="text-base font-semibold text-gray-800 mb-4">Most Purchased Products</p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={purchasedProducts} barSize={32}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f1f1f1" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9CA3AF', fontSize: 12 }}
                />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                <Tooltip cursor={{ fill: 'rgba(248, 6, 157, 0.1)' }} />
                <Bar dataKey="value" radius={[20, 20, 0, 0]} fill="#F8069D" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPerformanceSection;


