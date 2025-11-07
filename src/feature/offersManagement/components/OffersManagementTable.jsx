import { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Typography,
} from '@mui/material';
import { Icon } from '@iconify/react';

const OffersManagementTable = () => {
  const [page, setPage] = useState(1);

  // Sample offers data
  const offers = [
    {
      id: 'OFF1232',
      type: 'Product',
      productName: 'Vitamin C Serum',
      offerTitle: 'Summer Glow',
      offerCode: 'SUM200FF',
      status: 'Low stock',
      discountType: 'Percentage',
      offerRange: '20%',
    },
    {
      id: 'OFF1231',
      type: 'Category',
      productName: 'Makeup',
      offerTitle: 'Summer Shine',
      offerCode: 'SHIN15OFF',
      status: 'In Stock',
      discountType: 'Percentage',
      offerRange: '15%',
    },
    {
      id: 'OFF1230',
      type: 'Product',
      productName: 'Lipstick Kit',
      offerTitle: 'Festive Flat 100',
      offerCode: 'FLAT2000FF',
      status: 'In Stock',
      discountType: 'Flat',
      offerRange: '₹200',
    },
    {
      id: 'OFF1229',
      type: 'Category',
      productName: 'Face',
      offerTitle: 'Glow Boost',
      offerCode: 'FLAT1500FF',
      status: 'In Stock',
      discountType: 'Flat',
      offerRange: '₹150',
    },
    {
      id: 'OFF1228',
      type: 'Product',
      productName: 'Aloe Gel',
      offerTitle: 'Skin Boost Deal',
      offerCode: 'SKIN18OFF',
      status: 'In Stock',
      discountType: 'Percentage',
      offerRange: '18%',
    },
    {
      id: 'OFF1227',
      type: 'Product',
      productName: 'Hair Serum Duo',
      offerTitle: 'Monsoon Magic',
      offerCode: 'MONS500FF',
      status: 'In Stock',
      discountType: 'Percentage',
      offerRange: '50%',
    },
    {
      id: 'OFF1226',
      type: 'Category',
      productName: 'Bodycare',
      offerTitle: 'Self Care Fest',
      offerCode: 'SUM25OFF',
      status: 'Low stock',
      discountType: 'Percentage',
      offerRange: '25%',
    },
    {
      id: 'OFF1225',
      type: 'Product',
      productName: 'Night Repair Crea',
      offerTitle: 'Repair & Save',
      offerCode: 'SUM200FF',
      status: 'In Stock',
      discountType: 'Flat',
      offerRange: '₹200',
    },
    {
      id: 'OFF1224',
      type: 'Category',
      productName: 'Face',
      offerTitle: 'Radiance Week',
      offerCode: 'SUM200FF',
      status: 'In Stock',
      discountType: 'Flat',
      offerRange: '₹150',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Stock':
        return { bg: 'rgba(76, 175, 80, 0.1)', color: '#4CAF50' };
      case 'Low stock':
        return { bg: 'rgba(244, 67, 54, 0.1)', color: '#F44336' };
      default:
        return { bg: 'rgba(158, 158, 158, 0.1)', color: '#9E9E9E' };
    }
  };

  const handleEdit = (offerId) => {
    console.log(`Edit offer ${offerId}`);
    // Implement edit logic
  };

  const handleDelete = (offerId) => {
    console.log(`Delete offer ${offerId}`);
    // Implement delete logic
  };

  return (
    <Box>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          border: '1px solid #e0e0e0',
          borderRadius: '0.5rem',
          overflow: 'hidden',
        }}
      >
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ bgcolor: '#F5F5F5' }}>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Offer ID
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Type
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Product Name
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Offer Title
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Offer Code
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Status
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Discount Type
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Offer Range
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {offers.map((offer, index) => {
              const statusColors = getStatusColor(offer.status);
              
              return (
                <TableRow
                  key={offer.id}
                  sx={{
                    bgcolor: index % 2 === 0 ? '#fff' : '#FAFAFA',
                    '&:hover': {
                      bgcolor: '#F5F5F5',
                    },
                  }}
                >
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{offer.id}</TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{offer.type}</TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A', fontWeight: 500 }}>
                    {offer.productName}
                  </TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{offer.offerTitle}</TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{offer.offerCode}</TableCell>
                  <TableCell sx={{ py: '1rem' }}>
                    <Chip
                      label={offer.status}
                      size="small"
                      sx={{
                        bgcolor: statusColors.bg,
                        color: statusColors.color,
                        fontWeight: 500,
                        fontSize: '0.75rem',
                        borderRadius: '1rem',
                        px: '0.5rem',
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{offer.discountType}</TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A', fontWeight: 600 }}>
                    {offer.offerRange}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '1.5rem' }}>
        <Typography sx={{ color: '#5A6678', fontSize: '0.875rem' }}>
          Page {page}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <IconButton
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
            sx={{
              color: '#5A6678',
              '&:hover': {
                bgcolor: 'rgba(248, 6, 157, 0.1)',
                color: '#F8069D',
              },
              '&.Mui-disabled': {
                color: '#9E9E9E',
              },
            }}
          >
            <Icon icon="mdi:chevron-left" width="20" height="20" />
          </IconButton>
          
          {[1, 2, 3, 4, 5].map((pageNum) => (
            <Box
              key={pageNum}
              onClick={() => setPage(pageNum)}
              sx={{
                minWidth: '2rem',
                height: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                fontSize: '0.875rem',
                fontWeight: page === pageNum ? 600 : 400,
                bgcolor: page === pageNum ? '#F8069D' : '#F5F5F5',
                color: page === pageNum ? '#fff' : '#5A6678',
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: page === pageNum ? '#C1057D' : '#E0E0E0',
                },
              }}
            >
              {pageNum}
            </Box>
          ))}
          
          <IconButton
            onClick={() => setPage(Math.min(5, page + 1))}
            disabled={page === 5}
            sx={{
              color: '#5A6678',
              '&:hover': {
                bgcolor: 'rgba(248, 6, 157, 0.1)',
                color: '#F8069D',
              },
              '&.Mui-disabled': {
                color: '#9E9E9E',
              },
            }}
          >
            <Icon icon="mdi:chevron-right" width="20" height="20" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default OffersManagementTable;







