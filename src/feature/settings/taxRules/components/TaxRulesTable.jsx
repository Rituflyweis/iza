import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { IconButton, Box, Typography, CircularProgress } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import axiosInstance from '../../../../api/axios';
import useToast from '../../../../hooks/useToast';
import CustomTable from '../../../../components/CustomTable';
import { FilterOffcanvas } from '../../../../components';
import TaxRuleFilterBody from './TaxRuleFilterBody';

const TaxRulesTable = ({ onAddNew, onEdit }) => {
  const { showError } = useToast();
  const [taxRules, setTaxRules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterData, setFilterData] = useState({
    region: [],
    status: [],
    months: [],
    year: '',
  });

  useEffect(() => {
    fetchTaxRules();
  }, [page]);

  const fetchTaxRules = async () => {
    try {
      setLoading(true);

      const response = await axiosInstance.get('/TaxRule', {
        params: {
          page: page,
          limit: 10,
        },
      });
      
      // Transform API response to match table structure
      const responseData = response.data?.data || response.data;
      
      if (Array.isArray(responseData)) {
        setTaxRules(responseData);
        // If API returns pagination info
        if (response.data?.pagination) {
          setTotalPages(response.data.pagination.totalPages || 1);
        }
      } else if (responseData?.taxRules || responseData?.rules) {
        setTaxRules(responseData.taxRules || responseData.rules);
        setTotalPages(responseData.totalPages || responseData.pagination?.totalPages || 1);
      } else {
        setTaxRules([]);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Failed to load tax rules. Please try again.';
      showError(errorMessage);
      console.error('Error fetching tax rules:', error);
      setTaxRules([]);
    } finally {
      setLoading(false);
    }
  };

  // Transform API tax rule data to match table structure
  const transformTaxRule = (rule, index) => {
    return {
      id: rule._id || rule.id,
      location: rule.location || rule.country || rule.city || rule.name || 'N/A',
      rate: rule.rate ? `${rule.rate}%` : rule.taxRate ? `${rule.taxRate}%` : 'N/A',
      raw: rule,
    };
  };

  const transformedTaxRules = taxRules.map((rule, index) => transformTaxRule(rule, index));

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleFilterOpen = () => {
    setFilterOpen(true);
  };

  const handleFilterClose = () => {
    setFilterOpen(false);
  };

  const handleFilterChange = (newFilterData) => {
    setFilterData(newFilterData);
  };

  const handleResetFilters = () => {
    setFilterData({
      region: [],
      status: [],
      months: [],
      year: '',
    });
  };

  const handleApplyFilters = () => {
    console.log('Applied filters:', filterData);
    // Implement filter logic here
    // You can use filterData to filter the tax rules or make API call with filters
    fetchTaxRules();
  };

  const columns = [
    { id: 'location', label: 'Country/City' },
    { id: 'rate', label: 'Tax Rate' },
    {
      id: 'actions',
      label: 'Action',
      render: (row) => (
        <div className="flex items-center gap-1">
          <IconButton
            size="small"
            sx={{ color: 'text.secondary' }}
            onClick={() => onEdit && onEdit(row)}
          >
            <Edit fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: 'text.secondary' }}>
            <Delete fontSize="small" />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-gray-100 px-6 py-4 md:flex-row md:items-center md:justify-end">
        <div className="flex items-center gap-3">
          <button 
            onClick={handleFilterOpen}
            className="inline-flex items-center gap-2 rounded-full border border-pink-500 bg-pink-500 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-pink-600"
          >
            <Icon icon="mdi:filter" width={18} height={18} />
            Filter
          </button>
        </div>
        <button
          onClick={onAddNew}
          className="inline-flex items-center gap-2 rounded-full border border-pink-500 bg-pink-500 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-pink-600"
        >
          <Icon icon="mdi:plus" width={16} height={16} />
          Add New
        </button>
      </div>

      {loading ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: '3rem' }}>
          <CircularProgress size={40} sx={{ color: '#F8069D' }} />
          <Typography sx={{ mt: '1rem', color: '#5A6678' }}>Loading tax rules...</Typography>
        </Box>
      ) : transformedTaxRules.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: '3rem' }}>
          <Typography sx={{ color: '#5A6678' }}>No tax rules found</Typography>
        </Box>
      ) : (
        <CustomTable 
          columns={columns} 
          rows={transformedTaxRules}
          serverSidePagination={true}
          currentPage={page - 1}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      {/* Filter Offcanvas */}
      <FilterOffcanvas
        open={filterOpen}
        onClose={handleFilterClose}
        title="Filter"
        onReset={handleResetFilters}
        onApply={handleApplyFilters}
        onCancel={handleFilterClose}
      >
        <TaxRuleFilterBody
          filterData={filterData}
          onFilterChange={handleFilterChange}
        />
      </FilterOffcanvas>
    </div>
  );
};

export default TaxRulesTable;
