import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PrintInvoiceModal from './PrintInvoiceModal';

const OrderDetailHeader = () => {
  const navigate = useNavigate();
  const [printInvoiceOpen, setPrintInvoiceOpen] = useState(false);

  return (
    <div className="flex items-center justify-between mb-6">
      <button
        onClick={() => navigate('/order-management')}
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition"
      >
        <Icon icon="mdi:chevron-left" width={24} height={24} />
        <span className="text-base font-medium">View Details</span>
      </button>
      
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition">
          Edit Details
        </button>
        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition">
          Generate Invoice
        </button>
        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition">
          Generate Shipping Label
        </button>
        <button 
          onClick={() => setPrintInvoiceOpen(true)}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition"
        >
          Print Invoice
        </button>
      </div>
      
      <PrintInvoiceModal open={printInvoiceOpen} onClose={() => setPrintInvoiceOpen(false)} />
    </div>
  );
};

export default OrderDetailHeader;

