import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Chip,
  Box,
  Typography,
  Paper,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import {
  Visibility,
  Edit,
  Delete,
  KeyboardArrowDown,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';
import { useState } from 'react';

const CustomTable = ({
  columns = [],
  rows = [],
  onView,
  onEdit,
  onDelete,
  onRoleChange,
  rowsPerPageOptions = [5, 10, 25],
  defaultRowsPerPage = 10,
  serverSidePagination = false,
  currentPage: externalCurrentPage,
  totalPages: externalTotalPages,
  onPageChange,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  const getNestedValue = (obj, path) => {
    if (!obj || !path) return undefined;
    const segments = path.split('.');
    let current = obj;
    for (const key of segments) {
      current = current?.[key];
      if (current === undefined || current === null) break;
    }
    return current;
  };

  const handleChangePage = (event, newPage) => {
    if (serverSidePagination && onPageChange) {
      onPageChange(newPage + 1); // Convert to 1-based for API
    } else {
      setPage(newPage);
    }
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Use external pagination if server-side, otherwise calculate from rows
  const totalPages = serverSidePagination 
    ? (externalTotalPages || 1)
    : Math.max(1, Math.ceil(rows.length / rowsPerPage));
  
  const currentPage = serverSidePagination
    ? (externalCurrentPage !== undefined ? externalCurrentPage : 0)
    : Math.min(page, totalPages - 1);
  
  const paginatedRows = serverSidePagination
    ? rows // Use all rows as-is for server-side pagination
    : rows.slice(
        currentPage * rowsPerPage,
        currentPage * rowsPerPage + rowsPerPage
      );

  const renderCellContent = (column, row) => {
    if (typeof column.render === 'function') {
      return column.render(row);
    }

    if (column.id === 'status') {
      const status = row[column.id];
      const isActive = status === 'Active';
      return (
        <Chip
          label={status}
          size="small"
          sx={{
            backgroundColor: isActive ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
            color: isActive ? 'rgba(76, 175, 80, 1)' : 'rgba(244, 67, 54, 1)',
            fontWeight: 400,
            fontSize: '12px',
          }}
        />
      );
    }

    // Generic chip support
    if (column.type === 'chip' || column.id === 'tag') {
      const value =
        (typeof column.accessor === 'function' && column.accessor(row)) ||
        (typeof column.accessor === 'string' && getNestedValue(row, column.accessor)) ||
        (column.path && getNestedValue(row, column.path)) ||
        (column.id?.includes('.') ? getNestedValue(row, column.id) : row[column.id]);
      return (
        <Chip
          label={value ?? '-'}
          size="small"
          sx={{
            backgroundColor: 'rgba(240, 240, 240, 0.6)',
            color: '#1A1A1A',
            fontWeight: 400,
            fontSize: '12px',
          }}
        />
      );
    }

    if (column.id === 'role') {
      return (
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <Select
            value={row[column.id] || ''}
            onChange={(e) => onRoleChange && onRoleChange(row.id, e.target.value)}
            IconComponent={KeyboardArrowDown}
            sx={{
              fontSize: '14px',
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            }}
          >
            {column.options?.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    }

    if (column.id === 'actions') {
      return (
        <Box display="flex" gap={1}>
          {onView && (
            <IconButton
              size="small"
              onClick={() => onView(row)}
              sx={{ color: 'text.secondary' }}
            >
              <Visibility fontSize="small" />
            </IconButton>
          )}
          {onEdit && (
            <IconButton
              size="small"
              onClick={() => onEdit(row)}
              sx={{ color: 'text.secondary' }}
            >
              <Edit fontSize="small" />
            </IconButton>
          )}
          {onDelete && (
            <IconButton
              size="small"
              onClick={() => onDelete(row)}
              sx={{ color: 'text.secondary' }}
            >
              <Delete fontSize="small" />
            </IconButton>
          )}
        </Box>
      );
    }

    // Access value via accessor function, dot-path, or id
    let value =
      (typeof column.accessor === 'function' && column.accessor(row)) ||
      (typeof column.accessor === 'string' && getNestedValue(row, column.accessor)) ||
      (column.path && getNestedValue(row, column.path)) ||
      (column.id?.includes('.') ? getNestedValue(row, column.id) : row[column.id]);

    if (column.format) {
      try {
        value = column.format(value, row);
      } catch (e) {
        // ignore format errors and fallback to raw value
      }
    }

    return value ?? '-';
  };

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      className="border border-[#e0e0e0] rounded-lg overflow-hidden bg-white"
    >
      <Table className="min-w-[650px]">
        <TableHead>
          <TableRow className="bg-transparent">
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align || 'left'}
                className="bg-transparent text-[#000000A6] font-extrabold text-[12px] not-italic normal-case py-3 px-4 border-b border-[#e0e0e0]"
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedRows.map((row, index) => (
            <TableRow
              key={row.id || index}
              className={`${
                index % 2 === 1 ? 'bg-[#f9f9f9]' : 'bg-white'
              } hover:bg-[#f5f5f5] transition-colors`}
            >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || 'left'}
                  className={`py-3 px-4 text-[14px] border-b border-[#f0f0f0] ${
                    column.wrap ? 'whitespace-normal break-words' : ''
                  }`}
                  style={column.wrap ? { whiteSpace: 'normal', wordBreak: 'break-word' } : {}}
                >
                  {renderCellContent(column, row)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      {/* Custom Pagination */}
      <Box
        className="flex items-center justify-between px-6 py-4 border-t border-[#e0e0e0]"
      >
        <Typography variant="body2" className="text-sm">
          Page {currentPage + 1} of {totalPages}
        </Typography>
        <Box className="flex items-center gap-1">
          <IconButton
            onClick={() => handleChangePage(null, currentPage - 1)}
            disabled={currentPage === 0}
            size="small"
            className="text-gray-500 disabled:text-gray-300"
          >
            <ChevronLeft />
          </IconButton>
          {Array.from({
            length: Math.min(5, totalPages),
          }).map((_, i) => {
            const halfWindow = Math.floor(5 / 2);
            let startPage = currentPage - halfWindow;
            if (startPage < 0) startPage = 0;
            if (startPage + 5 > totalPages) startPage = Math.max(0, totalPages - 5);
            const pageNumber = startPage + i;
            const isCurrentPage = currentPage === pageNumber;
            return (
              <IconButton
                key={pageNumber}
                onClick={() => handleChangePage(null, pageNumber)}
                className={`min-w-[32px] h-8 rounded ${
                  isCurrentPage 
                    ? 'bg-[#F8069D] text-white hover:bg-[#C1057D]' 
                    : 'bg-transparent text-gray-500 hover:bg-gray-100'
                }`}
                sx={
                  isCurrentPage
                    ? {
                        backgroundColor: '#F8069D',
                        color: '#FFFFFF',
                        '&:hover': {
                          backgroundColor: '#C1057D',
                        },
                      }
                    : {
                        backgroundColor: 'transparent',
                        color: '#6B7280',
                        '&:hover': {
                          backgroundColor: '#F3F4F6',
                        },
                      }
                }
              >
                <Typography variant="body2" className="text-sm">
                  {pageNumber + 1}
                </Typography>
              </IconButton>
            );
          })}
          <IconButton
            onClick={() => handleChangePage(null, currentPage + 1)}
            disabled={currentPage >= totalPages - 1}
            size="small"
            className="text-gray-500 disabled:text-gray-300"
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Box>
    </TableContainer>
  );
};

export default CustomTable;
