import { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import OrderManagementHeading from './components/OrderManagementHeading';
import OrderManagementTable from './components/OrderManagementTable';
import axiosInstance from '../../api/axios';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { showLoader, hideLoader } from '../../store/slices/loaderSlice';
import useToast from '../../hooks/useToast';
import useTableFilters from '../../hooks/useTableFilters';

const DEFAULT_QUERY = {
  list: '',
  orderStatus: '',
  search: '',
  fromDate: '',
  toDate: '',
  page: 1,
  limit: 10,
};

const INITIAL_FILTERS = {
  list: '',
  status: [],
  paymentType: [],
  months: [],
  year: '',
  fromDate: '',
  toDate: '',
};

const OrderManagement = () => {
  const dispatch = useAppDispatch();
  const { showError } = useToast();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const isInitialMount = useRef(true);
  const filtersRef = useRef(INITIAL_FILTERS);
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const searchRef = useRef('');
  const searchDebounceTimerRef = useRef(null);
  // Use custom hook for filters (no search for orders API)
  const {
    filters,
    localFilters,
    handleFilterChange,
    handleApplyFilters,
    handleResetFilters,
  } = useTableFilters({
    initialFilters: INITIAL_FILTERS,
    initialSearch: '',
    debounceDelay: 500,
    autoApplyFilters: false,
  });

  const buildQueryParams = useCallback(
    (page = currentPage, currentFilters = filters, currentSearch = searchValue) => {
      const params = {
        page,
        limit: DEFAULT_QUERY.limit,
      };

      // Add search parameter
      if (currentSearch && currentSearch.trim()) {
        params.search = currentSearch.trim();
      }

      // Add list filter
      if (currentFilters.list) {
        params.list = currentFilters.list;
      }

      // Add order status (comma-separated if multiple)
      if (currentFilters.status.length > 0) {
        params.orderStatus = currentFilters.status.join(',');
      }

      // Add date filters
      if (currentFilters.fromDate) {
        params.fromDate = currentFilters.fromDate;
      }
      if (currentFilters.toDate) {
        params.toDate = currentFilters.toDate;
      }

      // Add year if provided
      if (currentFilters.year) {
        params.year = currentFilters.year;
      }

      return params;
    },
    [filters, currentPage, searchValue]
  );

  const fetchOrders = useCallback(async (page = currentPage) => {
    try {
      setLoading(true);
      dispatch(showLoader('Loading orders...'));

      const params = buildQueryParams(page);
      const response = await axiosInstance.get('/getProductOrder', { 
        params,
      });
      
      const data = response?.data?.data?.docs || response?.data?.docs || [];
      const totalDocs = response?.data?.data?.totalDocs || response?.data?.totalDocs || 0;
      const totalPagesCount = Math.ceil(totalDocs / DEFAULT_QUERY.limit);

      setOrders(data);
      setTotalPages(totalPagesCount || 1);
      setCurrentPage(page);
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        'Failed to load orders. Please try again.';
      showError(errorMessage);
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
      dispatch(hideLoader());
    }
  }, [buildQueryParams, currentPage, dispatch, showError]);

  // Initial fetch
  useEffect(() => {
    fetchOrders(1);
    isInitialMount.current = false;
    
    // Cleanup: clear debounce timer on unmount
    return () => {
      if (searchDebounceTimerRef.current) {
        clearTimeout(searchDebounceTimerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle filter apply - refetch with new filters
  const handleFilterApplyWithRefetch = useCallback(() => {
    handleApplyFilters();
    setCurrentPage(1);
  }, [handleApplyFilters]);

  // Handle filter reset - refetch with reset filters
  const handleFilterResetWithRefetch = useCallback(() => {
    handleResetFilters();
    setCurrentPage(1);
  }, [handleResetFilters]);

  // Refetch when filters change (after apply)
  useEffect(() => {
    // Skip initial mount
    if (isInitialMount.current) {
      return;
    }

    // Check if filters actually changed
    const filtersChanged = JSON.stringify(filtersRef.current) !== JSON.stringify(filters);
    if (filtersChanged) {
      filtersRef.current = filters;
      setCurrentPage(1);
      fetchOrders(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const handlePageChange = (newPage) => {
    fetchOrders(newPage);
  };

  // Debounced search - trigger API call when search changes
  useEffect(() => {
    // Skip initial mount
    if (isInitialMount.current) {
      searchRef.current = searchValue;
      return;
    }

    // Clear previous timer
    if (searchDebounceTimerRef.current) {
      clearTimeout(searchDebounceTimerRef.current);
    }

    // Check if search actually changed
    if (searchRef.current === searchValue) {
      return;
    }

    // Set new timer for debounced API call
    searchDebounceTimerRef.current = setTimeout(() => {
      searchRef.current = searchValue;
      setCurrentPage(1);
      fetchOrders(1);
    }, 500); // 500ms debounce delay

    // Cleanup
    return () => {
      if (searchDebounceTimerRef.current) {
        clearTimeout(searchDebounceTimerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <div>
      <OrderManagementHeading
        filterData={localFilters}
        onFilterChange={handleFilterChange}
        onFilterApply={handleFilterApplyWithRefetch}
        onFilterReset={handleFilterResetWithRefetch}
      />
      <OrderManagementTable
        orders={orders}
        loading={loading}
        currentPage={currentPage - 1} // CustomTable uses 0-based index
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default OrderManagement;

