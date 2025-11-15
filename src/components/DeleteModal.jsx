import { Dialog, Box, Typography, Button, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import { forwardRef } from 'react';
import { Slide } from '@mui/material';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteModal = ({
  open,
  onClose,
  onConfirm,
  title = 'Delete Item',
  message = 'Are you sure you want to delete this item?',
  itemName = '',
  confirmText = 'Delete',
  cancelText = 'Cancel',
}) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '1rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        },
      }}
    >
      <Box sx={{ p: '2rem', position: 'relative' }}>
        {/* Close button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: '1rem',
            top: '1rem',
            color: '#5A6678',
            '&:hover': {
              bgcolor: 'rgba(0,0,0,0.04)',
            },
          }}
          size="small"
        >
          <Icon icon="mdi:close" width={20} height={20} />
        </IconButton>

        {/* Icon */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: '1.5rem',
          }}
        >
          <Box
            sx={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              bgcolor: 'rgba(244, 67, 54, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon
              icon="mdi:delete-outline"
              width={32}
              height={32}
              style={{ color: '#F44336' }}
            />
          </Box>
        </Box>

        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            fontWeight: 600,
            color: '#1A1A1A',
            mb: '0.75rem',
            fontSize: '1.25rem',
          }}
        >
          {title}
        </Typography>

        {/* Message */}
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: '#5A6678',
            mb: '2rem',
            fontSize: '0.875rem',
            lineHeight: 1.6,
          }}
        >
          {message}
          {itemName && (
            <Box
              component="span"
              sx={{
                fontWeight: 600,
                color: '#1A1A1A',
                display: 'block',
                mt: '0.5rem',
              }}
            >
              "{itemName}"
            </Box>
          )}
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
          }}
        >
          <Button
            onClick={onClose}
            variant="outlined"
            sx={{
              px: '2rem',
              py: '0.75rem',
              borderRadius: '0.5rem',
              borderColor: '#1A1A1A',
              color: '#1A1A1A',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '0.875rem',
              '&:hover': {
                borderColor: '#1A1A1A',
                bgcolor: 'rgba(0,0,0,0.04)',
              },
            }}
          >
            {cancelText}
          </Button>
          <Button
            onClick={handleConfirm}
            variant="contained"
            sx={{
              px: '2rem',
              py: '0.75rem',
              borderRadius: '0.5rem',
              bgcolor: '#F44336',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '0.875rem',
              '&:hover': {
                bgcolor: '#D32F2F',
              },
            }}
          >
            {confirmText}
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default DeleteModal;



