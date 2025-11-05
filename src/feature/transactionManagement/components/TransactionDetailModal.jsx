import { Modal, Box, IconButton, Chip } from '@mui/material';
import { Icon } from '@iconify/react';

const TransactionDetailModal = ({ open, onClose, transaction }) => {
  if (!transaction) return null;

  // Get products and price details from transaction data, with fallback defaults
  const products = transaction.products || [
    { name: 'Hydrating Serum (50ml)', quantity: 1, price: 50 },
    { name: 'Matte Lipstick', quantity: 2, price: 40 },
  ];

  const priceDetails = transaction.priceDetails || {
    subtotal: 159,
    discount: 59,
    shipping: 20,
    total: 200,
  };

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

  const statusColors = getStatusColor(transaction.status);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="transaction-detail-modal"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        sx={{
          position: 'relative',
          outline: 'none',
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          sx={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 1,
          }}
        >
          <Icon icon="mdi:close" width={24} height={24} />
        </IconButton>

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
            Transaction Detail
          </h2>

          {/* Transaction Information */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-700 font-medium">Transaction ID:</span>
              <span className="text-gray-900">{transaction.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700 font-medium">Date:</span>
              <span className="text-gray-900">{transaction.date || 'DD-MM-YYYY'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700 font-medium">User Name:</span>
              <span className="text-gray-900">{transaction.customer}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700 font-medium">Order ID:</span>
              <span className="text-gray-900">{transaction.orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700 font-medium">Payment Method:</span>
              <span className="text-gray-900">{transaction.paymentMethod}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Status:</span>
              <Chip
                label={transaction.status || 'Completed'}
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
            </div>
          </div>

          {/* Products Section */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Products</h3>
            <div className="space-y-2">
              {products.map((product, index) => (
                <div key={index} className="text-gray-900">
                  {product.name} - Qty: {product.quantity} - ${product.price}
                </div>
              ))}
            </div>
          </div>

          {/* Price Details Section */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Price Details</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">Subtotal (inclusive tax):</span>
                <span className="text-gray-900 text-right">₹{priceDetails.subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Discount:</span>
                <span className="text-green-600 text-right">-₹{priceDetails.discount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Shipping Charges:</span>
                <span className="text-gray-900 text-right">₹{priceDetails.shipping}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-200">
                <span className="text-gray-900 font-bold">Total Amount:</span>
                <span className="text-gray-900 font-bold text-right">₹{priceDetails.total}</span>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default TransactionDetailModal;

