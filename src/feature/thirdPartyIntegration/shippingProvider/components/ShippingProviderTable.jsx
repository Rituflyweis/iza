import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Menu, MenuItem } from '@mui/material';

const ShippingProviderTable = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const rowsPerPage = 10;

  // Sample data
  const providers = [
    { id: 1, name: 'FedEx', lastActivity: '1 hour ago', status: 'Active' },
    { id: 2, name: 'BlueDart', lastActivity: '1 hour ago', status: 'Active' },
    { id: 3, name: 'DHL', lastActivity: 'Not yet integrated', status: 'Inactive' },
    { id: 4, name: 'FedEx', lastActivity: '2 days ago', status: 'Active' },
    { id: 5, name: 'FedEx', lastActivity: '2 days ago', status: 'Active' },
    { id: 6, name: 'FedEx', lastActivity: '2 days ago', status: 'Active' },
    { id: 7, name: 'FedEx', lastActivity: '2 days ago', status: 'Active' },
    { id: 8, name: 'FedEx', lastActivity: '2 days ago', status: 'Active' },
  ];

  const totalPages = Math.ceil(providers.length / rowsPerPage);
  const paginatedProviders = providers.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleActionClick = (event, provider) => {
    setAnchorEl(event.currentTarget);
    setSelectedProvider(provider);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedProvider(null);
  };

  const handleConfigure = () => {
    navigate(`/third-party-integration/shipping-provider/configure/${selectedProvider.id}`);
    handleMenuClose();
  };

  const handleTrackOrders = () => {
    navigate(`/third-party-integration/shipping-provider/track-orders/${selectedProvider.id}`);
    handleMenuClose();
  };

  const handleDisable = () => {
    console.log('Disable provider:', selectedProvider.id);
    handleMenuClose();
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Table Header */}
      <div className="grid grid-cols-4 gap-4 bg-gray-100 px-4 py-3 text-xs font-bold text-gray-900 border-b border-gray-200">
        <div>Shipping Provider</div>
        <div>Last Activity</div>
        <div>Status</div>
        <div>Actions</div>
      </div>

      {/* Table Body */}
      <div>
        {paginatedProviders.map((provider, idx) => (
          <div
            key={provider.id}
            className={`grid grid-cols-4 gap-4 items-center px-4 py-3 ${
              idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'
            } border-b border-gray-200`}
          >
            <div className="text-sm text-gray-900 font-medium">{provider.name}</div>
            <div className="text-sm text-gray-900">{provider.lastActivity}</div>
            <div>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  provider.status === 'Active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {provider.status}
              </span>
            </div>
            <div>
              <button
                onClick={(e) => handleActionClick(e, provider)}
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
        <MenuItem onClick={handleTrackOrders}>Track Orders</MenuItem>
        <MenuItem onClick={handleDisable}>Disable</MenuItem>
      </Menu>
    </div>
  );
};

export default ShippingProviderTable;





