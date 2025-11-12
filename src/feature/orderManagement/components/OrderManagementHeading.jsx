import { Icon } from '@iconify/react';
import { useState } from 'react';
import { FilterOffcanvas } from '../../../components';
import OrderFilterBody from './OrderFilterBody';

const OrderManagementHeading = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterData, setFilterData] = useState({
    list: '',
    status: [],
    paymentType: [],
    months: [],
  });

  const handleFilter = () => {
    setFilterOpen(true);
  };

  const handleFilterChange = (newFilterData) => {
    setFilterData(newFilterData);
  };

  const handleResetFilters = () => {
    setFilterData({
      list: '',
      status: [],
      paymentType: [],
      months: [],
    });
  };

  const handleApplyFilters = () => {
    console.log('Applied filters:', filterData);
    // Implement filter logic here
    // You can pass filterData to your table component or API call
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

      {/* Filter Offcanvas */}
      <FilterOffcanvas
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        onReset={handleResetFilters}
        onApply={handleApplyFilters}
        title="Filter"
      >
        <OrderFilterBody
          filterData={filterData}
          onFilterChange={handleFilterChange}
        />
      </FilterOffcanvas>
    </div>
  );
};

export default OrderManagementHeading;

