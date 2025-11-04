import { Box, Button, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const rows = [
  { id: '123455', product: 'Lipstick', date: 'DD-MM-YYYY', quantity: 1, price: 'Rs.333', payment: 'Paid', status: 'Delivered' },
  { id: '123455', product: 'Lipstick', date: 'DD-MM-YYYY', quantity: 1, price: 'Rs.333', payment: 'Paid', status: 'Pending' },
  { id: '123455', product: 'Lipstick', date: 'DD-MM-YYYY', quantity: 1, price: '---', payment: 'Refunded', status: 'Cancelled' },
  { id: '123455', product: 'Lipstick', date: 'DD-MM-YYYY', quantity: 1, price: 'Rs.333', payment: 'Paid', status: 'Delivered' },
  { id: '123455', product: 'Lipstick', date: 'DD-MM-YYYY', quantity: 1, price: 'Rs.333', payment: 'Paid', status: 'Delivered' },
];

const StatusBadge = ({ label }) => {
  const styles = {
    Delivered: { background: 'rgba(76, 175, 80, 0.1)', color: '#4CAF50' },
    Pending: { background: 'rgba(255, 193, 7, 0.15)', color: '#F5A524' },
    Cancelled: { background: 'rgba(244, 67, 54, 0.12)', color: '#F44336' },
  }[label] || { background: '#eee', color: '#555' };

  return (
    <span
      style={{
        backgroundColor: styles.background,
        color: styles.color,
        borderRadius: '999px',
        padding: '4px 10px',
        fontSize: '12px',
        fontWeight: 600,
      }}
    >
      {label}
    </span>
  );
};

const OrderHistory = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '1rem' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <IconButton onClick={() => navigate(`/user-detail/${id || 1}`)} size="small" sx={{ p: 0 }}>
            <Icon icon="mdi:chevron-left" width={22} height={22} />
          </IconButton>
          <Box component="span" sx={{ fontWeight: 700, color: '#1A1A1A' }}>Order History</Box>
        </Box>
        <Box sx={{ display: 'flex', gap: '0.5rem' }}>
          <Button variant="contained" startIcon={<Icon icon="mdi:filter" width={18} height={18} color="#fff" />} sx={{ textTransform: 'none', bgcolor: '#F8069D', '&:hover': { bgcolor: '#C1057D' } }}>Filter</Button>
          <Button variant="contained" startIcon={<Icon icon="mdi:export-variant" width={18} height={18} color="#fff" />} sx={{ textTransform: 'none', bgcolor: '#F8069D', '&:hover': { bgcolor: '#C1057D' } }}>Export</Button>
        </Box>
      </Box>

      <div className="rounded-lg border border-gray-200 overflow-hidden">
        {/* header row */}
        <div className="hidden md:grid grid-cols-8 gap-4 bg-gray-100 px-4 py-3 text-[12px] font-extrabold text-black/40">
          <div>Order ID</div>
          <div>Product Name</div>
          <div>Order Date</div>
          <div>Quantity</div>
          <div>Price</div>
          <div>Payment Status</div>
          <div>Order Status</div>
          <div>Action</div>
        </div>

        {/* rows */}
        <div>
          {rows.map((r, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div key={idx}>
                <div className={`grid grid-cols-1 md:grid-cols-8 gap-4 items-center px-4 py-4 ${idx % 2 === 1 ? 'bg-[#FAFAFA]' : 'bg-white'}`}>
                  <div className="text-gray-900">{r.id}</div>
                  <div className="text-gray-900">{r.product}</div>
                  <div className="text-gray-900">{r.date}</div>
                  <div className="text-gray-900">{r.quantity}</div>
                  <div className="text-gray-900">{r.price}</div>
                  <div className="text-gray-900">{r.payment}</div>
                  <div><StatusBadge label={r.status} /></div>
                  <div>
                    <IconButton size="small" sx={{ color: '#5A6678' }} onClick={() => setExpandedIndex(isExpanded ? null : idx)}>
                      <Icon icon={isExpanded ? 'mdi:eye-off' : 'mdi:eye'} width={18} height={18} />
                    </IconButton>
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-4 py-5 border-t border-gray-200 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Product Details */}
                      <div>
                        <h3 className="text-sm font-extrabold text-black/60 mb-3">Product Details</h3>
                        <div className="space-y-3 text-sm">
                          <div className="grid grid-cols-3 gap-2">
                            <div className="font-semibold text-black/60">Product Name</div>
                            <div className="col-span-2 text-gray-900">Maybelline hydrating matte lipstick</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="font-semibold text-black/60">Quantity</div>
                            <div className="col-span-2 text-gray-900">2</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="font-semibold text-black/60">Price</div>
                            <div className="col-span-2 text-gray-900">200</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="font-semibold text-black/60">Coupons & Offers</div>
                            <div className="col-span-2 text-gray-900">20% off coupon for new user</div>
                          </div>
                        </div>
                      </div>

                      {/* Delivery Information */}
                      <div>
                        <h3 className="text-sm font-extrabold text-black/60 mb-3">Delivery Information</h3>
                        <div className="space-y-3 text-sm">
                          <div className="grid grid-cols-3 gap-2">
                            <div className="font-semibold text-black/60">Shipping Address</div>
                            <div className="col-span-2 text-gray-900">Lorem Ipsum</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="font-semibold text-black/60">Delivery Date</div>
                            <div className="col-span-2 text-gray-900">DD-MM-YYYY</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="font-semibold text-black/60">Delivery Status</div>
                            <div className="col-span-2 text-gray-900">Out for Delivery</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="font-semibold text-black/60">Courier Service</div>
                            <div className="col-span-2 text-gray-900">BlueDart</div>
                          </div>
                        </div>
                      </div>

                      {/* Payment Details */}
                      <div>
                        <h3 className="text-sm font-extrabold text-black/60 mb-3">Payment Details</h3>
                        <div className="space-y-3 text-sm">
                          <div className="grid grid-cols-3 gap-2">
                            <div className="font-semibold text-black/60">Payment Method</div>
                            <div className="col-span-2 text-gray-900">Credit Card</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="font-semibold text-black/60">Transaction ID</div>
                            <div className="col-span-2 text-gray-900">1113546565</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="font-semibold text-black/60">Refund Details</div>
                            <div className="col-span-2 text-gray-900">N/A</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="font-semibold text-black/60">Points Earned</div>
                            <div className="col-span-2 text-gray-900">200 Points</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '1.5rem' }}>
        <Box component="span" sx={{ color: '#5A6678', fontSize: '0.875rem' }}>Page 1</Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {['1','2','3','4','5'].map((n) => (
            <Box key={n} sx={{
              minWidth: '2rem', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '50%', fontSize: '0.875rem', fontWeight: n==='1'?600:400,
              bgcolor: n==='1' ? '#F8069D' : '#F5F5F5', color: n==='1'?'#fff':'#5A6678', cursor: 'pointer'
            }}>{n}</Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OrderHistory;


