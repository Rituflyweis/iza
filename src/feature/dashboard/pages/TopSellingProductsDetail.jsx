import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { CustomTable } from '../../../components';

const gradientMap = ['from-pink-400 to-pink-300', 'from-blue-400 to-blue-300', 'from-green-400 to-green-300', 'from-teal-400 to-teal-300', 'from-purple-400 to-purple-300'];

// Mock data - replace with API call
const mockProducts = Array.from({ length: 50 }, (_, i) => ({
  id: String(i + 1).padStart(2, '0'),
  category: ['Skincare', 'Makeup', 'Hair care', 'Hair styling', 'Tools'][i % 5],
  name: ['Lipstick', 'Serum', 'Hair Mask', 'Sunscreen', 'Blush'][i % 5],
  popularity: Math.floor(Math.random() * 50) + 30,
  sales: `${Math.floor(Math.random() * 30) + 20}%`,
  sold: Math.floor(Math.random() * 500) + 100,
}));

const TopSellingProductsDetail = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const paginatedProducts = useMemo(() => {
    const start = currentPage * rowsPerPage;
    return mockProducts.slice(start, start + rowsPerPage);
  }, [currentPage, rowsPerPage]);

  const totalPages = Math.ceil(mockProducts.length / rowsPerPage);

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
      id: 'name',
      label: 'Name',
      render: (row) => <span className="capitalize">{row.name}</span>,
    },
    {
      id: 'popularity',
      label: 'Popularity',
      render: (row) => (
        <div className="flex items-center gap-3">
          <div className="h-2 w-36 rounded-full bg-gray-100">
            <div
              className={`h-2 rounded-full bg-gradient-to-r ${
                gradientMap[parseInt(row.id) % gradientMap.length]
              }`}
              style={{ width: `${row.popularity}%` }}
            />
          </div>
        </div>
      ),
    },
    {
      id: 'sales',
      label: 'Sales',
      render: (row) => <span className="font-semibold text-pink-600">{row.sales}</span>,
    },
    {
      id: 'sold',
      label: 'Sold',
      render: (row) => <span className="font-semibold text-gray-900">{row.sold}</span>,
    },
  ];

  const rows = paginatedProducts.map((product, index) => ({
    id: product.id,
    ...product,
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
          <h1 className="text-2xl font-semibold text-gray-900">Top-Selling Products</h1>
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

export default TopSellingProductsDetail;

