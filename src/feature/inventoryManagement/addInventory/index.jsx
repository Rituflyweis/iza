import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import AddInventoryHeader from './components/AddInventoryHeader';
import AddInventoryForm from './components/AddInventoryForm';

const AddInventory = ({ isEdit: isEditProp = false }) => {
  const params = useParams();
  const isEdit = isEditProp || Boolean(params.id);

  // For demo purposes, provide sample initial data in edit mode
  const initialData = isEdit
    ? {
        productName: 'Hydrating Serum',
        category: 'Skincare',
        subCategory: 'Serum',
        sku: 'HS30',
        stock: '150',
        expiry: '2026-12-31',
      }
    : undefined;

  return (
    <Box sx={{ width: '100%' }}>
      <AddInventoryHeader isEdit={isEdit} />
      <AddInventoryForm isEdit={isEdit} initialData={initialData} />
    </Box>
  );
};

export default AddInventory;


