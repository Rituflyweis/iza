import { useMemo } from 'react';
import { Chip, IconButton, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { CustomTable } from '../../../components';
import { formatDate, getFullName } from '../../../utils/constants';

const OrderManagementTable = ({ 
  orders = [], 
  loading = false,
  currentPage = 0,
  totalPages = 1,
  onPageChange,
}) => {
  const navigate = useNavigate();

  const getStatusColor = (status) => {
    const normalized = String(status || '').toLowerCase();
    const colors = {
      delivered: { bg: 'rgba(46, 204, 113, 0.15)', color: '#2ecc71' },
      cancelled: { bg: 'rgba(231, 76, 60, 0.15)', color: '#e74c3c' },
      pending: { bg: 'rgba(241, 196, 15, 0.15)', color: '#f1c40f' },
      shipped: { bg: 'rgba(52, 152, 219, 0.15)', color: '#3498db' },
      returned: { bg: 'rgba(230, 126, 34, 0.15)', color: '#e67e22' },
    };
    return colors[normalized] || { bg: 'rgba(149, 165, 166, 0.2)', color: '#7f8c8d' };
  };

  const getPaymentStatusColor = (status) => {
    const normalized = String(status || '').toLowerCase();
    const colors = {
      paid: 'bg-green-100 text-green-700',
      pending: 'bg-yellow-100 text-yellow-700',
      failed: 'bg-red-100 text-red-700',
      refunded: 'bg-orange-100 text-orange-700',
      cancelled: 'bg-gray-100 text-gray-700',
    };
    return colors[normalized] || 'bg-blue-100 text-blue-700';
  };

  const handleView = (order) => {
    const orderId = order._id || order.id || order.orderId;
    if (orderId) {
      navigate(`/order-management/detail/${orderId}`);
    }
  };

  const rows = useMemo(() => {
    return (orders || []).map((order) => {
      const id = order?._id;
      const user = order?.user || {};
      const customerName =
        getFullName(user?.fullName) ||  '-';
      const orderDate = formatDate(order?.orderDate || order?.createdAt);
      const amountValue = Number(order?.total ??  0);
      const amount = amountValue ? `₹${amountValue.toFixed(2)}` : '-';
      const paymentStatus = order?.paymentStatus  || '-';
      const status = order?.orderStatus || order?.status || '-';
      const products =
        (order?.products || [])
          .map((product) => product?.productId?.name || product?.name || '')
          .filter(Boolean)
          .join(', ') || '-';

      return {
        id,
        orderId: order?.orderId || id,
        products,
        customerName,
        orderDate,
        amount,
        paymentStatus,
        status,
        _order: order,
      };
    });
  }, [orders]);

  const columns = [
    {
      id: 'orderId',
      label: 'Order ID',
      render: (row) => <span className="capitalize text-gray-900">{row.orderId || '-'}</span>,
    },
    {
      id: 'products',
      label: 'Products',
      wrap: true,
      render: (row) => (
        <div className="capitalize text-gray-900 break-words whitespace-normal max-w-xs leading-relaxed">
          {row.products}
        </div>
      ),
    },
    {
      id: 'customerName',
      label: 'User Name',
      render: (row) => <span className="capitalize text-gray-900 font-medium">{row.customerName}</span>,
    },
    {
      id: 'orderDate',
      label: 'Order Date',
      render: (row) => <span className="capitalize text-gray-900">{row.orderDate || '-'}</span>,
    },
    {
      id: 'amount',
      label: 'Amount',
      render: (row) => <span className="font-semibold text-gray-900">{row.amount}</span>,
    },
    {
      id: 'paymentStatus',
      label: 'Payment Status',
      render: (row) => {
        const statusClass = getPaymentStatusColor(row.paymentStatus);
        return (
          <Chip
            label={row.paymentStatus || '-'}
            size="small"
            className={`${statusClass} capitalize font-medium text-xs`}
          />
        );
      },
    },
    {
      id: 'status',
      label: 'Status',
      render: (row) => {
        const color = getStatusColor(row.status);
        return (
          <Chip
            label={row.status || '-'}
            size="small"
            className="capitalize font-medium text-xs rounded-full px-2"
            sx={{
              backgroundColor: color.bg,
              color: color.color,
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
          onClick={() => handleView(row._order || row)}
          className="text-gray-600 hover:text-[#F8069D] hover:bg-pink-50"
        >
          <Icon icon="mdi:eye" width={18} height={18} />
        </IconButton>
      ),
    },
  ];

  if (loading && rows.length === 0) {
    return (
      <div className="text-center py-8">
        <Typography color="textSecondary">Loading orders...</Typography>
      </div>
    );
  }

  if (!loading && rows.length === 0) {
    return (
      <div className="text-center py-8 border border-dashed border-gray-200 rounded-lg">
        <Typography color="textSecondary">No orders found.</Typography>
      </div>
    );
  }

  return (
    <CustomTable
      columns={columns}
      rows={rows}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
      serverSidePagination={true}
    />
  );
};

export default OrderManagementTable;

