import { Icon } from '@iconify/react';
import { useState } from 'react';
import { FilterOffcanvas } from '../../../components';
import OrderFilterBody from './OrderFilterBody';

const OrderManagementHeading = ({
  filterData,
  onFilterChange,
  onFilterApply,
  onFilterReset,
}) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [localFilterData, setLocalFilterData] = useState(filterData || {
    list: '',
    status: [],
    paymentType: [],
    months: [],
    year: '',
    fromDate: '',
    toDate: '',
  });

  const handleFilter = () => {
    setFilterOpen(true);
  };

  const handleFilterChange = (newFilterData) => {
    setLocalFilterData(newFilterData);
    if (onFilterChange) {
      onFilterChange(newFilterData);
    }
  };

  const handleResetFilters = () => {
    const resetData = {
      list: '',
      status: [],
      paymentType: [],
      months: [],
      year: '',
      fromDate: '',
      toDate: '',
    };
    setLocalFilterData(resetData);
    if (onFilterReset) {
      onFilterReset();
    }
    setFilterOpen(false);
  };

  const handleApplyFilters = () => {
    if (onFilterApply) {
      onFilterApply(localFilterData);
    }
    setFilterOpen(false);
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

        <div className="flex items-center gap-3">
          <button
            onClick={handleFilter}
            className="bg-[#F8069D] hover:bg-[#C1057D] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition flex items-center gap-2"
          >
            <Icon icon="mdi:filter" width="18" height="18" />
            Filter
          </button>
        </div>
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
          filterData={localFilterData}
          onFilterChange={handleFilterChange}
        />
      </FilterOffcanvas>
    </div>
  );
};

export default OrderManagementHeading;

