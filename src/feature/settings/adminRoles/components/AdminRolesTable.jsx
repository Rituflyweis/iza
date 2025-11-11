import { IconButton, Switch, Box } from '@mui/material';
import { Visibility, Edit, Delete } from '@mui/icons-material';

import CustomTable from '../../../../components/CustomTable';

const AdminRolesTable = ({ rows, onToggleStatus, onEdit }) => {
  const columns = [
    { id: 'roleName', label: 'Role Name' },
    { id: 'assignedUser', label: 'Assigned User' },
    { id: 'permissions', label: 'Permissions' },
    { id: 'status', label: 'Status' },
    {
      id: 'actions',
      label: 'Action',
      render: (row) => (
        <Box display="flex" alignItems="center" gap={1.5}>
          <IconButton size="small" sx={{ color: 'text.secondary' }}>
            <Visibility fontSize="small" />
          </IconButton>
          <Switch
            size="small"
            checked={row.status === 'Active'}
            onChange={() => onToggleStatus(row.id)}
            sx={{
              '& .MuiSwitch-switchBase.Mui-checked': {
                color: '#ec4899',
              },
              '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                backgroundColor: '#ec4899',
              },
            }}
          />
          <IconButton
            size="small"
            sx={{ color: 'text.secondary' }}
            onClick={() => onEdit(row)}
          >
            <Edit fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: 'text.secondary' }}>
            <Delete fontSize="small" />
          </IconButton>
        </Box>
      ),
    },
  ];

  return <CustomTable columns={columns} rows={rows} />;
};

export default AdminRolesTable;

