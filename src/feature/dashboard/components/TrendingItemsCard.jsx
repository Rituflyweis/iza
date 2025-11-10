import { Icon } from '@iconify/react';

const trendingItems = [
  { id: '01', category: 'Makeup', product: 'Lipstick', activity: '+20% Searches' },
  { id: '01', category: 'Makeup', product: 'Serum', activity: '+15% Clicks' },
  { id: '01', category: 'Makeup', product: 'Blush', activity: '+18% Sales' },
  { id: '01', category: 'Makeup', product: 'Lipstick', activity: '+20% Searches' },
  { id: '01', category: 'Makeup', product: 'Lipstick', activity: '+20% Searches' },
];

const TrendingItemsCard = () => {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-gray-900">Trending Items</h3>
          <span className="text-xs text-gray-400">Today</span>
        </div>
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
              <th className="py-2 pr-4 font-medium">Product Name</th>
              <th className="py-2 pr-4 font-medium">Trend Activity</th>
            </tr>
          </thead>
          <tbody>
            {trendingItems.map((item, idx) => (
              <tr
                key={`${item.product}-${idx}`}
                className="border-b border-gray-100 last:border-b-0 text-gray-700"
              >
                <td className="py-3 pr-4 font-medium text-gray-900">{item.id}</td>
                <td className="py-3 pr-4">{item.category}</td>
                <td className="py-3 pr-4">{item.product}</td>
                <td className="py-3 pr-4 font-semibold text-pink-600">{item.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrendingItemsCard;


