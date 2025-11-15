import { Icon } from '@iconify/react';

const topProducts = [
  { product: 'Radiant Glow Serum', sales: '$12,500', rating: 85, engagement: '2,100 views', returned: 0 },
  { product: 'Radiant Glow Serum', sales: '$12,500', rating: 85, engagement: '2,100 views', returned: 0 },
  { product: 'Radiant Glow Serum', sales: '$12,500', rating: 85, engagement: '2,100 views', returned: 0 },
  { product: 'Radiant Glow Serum', sales: '$12,500', rating: 85, engagement: '2,100 views', returned: 0 },
  { product: 'Radiant Glow Serum', sales: '$12,500', rating: 85, engagement: '2,100 views', returned: 0 },
];

const TopLeastPerformingProductsSection = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Top and Least Performing Products</h2>
          <p className="text-sm text-gray-500">Top Performing Products</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-semibold text-[#F8069D]">See all</button>
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600">
            <Icon icon="mdi:filter-outline" width={18} height={18} />
            Filter
          </button>
        </div>
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
            {topProducts.map((product, index) => (
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
  );
};

export default TopLeastPerformingProductsSection;


