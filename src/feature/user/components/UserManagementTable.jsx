import { useState } from 'react';
import { Box, Chip, IconButton, Select, MenuItem, FormControl, Typography, Menu } from '@mui/material';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { DeleteModal, CustomTable } from '../../../components';
import { formatDate, getFullName } from '../../../utils/constants';

const UserManagementTable = ({ users = [], loading = false, onDeleteUser, onRefresh }) => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [roles, setRoles] = useState({});
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const handleRoleChange = (userId, newRole) => {
    setRoles((prev) => ({
      ...prev,
      [userId]: newRole,
    }));
    console.log(`Role changed for user ${userId} to ${newRole}`);
  };

  const handleView = (user) => {
    navigate(`/user-detail/${user._id || user.id}`);
  };

  const handleEdit = (user) => {
    console.log(`Edit user ${user._id || user.id}`);
  };

  const handleDelete = (user) => {
    setUserToDelete(user);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (userToDelete) {
      const userId = userToDelete._id || userToDelete.id;
      if (userId && onDeleteUser) {
        await onDeleteUser(userId);
      }
    }
    setDeleteModalOpen(false);
    setUserToDelete(null);
  };

  const columns = [
    {
      id: 'id',
      label: 'ID',
      accessor: (row) => row.displayId,
    },
    {
      id: 'name',
      label: 'User name',
      accessor: (row) => row.name,
      format: (value) => <span className="capitalize">{value}</span>,
    },
    {
      id: 'phone',
      label: 'Phone Number',
    },
    {
      id: 'joinedDate',
      label: 'Joined date',
    },
    {
      id: 'lastLogin',
      label: 'Last login',
    },
    {
      id: 'role',
      label: 'Current Role',
      type: 'select',
      options: ['Admin', 'Support Staff', 'Inventory Manager', 'Order Manager', 'USER'],
    },
    {
      id: 'status',
      label: 'Status',
    },
    {
      id: 'actions',
      label: 'Action',
    },
  ];

  const rows =
    loading || !users.length
      ? []
      : users.map((user, index) => {
          const userId = user._id || user.id;
          const fullName = getFullName(user.firstName, user.lastName);
          const phoneNumber = user.mobileNumber ? `${user.countryCode || ''} ${user.mobileNumber}`.trim() : '-';
          const joinedDate = formatDate(user.createdAt);
          const lastLogin = formatDate(user.updatedAt);
          const status = user.userStatus || 'Active';
          const role = roles[userId] || user.userType || 'USER';

          return {
            id: userId,
            displayId: userId?.slice(-8) || index + 1,
            name: fullName,
            phone: phoneNumber,
            joinedDate,
            lastLogin,
            role,
            status,
            raw: user,
          };
        });

  const handleRoleChangeWrapper = (rowId, newRole) => {
    handleRoleChange(rowId, newRole);
  };

  const renderStatusChip = (row) => {
    const isActive = row.status === 'Active';
    return (
      <Chip
        label={row.status}
        size="small"
        className="capitalize font-medium text-xs rounded-full px-2"
        sx={{
          bgcolor: isActive ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
          color: isActive ? '#4CAF50' : '#F44336',
        }}
      />
    );
  };

  const enhancedColumns = columns.map((col) => {
    if (col.id === 'status') {
      return {
        ...col,
        render: (row) => renderStatusChip(row),
      };
    }
    if (col.id === 'role') {
      return {
        ...col,
        render: (row) => (
          <RoleDropdown
            userId={row.id}
            currentRole={row.role}
            onRoleChange={(newRole) => handleRoleChangeWrapper(row.id, newRole)}
          />
        ),
      };
    }
    if (col.id === 'actions') {
      return {
        ...col,
        render: (row) => (
          <Box sx={{ display: 'flex', gap: '0.5rem' }}>
            <IconButton
              size="small"
              onClick={() => handleView(row.raw)}
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
              onClick={() => handleEdit(row.raw)}
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
              onClick={() => handleDelete(row.raw)}
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
        ),
      };
    }
    return col;
  });

  return (
    <Box>
      {loading && !users.length ? (
        <Typography sx={{ mb: 2 }}>Loading...</Typography>
      ) : null}

      {!loading && users.length === 0 ? (
        <Typography sx={{ mb: 2 }}>No users found</Typography>
      ) : null}

      <CustomTable
        columns={enhancedColumns}
        rows={rows}
        onRoleChange={handleRoleChangeWrapper}
      />

      {/* Delete Modal */}
      <DeleteModal
        open={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setUserToDelete(null);
        }}
        onConfirm={handleConfirmDelete}
        title="Delete User"
        message="Are you sure you want to delete this user? This action cannot be undone."
        itemName={userToDelete ? getFullName(userToDelete.firstName, userToDelete.lastName) : ''}
      />
    </Box>
  );
};

const RoleDropdown = ({ userId, currentRole, onRoleChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (role) => {
    onRoleChange(role);
    handleClose();
  };

  const roles = ['Admin', 'Support Staff', 'Inventory Manager', 'Order Manager'];

  return (
    <>
      <Box
        onClick={handleClick}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
          px: '0.75rem',
          py: '0.5rem',
          borderRadius: '0.5rem',
          border: open ? '1px solid #F8069D' : '1px solid transparent',
          borderBottom: open ? '1px dashed #F8069D' : 'none',
          '&:hover': {
            bgcolor: '#F5F5F5',
          },
        }}
      >
        <Typography sx={{ fontSize: '0.875rem', color: '#1A1A1A' }} className="capitalize">{currentRole}</Typography>
        <Icon icon="mdi:chevron-down" width="18" height="18" />
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: '0.5rem',
            minWidth: 200,
            borderRadius: '0.5rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          },
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        {roles.map((role) => (
          <MenuItem
            key={role}
            onClick={() => handleSelect(role)}
            selected={role === currentRole}
            sx={{
              fontSize: '0.875rem',
              py: '0.75rem',
              px: '1rem',
              '&.Mui-selected': {
                bgcolor: 'rgba(248, 6, 157, 0.1)',
                '&:hover': {
                  bgcolor: 'rgba(248, 6, 157, 0.15)',
                },
              },
            }}
          >
            {role}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default UserManagementTable;

