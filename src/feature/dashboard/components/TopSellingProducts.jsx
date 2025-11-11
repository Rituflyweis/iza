import { Icon } from '@iconify/react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

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

      <TableContainer component="div" sx={{ overflowX: 'auto' }}>
        <Table size="small" sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ '& th': { fontSize: '12px', fontWeight: 600, color: '#9CA3AF' } }}>
              <TableCell sx={{ borderBottom: '1px solid #F1F5F9' }}>#</TableCell>
              <TableCell sx={{ borderBottom: '1px solid #F1F5F9' }}>Categories</TableCell>
              <TableCell sx={{ borderBottom: '1px solid #F1F5F9' }}>Name</TableCell>
              <TableCell sx={{ borderBottom: '1px solid #F1F5F9' }}>Popularity</TableCell>
              <TableCell sx={{ borderBottom: '1px solid #F1F5F9' }}>Sales</TableCell>
              <TableCell sx={{ borderBottom: '1px solid #F1F5F9' }}>Sold</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((item, idx) => (
              <TableRow
                key={`${item.name}-${idx}`}
                sx={{
                  '&:nth-of-type(odd)': { backgroundColor: '#FFFFFF' },
                  '&:nth-of-type(even)': { backgroundColor: '#F9FAFB' },
                  '& td': { borderBottom: '1px solid #F1F5F9', fontSize: '13px', color: '#4B5563' },
                }}
              >
                <TableCell sx={{ fontWeight: 600, color: '#111827' }}>{item.id}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>
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
                </TableCell>
                <TableCell sx={{ fontWeight: 600, color: '#EC4899' }}>{item.sales}</TableCell>
                <TableCell sx={{ fontWeight: 600, color: '#111827' }}>{item.sold}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TopSellingProducts;


