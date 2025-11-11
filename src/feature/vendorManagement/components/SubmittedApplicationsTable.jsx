import { IconButton } from '@mui/material';
import { Visibility } from '@mui/icons-material';

import CustomTable from '../../../components/CustomTable';

const statusStyles = {
  New: { background: 'rgba(236, 72, 153, 0.15)', color: '#EC4899' },
  Approved: { background: 'rgba(34, 197, 94, 0.15)', color: '#22C55E' },
  Rejected: { background: 'rgba(239, 68, 68, 0.15)', color: '#EF4444' },
};

const rows = [
  {
    id: 1,
    slNo: '1',
    vendorName: 'Ramesh & Co',
    submittedBy: 'Krunal Ramesh',
    email: 'rameshco@rmail.com',
    phone: '9876543210',
    submittedOn: '18-Jul-2025',
    status: 'New',
    details: {
      vendorName: 'Lakshmi Traders',
      email: 'rameshco@rmail.com',
      phone: '+91 9876543210',
      address: '12th Cross, Malleswaram, Bengaluru',
      productsOffered: 'Organic beauty products and herbal skincare',
      website: 'www.lakshmitraders.in | @lakshmitraders',
      uploadedForm: 'Filled All Fields',
      adminNotes: 'Looks promising. Follow up.',
      applicationStatus: 'New',
    },
  },
];

const SubmittedApplicationsTable = ({ onView }) => {
  const columns = [
    { id: 'slNo', label: 'Sl. No' },
    { id: 'vendorName', label: 'Vendor Name' },
    { id: 'submittedBy', label: 'Submitted By' },
    { id: 'email', label: 'Email' },
    { id: 'phone', label: 'Phone' },
    { id: 'submittedOn', label: 'Submitted On' },
    {
      id: 'status',
      label: 'Status',
      render: (row) => {
        const style = statusStyles[row.status] || { background: '#F3F4F6', color: '#4B5563' };
        return (
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
            style={style}
          >
            {row.status}
          </span>
        );
      },
    },
    {
      id: 'actions',
      label: 'Action',
      render: (row) => (
        <IconButton
          size="small"
          sx={{ color: 'text.secondary' }}
          onClick={() => onView?.(row)}
        >
          <Visibility fontSize="small" />
        </IconButton>
      ),
    },
  ];

  return <CustomTable columns={columns} rows={rows} />;
};

export default SubmittedApplicationsTable;

