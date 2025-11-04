import { Icon } from '@iconify/react';

const PrintInvoiceModal = ({ open, onClose }) => {
  if (!open) return null;

  const invoiceData = {
    transactionId: 'T2024112801',
    date: 'DD-MM-YYYY',
    userName: 'John Smith',
    orderId: 'O100245',
    paymentMethod: 'Credit Card',
    status: 'Completed',
    products: [
      { name: 'Hydrating Serum (50ml)', qty: 1, price: '₹50' },
      { name: 'Matte Lipstick', qty: 2, price: '₹40' },
    ],
    subtotal: '₹159',
    discount: '₹59',
    shippingCharges: '₹20',
    totalAmount: '₹200',
  };

  return (
    <div
      className="fixed inset-0 bg-black/10 backdrop-blur-[2px] flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-4 w-[340px] max-h-[90vh] overflow-y-auto shadow-lg border border-gray-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-3 border-b border-gray-300 pb-1">
          <h2 className="text-sm font-semibold text-gray-800">Print Invoice</h2>
          <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <Icon icon="mdi:download" width={16} height={16} className="text-gray-700" />
            </button>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
              <Icon icon="mdi:close" width={16} height={16} className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Invoice Data */}
        <div className="text-xs text-gray-900 space-y-1">
          <InfoRow label="Transaction ID" value={invoiceData.transactionId} />
          <InfoRow label="Date" value={invoiceData.date} />
          <InfoRow label="User Name" value={invoiceData.userName} />
          <InfoRow label="Order ID" value={invoiceData.orderId} />
          <InfoRow label="Payment Method" value={invoiceData.paymentMethod} />
          <div className="flex items-start">
            <p className="w-[40%] text-gray-700">Status</p>
            <p className="px-1">:</p>
            <span className="px-2 py-0.5 text-[10px] font-medium text-green-700 bg-green-100 rounded">
              {invoiceData.status}
            </span>
          </div>

          <p className="mt-2 font-semibold text-gray-900">Products</p>
          {invoiceData.products.map((p, i) => (
            <p key={i} className="text-xs text-gray-700">
              {p.name} - Qty: {p.qty} - {p.price}
            </p>
          ))}

          <p className="mt-2 font-semibold text-gray-900">Price Details</p>
          <PriceRow label="Subtotal (Inclusive tax)" value={invoiceData.subtotal} />
          <PriceRow label="Discount" value={`- ${invoiceData.discount}`} color="text-green-600" />
          <PriceRow label="Shipping Charges" value={invoiceData.shippingCharges} />
          <div className="flex items-center justify-between border-t border-gray-200 pt-2 mt-1">
            <span className="text-xs font-bold text-gray-900">Total Amount</span>
            <span className="text-xs font-bold text-gray-900">{invoiceData.totalAmount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ label, value }) => (
  <div className="flex items-start">
    <p className="w-[40%] text-gray-700">{label}</p>
    <p className="px-1">:</p>
    <p className="flex-1 text-gray-900">{value}</p>
  </div>
);

const PriceRow = ({ label, value, color }) => (
  <div className="flex items-start">
    <p className="w-[60%] text-gray-600">{label}</p>
    <p className="px-1">:</p>
    <p className={`flex-1 font-semibold text-right ${color || 'text-gray-900'}`}>{value}</p>
  </div>
);

export default PrintInvoiceModal;
