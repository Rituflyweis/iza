import { formatDate } from '../../../utils/constants';

const OrderDetailsCard = ({ orderData }) => {
  const orderDate = formatDate(orderData?.orderDate || orderData?.createdAt);
  const status = orderData?.orderStatus || orderData?.status || '-';

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-4">
      <h3 className="text-base font-bold text-gray-900 mb-4">Order Details</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-900">Order Date</span>
          <span className="text-sm text-gray-600">-</span>
          <span className="text-sm text-gray-600">{orderDate}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-900">Status</span>
          <span className="text-sm text-gray-600">-</span>
          <span className="text-sm text-gray-900 capitalize">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsCard;
