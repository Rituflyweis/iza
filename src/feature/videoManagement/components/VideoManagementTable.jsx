import { useState } from 'react';
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
  Avatar,
} from '@mui/material';
import { Icon } from '@iconify/react';

const VideoManagementTable = () => {
  const [page, setPage] = useState(1);

  // Sample video data
  const videos = [
    {
      id: 1,
      thumbnail: 'https://via.placeholder.com/80x60?text=Thumbnail+1',
      title: 'Glowing Skin Tips',
      category: 'Makeup',
      type: 'Tutorial',
      uploadedOn: '19 Jul 2025',
      status: 'Scheduled',
    },
    {
      id: 2,
      thumbnail: 'https://via.placeholder.com/80x60?text=Thumbnail+2',
      title: 'Monsoon Makeup',
      category: 'Makeup',
      type: 'Testimonial',
      uploadedOn: '13 Jul 2025',
      status: 'Scheduled',
    },
    {
      id: 3,
      thumbnail: 'https://via.placeholder.com/80x60?text=Thumbnail+3',
      title: 'Summer Routine',
      category: 'Skin',
      type: 'Tutorial',
      uploadedOn: '10 Jul 2025',
      status: 'Published',
    },
    {
      id: 4,
      thumbnail: 'https://via.placeholder.com/80x60?text=Thumbnail+4',
      title: 'Winter Skincare',
      category: 'Skin',
      type: 'Promo',
      uploadedOn: '08 Jul 2025',
      status: 'Published',
    },
    {
      id: 5,
      thumbnail: 'https://via.placeholder.com/80x60?text=Thumbnail+5',
      title: 'Hair Care Basics',
      category: 'Hair',
      type: 'Tutorial',
      uploadedOn: '05 Jul 2025',
      status: 'Draft',
    },
    {
      id: 6,
      thumbnail: 'https://via.placeholder.com/80x60?text=Thumbnail+6',
      title: 'Nail Art Designs',
      category: 'Nails',
      type: 'Testimonial',
      uploadedOn: '03 Jul 2025',
      status: 'Published',
    },
    {
      id: 7,
      thumbnail: 'https://via.placeholder.com/80x60?text=Thumbnail+7',
      title: 'Facial Techniques',
      category: 'Skin',
      type: 'Tutorial',
      uploadedOn: '01 Jul 2025',
      status: 'Scheduled',
    },
    {
      id: 8,
      thumbnail: 'https://via.placeholder.com/80x60?text=Thumbnail+8',
      title: 'Bridal Look',
      category: 'Nails',
      type: 'Promo',
      uploadedOn: '19 Jul 2025',
      status: 'Draft',
    },
    {
      id: 9,
      thumbnail: 'https://via.placeholder.com/80x60?text=Thumbnail+9',
      title: 'Daily Makeup',
      category: 'Makeup',
      type: 'Tutorial',
      uploadedOn: '15 Jul 2025',
      status: 'Published',
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Scheduled':
        return <Icon icon="mdi:calendar" width="16" height="16" />;
      case 'Published':
        return <Icon icon="mdi:check-circle" width="16" height="16" />;
      case 'Draft':
        return <Icon icon="mdi:file-document-outline" width="16" height="16" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Published':
        return { color: '#4CAF50' };
      case 'Scheduled':
        return { color: '#FF9800' };
      case 'Draft':
        return { color: '#5A6678' };
      default:
        return { color: '#5A6678' };
    }
  };

  const handleEdit = (videoId) => {
    console.log(`Edit video ${videoId}`);
    // Implement edit logic
  };

  const handleDelete = (videoId) => {
    console.log(`Delete video ${videoId}`);
    // Implement delete logic
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
                S.No.
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Thumbnail
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Title
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Category
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Type
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Uploaded On
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Status
              </TableCell>
              <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#00000066', py: '0.75rem' }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {videos.map((video, index) => {
              const statusColor = getStatusColor(video.status);
              
              return (
                <TableRow
                  key={video.id}
                  sx={{
                    bgcolor: index % 2 === 0 ? '#fff' : '#FAFAFA',
                    '&:hover': {
                      bgcolor: '#F5F5F5',
                    },
                  }}
                >
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{video.id}</TableCell>
                  <TableCell sx={{ py: '1rem' }}>
                    <Avatar
                      variant="rounded"
                      src={video.thumbnail}
                      alt={video.title}
                      sx={{
                        width: 80,
                        height: 60,
                        borderRadius: '0.5rem',
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A', fontWeight: 500 }}>
                    {video.title}
                  </TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{video.category}</TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{video.type}</TableCell>
                  <TableCell sx={{ py: '1rem', color: '#1A1A1A' }}>{video.uploadedOn}</TableCell>
                  <TableCell sx={{ py: '1rem' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Box sx={{ color: statusColor.color, display: 'flex', alignItems: 'center' }}>
                        {getStatusIcon(video.status)}
                      </Box>
                      <Typography
                        sx={{
                          fontSize: '0.875rem',
                          color: statusColor.color,
                          fontWeight: 500,
                        }}
                      >
                        {video.status}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ py: '1rem' }}>
                    <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                      <IconButton
                        size="small"
                        onClick={() => handleEdit(video.id)}
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
                        onClick={() => handleDelete(video.id)}
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
              );
            })}
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
    </Box>
  );
};

export default VideoManagementTable;


