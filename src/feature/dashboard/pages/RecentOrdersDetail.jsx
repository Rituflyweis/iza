import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Chip } from '@mui/material';
import { CustomTable } from '../../../components';

// Mock data - replace with API call
const mockOrders = Array.from({ length: 50 }, (_, i) => ({
  id: String(i + 1).padStart(2, '0'),
  product: 'Lipstick Care Balm',
  orderId: `12345678${String(i + 1).padStart(1, '0')}`,
  status: ['Completed', 'Pending', 'Cancelled'][i % 3],
  color: ['#22C55E', '#F59E0B', '#EF4444'][i % 3],
}));

const RecentOrdersDetail = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const paginatedOrders = useMemo(() => {
    const start = currentPage * rowsPerPage;
    return mockOrders.slice(start, start + rowsPerPage);
  }, [currentPage, rowsPerPage]);

  const totalPages = Math.ceil(mockOrders.length / rowsPerPage);

  const columns = [
    {
      id: 'id',
      label: '#',
      render: (row) => <span className="font-semibold text-gray-900">{row.id}</span>,
    },
    {
      id: 'product',
      label: 'Product Name',
      render: (row) => (
        <div className="flex items-center gap-3">
          <span className="h-10 w-10 rounded-full bg-gray-100" />
          <div className="space-y-1">
            <p className="text-sm font-semibold text-gray-900 capitalize">{row.product}</p>
            <p className="text-xs text-gray-400">Order ID - {row.orderId}</p>
          </div>
        </div>
      ),
    },
    {
      id: 'status',
      label: 'Status',
      render: (row) => (
        <Chip
          label={row.status}
          size="small"
          className="capitalize font-medium text-xs rounded-full px-2"
          sx={{
            backgroundColor: `${row.color}15`,
            color: row.color,
          }}
        />
      ),
    },
  ];

  const rows = paginatedOrders.map((order, index) => ({
    id: order.id,
    ...order,
  }));

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/dashboard')}
            className="text-gray-600 hover:text-gray-900"
          >
            <Icon icon="mdi:chevron-left" width={24} height={24} />
          </button>
          <h1 className="text-2xl font-semibold text-gray-900">Recent Orders</h1>
        </div>
        <button className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-semibold text-gray-600 hover:border-pink-500 hover:text-pink-600">
          <Icon icon="mdi:filter-variant" width={16} height={16} />
          Filter
        </button>
      </div>

      {/* Table */}
      <CustomTable
        columns={columns}
        rows={rows}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        serverSidePagination={false}
        defaultRowsPerPage={rowsPerPage}
      />
    </div>
  );
};

export default RecentOrdersDetail;

