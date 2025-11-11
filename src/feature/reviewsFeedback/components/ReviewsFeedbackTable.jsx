import { Icon } from '@iconify/react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

const reviewsData = [
  {
    id: '#12345',
    product: 'Eco-Friendly Water Bottle',
    customer: 'Sophia Clark',
    rating: '4 stars',
    review: 'Great product, keeps my water cold for hours!',
    date: '2024-01-15',
    status: 'Approved',
    ratingValue: 4,
    reviewCount: 1,
    title: 'Great sound quality',
    submittedBy: 'Krunal Ramesh',
    vendorName: 'Lakshmi Traders',
    email: 'rameshKGo@gmail.com',
    phone: '+91 9876543210',
    address: '12th Cross, Malleswaram, Bengaluru',
    productsOffered: 'Organic beauty products and herbal skincare',
    website: 'www.lakshmitraders.in | @lakshmitraders',
    uploadedForm: 'Filled All Fields',
    adminNotes: 'Looks promising. Follow up.',
    applicationStatus: 'New',
  },
  {
    id: '#12346',
    product: 'Organic Cotton T-Shirt',
    customer: 'Ethan Carter',
    rating: '5 stars',
    review: 'Love the soft material and perfect fit.',
    date: '2024-01-16',
    status: 'Approved',
    ratingValue: 5,
    reviewCount: 2,
    title: 'Perfect everyday tee',
    submittedBy: 'Elena Gupta',
    vendorName: 'Eco Threads',
    email: 'elena@ecothreads.com',
    phone: '+91 9988776655',
    address: 'Koramangala, Bengaluru',
    productsOffered: 'Sustainable clothing',
    website: 'www.ecothreads.com | @ecothreads',
    uploadedForm: 'Filled All Fields',
    adminNotes: 'Approved previously.',
    applicationStatus: 'Approved',
  },
  {
    id: '#12347',
    product: 'Reusable Shopping Bag',
    customer: 'Olivia Bennett',
    rating: '3 stars',
    review: 'Good quality, but a bit smaller than expected.',
    date: '2024-01-17',
    status: 'Pending',
    ratingValue: 3,
    reviewCount: 3,
    title: 'Handy but smaller than expected',
    submittedBy: 'Rohan Iyer',
    vendorName: 'Green Carry',
    email: 'support@greencarry.com',
    phone: '+91 9000001000',
    address: 'Indiranagar, Bengaluru',
    productsOffered: 'Reusable bags & accessories',
    website: 'www.greencarry.com | @greencarry',
    uploadedForm: 'Awaiting Additional Docs',
    adminNotes: 'Need to confirm sizing details.',
    applicationStatus: 'Pending',
  },
  {
    id: '#12348',
    product: 'Bamboo Toothbrush',
    customer: 'Liam Foster',
    rating: '5 stars',
    review: 'Excellent alternative to plastic toothbrushes.',
    date: '2024-01-18',
    status: 'Approved',
    ratingValue: 5,
    reviewCount: 4,
    title: 'Fantastic toothbrush',
    submittedBy: 'Anya Rao',
    vendorName: 'Bamboo Bliss',
    email: 'hello@bamboobliss.com',
    phone: '+91 9320023456',
    address: 'HSR Layout, Bengaluru',
    productsOffered: 'Eco-friendly bath essentials',
    website: 'www.bamboobliss.com | @bamboobliss',
    uploadedForm: 'Filled All Fields',
    adminNotes: 'Great candidate.',
    applicationStatus: 'Approved',
  },
  {
    id: '#12349',
    product: 'Natural Deodorant',
    customer: 'Ava Harper',
    rating: '4 stars',
    review: 'Works well, but the scent could be stronger.',
    date: '2024-01-19',
    status: 'Approved',
    ratingValue: 4,
    reviewCount: 2,
    title: 'Natural and effective',
    submittedBy: 'Maya Sinha',
    vendorName: 'Nature Fresh Co.',
    email: 'contact@naturefresh.co',
    phone: '+91 9456123789',
    address: 'Whitefield, Bengaluru',
    productsOffered: 'Organic personal care',
    website: 'www.naturefresh.co | @naturefresh',
    uploadedForm: 'Filled All Fields',
    adminNotes: 'Monitor future reviews.',
    applicationStatus: 'Approved',
  },
];

const statusStyles = {
  Approved: 'bg-green-100 text-green-700',
  Pending: 'bg-yellow-100 text-yellow-700',
  Rejected: 'bg-red-100 text-red-700',
};

const ReviewsFeedbackTable = ({ onViewReview }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <TableContainer component="div" sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: 750 }}>
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: '#F8FAFC',
                '& th': {
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#64748B',
                  borderBottom: '1px solid #E2E8F0',
                },
              }}
            >
              <TableCell>Review ID</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Review Text</TableCell>
              <TableCell>Date Submitted</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reviewsData.map((review, index) => (
              <TableRow
                key={review.id}
                sx={{
                  backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F9FAFB',
                  '& td': {
                    fontSize: '13px',
                    color: '#475569',
                    borderBottom: '1px solid #E2E8F0',
                  },
                }}
              >
                <TableCell sx={{ fontWeight: 600, color: '#111827' }}>{review.id}</TableCell>
                <TableCell>{review.product}</TableCell>
                <TableCell>{review.customer}</TableCell>
                <TableCell>{review.rating}</TableCell>
                <TableCell sx={{ maxWidth: 240 }}>
                  <p className="line-clamp-2">{review.review}</p>
                </TableCell>
                <TableCell>{review.date}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      statusStyles[review.status] || 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {review.status}
                  </span>
                </TableCell>
                <TableCell align="center">
                  <button
                    aria-label="View review"
                    onClick={() => onViewReview?.(review)}
                    className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                  >
                    <Icon icon="mdi:eye-outline" width={18} height={18} />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="flex items-center justify-between px-6 py-4 text-sm text-gray-500">
        <span>Page 1</span>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`h-8 w-8 rounded-full text-sm font-semibold transition ${
                page === 1
                  ? 'bg-pink-600 text-white shadow-sm'
                  : 'bg-white border border-gray-200 text-gray-500 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsFeedbackTable;

