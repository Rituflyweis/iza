import { useState, useEffect } from 'react';
import ProductManagementHeading from './components/ProductManagementHeading';
import ProductManagementTable from './components/ProductManagementTable';
import { AddProductChooser } from '../../components';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axios';
import { useAppDispatch } from '../../store/hooks';
import { showLoader, hideLoader } from '../../store/slices/loaderSlice';
import useToast from '../../hooks/useToast';

const ProductManagement = () => {
  const dispatch = useAppDispatch();
  const { showError, showSuccess } = useToast();
  const [chooserOpen, setChooserOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      dispatch(showLoader('Loading products...'));

      const response = await axiosInstance.get('/Product/all/getAllProducts', {
        params: {
          page: page,
          limit: 10,
        },
      });
      
      // Transform API response to match table structure
      const responseData = response.data?.data || response.data;
      
      if (Array.isArray(responseData)) {
        setProducts(responseData);
        // If API returns pagination info
        if (response.data?.pagination) {
          setTotalPages(response.data.pagination.totalPages || 1);
        }
      } else if (responseData?.products) {
        setProducts(responseData.products);
        setTotalPages(responseData.totalPages || responseData.pagination?.totalPages || 1);
      } else {
        setProducts([]);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Failed to load products. Please try again.';
      showError(errorMessage);
      console.error('Error fetching products:', error);
      setProducts([]);
    } finally {
      setLoading(false);
      dispatch(hideLoader());
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      dispatch(showLoader('Deleting product...'));

      await axiosInstance.delete(`/product/${productId}`);

      showSuccess('Product deleted successfully!');
      
      // Refresh the product list after successful deletion
      await fetchProducts();
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Failed to delete product. Please try again.';
      showError(errorMessage);
      console.error('Error deleting product:', error);
    } finally {
      dispatch(hideLoader());
    }
  };

  const handleToggleStatus = async (productId, currentStatus) => {
    try {
      dispatch(showLoader('Updating product status...'));

      await axiosInstance.patch(`/product/${productId}`, {
        isActive: !currentStatus,
      });

      showSuccess('Product status updated successfully!');
      
      // Refresh the product list after successful update
      await fetchProducts();
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Failed to update product status. Please try again.';
      showError(errorMessage);
      console.error('Error updating product status:', error);
      // Revert the change on error
      await fetchProducts();
    } finally {
      dispatch(hideLoader());
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

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
      <ProductManagementHeading onAddProductClick={openChooser} />
      <ProductManagementTable 
        products={products}
        loading={loading}
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onDeleteProduct={handleDeleteProduct}
        onToggleStatus={handleToggleStatus}
        onRefresh={fetchProducts}
      />
      <AddProductChooser open={chooserOpen} onClose={closeChooser} onBulkUpload={goToAddBulkProduct} onOneProduct={goToAddProduct} />
    </Box>
  );
};

export default ProductManagement;

