import { Icon } from '@iconify/react';
import { IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

import CustomTable from '../../../../components/CustomTable';

const rows = [
  { id: 1, location: 'India', rate: '7%' },
  { id: 2, location: 'Kolkata', rate: '18%' },
  { id: 3, location: 'Delhi', rate: '7%' },
  { id: 4, location: 'Kanpur', rate: '18%' },
  { id: 5, location: 'Patna', rate: '7%' },
  { id: 6, location: 'Kolkata', rate: '18%' },
  { id: 7, location: 'Delhi', rate: '7%' },
];

const TaxRulesTable = ({ onAddNew, onEdit }) => {
  const columns = [
    { id: 'location', label: 'Country/City' },
    { id: 'rate', label: 'Tax Rate' },
    {
      id: 'actions',
      label: 'Action',
      render: (row) => (
        <div className="flex items-center gap-1">
          <IconButton
            size="small"
            sx={{ color: 'text.secondary' }}
            onClick={() => onEdit && onEdit(row)}
          >
            <Edit fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: 'text.secondary' }}>
            <Delete fontSize="small" />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-gray-100 px-6 py-4 md:flex-row md:items-center md:justify-end">
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full border border-pink-500 bg-pink-500 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-pink-600">
            <Icon icon="mdi:filter" width={18} height={18} />
            Filter
          </button>
        </div>
        <button
          onClick={onAddNew}
          className="inline-flex items-center gap-2 rounded-full border border-pink-500 bg-pink-500 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-pink-600"
        >
          <Icon icon="mdi:plus" width={16} height={16} />
          Add New
        </button>
      </div>

      <CustomTable columns={columns} rows={rows} />
    </div>
  );
};

export default TaxRulesTable;
