import { IconButton } from '@mui/material';
import { Visibility, Edit, Delete } from '@mui/icons-material';

import CustomTable from '../../../../components/CustomTable';

const rows = [
  {
    id: 1,
    priceRange: '₹0 - ₹499',
    rewardType: 'Percent Off',
    reward: '10% points / Free Sample',
    product: 'Lipstick',
  },
  {
    id: 2,
    priceRange: '₹500 - ₹999',
    rewardType: 'Discount Voucher',
    reward: '10% off',
    product: '— — —',
  },
  {
    id: 3,
    priceRange: '₹1000 and above',
    rewardType: 'Points / Discount',
    reward: '200 points / 20% off',
    product: '— — —',
  },
  {
    id: 4,
    priceRange: '₹1000 - ₹1999',
    rewardType: 'Free Gift + Points',
    reward: 'Free Blush + 500 points',
    product: 'Blush',
  },
];

const RewardTiersTable = ({ onEdit }) => {
  const columns = [
    { id: 'priceRange', label: 'Price Range' },
    { id: 'rewardType', label: 'Reward Type' },
    { id: 'reward', label: 'Reward' },
    { id: 'product', label: 'Product' },
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

export default RewardTiersTable;

