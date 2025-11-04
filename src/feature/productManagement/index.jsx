import ProductManagementHeading from './components/ProductManagementHeading';
import ProductManagementTable from './components/ProductManagementTable';
import AddProductChooser from './components/AddProductChooser';
import { Box } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductManagement = () => {
  const [chooserOpen, setChooserOpen] = useState(false);
  const navigate = useNavigate();

  const openChooser = () => setChooserOpen(true);
  const closeChooser = () => setChooserOpen(false);
  const goToAddBulkProduct = () => {
    closeChooser();
    navigate('/product-management/add-bulk');
  };
   const goToAddProduct = () => {
    closeChooser();
    navigate('/product-management/add-product');
  };
  return (
    <Box>
      <ProductManagementHeading onAddProductClick={openChooser} onFilterClick={() => setChooserOpen(true)} />
      <ProductManagementTable />
      <AddProductChooser open={chooserOpen} onClose={closeChooser} onBulkUpload={goToAddBulkProduct} onOneProduct={goToAddProduct} />
    </Box>
  );
};

export default ProductManagement;

