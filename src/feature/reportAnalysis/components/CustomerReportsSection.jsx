import { Icon } from '@iconify/react';

const customerRows = [
  { name: 'Livia Rheil Madsen', orders: 10, spent: '₹ 720', cancelled: 2, returned: 0 },
  { name: 'Livia Vaccaro', orders: 20, spent: '₹ 720', cancelled: 2, returned: 0 },
  { name: 'Jordyn Bargson', orders: 10, spent: '₹ 720', cancelled: 2, returned: 0 },
  { name: 'Abram Cattoni', orders: 10, spent: '₹ 720', cancelled: 2, returned: 0 },
  { name: 'Tatiana Saris', orders: 10, spent: '₹ 720', cancelled: 2, returned: 0 },
];

const CustomerReportsSection = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Customer Reports</h2>
          <p className="text-sm text-gray-500">Top Buyer</p>
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
              <th className="py-3 font-semibold">Customer Name</th>
              <th className="py-3 font-semibold">Total Orders</th>
              <th className="py-3 font-semibold">Total Spent</th>
              <th className="py-3 font-semibold">Total Cancelled</th>
              <th className="py-3 font-semibold">Total Returned</th>
            </tr>
          </thead>
          <tbody>
            {customerRows.map((row, index) => (
              <tr key={row.name} className="border-b border-gray-100 last:border-transparent">
                <td className="py-3 text-gray-500">0{index + 1}</td>
                <td className="py-3 font-semibold text-gray-900">{row.name}</td>
                <td className="py-3 text-gray-700">{row.orders}</td>
                <td className="py-3 text-gray-900">{row.spent}</td>
                <td className="py-3 text-gray-700">{row.cancelled}</td>
                <td className="py-3 text-gray-700">{row.returned}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerReportsSection;


