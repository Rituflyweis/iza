import { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  Typography,
} from '@mui/material';
import { Icon } from '@iconify/react';

const UserManagementTable = () => {
  const [page, setPage] = useState(1);
  const [roles, setRoles] = useState({});

  // Sample data
  const users = [
    { id: 1, name: 'Marie Wilson', phone: '555-234-1289', joinedDate: '01/12/24', lastLogin: 'HH:MM', role: 'Admin', status: 'Active' },
    { id: 2, name: 'John Smith', phone: '123-456-7890', joinedDate: '02/12/24', lastLogin: 'HH:MM', role: 'Order Manager', status: 'Inactive' },
    { id: 3, name: 'Emily Johnson', phone: '087-654-3210', joinedDate: '03/12/24', lastLogin: 'HH:MM', role: 'Support Staff', status: 'Active' },
    { id: 4, name: 'Michael Brown', phone: '555-123-4567', joinedDate: '04/12/24', lastLogin: 'HH:MM', role: 'Inventory Manager', status: 'Active' },
    { id: 5, name: 'Sophia Martinez', phone: '234-567-8901', joinedDate: '05/12/24', lastLogin: 'HH:MM', role: 'Admin', status: 'Active' },
    { id: 6, name: 'David Davis', phone: '345-678-9012', joinedDate: '06/12/24', lastLogin: 'HH:MM', role: 'Order Manager', status: 'Active' },
    { id: 7, name: 'Olivia Wilson', phone: '456-789-0123', joinedDate: '07/12/24', lastLogin: 'HH:MM', role: 'Support Staff', status: 'Active' },
    { id: 8, name: 'James Anderson', phone: '567-890-1234', joinedDate: '08/12/24', lastLogin: 'HH:MM', role: 'Inventory Manager', status: 'Inactive' },
    { id: 9, name: 'Ava Thomas', phone: '678-901-2345', joinedDate: '09/12/24', lastLogin: 'HH:MM', role: 'Admin', status: 'Active' },
  ];

  const handleRoleChange = (userId, newRole) => {
    setRoles((prev) => ({
      ...prev,
      [userId]: newRole,
    }));
    console.log(`Role changed for user ${userId} to ${newRole}`);
  };

  const handleView = (userId) => {
    console.log(`View user ${userId}`);
  };

  const handleEdit = (userId) => {
    console.log(`Edit user ${userId}`);
  };

  const handleDelete = (userId) => {
    console.log(`Delete user ${userId}`);
  };

  return (
    <Box>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          border: '1px solid #e0e0e0',
          borderRadius: '0.5rem',
          overflow: 'hidden',
        }}
      >
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ bgcolor: '#F5F5F5' }}>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                ID
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                User name
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Phone Number
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Joined date
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Last login
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Current Role
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Status
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => {
              const currentRole = roles[user.id] || user.role;
              const isActive = user.status === 'Active';
              
              return (
                <TableRow
                  key={user.id}
                  sx={{
                    bgcolor: index % 2 === 0 ? '#fff' : '#FAFAFA',
                    '&:hover': {
                      bgcolor: '#F5F5F5',
                    },
                  }}
                >
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{user.id}</TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A', fontWeight: 500 }}>{user.name}</TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{user.phone}</TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{user.joinedDate}</TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{user.lastLogin}</TableCell>
                  <TableCell sx={{ py: '1rem' }}>
                    <FormControl size="small" sx={{ minWidth: 150 }}>
                      <Select
                        value={currentRole}
                        onChange={(e) => handleRoleChange(user.id, e.target.value)}
                        sx={{
                          fontSize: '0.875rem',
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
                        IconComponent={() => <Icon icon="mdi:chevron-down" width="20" height="20" />}
                      >
                        <MenuItem value="Admin">Admin</MenuItem>
                        <MenuItem value="Order Manager">Order Manager</MenuItem>
                        <MenuItem value="Support Staff">Support Staff</MenuItem>
                        <MenuItem value="Inventory Manager">Inventory Manager</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell sx={{ py: '1rem' }}>
                    <Chip
                      label={user.status}
                      size="small"
                      sx={{
                        bgcolor: isActive ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                        color: isActive ? '#4CAF50' : '#F44336',
                        fontWeight: 500,
                        fontSize: '0.75rem',
                        borderRadius: '1rem',
                        px: '0.5rem',
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ py: '1rem' }}>
                    <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                      <IconButton
                        size="small"
                        onClick={() => handleView(user.id)}
                        sx={{
                          color: '#5A6678',
                          '&:hover': {
                            bgcolor: 'rgba(248, 6, 157, 0.1)',
                            color: '#F8069D',
                          },
                        }}
                      >
                        <Icon icon="mdi:eye" width="18" height="18" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleEdit(user.id)}
                        sx={{
                          color: '#5A6678',
                          '&:hover': {
                            bgcolor: 'rgba(248, 6, 157, 0.1)',
                            color: '#F8069D',
                          },
                        }}
                      >
                        <Icon icon="mdi:pencil" width="18" height="18" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleDelete(user.id)}
                        sx={{
                          color: '#5A6678',
                          '&:hover': {
                            bgcolor: 'rgba(248, 6, 157, 0.1)',
                            color: '#F8069D',
                          },
                        }}
                      >
                        <Icon icon="mdi:delete" width="18" height="18" />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '1.5rem' }}>
        <Typography sx={{ color: '#5A6678', fontSize: '0.875rem' }}>
          Page {page}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <IconButton
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
            sx={{
              color: '#5A6678',
              '&:hover': {
                bgcolor: 'rgba(248, 6, 157, 0.1)',
                color: '#F8069D',
              },
              '&.Mui-disabled': {
                color: '#9E9E9E',
              },
            }}
          >
            <Icon icon="mdi:chevron-left" width="20" height="20" />
          </IconButton>
          
          {[1, 2, 3, 4, 5].map((pageNum) => (
            <Box
              key={pageNum}
              onClick={() => setPage(pageNum)}
              sx={{
                minWidth: '2rem',
                height: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                fontSize: '0.875rem',
                fontWeight: page === pageNum ? 600 : 400,
                bgcolor: page === pageNum ? '#F8069D' : '#F5F5F5',
                color: page === pageNum ? '#fff' : '#5A6678',
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: page === pageNum ? '#C1057D' : '#E0E0E0',
                },
              }}
            >
              {pageNum}
            </Box>
          ))}
          
          <IconButton
            onClick={() => setPage(Math.min(5, page + 1))}
            disabled={page === 5}
            sx={{
              color: '#5A6678',
              '&:hover': {
                bgcolor: 'rgba(248, 6, 157, 0.1)',
                color: '#F8069D',
              },
              '&.Mui-disabled': {
                color: '#9E9E9E',
              },
            }}
          >
            <Icon icon="mdi:chevron-right" width="20" height="20" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default UserManagementTable;

