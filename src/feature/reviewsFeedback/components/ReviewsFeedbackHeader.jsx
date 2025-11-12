import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FilterOffcanvas } from '../../../components';
import ReviewsFeedbackFilterBody from './ReviewsFeedbackFilterBody';

const ReviewsFeedbackHeader = () => {
  const navigate = useNavigate();
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterData, setFilterData] = useState({
    rating: '',
    status: [],
    months: [],
    productName: '',
    year: '',
    startDate: '',
    endDate: '',
  });

  const handleFilter = () => {
    setFilterOpen(true);
  };

  const handleFilterChange = (newFilterData) => {
    setFilterData(newFilterData);
  };

  const handleResetFilters = () => {
    setFilterData({
      rating: '',
      status: [],
      months: [],
      productName: '',
      year: '',
      startDate: '',
      endDate: '',
    });
  };

  const handleApplyFilters = () => {
    console.log('Applied filters:', filterData);
    // Implement filter logic here
    // You can pass filterData to your table component or API call
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-1.5 rounded-full hover:bg-gray-100 transition"
            aria-label="Back"
          >
            <Icon icon="mdi:chevron-left" width={22} height={22} className="text-gray-700" />
          </button>
          <h1 className="text-2xl font-semibold text-gray-900">Reviews &amp; Feedback</h1>
        </div>

        <button 
          onClick={handleFilter}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold shadow-sm"
        >
          <Icon icon="mdi:tune-variant" width={18} height={18} />
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
        <ReviewsFeedbackFilterBody
          filterData={filterData}
          onFilterChange={handleFilterChange}
        />
      </FilterOffcanvas>
    </>
  );
};

export default ReviewsFeedbackHeader;


