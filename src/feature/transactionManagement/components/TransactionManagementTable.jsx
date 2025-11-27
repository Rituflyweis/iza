import { useState } from 'react';
import { Chip, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import { CustomTable } from '../../../components';
import { formatDate } from '../../../utils/constants';
import TransactionDetailModal from './TransactionDetailModal';
import axiosInstance from '../../../api/axios';
import { useAppDispatch } from '../../../store/hooks';
import { showLoader, hideLoader } from '../../../store/slices/loaderSlice';
import useToast from '../../../hooks/useToast';

const TransactionManagementTable = ({ transactions = [], loading = false, onRefresh }) => {
  const dispatch = useAppDispatch();
  const { showError } = useToast();
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [detailError, setDetailError] = useState('');

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
      case 'success':
      case 'successful':
        return { bg: 'rgba(76, 175, 80, 0.1)', color: '#4CAF50' };
      case 'pending':
        return { bg: 'rgba(255, 152, 0, 0.1)', color: '#FF9800' };
      case 'failed':
      case 'failure':
        return { bg: 'rgba(244, 67, 54, 0.1)', color: '#F44336' };
      default:
        return { bg: 'rgba(158, 158, 158, 0.1)', color: '#9E9E9E' };
    }
  };

  const handleView = async (transaction) => {
    const transactionId = transaction._id || transaction.id || transaction.transactionId;
    
    if (!transactionId) {
      showError('Transaction ID not found');
      return;
    }

    try {
      setLoadingDetail(true);
      setModalOpen(true);
      setDetailError('');
      setSelectedTransaction(null);

      const response = await axiosInstance.get(`/getTransactionById/${transactionId}`);
      
      // Use the detailed transaction data from API
      const transactionDetail = response.data?.data || response.data || transaction;
      setSelectedTransaction(transactionDetail);
      setDetailError('');
    } catch (error) {
      const errorMessage =
        error.response?.data?.data?.message ||
        error.response?.data?.error ||
        'Failed to load transaction details. Please try again.';
      showError(errorMessage);
      console.error('Error fetching transaction details:', error);
      setDetailError(errorMessage);
      setSelectedTransaction(null);
    } finally {
      setLoadingDetail(false);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedTransaction(null);
    setDetailError('');
  };

  // Transform transactions data for CustomTable
  const rows = transactions.map((transaction) => {
    return {
      id: transaction._id || transaction.id || transaction.transactionId,
      transactionId: transaction.transactionId || transaction._id || transaction.id,
      orderId: transaction.productOrder?.orderId || '-',
      customer: transaction.customerName || 
                transaction.user?.fullName || 
                `${transaction.user?.firstName || ''} ${transaction.user?.lastName || ''}`.trim() || 
                '-',
      amount: transaction.amount || '-',
      date: formatDate(transaction.createdAt || transaction.date || transaction.transactionDate),
      paymentMethod: transaction.paymentMode || '-',
      status: transaction.status || transaction.transactionStatus || 'Pending',
      _transaction: transaction,
    };
  });

  const columns = [
    {
      id: 'transactionId',
      label: 'Transaction ID',
      accessor: 'transactionId',
      render: (row) => <span className="capitalize text-gray-900">{row.transactionId || '-'}</span>,
    },
    {
      id: 'orderId',
      label: 'Order ID',
      accessor: 'orderId',
      render: (row) => <span className="capitalize text-gray-900">{row.orderId || '-'}</span>,
    },
    {
      id: 'customer',
      label: 'Customer',
      accessor: 'customer',
      render: (row) => (
        <span className="capitalize font-medium">{row.customer}</span>
      ),
    },
    {
      id: 'amount',
      label: 'Amount',
      accessor: 'amount',
      render: (row) => (
        <span className="font-semibold">{row.amount}</span>
      ),
    },
    {
      id: 'date',
      label: 'Date',
      accessor: 'date',
      render: (row) => <span className="capitalize text-gray-900">{row.date || '-'}</span>,
    },
    {
      id: 'paymentMethod',
      label: 'Payment Method',
      accessor: 'paymentMethod',
      render: (row) => <span className="capitalize text-gray-900">{row.paymentMethod || '-'}</span>,
    },
    {
      id: 'status',
      label: 'Status',
      accessor: 'status',
      render: (row) => {
        const statusColors = getStatusColor(row.status);
        return (
          <Chip
            label={row.status}
            size="small"
            className="capitalize font-medium text-xs rounded-full px-2"
            sx={{
              bgcolor: statusColors.bg,
              color: statusColors.color,
            }}
          />
        );
      },
    },
    {
      id: 'actions',
      label: 'Action',
      render: (row) => (
        <IconButton
          size="small"
          onClick={() => handleView(row._transaction || row)}
          className="text-[#5A6678] hover:bg-[rgba(248,6,157,0.1)] hover:text-[#F8069D]"
        >
          <Icon icon="mdi:eye" width="18" height="18" />
        </IconButton>
      ),
    },
  ];

  if (loading) {
    return (
      <div className="text-center py-8">
        <p>Loading transactions...</p>
      </div>
    );
  }

  return (
    <>
      <CustomTable
        columns={columns}
        rows={rows}
        onView={handleView}
        defaultRowsPerPage={10}
      />

      {/* Transaction Detail Modal */}
      <TransactionDetailModal
        open={modalOpen}
        onClose={handleCloseModal}
        transaction={selectedTransaction}
        loading={loadingDetail}
        errorMessage={detailError}
      />
    </>
  );
};

export default TransactionManagementTable;
