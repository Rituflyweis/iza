import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Custom hook for managing table filters and search with debouncing
 * @param {Object} options - Configuration options
 * @param {Function} options.onFilterChange - Callback when filters change (for auto-apply)
 * @param {Function} options.onSearchChange - Callback when search changes (debounced)
 * @param {number} options.debounceDelay - Debounce delay in milliseconds (default: 500)
 * @param {boolean} options.autoApplyFilters - Whether to auto-apply filters (default: false)
 * @param {Object} options.initialFilters - Initial filter state
 * @param {string} options.initialSearch - Initial search term
 * @returns {Object} Filter state and handlers
 */
const useTableFilters = ({
  onFilterChange,
  onSearchChange,
  debounceDelay = 500,
  autoApplyFilters = false,
  initialFilters = {},
  initialSearch = '',
} = {}) => {
  const [filters, setFilters] = useState(initialFilters);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [localFilters, setLocalFilters] = useState(initialFilters); // For filter modal
  const debounceTimerRef = useRef(null);
  const isInitialMount = useRef(true);

  // Debounced search effect
  useEffect(() => {
    // Skip initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Clear previous timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Set new timer
    debounceTimerRef.current = setTimeout(() => {
      if (onSearchChange) {
        onSearchChange(searchTerm);
      }
    }, debounceDelay);

    // Cleanup
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [searchTerm, debounceDelay, onSearchChange]);

  // Auto-apply filters when they change (if enabled)
  useEffect(() => {
    if (autoApplyFilters && onFilterChange) {
      onFilterChange(filters);
    }
  }, [filters, autoApplyFilters, onFilterChange]);

  // Handle search input change
  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  // Handle filter change in modal (local state)
  const handleFilterChange = useCallback((newFilters) => {
    setLocalFilters(newFilters);
  }, []);

  // Apply filters (from modal)
  const handleApplyFilters = useCallback(() => {
    setFilters(localFilters);
    if (onFilterChange) {
      onFilterChange(localFilters);
    }
  }, [localFilters, onFilterChange]);

  // Reset filters
  const handleResetFilters = useCallback(() => {
    const resetFilters = { ...initialFilters };
    setFilters(resetFilters);
    setLocalFilters(resetFilters);
    setSearchTerm(initialSearch);
    if (onFilterChange) {
      onFilterChange(resetFilters);
    }
    if (onSearchChange) {
      onSearchChange(initialSearch);
    }
  }, [initialFilters, initialSearch, onFilterChange, onSearchChange]);

  // Update local filters when filters change externally
  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  return {
    // State
    filters,
    searchTerm,
    localFilters,

    // Handlers
    handleSearchChange,
    handleFilterChange,
    handleApplyFilters,
    handleResetFilters,
    setFilters,
    setSearchTerm,
  };
};

export default useTableFilters;

