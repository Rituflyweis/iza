import { Icon } from '@iconify/react';

const inventoryItems = [
  { id: '01', category: 'Makeup', product: 'Lipstick', stock: '2 units', status: 'Critical', color: '#EF4444' },
  { id: '01', category: 'Haircare', product: 'Hair Mask', stock: '5 units', status: 'Low Stock', color: '#FBBF24' },
  { id: '01', category: 'Skincare', product: 'Sunscreen', stock: '50 units', status: 'In Stock', color: '#22C55E' },
  { id: '01', category: 'Makeup', product: 'Sunscreen', stock: '5 units', status: 'Low Stock', color: '#FBBF24' },
  { id: '01', category: 'Makeup', product: 'Lipstick', stock: '10 units', status: 'In Stock', color: '#22C55E' },
];

const InventoryStatusCard = () => {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-gray-900">Inventory Status</h3>
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
              <th className="py-2 pr-4 font-medium">Stock Level</th>
              <th className="py-2 pr-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {inventoryItems.map((item, idx) => (
              <tr
                key={`${item.product}-${idx}`}
                className="border-b border-gray-100 last:border-b-0 text-gray-700"
              >
                <td className="py-3 pr-4 font-medium text-gray-900">{item.id}</td>
                <td className="py-3 pr-4">{item.category}</td>
                <td className="py-3 pr-4">{item.product}</td>
                <td className="py-3 pr-4">{item.stock}</td>
                <td className="py-3 pr-4">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-gray-700"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: item.color }}
                      aria-hidden="true"
                    />
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryStatusCard;


