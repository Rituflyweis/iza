import { Box, Button, IconButton, Popover } from '@mui/material';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const rows = [
  { to: 'John Doe', code: '1234567', date: 'DD/MM/YYYY', status: 'Completed', reward: '₹200' },
  { to: 'Jane Smith', code: '1234567', date: 'DD/MM/YYYY', status: 'Pending', reward: '₹200' },
  { to: 'Mike Johnson', code: '1234567', date: 'DD/MM/YYYY', status: 'Failed', reward: '---' },
];

const StatusBadge = ({ label }) => {
  const styles = {
    Completed: { background: 'rgba(76, 175, 80, 0.1)', color: '#4CAF50' },
    Pending: { background: 'rgba(255, 193, 7, 0.15)', color: '#F5A524' },
    Failed: { background: 'rgba(244, 67, 54, 0.12)', color: '#F44336' },
  }[label] || { background: '#eee', color: '#555' };
  return (
    <span style={{ backgroundColor: styles.background, color: styles.color, borderRadius: '999px', padding: '4px 10px', fontSize: '12px', fontWeight: 600 }}>{label}</span>
  );
};

const ReferralHistory = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState(null);
  const [mode, setMode] = useState('menu'); // 'menu' | 'details'
  const navigate = useNavigate();
  const { id } = useParams();

  const openPopover = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelected(row);
    setMode('menu');
  };

  const closePopover = () => {
    setAnchorEl(null);
    setSelected(null);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '1rem' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <IconButton onClick={() => navigate(`/user-detail/${id || 1}`)} size="small" sx={{ p: 0 }}>
            <Icon icon="mdi:chevron-left" width={22} height={22} />
          </IconButton>
          <Box component="span" sx={{ fontWeight: 700, color: '#1A1A1A' }}>Referral History</Box>
        </Box>
        <Button variant="contained" startIcon={<Icon icon="mdi:filter" width={18} height={18} color="#fff" />} sx={{ textTransform: 'none', bgcolor: '#F8069D', '&:hover': { bgcolor: '#C1057D' } }}>Filter</Button>
      </Box>

      <div className="rounded-lg border border-gray-200 overflow-hidden">
        <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-100 px-4 py-3 text-[12px] font-extrabold text-black/40">
          <div className="col-span-3">Referred to</div>
          <div className="col-span-2">Referral Code</div>
          <div className="col-span-2">Date</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2">Reward</div>
          <div className="col-span-1">Action</div>
        </div>
        <div>
          {rows.map((r, idx) => (
            <div key={idx} className={`grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-4 py-4 ${idx % 2 === 1 ? 'bg-[#FAFAFA]' : 'bg-white'}`}>
              <div className="md:col-span-3 text-gray-900">{r.to}</div>
              <div className="md:col-span-2 text-gray-900">{r.code}</div>
              <div className="md:col-span-2 text-gray-900">{r.date}</div>
              <div className="md:col-span-2"><StatusBadge label={r.status} /></div>
              <div className="md:col-span-2 text-gray-900">{r.reward}</div>
              <div className="md:col-span-1 flex items-center justify-start">
                <button
                  className="w-9 h-9 flex items-center justify-center rounded-lg border text-gray-600 hover:shadow-sm transition"
                  onClick={(e) => openPopover(e, r)}
                  aria-label="menu"
                >
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

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={closePopover}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        PaperProps={{ sx: { borderRadius: '0.75rem', p: 0 } }}
      >
        {mode === 'menu' ? (
          <Box sx={{ p: 1, minWidth: 160 }}>
            <button
              className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-900"
              onClick={() => setMode('details')}
            >
              <Icon icon="mdi:eye" width={18} height={18} />
              <span className="text-sm font-semibold">View Details</span>
            </button>
          </Box>
        ) : (
          <Box sx={{ p: 2, minWidth: 260 }}>
            <Box sx={{ fontWeight: 700, mb: 1, color: '#1A1A1A' }}>Details of the referral</Box>
            {selected && (
              <Box sx={{ display: 'grid', rowGap: 1 }}>
                <Row label="Referred to" value={selected.to} />
                <Row label="Referred by" value="Whatsapp" />
                <Row label="Refer ID" value={selected.code} />
                <Row label="Reward" value={selected.reward} />
                <Row label="Status" value={<StatusBadge label={selected.status} />} />
              </Box>
            )}
          </Box>
        )}
      </Popover>

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

const Row = ({ label, value }) => (
  <Box sx={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', columnGap: 1, alignItems: 'center' }}>
    <Box sx={{ fontSize: 12, fontWeight: 700, color: '#1A1A1A' }}>{label}</Box>
    <Box sx={{ color: '#9E9E9E' }}>:</Box>
    <Box sx={{ fontSize: 12, color: '#1A1A1A', display: 'flex', alignItems: 'center', gap: 0.5 }}>{value}</Box>
  </Box>
);

export default ReferralHistory;


