import { Box, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import { useNavigate, useParams } from 'react-router-dom';

const logs = [
  { sn: 1, date: 'DD-MM-YYYY', activity: 'Logged In', details: 'From Kolkata, IN (IP: 192.168.1) via Mobile' },
  { sn: 2, date: 'DD-MM-YYYY', activity: 'Order Placed', details: 'Order #1021345 (₹125.00) - Status: Delivered' },
  { sn: 3, date: 'DD-MM-YYYY', activity: 'Added to Wishlist', details: '“Moisturizer” added to the wishlist' },
  { sn: 4, date: 'DD-MM-YYYY', activity: 'Loyalty Points', details: 'Redeemed 100 points for Gold' },
  { sn: 5, date: 'DD-MM-YYYY', activity: 'Support Ticket Raised', details: 'Issue with delayed delivery - Status: Open' },
  { sn: 6, date: 'DD-MM-YYYY', activity: 'Profile Updated', details: 'Changed email from old - abc@gmail.com' },
  { sn: 7, date: 'DD-MM-YYYY', activity: 'Tutorial Viewed', details: 'Accessed “5-Minute Makeup Routine” tutorial' },
  { sn: 8, date: 'DD-MM-YYYY', activity: 'Support Ticket Raised', details: 'Issue with delayed delivery - Status: Open' },
  { sn: 9, date: 'DD-MM-YYYY', activity: 'Added to Wishlist', details: '“Moisturizer” added to the wishlist' },
];

const ActivityLogs = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', mb: '1rem' }}>
        <IconButton onClick={() => navigate(`/user-detail/${id || 1}`)} size="small" sx={{ p: 0 }}>
          <Icon icon="mdi:chevron-left" width={22} height={22} />
        </IconButton>
        <Box component="span" sx={{ fontWeight: 700, color: '#1A1A1A' }}>Activity Logs</Box>
      </Box>

      <div className="rounded-lg border border-gray-200 overflow-hidden">
        {/* header row */}
        <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-100 px-4 py-3 text-[12px] font-extrabold text-black/40">
          <div className="col-span-1">S.No.</div>
          <div className="col-span-2">Date</div>
          <div className="col-span-3">Activity</div>
          <div className="col-span-6">Details</div>
        </div>

        {/* rows */}
        <div>
          {logs.map((l, idx) => (
            <div key={idx} className={`grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-4 py-4 ${idx % 2 === 1 ? 'bg-[#FAFAFA]' : 'bg-white'}`}>
              <div className="md:col-span-1 text-gray-900">{l.sn}</div>
              <div className="md:col-span-2 text-gray-900">{l.date}</div>
              <div className="md:col-span-3 text-gray-900">{l.activity}</div>
              <div className="md:col-span-6 text-gray-900">{l.details}</div>
            </div>
          ))}
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

export default ActivityLogs;



