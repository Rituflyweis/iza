import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Box,
  Typography,
} from '@mui/material';

const CustomerSupportTable = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [actionAnchor, setActionAnchor] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [assignDialogOpen, setAssignDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample ticket data
  const tickets = [
    {
      id: 'TKT001',
      customer: 'John Doe',
      issueType: 'Payment Issue',
      responseTime: '30 minutes',
      resolutionTime: '--',
      date: '01/12/24',
      status: 'Open',
      assignedTo: 'John Smith',
    },
    {
      id: 'TKT002',
      customer: 'John Smith',
      issueType: 'Delivery Delay',
      responseTime: '15 minutes',
      resolutionTime: '--',
      date: '02/12/24',
      status: 'Open',
      assignedTo: 'Emily Johnson',
    },
    {
      id: 'TKT003',
      customer: 'Emily Johnson',
      issueType: 'Refund Request',
      responseTime: '30 minutes',
      resolutionTime: '--',
      date: '03/12/24',
      status: 'Open',
      assignedTo: 'Michael Brown',
    },
    {
      id: 'TKT004',
      customer: 'Michael Brown',
      issueType: 'Product Defect',
      responseTime: '1 hour',
      resolutionTime: '--',
      date: '04/12/24',
      status: 'Open',
      assignedTo: 'Sophia Martinez',
    },
    {
      id: 'TKT005',
      customer: 'Sophia Martinez',
      issueType: 'Order Cancellation',
      responseTime: '15 minutes',
      resolutionTime: '--',
      date: '05/12/24',
      status: 'Open',
      assignedTo: 'David Davis',
    },
    {
      id: 'TKT006',
      customer: 'David Davis',
      issueType: 'Refund Request',
      responseTime: '30 minutes',
      resolutionTime: '2 hours',
      date: '06/12/24',
      status: 'In Progress',
      assignedTo: 'Olivia Wilson',
    },
    {
      id: 'TKT007',
      customer: 'Olivia Wilson',
      issueType: 'Payment Issue',
      responseTime: '30 minutes',
      resolutionTime: '2 hours',
      date: '07/12/24',
      status: 'Resolved',
      assignedTo: 'John Smith',
    },
    {
      id: 'TKT008',
      customer: 'James Anderson',
      issueType: 'Delivery Delay',
      responseTime: '15 minutes',
      resolutionTime: '--',
      date: '08/12/24',
      status: 'Open',
      assignedTo: 'Emily Johnson',
    },
  ];

  const assignablePeople = ['John Doe', 'John Smith', 'Michael Brown'];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open':
        return 'bg-red-500 text-white';
      case 'In Progress':
        return 'bg-yellow-500 text-white';
      case 'Resolved':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const handleActionClick = (event, ticket) => {
    setActionAnchor(event.currentTarget);
    setSelectedTicket(ticket);
  };

  const handleActionClose = () => {
    setActionAnchor(null);
    setSelectedTicket(null);
  };

  const handleView = () => {
    if (selectedTicket) {
      navigate(`/customer-support/ticket-detail/${selectedTicket.id}`);
    }
    handleActionClose();
  };

  const handleAssign = () => {
    handleActionClose();
    setAssignDialogOpen(true);
  };

  const handleAssignClose = () => {
    setAssignDialogOpen(false);
    setSearchQuery('');
  };

  const handleSelectAssignee = (person) => {
    console.log('Assign ticket to:', person, selectedTicket);
    // Update ticket assignment
    handleAssignClose();
  };

  const filteredPeople = assignablePeople.filter((person) =>
    person.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <TableContainer
        component={Paper}
        className="border border-gray-300 rounded-lg overflow-hidden"
        elevation={0}
      >
        <Table>
          <TableHead>
            <TableRow className="bg-gray-100">
              <TableCell className="font-bold text-xs text-gray-500 py-3">Ticket ID</TableCell>
              <TableCell className="font-bold text-xs text-gray-500 py-3">Customer</TableCell>
              <TableCell className="font-bold text-xs text-gray-500 py-3">Issue Type</TableCell>
              <TableCell className="font-bold text-xs text-gray-500 py-3">Response Time</TableCell>
              <TableCell className="font-bold text-xs text-gray-500 py-3">Resolution Time</TableCell>
              <TableCell className="font-bold text-xs text-gray-500 py-3">Date</TableCell>
              <TableCell className="font-bold text-xs text-gray-500 py-3">Status</TableCell>
              <TableCell className="font-bold text-xs text-gray-500 py-3">Assigned To</TableCell>
              <TableCell className="font-bold text-xs text-gray-500 py-3">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.map((ticket, index) => (
              <TableRow
                key={ticket.id}
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}
              >
                <TableCell className="py-4 text-gray-900">#{ticket.id}</TableCell>
                <TableCell className="py-4 text-gray-900 font-medium">{ticket.customer}</TableCell>
                <TableCell className="py-4 text-gray-900">{ticket.issueType}</TableCell>
                <TableCell className="py-4 text-gray-900">{ticket.responseTime}</TableCell>
                <TableCell className="py-4 text-gray-900">{ticket.resolutionTime}</TableCell>
                <TableCell className="py-4 text-gray-900">{ticket.date}</TableCell>
                <TableCell className="py-4">
                  <div className="flex items-center gap-1">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        ticket.status
                      )}`}
                    >
                      {ticket.status}
                    </span>
                    <Icon icon="mdi:chevron-down" width={16} height={16} className="text-gray-600" />
                  </div>
                </TableCell>
                <TableCell className="py-4 text-gray-900">{ticket.assignedTo}</TableCell>
                <TableCell className="py-4">
                  <button
                    onClick={(e) => handleActionClick(e, ticket)}
                    className="p-1 hover:bg-gray-200 rounded transition-colors"
                  >
                    <Icon icon="mdi:menu" width={20} height={20} className="text-gray-600" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Action Menu */}
      <Menu
        anchorEl={actionAnchor}
        open={Boolean(actionAnchor)}
        onClose={handleActionClose}
        PaperProps={{
          sx: {
            mt: '0.5rem',
            minWidth: 150,
            borderRadius: '0.5rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          onClick={handleView}
          sx={{
            fontSize: '0.875rem',
            py: '0.75rem',
            px: '1rem',
            '&:hover': {
              bgcolor: 'rgba(248, 6, 157, 0.1)',
            },
          }}
        >
          View
        </MenuItem>
        <MenuItem
          onClick={handleAssign}
          sx={{
            fontSize: '0.875rem',
            py: '0.75rem',
            px: '1rem',
            '&:hover': {
              bgcolor: 'rgba(248, 6, 157, 0.1)',
            },
          }}
        >
          Assign
        </MenuItem>
      </Menu>

      {/* Assign Dialog */}
      <Dialog
        open={assignDialogOpen}
        onClose={handleAssignClose}
        PaperProps={{
          sx: {
            borderRadius: '0.75rem',
            minWidth: 400,
            maxWidth: 500,
          },
        }}
      >
        <DialogTitle className="font-semibold text-gray-900 pb-2">ASSIGNED TO</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            variant="outlined"
            size="small"
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                borderRadius: '0.5rem',
              },
            }}
          />
          <Box className="border border-gray-200 rounded-lg">
            {filteredPeople.length > 0 ? (
              filteredPeople.map((person, index) => (
                <Box
                  key={person}
                  onClick={() => handleSelectAssignee(person)}
                  className={`px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors ${
                    index !== filteredPeople.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <Typography className="text-sm text-gray-900">{person}</Typography>
                </Box>
              ))
            ) : (
              <Box className="px-4 py-3">
                <Typography className="text-sm text-gray-500">No results found</Typography>
              </Box>
            )}
          </Box>
        </DialogContent>
      </Dialog>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <span className="text-sm text-gray-600">Page {page}</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
            className="p-1 text-gray-600 hover:text-pink-600 disabled:text-gray-300 disabled:cursor-not-allowed"
          >
            <Icon icon="mdi:chevron-left" width={20} height={20} />
          </button>
          {[1, 2, 3, 4, 5].map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setPage(pageNum)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                page === pageNum
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {pageNum}
            </button>
          ))}
          <button
            onClick={() => setPage(Math.min(5, page + 1))}
            disabled={page === 5}
            className="p-1 text-gray-600 hover:text-pink-600 disabled:text-gray-300 disabled:cursor-not-allowed"
          >
            <Icon icon="mdi:chevron-right" width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupportTable;


