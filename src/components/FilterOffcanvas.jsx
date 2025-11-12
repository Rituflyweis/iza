import { Drawer, IconButton, Box } from '@mui/material';
import { Icon } from '@iconify/react';

const FilterOffcanvas = ({
  open,
  onClose,
  title = 'Filter',
  onReset,
  onApply,
  onCancel,
  anchor = 'right',
  children,
  width = 400,
}) => {
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      onClose();
    }
  };

  const handleApply = () => {
    if (onApply) {
      onApply();
    }
    onClose();
  };

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: width },
          maxWidth: '100vw',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          bgcolor: '#fff',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: '1rem 1.5rem',
            borderBottom: '1px solid #e0e0e0',
            position: 'sticky',
            top: 0,
            bgcolor: '#fff',
            zIndex: 1,
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              p: 0,
              color: '#1A1A1A',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' },
            }}
          >
            <Icon icon="mdi:chevron-left" width={24} height={24} />
          </IconButton>

          <Box
            component="span"
            sx={{
              fontSize: '1.125rem',
              fontWeight: 600,
              color: '#1A1A1A',
            }}
          >
            {title}
          </Box>

          {onReset && (
            <IconButton
              onClick={onReset}
              sx={{
                p: 0,
                color: '#F8069D',
                '&:hover': { bgcolor: 'rgba(248, 6, 157, 0.1)' },
              }}
            >
              <Icon icon="mdi:refresh" width={24} height={24} />
            </IconButton>
          )}
        </Box>

        {/* Body - Scrollable */}
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            p: '1.5rem',
          }}
        >
          {children}
        </Box>

        {/* Footer */}
        <Box
          sx={{
            display: 'flex',
            gap: '1rem',
            p: '1rem 1.5rem',
            borderTop: '1px solid #e0e0e0',
            position: 'sticky',
            bottom: 0,
            bgcolor: '#fff',
            zIndex: 1,
          }}
        >
          <Box
            component="button"
            onClick={handleCancel}
            sx={{
              flex: 1,
              py: '0.75rem',
              px: '1.5rem',
              borderRadius: '0.5rem',
              border: '1px solid #1A1A1A',
              bgcolor: '#fff',
              color: '#1A1A1A',
              fontSize: '0.875rem',
              fontWeight: 600,
              cursor: 'pointer',
              '&:hover': {
                bgcolor: '#f5f5f5',
              },
            }}
          >
            Cancel
          </Box>
          <Box
            component="button"
            onClick={handleApply}
            sx={{
              flex: 1,
              py: '0.75rem',
              px: '1.5rem',
              borderRadius: '0.5rem',
              bgcolor: '#F8069D',
              color: '#fff',
              fontSize: '0.875rem',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              '&:hover': {
                bgcolor: '#C1057D',
              },
            }}
          >
            Apply
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default FilterOffcanvas;

