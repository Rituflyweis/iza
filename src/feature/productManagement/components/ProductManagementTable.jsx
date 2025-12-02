import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Chip,
  Switch,
  CircularProgress,
} from '@mui/material';
import { Icon } from '@iconify/react';
import { DeleteModal } from '../../../components';

const ProductManagementTable = ({ 
  products = [], 
  loading = false,
  page = 1,
  totalPages = 1,
  onPageChange,
  onDeleteProduct,
  onToggleStatus,
}) => {
  const navigate = useNavigate();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  // Transform API product data to match table structure
  const transformProduct = (product) => {
    return {
      id: product._id || product.id,
      name: product.name || product.productName || 'N/A',
      brand: product.brand || 'N/A',
      category: product.category || product.categoryName || 'N/A',
      subCategory: product.subCategory || product.subCategoryName || 'N/A',
      price: product.price ? `₹${product.price}` : product.sellingPrice ? `₹${product.sellingPrice}` : 'N/A',
      quantity: product.quantity || product.stock || product.inventory || 0,
      tag: product.tag || product.label || product.badge || 'New',
      image: product.image || product.imageUrl || product.thumbnail || 'https://via.placeholder.com/120',
      isActive: product.isActive !== undefined ? product.isActive : product.status === 'active' || product.status === 'published',
      sku: product.sku || product.SKU || `#${product._id || product.id}`,
    };
  };

  const transformedProducts = products.map(transformProduct);

  const handleView = (productId) => {
    navigate(`/product-management/detail/${productId}`);
  };

  const handleEdit = (productId) => {
    navigate(`/product-management/edit/${productId}`);
  };

  const handleDelete = (productId) => {
    const product = transformedProducts.find((p) => p.id === productId);
    setProductToDelete(product);
    setDeleteModalOpen(true);
  };

  const handleToggleStatus = (productId) => {
    const product = transformedProducts.find((p) => p.id === productId);
    if (product && onToggleStatus) {
      onToggleStatus(productId, product.isActive);
    }
  };

  const handleConfirmDelete = async () => {
    if (productToDelete && onDeleteProduct) {
      await onDeleteProduct(productToDelete.id);
    }
    setDeleteModalOpen(false);
    setProductToDelete(null);
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
                #
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Product
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Brand
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Category
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Sub-category
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Price
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Quantity
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Tag
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
            {loading ? (
              <TableRow>
                <TableCell colSpan={10} sx={{ textAlign: 'center', py: '3rem' }}>
                  <CircularProgress size={40} sx={{ color: '#F8069D' }} />
                  <Typography sx={{ mt: '1rem', color: '#5A6678' }}>Loading products...</Typography>
                </TableCell>
              </TableRow>
            ) : transformedProducts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={10} sx={{ textAlign: 'center', py: '3rem' }}>
                  <Typography sx={{ color: '#5A6678' }}>No products found</Typography>
                </TableCell>
              </TableRow>
            ) : (
              transformedProducts.map((product, index) => (
                <TableRow
                  key={product.id}
                  sx={{
                    bgcolor: index % 2 === 0 ? '#fff' : '#FAFAFA',
                    '&:hover': {
                      bgcolor: '#F5F5F5',
                    },
                  }}
                >
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{index + 1 + (page - 1) * 10}</TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Box
                        component="img"
                        src={product.image}
                        alt={product.name}
                        sx={{ width: 48, height: 48, borderRadius: '0.5rem', objectFit: 'cover', border: '1px solid #eee' }}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/120';
                        }}
                      />
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontWeight: 600, fontSize: '0.9rem' }}>{product.name}</Typography>
                        <Typography sx={{ fontSize: '0.75rem', color: '#5A6678' }}>{product.sku}</Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{product.brand}</TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{product.category}</TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{product.subCategory}</TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{product.price}</TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{product.quantity}</TableCell>
                  <TableCell sx={{ py: '1rem' }}>
                    <Chip
                      label={product.tag}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(248, 6, 157, 0.08)',
                        color: '#F8069D',
                        fontWeight: 600,
                        borderRadius: '0.75rem',
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ py: '1rem' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Switch
                        checked={product.isActive}
                        onChange={() => handleToggleStatus(product.id)}
                        color="primary"
                        inputProps={{ 'aria-label': `toggle visibility ${product.name}` }}
                        disabled={loading}
                      />
                      <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: product.isActive ? '#22C55E' : '#9E9E9E' }}>
                        {product.isActive ? 'Visible' : 'Hidden'}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ py: '1rem' }}>
                    <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                      <IconButton
                        size="small"
                        onClick={() => handleView(product.id)}
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
                        onClick={() => handleEdit(product.id)}
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
                        onClick={() => handleDelete(product.id)}
                        disabled={loading}
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
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '1.5rem' }}>
        <Typography sx={{ color: '#5A6678', fontSize: '0.875rem' }}>
          Page {page} of {totalPages}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <IconButton
            onClick={() => onPageChange && onPageChange(Math.max(1, page - 1))}
            disabled={page === 1 || loading}
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
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (page <= 3) {
              pageNum = i + 1;
            } else if (page >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = page - 2 + i;
            }
            return (
              <Box
                key={pageNum}
                onClick={() => onPageChange && onPageChange(pageNum)}
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
                  cursor: loading ? 'default' : 'pointer',
                  pointerEvents: loading ? 'none' : 'auto',
                  '&:hover': {
                    bgcolor: page === pageNum ? '#C1057D' : '#E0E0E0',
                  },
                }}
              >
                {pageNum}
              </Box>
            );
          })}
          
          <IconButton
            onClick={() => onPageChange && onPageChange(Math.min(totalPages, page + 1))}
            disabled={page === totalPages || loading}
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

      {/* Delete Modal */}
      <DeleteModal
        open={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setProductToDelete(null);
        }}
        onConfirm={handleConfirmDelete}
        title="Delete Product"
        message="Are you sure you want to delete this product? This action cannot be undone."
        itemName={productToDelete?.name}
      />
    </Box>
  );
};

export default ProductManagementTable;

