import { useState } from 'react';
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem, Button } from '@mui/material';

const AddEmailHeader = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectTemplate = (template) => {
    console.log('Selected template:', template);
    handleClose();
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <button onClick={() => navigate('/notification')} className="p-1 rounded hover:bg-gray-100">
          <Icon icon="mdi:chevron-left" width={22} height={22} />
        </button>
        <span className="font-semibold text-gray-900 text-base">Email</span>
      </div>
      <Button
        onClick={handleClick}
        className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-2 rounded-md text-sm"
        sx={{
          bgcolor: '#F8069D',
          color: '#fff',
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.875rem',
          '&:hover': {
            bgcolor: '#E0058A',
          },
        }}
      >
        Template
        <Icon icon="mdi:chevron-down" width={18} height={18} style={{ marginLeft: 4 }} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: '0.5rem',
            mt: 1,
          },
        }}
      >
        <MenuItem onClick={() => handleSelectTemplate('Welcome Email')}>Welcome Email</MenuItem>
        <MenuItem onClick={() => handleSelectTemplate('Order Confirmation')}>Order Confirmation</MenuItem>
        <MenuItem onClick={() => handleSelectTemplate('Password Reset')}>Password Reset</MenuItem>
        <MenuItem onClick={() => handleSelectTemplate('Newsletter')}>Newsletter</MenuItem>
      </Menu>
    </div>
  );
};

export default AddEmailHeader;



