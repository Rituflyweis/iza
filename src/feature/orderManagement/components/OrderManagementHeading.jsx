import { Icon } from '@iconify/react';

const OrderManagementHeading = () => {
  const handleFilter = () => {
    console.log('Filter clicked');
    // Implement filter logic
  };

  return (
    <div className="mb-8">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Order Management
          </h1>
          <p className="text-sm text-gray-600">
            View and manage all Transactions
          </p>
        </div>

        <button
          onClick={handleFilter}
          className="bg-[#F8069D] hover:bg-[#C1057D] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition flex items-center gap-2"
        >
          <Icon icon="mdi:filter" width="18" height="18" />
          Filter
        </button>
      </div>
    </div>
  );
};

export default OrderManagementHeading;

