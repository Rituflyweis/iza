import { Icon } from '@iconify/react';

const products = [
  { id: '01', category: 'Skincare', name: 'Lipstick', popularity: 75, sales: '45%', sold: 200 },
  { id: '01', category: 'Makeup', name: 'Lipstick', popularity: 60, sales: '45%', sold: 200 },
  { id: '01', category: 'Hair care', name: 'Lipstick', popularity: 55, sales: '45%', sold: 200 },
  { id: '01', category: 'Hair styling', name: 'Lipstick', popularity: 40, sales: '45%', sold: 200 },
  { id: '01', category: 'Tools', name: 'Lipstick', popularity: 82, sales: '45%', sold: 200 },
];

const gradientMap = ['from-pink-400 to-pink-300', 'from-blue-400 to-blue-300', 'from-green-400 to-green-300'];

const TopSellingProducts = () => {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Top-Selling Products</h3>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <button className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-semibold text-gray-600 hover:border-pink-500 hover:text-pink-600">
            <Icon icon="mdi:filter-variant" width={16} height={16} />
            Filter
          </button>
          <button className="text-xs font-semibold text-pink-600 hover:text-pink-700">See all</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm text-gray-600">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-gray-400">
              <th className="py-2 pr-4 font-medium">#</th>
              <th className="py-2 pr-4 font-medium">Categories</th>
              <th className="py-2 pr-4 font-medium">Name</th>
              <th className="py-2 pr-4 font-medium">Popularity</th>
              <th className="py-2 pr-4 font-medium">Sales</th>
              <th className="py-2 pr-4 font-medium">Sold</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, idx) => (
              <tr
                key={`${item.name}-${idx}`}
                className="border-b border-gray-100 last:border-b-0 text-gray-700"
              >
                <td className="py-3 pr-4 font-medium text-gray-900">{item.id}</td>
                <td className="py-3 pr-4">{item.category}</td>
                <td className="py-3 pr-4">{item.name}</td>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-36 rounded-full bg-gray-100">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${
                          gradientMap[idx % gradientMap.length]
                        }`}
                        style={{ width: `${item.popularity}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td className="py-3 pr-4 font-semibold text-pink-600">{item.sales}</td>
                <td className="py-3 pr-4 font-semibold text-gray-900">{item.sold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellingProducts;


