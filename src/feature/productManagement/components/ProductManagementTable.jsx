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
} from '@mui/material';
import { Icon } from '@iconify/react';
import { DeleteModal } from '../../../components';

const ProductManagementTable = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  // Sample data
  const products = [
    { id: 1, name: 'Hydrating Serum', category: 'Skincare', subCategory: 'Face', price: '₹300', quantity: 20, tag: 'Sustainable' },
    { id: 2, name: 'Hydrating Serum', category: 'Skincare', subCategory: 'Face', price: '₹300', quantity: 20, tag: 'Sustainable' },
    { id: 3, name: 'Hydrating Serum', category: 'Skincare', subCategory: 'Face', price: '₹300', quantity: 20, tag: 'Sustainable' },
    { id: 4, name: 'Hydrating Serum', category: 'Skincare', subCategory: 'Face', price: '₹300', quantity: 20, tag: 'Sustainable' },
    { id: 5, name: 'Hydrating Serum', category: 'Skincare', subCategory: 'Face', price: '₹300', quantity: 20, tag: 'Sustainable' },
    { id: 6, name: 'Hydrating Serum', category: 'Skincare', subCategory: 'Face', price: '₹300', quantity: 20, tag: 'Sustainable' },
    { id: 7, name: 'Hydrating Serum', category: 'Skincare', subCategory: 'Face', price: '₹300', quantity: 20, tag: 'Sustainable' },
    { id: 8, name: 'Hydrating Serum', category: 'Skincare', subCategory: 'Face', price: '₹300', quantity: 20, tag: 'Sustainable' },
    { id: 9, name: 'Hydrating Serum', category: 'Skincare', subCategory: 'Face', price: '₹300', quantity: 20, tag: 'Sustainable' },
  ];

  const handleView = (productId) => {
    navigate(`/product-management/detail/${productId}`);
  };

  const handleEdit = (productId) => {
    console.log(`Edit product ${productId}`);
  };

  const handleDelete = (productId) => {
    const product = products.find(p => p.id === productId);
    setProductToDelete(product);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (productToDelete) {
      console.log(`Deleting product ${productToDelete.id}: ${productToDelete.name}`);
      // Implement actual delete logic here (API call, state update, etc.)
      // Example: deleteProduct(productToDelete.id);
    }
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
                Product Name
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
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow
                key={product.id}
                sx={{
                  bgcolor: index % 2 === 0 ? '#fff' : '#FAFAFA',
                  '&:hover': {
                    bgcolor: '#F5F5F5',
                  },
                }}
              >
                <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{product.id}</TableCell>
                <TableCell sx={{ py: '1rem', color: '#1A1A1A', fontWeight: 500 }}>{product.name}</TableCell>
                <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{product.category}</TableCell>
                <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{product.subCategory}</TableCell>
                <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{product.price}</TableCell>
                <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{product.quantity}</TableCell>
                <TableCell sx={{ py: '1rem' }}>
             {product.tag}
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '1.5rem' }}>
        <Typography sx={{ color: '#5A6678', fontSize: '0.875rem' }}>
          Page {page}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <IconButton
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
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
          
          {[1, 2, 3, 4, 5].map((pageNum) => (
            <Box
              key={pageNum}
              onClick={() => setPage(pageNum)}
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
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: page === pageNum ? '#C1057D' : '#E0E0E0',
                },
              }}
            >
              {pageNum}
            </Box>
          ))}
          
          <IconButton
            onClick={() => setPage(Math.min(5, page + 1))}
            disabled={page === 5}
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

