import { IconButton } from '@mui/material';
import { Visibility, Edit, Delete } from '@mui/icons-material';

import CustomTable from '../../../../components/CustomTable';

const rows = [
  {
    id: 1,
    tier: 'Silver',
    pointsRequired: '0 - 3000',
    benefits: 'Lorem ipsum dolor sit amet consectetur',
    spendPrice: '₹2,000',
  },
  {
    id: 2,
    tier: 'Platinum',
    pointsRequired: '3000 - 5000',
    benefits: 'Trenem ipsum dolor sit amet consectetur',
    spendPrice: '₹3,200',
  },
  {
    id: 3,
    tier: 'Gold',
    pointsRequired: '5000+',
    benefits: 'Prorem ipsum dolor sit amet consectetur',
    spendPrice: '₹4,500',
  },
];

const LoyaltyProgramTable = ({ onEdit }) => {
  const columns = [
    { id: 'tier', label: 'Tier' },
    { id: 'pointsRequired', label: 'Points Required' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'spendPrice', label: 'Spend Price' },
    {
      id: 'actions',
      label: 'Action',
      render: (row) => (
        <div className="flex items-center gap-1">
          <IconButton size="small" sx={{ color: 'text.secondary' }}>
            <Visibility fontSize="small" />
          </IconButton>
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

  return <CustomTable columns={columns} rows={rows} />;
};

export default LoyaltyProgramTable;

