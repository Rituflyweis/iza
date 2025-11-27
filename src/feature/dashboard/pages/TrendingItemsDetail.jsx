import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { CustomTable } from '../../../components';

// Mock data - replace with API call
const mockTrendingItems = Array.from({ length: 50 }, (_, i) => ({
  id: String(i + 1).padStart(2, '0'),
  category: 'Makeup',
  product: ['Lipstick', 'Serum', 'Blush'][i % 3],
  activity: ['+20% Searches', '+15% Clicks', '+18% Sales'][i % 3],
}));

const TrendingItemsDetail = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const paginatedItems = useMemo(() => {
    const start = currentPage * rowsPerPage;
    return mockTrendingItems.slice(start, start + rowsPerPage);
  }, [currentPage, rowsPerPage]);

  const totalPages = Math.ceil(mockTrendingItems.length / rowsPerPage);

  const columns = [
    {
      id: 'id',
      label: '#',
      render: (row) => <span className="font-semibold text-gray-900">{row.id}</span>,
    },
    {
      id: 'category',
      label: 'Categories',
      render: (row) => <span className="capitalize">{row.category}</span>,
    },
    {
      id: 'product',
      label: 'Product Name',
      render: (row) => <span className="capitalize">{row.product}</span>,
    },
    {
      id: 'activity',
      label: 'Trend Activity',
      render: (row) => <span className="font-semibold text-pink-600">{row.activity}</span>,
    },
  ];

  const rows = paginatedItems.map((item, index) => ({
    id: item.id,
    ...item,
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
          <h1 className="text-2xl font-semibold text-gray-900">Trending Items</h1>
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

export default TrendingItemsDetail;

