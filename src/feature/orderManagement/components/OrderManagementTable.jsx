import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const OrderManagementTable = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  // Sample data
  const orders = [
    { id: 1, orderId: '1223455', product: 'Lipstick', userName: 'John Smith', orderDate: 'DD-MM-YYYY', amount: '₹200', paymentStatus: 'Paid', status: 'Delivered' },
    { id: 2, orderId: '12334566', product: 'Lipstick', userName: 'John Smith', orderDate: 'DD-MM-YYYY', amount: '---', paymentStatus: '---', status: 'Cancelled' },
    { id: 3, orderId: '12334566', product: 'Lipstick', userName: 'Emily Johnson', orderDate: 'DD-MM-YYYY', amount: '₹200', paymentStatus: 'Pending', status: 'Pending' },
    { id: 4, orderId: '12334566', product: 'Lipstick', userName: 'Michael Brown', orderDate: 'DD-MM-YYYY', amount: '₹200', paymentStatus: 'Paid', status: 'Shipped' },
    { id: 5, orderId: '12334566', product: 'Lipstick', userName: 'Sophia Martinez', orderDate: 'DD-MM-YYYY', amount: '₹200', paymentStatus: 'Paid', status: 'Delivered' },
    { id: 6, orderId: '12334566', product: 'Lipstick', userName: 'David Davis', orderDate: 'DD-MM-YYYY', amount: '₹200', paymentStatus: 'Refunded', status: 'Returned' },
    { id: 7, orderId: '12334566', product: 'Lipstick', userName: 'Olivia Wilson', orderDate: 'DD-MM-YYYY', amount: '₹200', paymentStatus: 'Paid', status: 'Delivered' },
    { id: 8, orderId: '12334566', product: 'Lipstick', userName: 'James Anderson', orderDate: 'DD-MM-YYYY', amount: '₹200', paymentStatus: 'Paid', status: 'Delivered' },
    { id: 9, orderId: '12334566', product: 'Lipstick', userName: 'Ava Thomas', orderDate: 'DD-MM-YYYY', amount: '₹200', paymentStatus: 'Paid', status: 'Delivered' },
    { id: 10, orderId: '12334566', product: 'Lipstick', userName: 'John Smith', orderDate: 'DD-MM-YYYY', amount: '₹200', paymentStatus: 'Paid', status: 'Delivered' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Delivered': 'bg-green-100 text-green-700',
      'Cancelled': 'bg-red-100 text-red-700',
      'Pending': 'bg-yellow-100 text-yellow-700',
      'Shipped': 'bg-blue-100 text-blue-700',
      'Returned': 'bg-orange-100 text-orange-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const handleView = (orderId) => {
    navigate(`/order-management/detail/${orderId}`);
  };

  return (
    <div>
      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        {/* Table Header */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="grid grid-cols-8 gap-4 px-4 py-3 text-xs font-extrabold text-gray-500 uppercase">
            <div>Order ID</div>
            <div>Product</div>
            <div>User Name</div>
            <div>Order Date</div>
            <div>Amount</div>
            <div>Payment Status</div>
            <div>Status</div>
            <div>Action</div>
          </div>
        </div>

        {/* Table Body */}
        <div>
          {orders.map((order, index) => (
            <div
              key={order.id}
              className={`grid grid-cols-8 gap-4 px-4 py-4 border-b border-gray-100 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              } hover:bg-gray-100 transition-colors`}
            >
              <div className="text-sm text-gray-900">{order.orderId}</div>
              <div className="text-sm text-gray-900 font-medium">{order.product}</div>
              <div className="text-sm text-gray-900">{order.userName}</div>
              <div className="text-sm text-gray-900">{order.orderDate}</div>
              <div className="text-sm text-gray-900">{order.amount}</div>
              <div className="text-sm text-gray-900">{order.paymentStatus}</div>
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </div>
              <div>
                <button
                  onClick={() => handleView(order.id)}
                  className="p-1 text-gray-600 hover:text-[#F8069D] hover:bg-pink-50 rounded transition"
                >
                  <Icon icon="mdi:eye" width="18" height="18" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-gray-600">
          Page {page}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
            className="p-2 text-gray-600 hover:text-[#F8069D] hover:bg-pink-50 rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Icon icon="mdi:chevron-left" width="20" height="20" />
          </button>
          
          {[1, 2, 3, 4, 5].map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setPage(pageNum)}
              className={`w-8 h-8 rounded-full text-sm font-medium transition ${
                page === pageNum
                  ? 'bg-[#F8069D] text-white hover:bg-[#C1057D]'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {pageNum}
            </button>
          ))}
          
          <button
            onClick={() => setPage(Math.min(5, page + 1))}
            disabled={page === 5}
            className="p-2 text-gray-600 hover:text-[#F8069D] hover:bg-pink-50 rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Icon icon="mdi:chevron-right" width="20" height="20" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderManagementTable;

