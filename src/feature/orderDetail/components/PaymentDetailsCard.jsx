const PaymentDetailsCard = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-4">
      <h3 className="text-base font-bold text-gray-900 mb-4">Payment Details</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-900">Payment Status</span>
          <span className="text-sm text-gray-600">-</span>
          <span className="text-sm text-gray-900">Paid</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-900">Total</span>
          <span className="text-sm text-gray-600">-</span>
          <span className="text-sm text-gray-900">₹200</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-900">Payment Method</span>
          <span className="text-sm text-gray-600">-</span>
          <span className="text-sm text-gray-900">Credit Card</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-900">Transaction ID</span>
          <span className="text-sm text-gray-600">-</span>
          <span className="text-sm text-gray-900">111334555</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-900">Points Earned</span>
          <span className="text-sm text-gray-600">-</span>
          <span className="text-sm text-gray-900">1000</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailsCard;

