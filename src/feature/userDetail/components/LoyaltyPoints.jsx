import { Box, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import { useNavigate, useParams } from 'react-router-dom';

const rows = [
  { date: '28/12/24', activity: 'Purchase', earned: '+100 Points', balance: '450 Points' },
  { date: '28/12/24', activity: 'Review & Rate', earned: '+100 Points', balance: '350 Points' },
  { date: '28/12/24', activity: 'Beauty Profile Update', earned: '+100 Points', balance: '400 Points' },
  { date: '28/12/24', activity: 'Refer a Friend', earned: '+100 Points', balance: '400 Points' },
];

const LoyaltyPoints = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', mb: '1rem' }}>
        <IconButton onClick={() => navigate(`/user-detail/${id || 1}`)} size="small" sx={{ p: 0 }}>
          <Icon icon="mdi:chevron-left" width={22} height={22} />
        </IconButton>
        <Box component="span" sx={{ fontWeight: 700, color: '#1A1A1A' }}>Loyalty Points</Box>
      </Box>

      <div className="rounded-lg border border-gray-200 overflow-hidden">
        <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-100 px-4 py-3 text-[12px] font-extrabold text-black/40">
          <div className="col-span-3">Date</div>
          <div className="col-span-4">Activity</div>
          <div className="col-span-3">Points Earned</div>
          <div className="col-span-1">Balance</div>
          <div className="col-span-1">Action</div>
        </div>
        <div>
          {rows.map((r, idx) => (
            <div key={idx} className={`grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-4 py-4 ${idx % 2 === 1 ? 'bg-[#FAFAFA]' : 'bg-white'}`}>
              <div className="md:col-span-3 text-gray-900">{r.date}</div>
              <div className="md:col-span-4 text-gray-900">{r.activity}</div>
              <div className="md:col-span-3 text-gray-900">{r.earned}</div>
              <div className="md:col-span-1 text-gray-900">{r.balance}</div>
              <div className="md:col-span-1 flex items-center">
                <button className="w-9 h-9 flex items-center justify-center rounded-lg border text-gray-600 hover:shadow-sm transition" aria-label="menu">
                  {/* three-line menu icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="7" width="14" height="2" rx="1" fill="currentColor"/>
                    <rect x="5" y="11" width="14" height="2" rx="1" fill="currentColor"/>
                    <rect x="5" y="15" width="14" height="2" rx="1" fill="currentColor"/>
                  </svg>
                </button>
              </div>
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

export default LoyaltyPoints;


