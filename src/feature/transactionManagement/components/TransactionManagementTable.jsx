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
import TransactionDetailModal from './TransactionDetailModal';

const TransactionManagementTable = () => {
  const [page, setPage] = useState(1);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Sample transaction data
  const transactions = [
    { 
      id: 'T2024112801', 
      orderId: 'O100245', 
      customer: 'Alice Johnson', 
      amount: '$200.00', 
      date: '28-11-2024', 
      paymentMethod: 'Credit Card',
      status: 'Completed',
      products: [
        { name: 'Hydrating Serum (50ml)', quantity: 1, price: 50 },
        { name: 'Matte Lipstick', quantity: 2, price: 40 },
      ],
      priceDetails: {
        subtotal: 159,
        discount: 59,
        shipping: 20,
        total: 200,
      }
    },
    { 
      id: 'TXN001', 
      orderId: 'ORD001', 
      customer: 'Marie Wilson', 
      amount: '$125.50', 
      date: '01-12-2024', 
      paymentMethod: 'Credit Card',
      status: 'Completed' 
    },
    { 
      id: 'TXN002', 
      orderId: 'ORD002', 
      customer: 'John Smith', 
      amount: '$89.99', 
      date: '02-12-2024', 
      paymentMethod: 'PayPal',
      status: 'Pending' 
    },
    { 
      id: 'TXN003', 
      orderId: 'ORD003', 
      customer: 'Emily Johnson', 
      amount: '$245.00', 
      date: '03-12-2024', 
      paymentMethod: 'Credit Card',
      status: 'Completed' 
    },
    { 
      id: 'TXN004', 
      orderId: 'ORD004', 
      customer: 'Michael Brown', 
      amount: '$67.25', 
      date: '04-12-2024', 
      paymentMethod: 'Debit Card',
      status: 'Failed' 
    },
    { 
      id: 'TXN005', 
      orderId: 'ORD005', 
      customer: 'Sophia Martinez', 
      amount: '$189.75', 
      date: '05-12-2024', 
      paymentMethod: 'Credit Card',
      status: 'Completed' 
    },
    { 
      id: 'TXN006', 
      orderId: 'ORD006', 
      customer: 'David Davis', 
      amount: '$156.80', 
      date: '06-12-2024', 
      paymentMethod: 'PayPal',
      status: 'Completed' 
    },
    { 
      id: 'TXN007', 
      orderId: 'ORD007', 
      customer: 'Olivia Wilson', 
      amount: '$98.50', 
      date: '07-12-2024', 
      paymentMethod: 'Credit Card',
      status: 'Pending' 
    },
    { 
      id: 'TXN008', 
      orderId: 'ORD008', 
      customer: 'James Anderson', 
      amount: '$312.00', 
      date: '08-12-2024', 
      paymentMethod: 'Debit Card',
      status: 'Completed' 
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return { bg: 'rgba(76, 175, 80, 0.1)', color: '#4CAF50' };
      case 'Pending':
        return { bg: 'rgba(255, 152, 0, 0.1)', color: '#FF9800' };
      case 'Failed':
        return { bg: 'rgba(244, 67, 54, 0.1)', color: '#F44336' };
      default:
        return { bg: 'rgba(158, 158, 158, 0.1)', color: '#9E9E9E' };
    }
  };

  const handleView = (transaction) => {
    setSelectedTransaction(transaction);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedTransaction(null);
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
                Transaction ID
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Order ID
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Customer
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Amount
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Date
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Payment Method
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Status
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction, index) => {
              const statusColors = getStatusColor(transaction.status);
              
              return (
                <TableRow
                  key={transaction.id}
                  sx={{
                    bgcolor: index % 2 === 0 ? '#fff' : '#FAFAFA',
                    '&:hover': {
                      bgcolor: '#F5F5F5',
                    },
                  }}
                >
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{transaction.id}</TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{transaction.orderId}</TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A', fontWeight: 500 }}>{transaction.customer}</TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A', fontWeight: 600 }}>{transaction.amount}</TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{transaction.date}</TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{transaction.paymentMethod}</TableCell>
                  <TableCell sx={{ py: '1rem' }}>
                    <Chip
                      label={transaction.status}
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
                  <TableCell sx={{ py: '1rem' }}>
                    <IconButton
                      size="small"
                      onClick={() => handleView(transaction)}
                      sx={{
                        color: '#5A6678',
                        '&:hover': {
                          bgcolor: 'rgba(248, 6, 157, 0.1)',
                          color: '#F8069D',
                        },
                      }}
                    >
                      <Icon icon="mdi:eye" width="18" height="18" />
                    </IconButton>
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

      {/* Transaction Detail Modal */}
      <TransactionDetailModal
        open={modalOpen}
        onClose={handleCloseModal}
        transaction={selectedTransaction}
      />
    </Box>
  );
};

export default TransactionManagementTable;

