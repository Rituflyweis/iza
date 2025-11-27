import { formatDate } from '../../../utils/constants';

const DeliveryReturnCard = ({ orderData }) => {
  const deliveryDate = formatDate(orderData?.deliveryDate || orderData?.expectedDeliveryDate);
  const deliveryStatus = orderData?.deliveryStatus || orderData?.orderStatus || '-';
  const courierService = orderData?.courierService || orderData?.shippingProvider || '-';
  const returnStatus = orderData?.returnStatus || orderData?.isReturned ? 'Returned' : 'No return';

  return (
    <div className="space-y-4">
      {/* Delivery Information */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-base font-bold text-gray-900 mb-4">Delivery Information</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-900">Delivery Date</span>
            <span className="text-sm text-gray-600">-</span>
            <span className="text-sm text-gray-600">{deliveryDate}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-900">Delivery Status</span>
            <span className="text-sm text-gray-600">-</span>
            <span className="text-sm text-gray-900 capitalize">{deliveryStatus}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-900">Courier Service</span>
            <span className="text-sm text-gray-600">-</span>
            <span className="text-sm text-gray-900 capitalize">{courierService}</span>
          </div>
        </div>
      </div>

      {/* Return Details */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-base font-bold text-gray-900 mb-4">Return Details</h3>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-900 capitalize">{returnStatus}</span>
        </div>
      </div>
    </div>
  );
};

export default DeliveryReturnCard;

