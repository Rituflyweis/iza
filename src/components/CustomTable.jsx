import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
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
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

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
    <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #e0e0e0' }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align || 'left'}
                sx={{
                  backgroundColor: 'transparent',
                  color: '#00000066',
                  fontWeight: 800,
                  fontSize: '12px',
                  fontStyle: 'normal',
                  textTransform: 'none',
                  padding: '12px 16px',
                  borderBottom: '1px solid #e0e0e0',
                }}
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
              sx={{
                backgroundColor: index % 2 === 1 ? '#f9f9f9' : '#ffffff',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
              }}
            >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || 'left'}
                  sx={{
                    padding: '12px 16px',
                    fontSize: '14px',
                    borderBottom: '1px solid #f0f0f0',
                  }}
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
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="16px 24px"
        borderTop="1px solid #e0e0e0"
      >
        <Typography variant="body2" sx={{ fontSize: '14px' }}>
          Page {page + 1}
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton
            onClick={() => handleChangePage(null, page - 1)}
            disabled={page === 0}
            size="small"
            sx={{ color: 'text.secondary' }}
          >
            <ChevronLeft />
          </IconButton>
          {Array.from({ length: Math.min(5, Math.ceil(rows.length / rowsPerPage)) }).map((_, i) => {
            const pageNumber = i;
            const isCurrentPage = page === pageNumber;
            return (
              <IconButton
                key={i}
                onClick={() => handleChangePage(null, pageNumber)}
                sx={{
                  minWidth: '32px',
                  height: '32px',
                  backgroundColor: isCurrentPage ? '#dc004e' : 'transparent',
                  color: isCurrentPage ? '#ffffff' : 'text.secondary',
                  '&:hover': {
                    backgroundColor: isCurrentPage ? '#dc004e' : '#f5f5f5',
                  },
                }}
              >
                <Typography variant="body2" sx={{ fontSize: '14px' }}>
                  {pageNumber + 1}
                </Typography>
              </IconButton>
            );
          })}
          <IconButton
            onClick={() => handleChangePage(null, page + 1)}
            disabled={page >= Math.ceil(rows.length / rowsPerPage) - 1}
            size="small"
            sx={{ color: 'text.secondary' }}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Box>
    </TableContainer>
  );
};

export default CustomTable;
