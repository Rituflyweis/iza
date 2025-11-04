import { Box, Modal, Button } from '@mui/material';

const modalStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const contentStyle = {
  bgcolor: '#000',
  borderRadius: '0.75rem',
  p: '0.75rem',
  display: 'flex',
  gap: '1rem',
};

const btnStyle = {
  bgcolor: '#fff',
  color: '#F8069D',
  textTransform: 'none',
  px: '1.25rem',
  py: '0.75rem',
  borderRadius: '0.75rem',
  fontWeight: 700,
  '&:hover': { bgcolor: '#fff' },
};

const AddProductChooser = ({ open, onClose, onBulkUpload, onOneProduct }) => {
  return (
    <Modal open={open} onClose={onClose} sx={modalStyle}>
      <Box sx={contentStyle}>
        <Button variant="contained" onClick={onBulkUpload} sx={btnStyle}>Bulk Upload</Button>
        <Button variant="contained" onClick={onOneProduct} sx={btnStyle}>One product</Button>
      </Box>
    </Modal>
  );
};

export default AddProductChooser;


