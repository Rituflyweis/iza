import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Menu, MenuItem } from '@mui/material';

const PaymentGatewayTable = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedGateway, setSelectedGateway] = useState(null);
  const rowsPerPage = 10;

  // Sample data
  const gateways = [
    { id: 1, name: 'PayPal', lastActivity: '5 mins ago', fee: '2.9%', status: 'Active' },
    { id: 2, name: 'Razorpay', lastActivity: '30 mins ago', fee: '2.5%', status: 'Active' },
    { id: 3, name: 'PayPal', lastActivity: 'Not yet integrated', fee: '--', status: 'Inactive' },
    { id: 4, name: 'PayPal', lastActivity: '30 mins ago', fee: '2.5%', status: 'Active' },
    { id: 5, name: 'PayPal', lastActivity: '30 mins ago', fee: '2.5%', status: 'Active' },
    { id: 6, name: 'PayPal', lastActivity: '30 mins ago', fee: '2.5%', status: 'Active' },
    { id: 7, name: 'PayPal', lastActivity: '30 mins ago', fee: '2.5%', status: 'Active' },
    { id: 8, name: 'PayPal', lastActivity: '30 mins ago', fee: '2.5%', status: 'Active' },
    { id: 9, name: 'Razorpay', lastActivity: '30 mins ago', fee: '2.5%', status: 'Active' },
  ];

  const totalPages = Math.ceil(gateways.length / rowsPerPage);
  const paginatedGateways = gateways.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleActionClick = (event, gateway) => {
    setAnchorEl(event.currentTarget);
    setSelectedGateway(gateway);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedGateway(null);
  };

  const handleConfigure = () => {
    navigate(`/third-party-integration/payment-gateway/configure/${selectedGateway.id}`);
    handleMenuClose();
  };

  const handleManageSettings = () => {
    navigate(`/third-party-integration/payment-gateway/manage-settings/${selectedGateway.id}`);
    handleMenuClose();
  };

  const handleDisable = () => {
    console.log('Disable gateway:', selectedGateway.id);
    handleMenuClose();
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Table Header */}
      <div className="grid grid-cols-5 gap-4 bg-gray-100 px-4 py-3 text-xs font-bold text-gray-900 border-b border-gray-200">
        <div>Payment Gateway</div>
        <div>Last Activity</div>
        <div>Transaction Fee</div>
        <div>Status</div>
        <div>Actions</div>
      </div>

      {/* Table Body */}
      <div>
        {paginatedGateways.map((gateway, idx) => (
          <div
            key={gateway.id}
            className={`grid grid-cols-5 gap-4 items-center px-4 py-3 ${
              idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'
            } border-b border-gray-200`}
          >
            <div className="text-sm text-gray-900 font-medium">{gateway.name}</div>
            <div className="text-sm text-gray-900">{gateway.lastActivity}</div>
            <div className="text-sm text-gray-900">{gateway.fee}</div>
            <div>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  gateway.status === 'Active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {gateway.status}
              </span>
            </div>
            <div>
              <button
                onClick={(e) => handleActionClick(e, gateway)}
                className="p-1 hover:bg-gray-200 rounded transition-colors"
              >
                <Icon icon="mdi:menu" width={20} height={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
        <div className="text-sm text-gray-700">Page {page + 1}</div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 0}
            className={`p-1 rounded transition-colors ${
              page === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Icon icon="mdi:chevron-left" width={20} height={20} />
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                page === i
                  ? 'bg-pink-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page >= totalPages - 1}
            className={`p-1 rounded transition-colors ${
              page >= totalPages - 1
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Icon icon="mdi:chevron-right" width={20} height={20} />
          </button>
        </div>
      </div>

      {/* Action Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleConfigure}>Configure</MenuItem>
        <MenuItem onClick={handleManageSettings}>Manage Settings</MenuItem>
        <MenuItem onClick={handleDisable}>Disable</MenuItem>
      </Menu>
    </div>
  );
};

export default PaymentGatewayTable;

