import { Icon } from '@iconify/react';
import CustomTable from '../../../components/CustomTable';

const customerRows = [
  { id: 1, name: 'Livia Rheil Madsen', orders: 10, spent: '₹ 720', cancelled: 2, returned: 0 },
  { id: 2, name: 'Livia Vaccaro', orders: 20, spent: '₹ 720', cancelled: 2, returned: 0 },
  { id: 3, name: 'Jordyn Bargson', orders: 10, spent: '₹ 720', cancelled: 2, returned: 0 },
  { id: 4, name: 'Abram Cattoni', orders: 10, spent: '₹ 720', cancelled: 2, returned: 0 },
  { id: 5, name: 'Tatiana Saris', orders: 10, spent: '₹ 720', cancelled: 2, returned: 0 },
];

const customerColumns = [
  {
    id: 'rank',
    label: '#',
    render: (row) => {
      // Use the id to determine rank
      return `0${row.id}`;
    },
  },
  {
    id: 'name',
    label: 'Customer Name',
  },
  {
    id: 'orders',
    label: 'Total Orders',
  },
  {
    id: 'spent',
    label: 'Total Spent',
  },
  {
    id: 'cancelled',
    label: 'Total Cancelled',
  },
  {
    id: 'returned',
    label: 'Total Returned',
  },
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

      <CustomTable
        columns={customerColumns}
        rows={customerRows}
        rowsPerPageOptions={[5, 10]}
        defaultRowsPerPage={5}
      />
    </div>
  );
};

export default CustomerReportsSection;


