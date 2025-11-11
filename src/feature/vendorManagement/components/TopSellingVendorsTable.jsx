import { Box, IconButton } from '@mui/material';
import { Visibility } from '@mui/icons-material';

import CustomTable from '../../../components/CustomTable';

const gradientMap = ['from-pink-500 to-pink-400', 'from-sky-500 to-sky-400', 'from-purple-500 to-purple-400'];

const rows = [
  { id: 1, position: '01', vendorName: 'Ramesh & Co', category: 'Lipstick', popularity: 80, sales: '80%', sold: 200 },
  { id: 2, position: '02', vendorName: 'Lakshmi Traders', category: 'Lipstick', popularity: 45, sales: '45%', sold: 200 },
  { id: 3, position: '03', vendorName: 'Beauty Essentials', category: 'Lipstick', popularity: 70, sales: '70%', sold: 200 },
  { id: 4, position: '04', vendorName: 'Herbal Mart Pvt Ltd', category: 'Lipstick', popularity: 70, sales: '70%', sold: 200 },
];

const TopSellingVendorsTable = ({ onViewVendor, standalone = true, variant = 'default' }) => {
  const isGradient = variant === 'gradient';

  const columns = [
    { id: 'position', label: '#' },
    {
      id: 'vendorName',
      label: 'Vendor Name',
      accessor: (row) => row.vendorName,
    },
    { id: 'category', label: 'Name' },
    {
      id: 'popularity',
      label: 'Popularity',
      render: (row) => (
        <Box display="flex" alignItems="center" gap={1.5}>
          <div className="h-2 w-32 rounded-full bg-gray-100">
            <div
              className={`h-2 rounded-full bg-gradient-to-r ${
                gradientMap[(row.id - 1) % gradientMap.length]
              }`}
              style={{ width: `${row.popularity}%` }}
            />
          </div>
        </Box>
      ),
    },
    {
      id: 'sales',
      label: 'Sales',
      render: (row) => (
        <span className="font-semibold text-pink-500">{row.sales}</span>
      ),
    },
    {
      id: 'sold',
      label: 'Sold',
      render: (row) => <span className="font-semibold text-gray-900">{row.sold}</span>,
    },
    {
      id: 'actions',
     
     
    },
  ];

  const heading = (
    <div className="mb-3 flex items-center justify-between">
      <h2
        className={`text-lg font-semibold ${isGradient ? 'text-white' : 'text-gray-900'}`}
      >
        Top-Selling Vendors
      </h2>
      <button
        className={`text-xs font-semibold transition ${
          isGradient
            ? 'text-white hover:text-white/80'
            : 'text-pink-600 hover:text-pink-700'
        }`}
      >
        See all
      </button>
    </div>
  );

  const table = <CustomTable columns={columns} rows={rows} />;

  if (!standalone) {
    return (
      <div className="space-y-3">
        {heading}
        {table}
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      {heading}
      {table}
    </div>
  );
};

export default TopSellingVendorsTable;

