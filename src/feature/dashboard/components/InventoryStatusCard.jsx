import { Icon } from '@iconify/react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

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

      <TableContainer component="div" sx={{ overflowX: 'auto' }}>
        <Table size="small" sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ '& th': { fontSize: '12px', fontWeight: 600, color: '#9CA3AF' } }}>
              <TableCell sx={{ borderBottom: '1px solid #F1F5F9' }}>#</TableCell>
              <TableCell sx={{ borderBottom: '1px solid #F1F5F9' }}>Categories</TableCell>
              <TableCell sx={{ borderBottom: '1px solid #F1F5F9' }}>Product Name</TableCell>
              <TableCell sx={{ borderBottom: '1px solid #F1F5F9' }}>Stock Level</TableCell>
              <TableCell sx={{ borderBottom: '1px solid #F1F5F9' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inventoryItems.map((item, idx) => (
              <TableRow
                key={`${item.product}-${idx}`}
                sx={{
                  '&:nth-of-type(odd)': { backgroundColor: '#FFFFFF' },
                  '&:nth-of-type(even)': { backgroundColor: '#F9FAFB' },
                  '& td': { borderBottom: '1px solid #F1F5F9', fontSize: '13px', color: '#4B5563' },
                }}
              >
                <TableCell sx={{ fontWeight: 600, color: '#111827' }}>{item.id}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.product}</TableCell>
                <TableCell>{item.stock}</TableCell>
                <TableCell>
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InventoryStatusCard;


